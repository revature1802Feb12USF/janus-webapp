import { Injectable, Inject } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable()
export class UrlService {
  private context: string;

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

  /**
   * Endpoints for batches
   */
  batches = {
    fetchAllByTrainer: (id: number) => `${environment.context}batches/trainer/${id}`,
    fetchAll: () => `${environment.context}batches`,
    save: () => `${environment.context}batches`,
    update: () => `${environment.context}batches`,
    delete: (batchId: number) => `${environment.context}batches/${batchId}`,
  };

  /**
   * Endpoints for trainees
   */
  trainees = {
    fetchAllByBatch: (batchId: number) => `${environment.context}trainees/batch/${batchId}`,
    save: () => `${environment.context}trainees`,
    update: () => `${environment.context}trainees`,
    delete: (traineeId: number) => `${environment.context}trainees/${traineeId}`,
  };

  /**
   * Endpoints for trainers
   */
  trainers = {
    fetchByEmail: (email: string) => `${environment.context}trainers/${email}`,
    fetchAll: () => `${environment.context}trainers`,
    save: () => `${environment.context}trainers`,
    update: () => `${environment.context}trainers`,
    getTitles: () => `${environment.context}trainers/titles`,
    getRoles: () => `${environment.context}trainers/roles`,

  };
  constructor() {
    this.context = environment.hydraContext;
  }
}
