package com.nikhil.spring.service;

import java.util.List;

import com.nikhil.spring.model.Bird;

public interface BirdService {

	// save the record
	long save(Bird bird);

	// get a single record
	Bird get(long bird_id);

	// get all the records
	List<Bird> list();

	// update the record
	void update(long bird_id, Bird bird);

	// delete a record
	void delete(long bird_id);

}
