import { Injectable, Inject } from '@angular/core';
import { environment } from '../../../../environments/environment';

const bam = 'http://localhost:9001/api/v2';

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
    fetchAllByTrainer: () => `${this.context}batches/trainers`,
    fetchAllByTrainerId: (id: number) => `${this.context}batches/trainers/${id}`,
    fetchAll: () => `${this.context}batches`,
    save: () => `${this.context}batches`,
    update: () => `${this.context}batches`,
    delete: (batchId) => `${this.context}batches/${batchId}`
};

  /**
   * Endpoints for trainees
   */
  trainees = {
    findAllByBatchAndStatus: (id: number, status: string) => `${this.context}trainees/batch/${id}/status/${status}`,
    save: () => `${this.context}trainees`,
    update: () => `${this.context}trainees`,
    delete: (traineeId: number) => `${this.context}trainees/${traineeId}`,
  };

  /**
   * Endpoints for trainers
   */
  trainers = {
    fetchByEmail: (email: string) => `${this.context}trainers/email/${email}/`,
    fetchAll: () => `${this.context}trainers`,
    save: () => `${this.context}trainers`,
    update: () => `${this.context}trainers`,
    getTitles: () => `${this.context}trainers/titles`,
    getRoles: () => `${this.context}trainers/roles`,

  };

  assessment = {
    fetchByBatchIdByWeek: (batchId: number, week: number) => `${this.context}trainer/assessment/${batchId}/${week}`,
    save: () => `${this.context}trainer/assessment/create`,
    update: () => `${this.context}trainer/assessment/update`,
    delete: (assessmentId: number) => `${this.context}trainer/assessment/delete/${assessmentId}`,
  };

  users = {
    getAllUsersUrl: () => `${bam}/user/all`,
    getAllTrainersUrl: () => `${bam}/user/alltrainers`,
    getAllAssociatesUrl: () => `${bam}/user/allassociates`,
    getUsersInBatchUrl: (batchId: number) => `${bam}/user/inbatch/${batchId}`,
    dropUserFromBatchUrl: (userId: number) => `${bam}/user/drop/${userId}`,
    updateUserUrl: () => `${bam}/user/update`,
    addUserUrl: () => `${bam}/user/register`,
    resetPasswordUrl: () => `${bam}/user/reset`,
    removeUserUrl: (userId: number) => `${bam}/user/remove/${userId}`,
    addUserToBatchUrl: (batchId: number, userId: number) => `${bam}/user/add/${userId}/${batchId}`,
    getUsersNotInBatchUrl: () => `${bam}/user/notinabatch`,
    recoverPasswordUrl: () => `${bam}/user/recovery`
};

  constructor() {
    this.context = environment.hydraContext;
  }
}
