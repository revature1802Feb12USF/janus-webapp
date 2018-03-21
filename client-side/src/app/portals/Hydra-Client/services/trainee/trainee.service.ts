import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Interfaces
// import { CRUD } from '../interfaces/api.interface';

// rxjs
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

// entities
import { UrlService } from '../url/url.service';
import { Trainee } from '../../entities/Trainee';


/**
 * this service manages calls to the web service
 * for Trainee objects
 */
@Injectable()
export class TraineeService {

  public listSubject: BehaviorSubject<Trainee[]>;
  public savedSubject: Subject<Trainee>;
  public updatedSubject: Subject<Trainee>;
  public deletedSubject: Subject<Trainee>;

  constructor(public http: HttpClient, public urls: UrlService) {
    // super(httpClient, alertService);
    this.listSubject = new BehaviorSubject([]);
    this.savedSubject = new Subject();
    this.updatedSubject = new Subject();
    this.deletedSubject = new Subject();
  }


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
    this.http.get<any[]>(this.urls.trainees.fetchAllByBatch(batchId))
      .subscribe((results) => this.listSubject.next(results));
    return this.listSubject.asObservable();
  }

  fetchDroppedByBatch(batchId: number) {
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
    this.http.post<any>(this.urls.trainees.save(), JSON.stringify(trainee))
      .subscribe((results) => this.savedSubject.next(results));
    return this.savedSubject.asObservable();
  }

  /*
    function that pushes a trainee into savedSubject
  */
  public pushToSaved(trainee: Trainee) {
    this.savedSubject.next(trainee);
  }

  /**
   * updates a trainee and pushes the updated trainee on the
   * savedSubject
   *
   * spring-security: @PreAuthorize("hasAnyRole('VP', 'QC', 'TRAINER','PANEL')")
   *
   * @param trainee: Trainee
   */
  public update(trainee: Trainee) {
    this.http.put<any>(this.urls.trainees.update(), JSON.stringify(trainee))
      .subscribe((results) => this.savedSubject.next(results));
    return this.savedSubject.asObservable();
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
    this.http.delete(this.urls.trainees.delete(trainee.traineeId))
      .subscribe((results: any) => this.deletedSubject.next(results));
    return this.deletedSubject.asObservable();
  }
}
