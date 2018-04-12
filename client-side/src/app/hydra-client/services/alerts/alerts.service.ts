import { Injectable, Inject } from '@angular/core';
import { ReplaySubject } from 'rxjs';

/**
 * This just hosts a subject where people can broadcast messages to all subscribers
 */
@Injectable()
export class AlertService {
  
  private alerts = new ReplaySubject<string>(3);
  public alerts$ = this.alerts.asObservable();

  publishAlert(alert: string) {
    this.alerts.next(alert);
  }

}
