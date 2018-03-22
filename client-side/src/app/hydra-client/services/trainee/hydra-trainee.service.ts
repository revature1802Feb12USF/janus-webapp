import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { UrlService } from '../urls/url.service';
import { HydraTrainee } from '../../entities/HydraTrainee';

/**
 * This service is used for consuming Hydra API resources dealing with trainees.
 *
 * @export
 * @class HydraTraineeService
 */
@Injectable()
export class HydraTraineeService {

  constructor(private httpClient: HttpClient, private urlService: UrlService) { }

  /**
   * retrieves all trainees by batch ID and pushes them on the
   * list subject
   *
   * spring-security: @PreAuthorize("hasAnyRole('VP', 'QC', 'TRAINER', 'STAGING', 'PANEL')")
   *
   * @param batchId: number
   * @returns {Observable<HydraTrainee[]>}
   */
  public fetchAllByBatch(batchId: number): Observable<HydraTrainee[]> {
    return this.fetchAll(batchId);
  }

  /**
   * Retrieves all trainees with the input batch id.
   *
   * @param batchId
   * @returns {Observable<HydraTrainee[]>}
   */
  public fetchAll(batchId: number): Observable<HydraTrainee[]> {
    const url = this.urlService.trainees.fetchAllByBatch(batchId);
    return this.httpClient.get<HydraTrainee[]>(url);
  }

  /**
   * Retrieves all trainees with the input batch id that have
   * been dropped.
   *
   * @param batchId
   * @returns {Observable<HydraTrainee[]>}
   */
  public fetchDroppedByBatch(batchId: number): Observable<HydraTrainee[]> {
    const url = this.urlService.trainees.fetchDroppedByBatch(batchId);
    return this.httpClient.get<HydraTrainee[]>(url);
  }

  /**
  * Saves the newly created trainee and returns the Observable.
  *
  * spring-security: @PreAuthorize("hasAnyRole('VP', 'QC', 'TRAINER', 'PANEL')")
  *
  * @param trainee: HydraTrainee
  * @returns {Observable<HydraTrainee>}
  */
  public create(trainee: HydraTrainee): Observable<HydraTrainee> {
    const url = this.urlService.trainees.save();
    return this.httpClient.post<HydraTrainee>(url, trainee);
  }

  /*
    Function that pushes a trainee into savedSubject.
    Since we are no longer working with subjects, we
    decided to comment out the below function.
  */
  // public pushToSaved(trainee: Trainee) {
  //   this.savedSubject.next(trainee);
  // }

  /**
   * Updates a trainee and returns the Observable.
   *
   * spring-security: @PreAuthorize("hasAnyRole('VP', 'QC', 'TRAINER','PANEL')")
   *
   * @param trainee: HydraTrainee
   * @returns {Observable<HydraTrainee>}
   */
  public update(trainee: HydraTrainee): Observable<HydraTrainee> {
    const url = this.urlService.trainees.update();
    return this.httpClient.put<HydraTrainee>(url, trainee);
  }

  /**
  * Deletes a trainee and returns the Observable.
  *
  * spring-security: @PreAuthorize("hasAnyRole('VP', 'QC', 'TRAINER','PANEL')")
  *
  * @param trainee: HydraTrainee
  * @returns {Observable<HydraTrainee>}
  */
  public delete(trainee: HydraTrainee): Observable<HydraTrainee> {
    const url = this.urlService.trainees.delete(trainee.traineeId);
    return this.httpClient.delete<HydraTrainee>(url);
  }
}
