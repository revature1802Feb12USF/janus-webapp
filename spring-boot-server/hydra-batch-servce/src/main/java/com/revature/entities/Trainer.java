package com.revature.entities;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Transient;

@Embeddable
public class Trainer {

	@Transient
	private int userId;
	@Transient
	private String title;
	@Transient
	private Set<Batch> batches;
	@Column(name = "trainer_id")
	private int trainerId;
	
	public Trainer() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	
	
}
