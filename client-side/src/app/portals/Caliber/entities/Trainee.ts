import { HydraBatch } from '../../../hydra-client/entities/HydraBatch';

export class Trainee {
    traineeId: number;
    resourceId: number;
    name: string;
    email: string;
    trainingStatus: string;
    phoneNumber: string;
    skypeId: string;
    profileUrl: string;
    recruiterName: string;
    college: string;
    degree: string;
    major: string;
    techScreenerName: string;
    projectCompletion: string;
    batch: HydraBatch;
}
