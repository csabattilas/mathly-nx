import { AdditionExerciseNumbers } from '../../domain/additive.model';
import { getUniqueRandomInteger } from '@mathly-nx/utils';
import { SubtractionExerciseService } from './subtraction-generator.service';

export class SubtractionWith100Service extends SubtractionExerciseService {
  protected override readonly maxSolution = 100;

  protected createExercise(): AdditionExerciseNumbers {
    const { a, b } = {
      a: 100,
      b: getUniqueRandomInteger(1, 100, [this.lastTrackedRandom]),
    };

    this.lastTrackedRandom = b;

    return {
      a,
      b,
      solution: a - b,
    };
  }
}
