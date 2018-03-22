import { Injectable, Inject } from '@angular/core';
import { URL_CONFIG } from '../../hydra-client.module';

@Injectable()
export class UrlService {

  /**
   * All urls associated with skills will come from this object
   */
  skills = {
    findAll: () => `${this.context}skills`,
    findAllActive: () => `${this.context}skills/active`,
    findById: (id: number) => `${this.context}skills/${id}`,
    save: () => `${this.context}skills`,
    update: () => `${this.context}skills`,
  };

  constructor(private context: string) {
    console.log('constructing url service');
  }

}
