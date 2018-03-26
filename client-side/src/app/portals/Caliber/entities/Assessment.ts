import { Category } from './Category';
import { Batch } from '../../../hydra-client/entities/batch';

export class Assessment {
    assessmentId: number;
    title: string;
    batch: Batch;
    rawScore: number;
    type: string;
    week: number;
    category: Category;
}
