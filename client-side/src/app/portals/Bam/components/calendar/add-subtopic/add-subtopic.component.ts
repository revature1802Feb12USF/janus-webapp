import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { debounceTime } from 'rxjs/operator/debounceTime';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs/Subject';
import { CalendarService } from '../../../services/calendar.service';
import { SubtopicType } from '../../../models/subtopictype.model';
import { SubtopicName } from '../../../models/subtopicname.model';
import { SubtopicStatus } from '../../../models/subtopicstatus.model';
import { TopicName } from '../../../models/topicname.model';
import { Batch } from '../../../models/batch.model';

import { SessionService } from '../../../services/session.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Subtopic } from '../../../models/subtopic.model';
import { AddSubtopicService } from '../../../services/add-subtopic.service';
import { CalendarStatusService } from '../../../services/calendar-status.service';
import { Topic } from '../../../models/topic.model';
import { Schedule } from '../../../models/schedule.model';
import { ScheduledDate } from '../../../models/scheduleddate.model';
import { ScheduledSubtopic } from '../../../models/scheduledsubtopic.model';

// for jquery
declare var $: any;
let selectedSubtopic;

@Component({
  selector: 'app-add-subtopic',
  templateUrl: './add-subtopic.component.html',
  styleUrls: ['./add-subtopic.component.css']
})
/**
 * This features allows a user to select a subtopic to
 * add to their calendar. Subtopics cannot be repeated
 * on a batch. If a user tries to add a subtopic that
 * exists on the current batch, a pop up modal will appear
 * to notify the user it exists on their calendar. This modal
 * will give the user the opportunity to override the previous
 * date with the one they have selected.
 * @author Francisco Palomino | Batch: 1712-dec10-java-steve
 */
export class AddSubtopicComponent implements OnInit {

  @ViewChild('content') modalRef: TemplateRef<any>;
  public loading: Boolean = true;
  public closeResult: string;

  public currentlyAddedSubtopic: Subtopic[] = [];

  public uniqueTopics = new Set();
  public topicMap = new Map();
  public subtopicNameList: Object[] = []; // strings
  public selectedTopic: string;
  public selectedSubtopic: string;
  public selectedDate: any;

  public prevDate: any;
  public newDate: any;

  private topicId: number;
  private subtopicId: number;

  public currentBatch: Batch;
  private batchSubtopics: Subtopic[] = [];
  
  private status: string;
  private subtopic: Subtopic;
  private selectedDateMiliseconds: any;

  private _alert: Subject<string> = new Subject<string>();
  private _alertSuccess: Subject<string> = new Subject<string>();

  public alertMessage: string;
  public successMessage: string;

  constructor(private subtopicsService: AddSubtopicService, private statusService: CalendarStatusService, private modalService: NgbModal, private calendarService: CalendarService, private sessionService: SessionService) { }

  ngOnInit() {
    this.selectedTopic = 'Select a Topic';
    this.selectedSubtopic = 'Select a Subtopic';
    this._alert.subscribe((message) => this.alertMessage = message);
    debounceTime.call(this._alert, 5000).subscribe(() => this.alertMessage = null);

    this._alertSuccess.subscribe((message) => this.successMessage = message);
    debounceTime.call(this._alertSuccess, 5000).subscribe(() => this.successMessage = null);

    let selectedBatch = JSON.parse(sessionStorage.getItem("batch"));
    this.subtopicsService.getSubtopicPool(selectedBatch.curriculumID).subscribe(
      (subtopicList) => {
        this.getTopics(subtopicList);
        this.batchSubtopics = subtopicList;
        this.currentBatch = selectedBatch;
        this.loading = false;
      }
    );
  }

  /**
   * Method called when a topic is changed. It generates the subtopic list
   * of the current Topic selected and sorts them alphabetically
   * @author Francisco Palomino | Batch: 1712-dec10-java-steve
   */
  onChangeLoadSubtopics() {
    this.subtopicNameList = [];
    if (this.selectedTopic !== '') {
      for (const subtopic of Array.from(this.topicMap.get(this.selectedTopic))) {
        this.subtopicNameList.push(subtopic);
      }
    }
    this.subtopicNameList.sort((n1, n2) => {
      if (n1 > n2) {
        return 1;
      }
      if (n1 < n2) {
        return -1;
      }
      return 0;
    });
  }

