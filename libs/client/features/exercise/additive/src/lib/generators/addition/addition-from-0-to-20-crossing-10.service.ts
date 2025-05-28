import { getUniqueRandomInteger } from '@mathly-nx/utils';
import { AdditionExerciseService } from './addition-generator.service';

import { AdditionExerciseNumbers } from '../../domain/additive.model';

export class AdditionFrom0To20Crossing10Service extends AdditionExerciseService {
  protected override readonly maxSolution = 20;

  protected createExercise(): AdditionExerciseNumbers {
    const a = getUniqueRandomInteger(2, 9);
    const b = getUniqueRandomInteger(11 - a, 9);

    return {
      a,
      b,
      solution: a + b,
    };
  }
}
