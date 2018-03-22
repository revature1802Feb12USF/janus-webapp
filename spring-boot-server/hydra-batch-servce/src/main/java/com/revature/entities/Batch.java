package com.revature.entities;

import java.time.LocalDateTime;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;

import org.assertj.core.internal.Integers;



@Entity
public class Batch {
	
	@OneToOne(fetch=FetchType.EAGER,cascade=CascadeType.MERGE)
	@JoinColumn(name="resource_id")
	private int resourceId;
	
	@Column(name="training_name")
	private String trainingName;
	
	@Column(name="trainer_id")
	private int trainer;
	
	@Column(name="cotrainer_id")
	private int cotrainer;
	
	@Column(name="skill_type")
	private String skillType;
	
	@Column(name="training_type")
	private String trainingType;
	
	@Column(name="start_date")
	private LocalDateTime startDate;
	
	@Column(name="end_date")
	private LocalDateTime endDate;
	
	@Column(name="location")
	private String location;
	
	@Column(name="curriculum")
	private String curriculum;
	
	@Column(name="skills_id")
	private int skills;
	
	@OneToMany(fetch=FetchType.EAGER,cascade=CascadeType.MERGE)
	@JoinColumn(name="trainee_id")
	private Set<Integers> trainees;
	
	@Column(name="skills")
	private String notes;
	
	@Id
	@Column(name="batch_id")
	@SequenceGenerator(name="batch_id_seq", sequenceName="batch_id_seq", allocationSize=1)
	@GeneratedValue(generator="batch_id_seq", strategy=GenerationType.AUTO)
	@OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
	@JoinColumn(name = "batch_id")
	private int batchId;

	public Batch() {
		super();
	}

	public Batch(int resourceId, String trainingName, int trainer, int cotrainer, String skillType, String trainingType,
			LocalDateTime startDate, LocalDateTime endDate, String location, String curriculum, int skills,
			Set<Integers> trainees, String notes, int batchId) {
		super();
		this.resourceId = resourceId;
		this.trainingName = trainingName;
		this.trainer = trainer;
		this.cotrainer = cotrainer;
		this.skillType = skillType;
		this.trainingType = trainingType;
		this.startDate = startDate;
		this.endDate = endDate;
		this.location = location;
		this.curriculum = curriculum;
		this.skills = skills;
		this.trainees = trainees;
		this.notes = notes;
		this.batchId = batchId;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + batchId;
		result = prime * result + cotrainer;
		result = prime * result + ((curriculum == null) ? 0 : curriculum.hashCode());
		result = prime * result + ((endDate == null) ? 0 : endDate.hashCode());
		result = prime * result + ((location == null) ? 0 : location.hashCode());
		result = prime * result + ((notes == null) ? 0 : notes.hashCode());
		result = prime * result + resourceId;
		result = prime * result + ((skillType == null) ? 0 : skillType.hashCode());
		result = prime * result + skills;
		result = prime * result + ((startDate == null) ? 0 : startDate.hashCode());
		result = prime * result + ((trainees == null) ? 0 : trainees.hashCode());
		result = prime * result + trainer;
		result = prime * result + ((trainingName == null) ? 0 : trainingName.hashCode());
		result = prime * result + ((trainingType == null) ? 0 : trainingType.hashCode());
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
		Batch other = (Batch) obj;
		if (batchId != other.batchId)
			return false;
		if (cotrainer != other.cotrainer)
			return false;
		if (curriculum == null) {
			if (other.curriculum != null)
				return false;
		} else if (!curriculum.equals(other.curriculum))
			return false;
		if (endDate == null) {
			if (other.endDate != null)
				return false;
		} else if (!endDate.equals(other.endDate))
			return false;
		if (location == null) {
			if (other.location != null)
				return false;
		} else if (!location.equals(other.location))
			return false;
		if (notes == null) {
			if (other.notes != null)
				return false;
		} else if (!notes.equals(other.notes))
			return false;
		if (resourceId != other.resourceId)
			return false;
		if (skillType == null) {
			if (other.skillType != null)
				return false;
		} else if (!skillType.equals(other.skillType))
			return false;
		if (skills != other.skills)
			return false;
		if (startDate == null) {
			if (other.startDate != null)
				return false;
		} else if (!startDate.equals(other.startDate))
			return false;
		if (trainees == null) {
			if (other.trainees != null)
				return false;
		} else if (!trainees.equals(other.trainees))
			return false;
		if (trainer != other.trainer)
			return false;
		if (trainingName == null) {
			if (other.trainingName != null)
				return false;
		} else if (!trainingName.equals(other.trainingName))
			return false;
		if (trainingType == null) {
			if (other.trainingType != null)
				return false;
		} else if (!trainingType.equals(other.trainingType))
			return false;
		return true;
	}

	public int getResourceId() {
		return resourceId;
	}

	public void setResourceId(int resourceId) {
		this.resourceId = resourceId;
	}

	public String getTrainingName() {
		return trainingName;
	}

	public void setTrainingName(String trainingName) {
		this.trainingName = trainingName;
	}

	public int getTrainer() {
		return trainer;
	}

	public void setTrainer(int trainer) {
		this.trainer = trainer;
	}

	public int getCotrainer() {
		return cotrainer;
	}

	public void setCotrainer(int cotrainer) {
		this.cotrainer = cotrainer;
	}

	public String getSkillType() {
		return skillType;
	}

	public void setSkillType(String skillType) {
		this.skillType = skillType;
	}

	public String getTrainingType() {
		return trainingType;
	}

	public void setTrainingType(String trainingType) {
		this.trainingType = trainingType;
	}

	public LocalDateTime getStartDate() {
		return startDate;
	}

	public void setStartDate(LocalDateTime startDate) {
		this.startDate = startDate;
	}

	public LocalDateTime getEndDate() {
		return endDate;
	}

	public void setEndDate(LocalDateTime endDate) {
		this.endDate = endDate;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getCurriculum() {
		return curriculum;
	}

	public void setCurriculum(String curriculum) {
		this.curriculum = curriculum;
	}

	public int getSkills() {
		return skills;
	}

	public void setSkills(int skills) {
		this.skills = skills;
	}

	public Set<Integers> getTrainees() {
		return trainees;
	}

	public void setTrainees(Set<Integers> trainees) {
		this.trainees = trainees;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}

	public int getBatchId() {
		return batchId;
	}

	public void setBatchId(int batchId) {
		this.batchId = batchId;
	}
	
}
