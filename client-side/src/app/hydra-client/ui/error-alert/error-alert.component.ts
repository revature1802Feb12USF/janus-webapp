import { Component, OnInit, Input } from '@angular/core';
import { NotificationsService, SimpleNotificationsComponent } from 'angular2-notifications-lite';
import { animate, state, transition, trigger, style, keyframes } from '@angular/animations';
import { HydraInterceptor } from '../../interceptors/hydra.interceptor';


@Component({
  selector: 'app-error-alert',
  templateUrl: './error-alert.component.html',
  styleUrls: ['./error-alert.component.css']
})


export class ErrorAlertComponent implements OnInit {


  @Input() messages = []; // want to append a string containing the endpoint with the error every time a new error
  // occurs on a page.

  /**
   * global config for notification
   */
  public options = {
    position: ['bottom', 'left'],
    timeOut: 2500,
    maxStack: 10,
    maxLength: 36,
    lastOnBottom: true,
    showProgressBar: false,
    preventDuplicates: true,
  };

  constructor(private notif: NotificationsService, private interceptor: HydraInterceptor) {
    console.log("in error-alert constructor");
    // this.showNotif();
  }


  ngOnInit() {
    this.showNotif();
  }

  showNotif() {
    this.notif.alert('Error', this.interceptor.getMessages());
    console.log("notif error message: " + this.interceptor.getMessages());
  }


}
