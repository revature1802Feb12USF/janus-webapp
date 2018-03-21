import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Interfaces
// import { CRUD } from '../interfaces/api.interface';

// rxjs
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

// entities
import { HydraUrlService } from '../url/hydra-url.service';
import { Trainee } from '../entities/Trainee';

@Injectable()
export class HydraTraineeService {

  constructor(public http: HttpClient, public urls: HydraUrlService) { }

  /*
   =====================
   BEGIN: API calls
   =====================
 */

  /**
   * retrieves all trainees by batch ID and pushes them on the
   * list subject
   *
   * spring-security: @PreAuthorize("hasAnyRole('VP', 'QC', 'TRAINER', 'STAGING', 'PANEL')")
   *
   * @param batchId: number
   */
  public fetchAllByBatch(batchId: number): void {
    this.fetchAll(batchId);
  }

  public fetchAll(batchId: number) {
    return this.http.get<any[]>(this.urls.trainees.fetchAllByBatch(batchId));
  }

  public fetchDroppedByBatch(batchId: number) {
    return this.http.get<any[]>(this.urls.trainees.fetchDroppedByBatch(batchId));
  }

  /**
  * creates a trainee and pushes the created trainee on the
  * savedSubject
  *
  * spring-security: @PreAuthorize("hasAnyRole('VP', 'QC', 'TRAINER', 'PANEL')")
  *
  * @param trainee: Trainee
  */
  public create(trainee: Trainee) {
    return this.http.post<any>(this.urls.trainees.save(), JSON.stringify(trainee));
  }

  /*
    function that pushes a trainee into savedSubject
  */
  // public pushToSaved(trainee: Trainee) {
  //   this.savedSubject.next(trainee);
  // }

  /**
   * updates a trainee and pushes the updated trainee on the
   * savedSubject
   *
   * spring-security: @PreAuthorize("hasAnyRole('VP', 'QC', 'TRAINER','PANEL')")
   *
   * @param trainee: Trainee
   */
  public update(trainee: Trainee) {
    return this.http.put<any>(this.urls.trainees.update(), JSON.stringify(trainee));
  }

  /**
  * deletes a trainee and pushes the deleted trainee on the
  * deletedSubject
  *
  * spring-security: @PreAuthorize("hasAnyRole('VP', 'QC', 'TRAINER','PANEL')")
  *
  * @param trainee: Trainee
  */
  public delete(trainee: Trainee) {
    return this.http.delete(this.urls.trainees.delete(trainee.traineeId));
  }

}
