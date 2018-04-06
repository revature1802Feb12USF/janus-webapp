import { Pipe, PipeTransform } from '@angular/core';
import { HydraBatch } from '../../../hydra-client/entities/HydraBatch';

@Pipe({ name: 'DisplayBatchByYear' })
export class DisplayBatchByYear implements PipeTransform {
    transform(item: HydraBatch[], year: number): HydraBatch[] {
        const output = item.filter(batch => {
            const selectedDate = new Date(batch.startDate);
            return (Number(selectedDate.getFullYear()) === Number(year));
        });
        return output;
    }
}
