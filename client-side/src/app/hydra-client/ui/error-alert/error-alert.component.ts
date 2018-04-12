import { Component, OnInit, Input, ViewContainerRef, Injectable } from '@angular/core';
import { animate, state, transition, trigger, style, keyframes } from '@angular/animations';

// new notif imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-error-alert',
  templateUrl: './error-alert.component.html',
  styleUrls: ['./error-alert.component.css']
})

@Injectable()
export class ErrorAlertComponent implements OnInit {

  constructor(public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }

  showError(messages: any) {
    this.toastr.error(messages, 'Error!');
  }

}
