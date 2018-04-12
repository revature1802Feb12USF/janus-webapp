import { ScheduledDate } from "./scheduleddate.model";
import { Schedule } from "./schedule.model";

export class ScheduledSubtopic{
    id: number;
    subtopicID: number;
    date: ScheduledDate;
    parentSchedule: Schedule;

    // constructor(id: number, subtopicID: number, date: ScheduledDate, parentSchedule: Schedule){
    //     this.id = id;
    //     this.subtopicID = subtopicID;
    //     this.date = date;
    //     this.parentSchedule = parentSchedule;
    // }

    constructor(id: number, subtopicID: number, date: ScheduledDate){
        this.id = id;
        this.subtopicID = subtopicID;
        this.date = date;
    }
}