import { AdditionExerciseNumbers } from '../../domain/additive.model';
import { getUniqueRandomInteger } from '@mathly-nx/utils';
import { SubtractionExerciseService } from './subtraction-generator.service';

export class SubtractionWith1000Service extends SubtractionExerciseService {
  protected override readonly maxSolution = 1000;

  protected createExercise(): AdditionExerciseNumbers {
    const { a, b } = {
      a: 1000,
      b: getUniqueRandomInteger(1, 1000, [this.lastTrackedRandom]),
    };

    return {
      a,
      b,
      solution: a - b,
    };
  }
}
