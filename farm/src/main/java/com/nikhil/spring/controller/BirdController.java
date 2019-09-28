package com.nikhil.spring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.nikhil.spring.model.Bird;
import com.nikhil.spring.service.BirdService;

@CrossOrigin(origins = "*")
@RestController
public class BirdController {

	@Autowired
	private BirdService birdService;

	/*---Add new bird---*/
	@PostMapping("/bird")
	public ResponseEntity<?> save(@RequestBody Bird bird) {
		System.out.println("the json value of bird is :::::: " + bird);
		long bird_id = birdService.save(bird);
		return ResponseEntity.ok().body("New Bird has been saved with ID:" + bird_id);
	}

	/*---Get a bird by id---*/
	@GetMapping("/bird/{bird_id}")
	public ResponseEntity<Bird> get(@PathVariable("bird_id") long bird_id) {
		Bird bird = birdService.get(bird_id);
		return ResponseEntity.ok().body(bird);
	}

	/*---get all birds---*/
	@GetMapping("/bird")
	public ResponseEntity<List<Bird>> list() {
		List<Bird> birds = birdService.list();
		return ResponseEntity.ok().body(birds);
	}

	/*---Update a bird by id---*/
	@PutMapping("/bird/{bird_id}")
	public ResponseEntity<?> update(@PathVariable("bird_id") long bird_id, @RequestBody Bird bird) {
		birdService.update(bird_id, bird);
		return ResponseEntity.ok().body("Bird has been updated successfully.");
	}

	/*---Delete a bird by id---*/
	@DeleteMapping("/bird/{bird_id}")
	public ResponseEntity<?> delete(@PathVariable("bird_id") long bird_id) {
		birdService.delete(bird_id);
		return ResponseEntity.ok().body("Bird has been deleted successfully.");
	}
}