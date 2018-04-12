import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { animate, state, transition, trigger, style, keyframes } from '@angular/animations';
import { HydraInterceptor } from '../../interceptors/hydra.interceptor';

// old notif import
import { NotificationsService, SimpleNotificationsComponent } from 'angular2-notifications-lite';

// new notif imports
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-error-alert',
  templateUrl: './error-alert.component.html',
  styleUrls: ['./error-alert.component.css']
})


export class ErrorAlertComponent implements OnInit {


  @Input() messages = [];

  constructor(private notif: NotificationsService, private interceptor: HydraInterceptor, public toastr: ToastsManager, vcr: ViewContainerRef) {
    console.log("in error-alert constructor");
    this.toastr.setRootViewContainerRef(vcr);
    this.showError();

  }


  ngOnInit() {
    
  }

  showError() {
    this.toastr.error("If this shows up, that means it's working!", 'OMG YAY!');
  }

}
