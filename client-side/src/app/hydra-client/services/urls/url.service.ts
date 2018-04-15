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

  //BAM Endpoints
  users = {
    getUserByID: (userId: number) => `${bam}/users/${userId}`,
    getAllUsersUrl: () => `${bam}/users`,
    getAllTrainersUrl: () => `${bam}/users/alltrainers`,
    getAllAssociatesUrl: () => `${bam}/users/allassociates`,
    getUsersInBatchUrl: (batchId: number) => `${bam}/users/inbatch/${batchId}`,
    dropUserFromBatchUrl: (userId: number) => `${bam}/users/${userId}`,
    updateUserUrl: (userId: number) => `${bam}/users/${userId}`,
    addUserUrl: () => `${bam}/users`,
    removeUserUrl: (userId: number) => `${bam}/users/${userId}`,
    addUserToBatchUrl: (batchId: number, userId: number) => `${bam}/users/batches/${userId}/${batchId}`,
    getUsersNotInBatchUrl: () => `${bam}/users/batches/none`,
    resetPasswordUrl: () => `${bam}/user/reset`,
    recoverPasswordUrl: () => `${bam}/user/recovery`
  };

  topic = {
    addTopicName: (name: string) => `${bam}/topics/${name}`,
    changeTopicName: (name: string) => `${bam}/topics/topic`
  };

  subtopic = {
    getSubtopicByIDs: (subtopicIdList: number[]) => `${bam}/topics/subtopics?ids=${subtopicIdList}`,
    getSubtopics: () => `subtopic/subtopics`,
    addSubTopicName: (subtopicName: string, topicId: number, typeId: number) =>
      `${bam}/subtopics/${typeId}/${topicId}/${subtopicName}`,
    removeSubtopic: (subtopicId: number) => `${bam}/subtopics/${subtopicId}`,
    removeAllSubtopics: (batchId: number) => `${bam}/subtopics/${batchId}/`,
    isPopulated: (batchId: number) => `${bam}/subtopics/ispopulated/${batchId}/`
  };

  addsubtopics = {
    // getBatchSubtopicsUrl: (batchId: number, pageNumber: number, pageSize: number) =>
    //   `${bam}/calendar/subtopicspagination/${batchId}/${pageSize}/${pageNumber}`,
    getBatchIdUrl: (batchId: number) => `${bam}/batches/batch/${batchId}`,
    addSubtopicUrl: () => `${bam}/curricula/schedules`,
    getSubtopicPoolUrl: (curriculumId: number) => `${bam}/curricula/${curriculumId}/subtopics`,
    updateDateUrl: (subtopicId: number, batchId: number, date: number) =>
      `${bam}/calendar/dateupdate/${subtopicId}/${batchId}/${date}`,
    updateScheduleURL: `${bam}/curricula/schedules`
  };

  assignForce = {
    refreshBatches: () => `${bam}/refreshbatches`
  };

  calendar = {
    // getSubtopicsByBatchPaginationUrl: (batchId: number, pageNumber: number, pageSize: number) =>
    //   `${bam}/calendar/subtopicspagination/${batchId}/${pageNumber}/${pageSize}/`,
    getScheduleById: (scheduleId: number) => `${bam}/curricula/schedules/${scheduleId}`,
    getSubtopicsByBatchUrl: (batchId: number) => `${bam}/calendar/subtopics/${batchId}`,
    getNumberOfSubTopicsByBatchUrl: (batchId: number) => `${bam}/calendar/getnumberofsubtopics/${batchId}`,
    getTopicsByBatchPagUrl: (batchId: number) => `${bam}/calendar/topics/${batchId}`,
    changeTopicDateUrl: `${bam}/curricula/schedules`,
    updateTopicStatusUrl: (subtopicId: number, batchId: number, status: string) =>
      `${bam}/curricula/schedules`,
    addTopicsUrl: () => `${bam}/calendar/addtopics`
  };

  curriculum = {
    getCurriculumAllUrl: () => `${bam}/curricula/all`,
    getCurriculumByIdUrl: (id: number) => `${bam}/curricula/${id}`,
    getSchedulesByCurriculumIdUrl: (id: number) => `${bam}/curricula/schedule/${id}`,
    getTopicPoolAllUrl: () => `${bam}/curricula/topicpool`,
    getSubtopicPoolAllUrl: () => `${bam}/curricula/subtopicpool`,
    addCurriculumUrl: () => `${bam}/curricula/addcurriculum`,
    makeCurriculumMasterByIdUrl: (id: number) => `${bam}/curricula/makemaster/${id}`,
    syncBatchByIdUrl: (id: number) => `${bam}/curricula/syncbatch/${id}`,
    deleteCurriculumVersionUrl: () => `${bam}/curricula/deleteversion`,
    getScheduleById: (id: number) => `${bam}/curricula/schedules/${id}`
  };

  bambatch = {
    getBatchAllUrl: () => `${bam}/batches/`,
    getPastBatchesUrl: (email: string) => `${bam}/batches/past/${email}`,
    getFutureBatchesUrl: (email: string) => `${bam}/batches/future/${email}`,
    getBatchInProgressUrl: (email: string) => `${bam}/batches/inprogress/${email}`,
    getAllBatchesInProgressUrl: (email: string) => `${bam}/batches/allinprogress/${email}`,
    getBatchByIdURL: (batchId: number) => `${bam}/batches/batch/${batchId}`,
    updateBatchUrl: () => `${bam}/batches/batch`,
    getAllBatchTypesUrl: () => `${bam}/batches/types`,
    removeSubtopicFromBatchUrl: (subtopicId: number) => `${bam}/batch/${subtopicId}`,
    getAllInProgressUrl: () => `${bam}/batches/current/`
  };

  constructor() {
    this.context = context;
  }
}
