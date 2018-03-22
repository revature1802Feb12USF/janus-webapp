import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { HttpClient } from '@angular/common/http';
import { HydraSkill } from '../../entities/HydraSkill';
import { UrlService } from '../urls/url.service';

@Injectable()
export class HydraSkillService {

  constructor(private httpClient: HttpClient, private urlService: UrlService) { }

  /**
   * Retreives all skills
   *
   * @returns {Observable<Array<HydraSkill>>}
   */
  findAll(): Observable<Array<HydraSkill>> {
    const url = this.urlService.skills.findAll();
    return this.httpClient.get<Array<HydraSkill>>(url);
  }

  /**
   * Retreives all active skills
   *
   * @returns {Observable<Array<HydraSkill>>}
   */
  findAllActive(): Observable<Array<HydraSkill>> {
    return this.httpClient.get<Array<HydraSkill>>('url');
  }

  /**
   * Finds the skill for a given id
   *
   * @param {number} id
   * @returns {Observable<HydraSkill>}
   */
  findById(id: number): Observable<HydraSkill> {
    return this.httpClient.get<HydraSkill>('url');
  }

  /**
  * Saves the newly created skill
  *
  * @param {HydraSkill} skill
  * @returns {Observable<HydraSkill>}
  */
  save(skill: HydraSkill): Observable<HydraSkill> {
    return this.httpClient.post<HydraSkill>('url', skill);
  }

  /**
  * Updates the newly created skill
  *
  * @param {HydraSkill} skill
  * @returns {Observable<HydraSkill>}
  */
  update(skill: HydraSkill): Observable<HydraSkill> {
    return this.httpClient.put<HydraSkill>('url', skill);
  }
}
