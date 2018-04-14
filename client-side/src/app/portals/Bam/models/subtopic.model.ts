import { Topic } from "./topic.model";

export class Subtopic {
    subtopicId: number;
    subtopicName: string;
    status: string;
    date: Date;
    parentTopic: Topic;
    
    constructor(subtopicId: number, subtopicName: string, date: Date, status: string, parentTopic: Topic) {
        this.subtopicId = subtopicId;
        this.subtopicName = subtopicName;
        this.date = date;
        this.status = status;
        this.parentTopic = parentTopic;
    }
}
