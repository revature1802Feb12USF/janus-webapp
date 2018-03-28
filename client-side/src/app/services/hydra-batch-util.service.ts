import { Injectable } from '@angular/core';
import { Batch } from '../hydra-client/entities/batch';

@Injectable()
export class HydraBatchUtilService {

  constructor() { }
  /**
     * Calculate current week using current date
     * and start date in miliseconds
     *
     * @param batch
     */
  public getWeek(batch: Batch) {
    return Math.floor(((Date.now() - new Date(batch.startDate).getTime()) / 6.048e8) + 1);
    // return ((Date.now() - batch.startDate.getMilliseconds()) / 6.048e8);

  }

}
