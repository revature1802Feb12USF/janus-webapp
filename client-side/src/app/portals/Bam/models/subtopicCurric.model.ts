import { SubtopicName } from './subtopicname.model';
import { SubtopicStatus } from './subtopicstatus.model';
import { Batch } from './batch.model';
import { Topic } from './topic.model';

export class SubtopicCurric {
    subtopicId: number;
    subtopicName: string;
    status: string;
    parentTopic: Topic;
}