   /**
    * The endpoint used returns the subtopics with their topic.
    * The following iterations creates a set of unique Topics to filter
    * out the topics from the Subtopics List and maps them to the 'topicMap' property.
    * The loading property is set to false here beacuse once this method is called
    * All the subtopics have been loaded
    *	@author Francisco Palomino | Batch: 1712-dec10-java-steve
    * @param subtopics holds the subtopics result from the database call
		*/
  getTopics(subtopics) {
      for (const i in subtopics) {
        if (!this.uniqueTopics.has(subtopics[i].parentTopic.topicName)) {
          this.uniqueTopics.add(subtopics[i].parentTopic.topicName);
          const array = [];
          array.push(subtopics[i].subtopicName);
          this.topicMap.set(subtopics[i].parentTopic.topicName, array);
        } else {
          const array = this.topicMap.get(subtopics[i].parentTopic.topicName);
          this.topicMap.delete(subtopics[i].parentTopic.topicName);
          array.push(subtopics[i].subtopicName);
          this.topicMap.set(subtopics[i].parentTopic.topicName, array);
        }
      }
      this.loading = false;
  }

  /**
   * Method is called once the subtopic list is changed which
   * obtains all the necessary properties of the subtopic to be
   * able to persist it to the database
   * @author Francisco Palomino | Batch: 1712-dec10-java-steve
   */
  onChangeGetSubtopicInfo() {
    if (this.selectedSubtopic !== '' && this.selectedSubtopic !== 'Select a Subtopic') {
      for (const i in this.batchSubtopics) {
        if (this.selectedSubtopic === this.batchSubtopics[i].subtopicName) {
          this.topicId = this.batchSubtopics[i].parentTopic.topicId;
          this.subtopicId = this.batchSubtopics[i].subtopicId;
        }
      }
    }
  }

  /**
   * Method verifies selection inputs and the date and sends the appropriate
   * message to the user if something is missing or incorrect. Once all validation
   * is successfull it persists the new subtopic to the database
   * @author Francisco Palomino | Batch: 1712-dec10-java-steve
   */
  saveSubtopic() {
    this.selectedDateMiliseconds = new Date(this.selectedDate + 'T09:00:00-05:00').getTime();

    if (this.selectedTopic === 'Select a Topic' || this.selectedSubtopic === 'Select a Subtopic') {
      this.changeAlertMessage(`Select topic and subtopic`);
    } else if (isNaN(this.selectedDateMiliseconds)) {
      this.changeAlertMessage(`Date input error.`);
    } else {
      const today = new Date().setHours(0, 0, 0, 0);
      if (this.selectedDateMiliseconds >= today) {
        this.status = 'Pending';
      } else {
        this.status = 'Missed';
      }

      this.setSubtopicObject(); //sets this.subtopic to the one clicked

      if (this.checkSubtopics()) {
        this.tryToAddSelectedSubtopic('added');
      } else {
        this.open(this.modalRef);
      }
    }
  }

  /**
   * Verifies if the subtopic being added to the calendar currently
   * exists on the batch's calendar. If the calendar does have the
   * the subtopic it saves its properties just in case the
   * user wants to override the date.
   * @author Francisco Palomino | Batch: 1712-dec10-java-steve
   * @return I used the false value to identify that it can't be
   * added because it exists on the current batch.
   */
  checkSubtopics() {
    let subtopicsOnCalendar: Subtopic[] = JSON.parse(sessionStorage.getItem("subtopics"));
    for (let i = 0; i < this.batchSubtopics.length; i++) {
      if (this.subtopic.subtopicName == this.batchSubtopics[i].subtopicName) {
        this.prevDate = subtopicsOnCalendar[i].startTime;
        this.newDate = new Date(this.selectedDateMiliseconds);
        this.subtopicId = this.batchSubtopics[i].subtopicId;
        return false;
      }
    }
    return true;
  }

  /**
   * Calls the error alert message
   * @author Francisco Palomino | Batch: 1712-dec10-java-steve
   * @param message holds the message that will be displayed
   */
  changeAlertMessage(message) {
    this._alert.next(message);
  }

  /**
   * Calls the success alert message
   * @author Francisco Palomino | Batch: 1712-dec10-java-steve
   * @param message holds the message that will be displayed
   */
  changeSuccessMessage(message) {
    this._alertSuccess.next(message);
  }

