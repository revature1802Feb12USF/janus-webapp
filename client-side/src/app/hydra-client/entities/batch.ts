import { Trainer } from '../../portals/Caliber/entities/Trainer';
import { Address } from '../../portals/Caliber/entities/Address';
import { Trainee } from '../../portals/Caliber/entities/Trainee';


export class Batch {
    batchId: number;
    resourceId: number;
    trainingName: string;
    trainer: Trainer;
    coTrainer: Trainer;
    skillType: string;
    trainingType: string;
    startDate: Date;
    endDate: Date;
    location: string;
    address: Address;
    goodGradeThreshold: number;
    borderlineGradeThreshold: number;
    trainees: Trainee[];
    weeks: number;
    gradedWeeks: number;
}
