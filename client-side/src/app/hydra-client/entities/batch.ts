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
}

