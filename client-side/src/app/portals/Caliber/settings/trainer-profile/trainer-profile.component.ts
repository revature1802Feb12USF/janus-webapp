import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Observable } from 'rxjs/Observable';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

import { Batch } from '../../entities/Batch';

import { BatchService } from '../../services/batch.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { TrainerService } from '../../../../hydra-client/services/trainer/trainer.service';
import { Trainer } from '../../../../hydra-client/entities/Trainer';

@Component({
  selector: 'app-trainer-profile',
  templateUrl: './trainer-profile.component.html',
  styleUrls: ['./trainer-profile.component.css']
})
export class TrainerProfilesComponent implements OnInit {

  /**
  * create variables for all batches,
  * current trainer and their batch
  */
  currentTrainer: Trainer;
  batches: Array<Batch>;
  currentBatch: Batch;

  /**
  * create variables for subscribing and trainers
  * and storing form data
  */
  private trainerSubscription: Subscription;
  trainers: Array<Trainer>;
  titles: Array<any>;
  roles: Array<any>;
  model = new Trainer();
  currEditTrainer: Trainer;
  newRole: string;
  newTitle: string;
  rForm: FormGroup;

  constructor(private trainerService: TrainerService, private modalService: NgbModal,
    private batchService: BatchService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
  /**
  * gets the current trainer for the page from trainer service's current trainer
  * if the current trainer is null navigate back to the trainers page so that the user can select one
  */
    // this.trainerService.currentTrainer.subscribe(currentTrainer => this.currentTrainer = currentTrainer);
    this.currentTrainer = this.trainerService.currentTrainer;
    if (this.currentTrainer == null) {
      this.router.navigate(['Caliber/settings/trainers']);
    }

  /**
  * fetches all batches and pushes into the batches object,
  */
    this.batchService.fetchAll();
    this.batchService.getList().subscribe(
      (batches: Batch[]) => { this.batches = batches; }
    );

  /**
  * fetches all trainers, titles and tiers and pushes them onto the trainers, titles and tiers subjects
  */
    // this.trainerService.populateOnStart();
    this.trainerService.fetchAll().subscribe((resp) => {
      this.trainers = resp;
    });
    this.trainerService.fetchTitles().subscribe(res => this.titles = res);
    this.trainerService.fetchRoles().subscribe(res => this.roles = res);
  }

  /**
  * opens a modal
  *
  * @param content: String
  */
  open(content) {
    this.modalService.open(content);
  }

  /**
  * opens a large modal
  *
  * @param content: String
  */
  openLarge(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  /**
  * sets the current batch
  * triggered when a user clicks to see the trainees for a current batch
  *
  * @param content: String
  */
  setCurrentBatch(batch) {
    this.currentBatch = batch;
  }

  /**
  * navigates to the reports page
  */
  navReports() {
    this.router.navigate(['Caliber/reports']);
  }

  /**
  * navigates to the manage page
  */
  navManage() {
    this.router.navigate(['Caliber/manage']);
  }

  /**
  * Open modal and get Trainer that belong to this modal
  * Backup these fields before the edit
  *
  * @param content: String
  * @param modalTrainer: Trainer
  */
  editTrainer(content, modalTrainer: Trainer) {
    this.currEditTrainer = modalTrainer;
    this.newRole = modalTrainer.role;
    this.newTitle = modalTrainer.title;
    this.rForm = this.fb.group({
      'firstName': [this.currEditTrainer.firstName, Validators.required],
      'lastName': [this.currEditTrainer.lastName, Validators.required],
      'email': [this.currEditTrainer.email, Validators.required],
      'title': [this.newTitle],
      'role': [this.newRole],
    });
    this.modalService.open(content, { size: 'lg' });
  }

  /**
  * When tier was changed
  *
  * @param newTier: string
  */
  tierChange(newRole) {
    this.newRole = newRole;
  }

  /**
  * When title was changed
  *
  * @param newTitle: string
  */
  titleChange(newTitle) {
    // Empty title, changed back to original
    if (newTitle === '') {
      this.newTitle = this.currEditTrainer.title;
    } else {
      // New title was changed
      this.newTitle = newTitle;
    }
  }

  /**
  * update button clicked, takes the value of the modal
  *
  * @param modal: any
  */
  updateTrainer(modal) {
    // replacing the trainer's fields with the new ones
    this.currEditTrainer.role = this.newRole;
    this.currEditTrainer.title = this.newTitle;
    this.currEditTrainer.firstName = modal.firstName;
    this.currEditTrainer.email = modal.email;
    // call trainerService to update
    this.trainerService.update(this.currEditTrainer);
  }

}
