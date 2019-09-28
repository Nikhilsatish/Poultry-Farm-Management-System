package com.nikhil.spring.dao;

import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.nikhil.spring.model.Bird;

@Repository
public class BirdDAOImpl implements BirdDAO {

	@Autowired
	private SessionFactory sessionFactory;

	@Override
	public long save(Bird bird) {
		sessionFactory.getCurrentSession().save(bird);
		return bird.getBird_id();
	}

	@Override
	public Bird get(long bird_id) {
		return sessionFactory.getCurrentSession().get(Bird.class, bird_id);
	}

	@Override
	public List<Bird> list() {
		Session session = sessionFactory.getCurrentSession();
		CriteriaBuilder cb = session.getCriteriaBuilder();
		CriteriaQuery<Bird> cq = cb.createQuery(Bird.class);
		Root<Bird> root = cq.from(Bird.class);
		cq.select(root);
		Query<Bird> query = session.createQuery(cq);
		return query.getResultList();
	}

	@Override
	public void update(long id, Bird bird) {
		Session session = sessionFactory.getCurrentSession();
		Bird bird2 = session.byId(Bird.class).load(id);
		bird2.setBird_date(bird.getBird_date());
		bird2.setBird_qty(bird.getBird_qty());
		bird2.setBird_amt(bird.getBird_amt());
		session.flush();
	}

	@Override
	public void delete(long bird_id) {
		Session session = sessionFactory.getCurrentSession();
		Bird bird = session.byId(Bird.class).load(bird_id);
		session.delete(bird);
	}
}