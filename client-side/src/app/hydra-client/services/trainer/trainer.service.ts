import { Injectable } from '@angular/core';

// entities




// rxjs
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Trainer } from '../../entities/Trainer';


@Injectable()
export class TrainerService {

  public listObservable = new Observable<Trainer[]>(null);
  public titlesObservable = new Observable<String[]>();
  public tiersObservable = new Observable<String[]>();
  public currentTrainer = new Observable<Trainer>(null);
  // public currentTrainer = new Trainer;


  constructor(private httpClient: HttpClient, private urls: urlService) { }


// public populateOnStart(): void {
//   this.httpClient.get<String[]>(this.urls.trainers.getTitles()).subscribe(succ => this.titlesObservable);
//   this.httpClient.get<String[]>(this.urls.trainers.getRoles()).subscribe(succ => this.tiersObservable);
//  this.fetchAll();
// }

/**
  *
  * sets current trainer | We didn't need this
  */

// public changeCurrentTrainer(trainer: Trainer) {
//   return this.httpClient.get<Trainer>(this.urls.trainers.fetch)
// }



  /*
    =====================
    BEGIN: API calls
    =====================
  */

 /**
    * retrieves all trainers and pushes them on the
    * list subject
    *
    * spring-security: @PreAuthorize("hasAnyRole('VP', 'TRAINER', 'STAGING', 'QC', 'PANEL')")
    */

public fetchAll(): Observable<Trainer[]> {
  this.httpClient.get<Trainer[]>(this.urls.trainers.fetchAll()).subscribe(succ => this.listObservable);
  return this.listObservable;
}

public fetchByEmail(email: string) {
 return this.httpClient.get<Trainer>(this.urls.trainers.fetchByEmail(email)).subscribe();
}

/**
   * creates a trainer and pushes the created trainer on the
   * savedSubject
   *
   * spring-security: @PreAuthorize("hasAnyRole('VP')")
   *
   * @param trainer: Trainer
   */

public create(trainer: Trainer): Observable<Trainer> {
  return this.httpClient.post<Trainer>(this.urls.trainers.save(), trainer);
}

/**
   * updates a trainer and pushes the updated trainer on the
   * savedSubject
   *
   * spring-security: @PreAuthorize("hasAnyRole('VP')")
   *
   * @param trainer: Trainer
   */

public update(trainer: Trainer): Observable<Trainer> {
  return this.httpClient.put<Trainer>(this.urls.trainers.update(), trainer);
}




}
