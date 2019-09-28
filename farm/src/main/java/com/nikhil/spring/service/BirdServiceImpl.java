package com.nikhil.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nikhil.spring.dao.BirdDAO;
import com.nikhil.spring.model.Bird;

@Service
@Transactional(readOnly = true)
public class BirdServiceImpl implements BirdService {

	@Autowired
	private BirdDAO birdDAO;

	@Transactional
	@Override
	public long save(Bird bird) {
		return birdDAO.save(bird);
	}

	@Override
	public Bird get(long bird_id) {
		return birdDAO.get(bird_id);
	}

	@Override
	public List<Bird> list() {
		return birdDAO.list();
	}

	@Transactional
	@Override
	public void update(long bird_id, Bird bird) {
		birdDAO.update(bird_id, bird);
	}

	@Transactional
	@Override
	public void delete(long id) {
		birdDAO.delete(id);
	}
}