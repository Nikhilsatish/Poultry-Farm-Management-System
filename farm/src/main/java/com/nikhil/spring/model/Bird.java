package com.nikhil.spring.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name = "Bird")
@Entity
public class Bird {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	private Long bird_id;
	@Column
	private String bird_date;
	@Column
	private String bird_qty;
	@Column
	private String bird_amt;

	public Long getBird_id() {
		return bird_id;
	}

	public void setBird_id(Long bird_id) {
		this.bird_id = bird_id;
	}

	public String getBird_date() {
		return bird_date;
	}

	public void setBird_date(String bird_date) {
		this.bird_date = bird_date;
	}

	public String getBird_qty() {
		return bird_qty;
	}

	public void setBird_qty(String bird_qty) {
		this.bird_qty = bird_qty;
	}

	public String getBird_amt() {
		return bird_amt;
	}

	public void setBird_amt(String bird_amt) {
		this.bird_amt = bird_amt;
	}

	@Override
	public String toString() {
		return "Bird [bird_id=" + bird_id + ", bird_date=" + bird_date + ", bird_qty=" + bird_qty + ", bird_amt="
				+ bird_amt + "]";
	}

}