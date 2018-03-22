package com.revature.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class BatchToTrainee {
	
	@Embeddable
	class BatchToTraineeIdentity {
		
		@Column(name = "batch_id")
		private int batchId;
		
		@Column(name = "trainee_id")
		private int traineeId;
		
	}
	
	@EmbeddedId
	private BatchToTrainee batchToTraineeId;
	
	@ManyToOne(fetch=FetchType.EAGER,cascade=CascadeType.MERGE)
	@JoinColumn(name = "batch_id")
	private int batchId;
	
	@ManyToOne(fetch=FetchType.EAGER,cascade=CascadeType.MERGE)
	@JoinColumn(name = "trainee_id")
	private int traineeId;

	public BatchToTrainee() {
		super();
	}

	public BatchToTrainee(BatchToTrainee batchToTraineeId, int batchId, int traineeId) {
		super();
		this.batchToTraineeId = batchToTraineeId;
		this.batchId = batchId;
		this.traineeId = traineeId;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + batchId;
		result = prime * result + ((batchToTraineeId == null) ? 0 : batchToTraineeId.hashCode());
		result = prime * result + traineeId;
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
		BatchToTrainee other = (BatchToTrainee) obj;
		if (batchId != other.batchId)
			return false;
		if (batchToTraineeId == null) {
			if (other.batchToTraineeId != null)
				return false;
		} else if (!batchToTraineeId.equals(other.batchToTraineeId))
			return false;
		if (traineeId != other.traineeId)
			return false;
		return true;
	}

	public BatchToTrainee getBatchToTraineeId() {
		return batchToTraineeId;
	}

	public void setBatchToTraineeId(BatchToTrainee batchToTraineeId) {
		this.batchToTraineeId = batchToTraineeId;
	}

	public int getBatchId() {
		return batchId;
	}

	public void setBatchId(int batchId) {
		this.batchId = batchId;
	}

	public int getTraineeId() {
		return traineeId;
	}

	public void setTraineeId(int traineeId) {
		this.traineeId = traineeId;
	}

}
