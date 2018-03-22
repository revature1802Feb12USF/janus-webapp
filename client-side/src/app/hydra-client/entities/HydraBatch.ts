import { HydraTrainer } from './HydraTrainer';
import { HydraAddress } from './HydraAddress';
import { HydraTrainee } from './HydraTrainee';



export class HydraBatch {
    batchId: number;
    resourceId: number;
    trainingName: string;
    trainer: HydraTrainer;
    coTrainer: HydraTrainer;
    skillType: string;
    trainingType: string;
    startDate: Date;
    endDate: Date;
    location: string;
    address: HydraAddress;
    goodGradeThreshold: number;
    borderlineGradeThreshold: number;
    trainees: HydraTrainee[];
    weeks: number;
    gradedWeeks: number;
}
