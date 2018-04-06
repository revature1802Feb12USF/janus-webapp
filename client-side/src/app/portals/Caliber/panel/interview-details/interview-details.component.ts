import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms/';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// components
import { PanelSearchbarComponent } from '../panel-searchbar/panel-searchbar.component';

// rxjs
import { Subscription } from 'rxjs/Subscription';

// entities
import { Panel } from '../../entities/Panel';
import { HydraTrainee } from '../../../../hydra-client/entities/HydraTrainee';
import { HydraBatch } from '../../../../hydra-client/entities/HydraBatch';

// services
import { BatchService } from '../../services/batch.service';
import { PanelService } from '../../services/panel.service';




@Component({
  selector: 'app-interview-details',
  templateUrl: './interview-details.component.html',
  styleUrls: ['./interview-details.component.css']
})
export class InterviewDetailsComponent implements OnInit, OnDestroy {

  traineeSubscription: Subscription;
  trainee: HydraTrainee;
  batchList: HydraBatch[];
  panelList: Panel[];
  batchSubscription: Subscription;
  trainingTrack: string;
  panelRound: number;

  @Input() interviewForm: FormGroup;

  /**
   *
   * @param searchBar
   * @param batchService
   * @param panelService
   */
  constructor(private searchBar: PanelSearchbarComponent, private batchService: BatchService, private panelService: PanelService) {
    this.interviewForm = new FormGroup({
      interviewDate: new FormControl(),
      panelRound: new FormControl(),
      format: new FormControl(),
      recordingConsent: new FormControl(),
      internet: new FormControl()
    });
  }

  /**
  * Sets the current trainee, gets active technologies, gets panel round for panel viewing
  *
  * @method
  */
  ngOnInit() {
    this.traineeSubscription = this.searchBar.getTraineeSubject().subscribe((trainee) => {
      this.trainee = trainee;
    });

    // this.batchSubscription = this.batchService.getList().subscribe((batchList) => {
    //   this.batchList = batchList;
    //   for (let i = 0; i < this.batchList.length; i++) {
    //     for (let j = 0; j < this.batchList[i].trainees.length; j++) {
    //       if (this.batchList[i].trainees[j].name === this.trainee.name) {
    //         this.trainingTrack = this.batchList[i].skillType;
    //       }
    //     }
    //   }
    // });

    this.panelService.listSubject.asObservable().subscribe((panelList) => {
      this.panelList = panelList;
      if (this.panelList == null) {
        this.panelRound = 1;
      } else {
        this.panelRound = this.panelList.length + 1;
      }
    });
  }

  /**
   * Unsubscribes subscriptions
   */
  ngOnDestroy() {
    this.traineeSubscription.unsubscribe();
    this.batchSubscription.unsubscribe();
  }

}
