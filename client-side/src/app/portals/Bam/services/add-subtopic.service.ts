import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subtopic } from '../models/subtopic.model';
import { Batch } from '../models/batch.model';
import { UrlService } from '../../../hydra-client/services/urls/url.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

const httpOptionsJson = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AddSubtopicService {

  constructor(private http: HttpClient, private urlService: UrlService) { }

  /**
   * Retrieves current batch information
   * @author Francisco Palomino | Batch: 1712-dec10-java-steve
   */
  getBatchById(id: number): Observable<Batch> {
    return this.http
        .get<Batch>(this.urlService.addsubtopics.getBatchIdUrl(id))
        .map( data => {
          return data;
        });
  }

  /**
   * Retrieves all the subtopics of the current batch
   * @author Francisco Palomino | Batch: 1712-dec10-java-steve
   */
  getBatchSubtopics(id: number): Observable<Subtopic[]> {
    return this.http
        .get<Subtopic[]>(this.urlService.addsubtopics.getBatchSubtopicsUrl(id, 34, 0))
        .map( data => {
          return data;
        });
  }

  /**
   * Updates old date on the database with the new date selected
   * @author Francisco Palomino | Batch: 1712-dec10-java-steve
   * @param batchId current batch id
   * @param subtopicId subtopic id
   * @param date date of the subtopic
   */
  updateDate(subtopicId, batchId, date): Observable<any> {
    return this.http.post<any>(this.urlService.addsubtopics.updateDateUrl(subtopicId, batchId, date), '' , httpOptions);
  }

  /**
   * Obtains all the subtopics from the database
   * @author Francisco Palomino | Batch: 1712-dec10-java-steve
   */
  getSubtopicPool(curriculumId: number): Observable<Subtopic[]> {
    return this.http
        .get<Subtopic[]>(this.urlService.addsubtopics.getSubtopicPoolUrl(curriculumId)).map( data => {
          return data;
        });
  }

  /**
   * Sends a subtopic object to be persisted to the database
   * @param subtopic subtopic object
   */
  addSubtopic(subtopic): Observable<Subtopic> {
    return this.http.post<Subtopic>(this.urlService.addsubtopics.addSubtopicUrl(), JSON.stringify(subtopic), httpOptionsJson);
  }

}