  /**
   * Creates the subtopic object based on all the selected
   * values to be persisted to the database
   * @author Francisco Palomino | Batch: 1712-dec10-java-steve
   */
  setSubtopicObject() {
    for(let sub of this.batchSubtopics){
      if(sub.subtopicName == this.selectedSubtopic){
        let startTime: Date = new Date(this.selectedDateMiliseconds);
        let endTime: Date = new Date(this.selectedDateMiliseconds);
        endTime.setHours(endTime.getHours() + 1);
    
        this.subtopic = {
          subtopicId: sub.subtopicId,
          subtopicName: sub.subtopicName,
          startTime: startTime,
          endTime: endTime,
          status: this.status,
          parentTopic: new Topic(this.topicId, this.selectedTopic)
        };
        break;
      }
    }
  }

  /**
   * Tries to add or update the selected subtopic into the database
   * On success -> shows "Successfully " + message
   * On failure -> shows error message
   * 
   * @author Scott Bennett - (Batch Matt-1802)
   * @author Trevor Fortner - (Batch Matt-1802)
   * @param message - String to put in response alert
   */
  tryToAddSelectedSubtopic(message: string){
    let selectedBatchSchedule: Schedule = JSON.parse(sessionStorage.getItem("schedule"));

    selectedBatchSchedule.subtopics.forEach((scheduledSubtopic, index) => {
      if(scheduledSubtopic.subtopicId == this.subtopic.subtopicId){
        let batchStartDate = new Date(this.currentBatch.startDate);

        let newWeek = Math.floor((this.subtopic.startTime.getDate() - batchStartDate.getDate()) / 7 + 1);

        let newScheduledDate = new ScheduledDate(scheduledSubtopic.date.id, this.subtopic.startTime.getDay(), newWeek, this.subtopic.startTime.getTime(), this.subtopic.endTime.getTime());
        // ^ lol sorry next batch
        // use whatever's in it currently to populate basically the same thing, but with a new day number, week number, and start/end times

        selectedBatchSchedule.subtopics[index].date = newScheduledDate;

        this.subtopicsService.updateSchedule(selectedBatchSchedule).subscribe(
          success => {
            const arr = [];
            console.log(this.subtopic);
            this.batchSubtopics.push(this.subtopic);
            this.currentlyAddedSubtopic.push(this.subtopic);
            this.changeSuccessMessage(`Successfully `+message+`!`);
            this.calendarService.addSubtopicToCalendar(this.subtopic);
          },
          error => this.changeAlertMessage(`Failed to add subtopic, check all inputs`)
        );
      }
    });
  }

  /**
   * Opens a modal to ask the user if they would like to reset
   * the date of a subtopic currently in their calendar. It allows the user
   * to cancel or save the new change.
   * @author Francisco Palomino | Batch: 1712-dec10-java-steve
   * @param content HTML element reference of the modal
   */
  open(content) {
    this.modalService.open(content).result.then(
      (result) => {
        if (result === 'ok') {
          this.subtopic.subtopicId = this.subtopicId;
          this.calendarService.addSubtopicToCalendar(this.subtopic);
          this.tryToAddSelectedSubtopic('updated');
        }
      }, (reason) => { });
  }

  /**
   * Sets the selected subtopic when a subtopic is clicked in the DOM.
   * @param subtopic
   * @author Sean Sung | Batch: 1712-dec10-java-steve
   */
  selectSubtopic(subtopic: string) {
    // WHY ARE WE USING JQUERY??? FIX THIS
    if (selectedSubtopic !== undefined) {
      $(selectedSubtopic).css('opacity', 1);
    }
    // html DOM object
    selectedSubtopic = event.target;
    $(selectedSubtopic).css('opacity', 0.5);
    this.selectedSubtopic = subtopic;
    this.onChangeGetSubtopicInfo();
  }

  /**
   * Sets draggable on subtopic elements in the DOM to be dragged onto the calendar
   * Date is not known until it is placed on the calendar
   *
   * @param event
   * @param subtopic
   * @author Sean Sung | Batch: 1712-dec10-java-steve
   */
  setDraggableOnSubtopic(event, subtopic: string) {
    const subtopicData = new Subtopic(
      null,
      this.selectedSubtopic,
      new Date(),
      new Date(),
      this.statusService.getDefaultStatus(),
      null
    );

    // attach data to draggable element
    // -Blake - Why are we using jquery?
    // -Trevor - idk dude but I can't fix it
    $(event.target).data('subtopic', subtopicData);
    // set draggable
    $(event.target).draggable(
      {
        revert: true,
        revertDuration: 0,
        zIndex: 999,
        scroll: false,
        helper: 'clone'
      }
    );
  }
}
