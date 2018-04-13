import { SubtopicName } from './subtopicname.model';
import { SubtopicStatus } from './subtopicstatus.model';
import { Batch } from './batch.model';

export class Subtopic {
    subtopicId: number;
    subtopicName: SubtopicName;
    batch: Batch;
    status: string;
    date: Date;
    
    constructor(subtopicId: number, subtopicName: SubtopicName, batch: Batch, status: string, subtopicDate: Date) {
        this.subtopicId = subtopicId;
        this.subtopicName = subtopicName;
        this.batch = batch;
        this.status = status;
        this.date = subtopicDate;
    }
}
