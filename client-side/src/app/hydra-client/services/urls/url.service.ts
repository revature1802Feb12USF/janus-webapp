import { Injectable, Inject } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable()
export class UrlService {
  private context: string;

  /**
   * All urls associated with skills will come from this object
   */
  // skills = {
  //   findAll: () => `${this.context}skills`,
  //   findAllActive: () => `${this.context}skills/active`,
  //   findById: (id: number) => `${this.context}skills/${id}`,
  //   save: () => `${this.context}skills`,
  //   update: () => `${this.context}skills`,
  // };

 batch = {
    fetchAllByTrainer: () => `${this.context}batches/trainers`,
    fetchAll: () => `${this.context}batches`,
    save: () => `${this.context}batches`,
    update: () => `${this.context}batches`,
    delete: (batchId) => `${this.context}batches/${batchId}`
};

  constructor() {
    this.context = environment.hydraContext;
  }

}
