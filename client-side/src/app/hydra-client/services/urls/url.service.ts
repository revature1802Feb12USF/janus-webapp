import { Injectable, Inject } from '@angular/core';

const bam = 'http://localhost:9001/api/v2';
const context = 'http://localhost:9001/api/v2';

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
    getAllUsersUrl: () => `${bam}/users/all`,
    getAllTrainersUrl: () => `${bam}/users/alltrainers`,
    getAllAssociatesUrl: () => `${bam}/users/allassociates`,
    getUsersInBatchUrl: (batchId: number) => `${bam}/users/inbatch/${batchId}`,
    dropUserFromBatchUrl: (userId: number) => `${bam}/users/drop/${userId}`,
    updateUserUrl: (userId: number) => `${bam}/users/$userId`,
    addUserUrl: () => `${bam}/user/register`,
    resetPasswordUrl: () => `${bam}/user/reset`,
    removeUserUrl: (userId: number) => `${bam}/user/remove/${userId}`,
    addUserToBatchUrl: (batchId: number, userId: number) => `${bam}/user/add/${userId}/${batchId}`,
    getUsersNotInBatchUrl: () => `${bam}/user/notinabatch`,
    recoverPasswordUrl: () => `${bam}/user/recovery`
};

topic = {
  addTopicName: (name: string) => `${bam}/topic/add/${name}`,
};

subtopic = {
  addSubTopicName: (subtopicName: string, topicId: number, typeId: number) =>
   `${bam}/subtopic/add/${typeId}/${topicId}/${subtopicName}`,
  removeSubtopic: (subtopicId: number) => `${bam}/subtopic/remove/${subtopicId}`,
  removeAllSubtopics: (batchId: number) => `${bam}/subtopic/removebybatch/${batchId}/`,
  isPopulated: (batchId: number) => `${bam}/subtopic/ispopulated/${batchId}/`
};

addsubtopics = {
  getBatchSubtopicsUrl: (batchId: number, pageNumber: number, pageSize: number) =>
                  `${bam}/calendar/subtopicspagination/${batchId}/${pageSize}/${pageNumber}`,
  getBatchIdUrl: (batchId: number) => `${bam}/batches/byid/${batchId}`,
  addSubtopicUrl: () => `${bam}/subtopic/addsubtopic`,
  getSubtopicPoolUrl: () => `${bam}/curriculum/topicpool`,
  updateDateUrl: (subtopicId: number, batchId: number, date: number) =>
                  `${bam}/calendar/dateupdate/${subtopicId}/${batchId}/${date}`
};

assignForce = {
  refreshBatches: () => `${bam}/refreshbatches`
};

calendar = {
  getSubtopicsByBatchPaginationUrl: (batchId: number, pageNumber: number, pageSize: number) =>
      `${bam}/calendar/subtopicspagination/${batchId}/${pageNumber}/${pageSize}/`,
  getSubtopicsByBatchUrl: (batchId: number) => `${bam}/calendar/subtopics/${batchId}`,
  getNumberOfSubTopicsByBatchUrl: (batchId: number) => `${bam}/calendar/getnumberofsubtopics/${batchId}`,
  getTopicsByBatchPagUrl: (batchId: number) => `${bam}/calendar/topics/${batchId}`,
  changeTopicDateUrl: (subtopicId: number, batchId: number, date: number) =>
      `${bam}/calendar/dateupdate/${subtopicId}/${batchId}/${date}`,
  updateTopicStatusUrl: (subtopicId: number, batchId: number, status: string) =>
      `${bam}/calendar/statusupdate/${subtopicId}/${batchId}/${status}`,
  addTopicsUrl: () => `${bam}/calendar/addtopics`,
};

curriculum = {
  getCurriculumAllUrl: () => `${bam}/curriculum/all`,
  getCurriculumByIdUrl: (id: number) => `${bam}/curriculum/getcurriculum/${id}`,
  getSchedulesByCurriculumIdUrl: (id: number) => `${bam}/curriculum/schedule/${id}`,
  getTopicPoolAllUrl: () => `${bam}/curriculum/topicpool`,
  getSubtopicPoolAllUrl: () => `${bam}/curriculum/subtopicpool`,
  addCurriculumUrl: () => `${bam}/curriculum/addcurriculum`,
  makeCurriculumMasterByIdUrl: (id: number) => `${bam}/curriculum/makemaster/${id}`,
  syncBatchByIdUrl: (id: number) => `${bam}/curriculum/syncbatch/${id}`,
  deleteCurriculumVersionUrl: () => `${bam}/curriculum/deleteversion`
};

bambatch = {
  getBatchAllUrl: () => `${bam}/batch/all`,
  getPastBatchesUrl: (email: string) => `${bam}/batch/past/${email}/`,
  getFutureBatchesUrl: (email: string) => `${bam}/batch/future/${email}/`,
  getBatchInProgressUrl: (email: string) => `${bam}/batch/inprogress/${email}/`,
  getAllBatchesInProgressUrl: (email: string) => `${bam}/batch/allinprogress/${email}/`,
  getBatchByIdURL: (batchId: number) => `${bam}/batch/byid/${batchId}/`,
  updateBatchUrl: () => `${bam}/batch/updatebatch`,
  getAllBatchTypesUrl: () => `${bam}/batch/batchtypes`,
  removeSubtopicFromBatchUrl: (subtopicId: number) => `${bam}/batch/${subtopicId}`,
  getAllInProgressUrl: () => `${bam}/batch/currentbatches`
};

  constructor() {
    this.context = context;
  }
}
