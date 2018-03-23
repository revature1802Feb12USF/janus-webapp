package com.revature.entities;

import java.util.Set;

import javax.persistence.Embeddable;

@Embeddable
public class Trainer {

	private int userId;
	private String title;
	private Set<Integer> batches;
	private int trainerId;
	
	public Trainer() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Trainer(int userId, String title, Set<Integer> batches, int trainerId) {
		super();
		this.userId = userId;
		this.title = title;
		this.batches = batches;
		this.trainerId = trainerId;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Set<Integer> getBatches() {
		return batches;
	}

	public void setBatches(Set<Integer> batches) {
		this.batches = batches;
	}

	public int getTrainerId() {
		return trainerId;
	}

	public void setTrainerId(int trainerId) {
		this.trainerId = trainerId;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((batches == null) ? 0 : batches.hashCode());
		result = prime * result + ((title == null) ? 0 : title.hashCode());
		result = prime * result + trainerId;
		result = prime * result + userId;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Trainer other = (Trainer) obj;
		if (batches == null) {
			if (other.batches != null)
				return false;
		} else if (!batches.equals(other.batches))
			return false;
		if (title == null) {
			if (other.title != null)
				return false;
		} else if (!title.equals(other.title))
			return false;
		if (trainerId != other.trainerId)
			return false;
		if (userId != other.userId)
			return false;
		return true;
	}
	
	
}
