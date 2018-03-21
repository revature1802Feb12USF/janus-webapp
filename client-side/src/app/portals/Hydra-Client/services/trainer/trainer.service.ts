import { Injectable } from '@angular/core';

// entities
import { Trainer } from '../../../../entities/Trainer';



// rxjs
import { Observable } from 'rxjs/Observable';
import { UrlService } from '../url/url.service';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class TrainerService {

  public listObservable = new Observable<Trainer[]>(null);
  public titlesObservable = new Observable<String[]>();
  public tiersObservable = new Observable<String[]>();
  // public currentTrainer = new Observable<Trainer>(null);
  public currentTrainer = new Trainer;


  constructor(private httpClient: HttpClient, private urls: UrlService) { }


public populateOnStart(): void {
  this.httpClient.get<String[]>(this.urls.trainers.getTitles()).subscribe(succ => this.titlesObservable);
  this.httpClient.get<String[]>(this.urls.trainers.getRoles()).subscribe(succ => this.tiersObservable);
 this.fetchAll();
}

/**
  *
  * sets current trainer
  */

public changeCurrentTrainer(trainer: Trainer) {
  this.currentTrainer = trainer;
}



  /*
    =====================
    BEGIN: API calls
    =====================
  */



public fetchAll(): Observable<Trainer[]> {
  this.httpClient.get<Trainer[]>(this.urls.trainers.fetchAll()).subscribe(succ => this.listObservable);
  return this.listObservable;
}

}
