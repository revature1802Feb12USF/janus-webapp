import { Trainer } from '../../entities/Trainer';
import { Trainee } from '../../portals/Caliber/entities/Trainee';

export class Batch {
    resourceId: number;
    trainingName: string;
    trainer: number;
    cotrainer: number;
    skillType: string;
    trainingType: string;
    startDate: Date;
    endDate: Date;
    location: string;
    curriculum: string;
    skills: number;
    trainees: Trainee[];
    notes: string;
    batchId: number;

    constructor(resourceId: number = 0, trainingName: string = '', trainer: number = 0, cotrainer: number = 0, skillType: string = '',
        trainingType: string = '', startDate: Date = new Date(), endDate: Date = new Date(), location: string = '',
        curriculum: string = '', skills: number = 0, trainees: Trainee[] = [], notes: string = '', batchId: number = 0) {
            this.resourceId = resourceId;
            this.trainingName = trainingName;
            this.trainer = trainer;
            this.cotrainer = cotrainer;
            this.skillType = skillType;
            this.trainingType = trainingType;
            this.startDate = startDate;
            this.endDate = endDate;
            this.location = location;
            this.curriculum = curriculum;
            this.skills = skills;
            this.trainees = trainees;
            this.notes = notes;
            this.batchId = batchId;
    }
}

