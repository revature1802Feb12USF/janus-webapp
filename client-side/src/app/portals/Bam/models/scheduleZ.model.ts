import { Curriculum } from "./curriculum.model";
import { SubtopicCurric } from "./subtopicCurric.model";

export class Schedule {
    subtopics: SubtopicCurric[]=new Array<SubtopicCurric>();
    curriculum: Curriculum;
}