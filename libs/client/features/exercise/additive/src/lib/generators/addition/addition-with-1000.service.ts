import { AdditionExerciseNumbers } from '../../domain/additive.model';
import { getUniqueRandomInteger } from '@mathly-nx/utils';
import { AdditionExerciseService } from './addition-generator.service';

export class AdditionWith1000Service extends AdditionExerciseService {
  protected override readonly maxSolution = 200;

  protected createExercise(): AdditionExerciseNumbers {
    const { a, b } = {
      b: getUniqueRandomInteger(1, 1000, [this.lastA]),
      a: 1000,
    };

    this.lastA = a;

    return {
      a,
      b,
      solution: a + b,
    };
  }
}
