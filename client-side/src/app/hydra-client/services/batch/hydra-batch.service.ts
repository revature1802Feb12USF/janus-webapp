import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Interfaces

// rxjs
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

// services
import { environment } from '../../../../environments/environment';

// entities
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';
import { UrlService } from '../urls/url.service';
import { stringifyDate } from '../../../portals/Caliber/util/utils';
import { CRUD } from '../../../portals/Caliber/interfaces/api.interface';
import { HydraBatch } from '../../entities/HydraBatch';


/**
 * this service manages calls to the web service
 * for Batch objects
 */
@Injectable()
export class HydraBatchService implements CRUD<HydraBatch> {


  constructor(public http: HttpClient, private urls: UrlService) {

  }

  public getList() {
    // this.listSubject.next(data);
    // return this.listSubject.asObservable();
  }

  /*
    =====================
    BEGIN: API calls
    =====================
  */

  /**
   * retrieves all training batches regardless of the trainer
   * and returns the HTTP request as an Observable
   *
   * spring-security: @PreAuthorize("hasAnyRole('VP', 'QC', 'STAGING', 'PANEL')")
   *
   * @returns Observable
   */
  public fetchAll() {
    return this.http.get<any[]>(this.urls.batch.fetchAll());
  }

  /**
   * retrieves the batches that belong to the currently
   * authenticated trainer and returns the HTTP request as an Observable
   *
   * spring-security: @PreAuthorize("hasAnyRole('VP', 'TRAINER', 'STAGING', 'PANEL')")
   *
   * @returns Observable
   */
  public fetchAllByTrainer() {
    return this.http.get<any[]>(this.urls.batch.fetchAllByTrainer());
  }

  public fetchAllByTrainerId(id: number) {
    return this.http.get<any[]>(this.urls.batch.fetchAllByTrainerId(id));
  }

  /**
  * @overloaded
  * @see save()
  *
  * transmits a batch to be saved in persistent
  * storage on the server and returns the HTTP request as an Observable
  *
  * spring-security: @PreAuthorize("hasAnyRole('VP', 'QC', 'TRAINER', 'PANEL')")
  *
  * @param batch: Batch
  */
  public create(batch: HydraBatch) {
    return this.http.post<any>(this.urls.batch.save(), JSON.stringify(this.prepareForApi(batch)));
  }

  /**
   * transmits a Batch object to be updated and
   * returns the HTTP request as an Observable
   *
   * spring-security: @PreAuthorize("hasAnyRole('VP', 'QC', 'TRAINER', 'PANEL')")
   *
   * @param batch: Batch
   *
   * @returns Observable
   */
  public update(batch: HydraBatch) {
    return this.http.put<any>(this.urls.batch.update(), JSON.stringify(this.prepareForApi(batch)));
  }

  /**
   * transmits a batch object to be deleted and
   * returns the HTTP request as an Observable
   *
   * spring-security: @PreAuthorize("hasAnyRole('VP')")
   *
   * @param batch: Batch
   *
   * @returns Observable
   */
  public delete(batch: HydraBatch) {
    return this.http.delete<any>(this.urls.batch.delete(batch.batchId));
  }

  /**
   * produces a clone of the batch object that
   * has changes required for the API in order
   * to be processed
   *
   * @param batch: Batch
   *
   * @return any
   */
  protected prepareForApi(batch: HydraBatch) {
    const output: any = {};
    Object.assign(output, batch);

    output.startDate = stringifyDate(batch.startDate);
    output.endDate = stringifyDate(batch.endDate);

    return output;
  }

}
