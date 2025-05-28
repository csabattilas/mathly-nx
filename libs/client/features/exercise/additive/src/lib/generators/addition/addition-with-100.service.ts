import { AdditionExerciseService } from './addition-generator.service';

import { AdditionExerciseNumbers } from '../../domain/additive.model';
import { getUniqueRandomInteger } from '@mathly-nx/utils';

export class AdditionWith100Service extends AdditionExerciseService {
  protected override readonly maxSolution = 200;

  protected createExercise(): AdditionExerciseNumbers {
    const { a, b } = { a: getUniqueRandomInteger(1, 100), b: 100 };

    this.lastA = a;

    return {
      a,
      b,
      solution: a + b,
    };
  }
}
