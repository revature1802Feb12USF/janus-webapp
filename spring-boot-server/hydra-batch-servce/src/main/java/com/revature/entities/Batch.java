package com.revature.entities;

import java.time.LocalDateTime;
import java.util.Set;

import javax.persistence.AttributeOverride;
import javax.persistence.AttributeOverrides;
import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Transient;

@Entity
public class Batch {

	@Column(name = "resource_id")
	private int resourceId;

	@Column(name = "training_name")
	private String trainingName;

	@Embedded
	@AttributeOverrides(value = { @AttributeOverride(name = "trainerId", column = @Column(name = "trainer_id"))

	})
	private Trainer trainer;

	@Embedded
	@AttributeOverrides(value = { @AttributeOverride(name = "trainerId", column = @Column(name = "cotrainer_id"))

	})
	private Trainer cotrainer;

	@Column(name = "skill_type")
	private String skillType;

	@Column(name = "training_type")
	private String trainingType;

	@Column(name = "start_date")
	private LocalDateTime startDate;

	@Column(name = "end_date")
	private LocalDateTime endDate;

	@Column(name = "location")
	private String location;

	@Column(name = "curriculum")
	private String curriculum;

	@Transient
	private Set<Integer> skills;

	@Transient
	private Set<Integer> trainees;

	@Transient
	private Set<Integer> notes;

	@Id
	@Column(name = "batch_id")
	@SequenceGenerator(name = "batch_id_seq", sequenceName = "batch_id_seq", allocationSize = 1)
	@GeneratedValue(generator = "batch_id_seq", strategy = GenerationType.AUTO)
	private int batchId;

	public Batch() {
		super();
	}

}
