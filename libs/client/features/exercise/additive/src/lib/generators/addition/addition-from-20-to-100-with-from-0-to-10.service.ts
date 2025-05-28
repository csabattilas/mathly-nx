import { getNotCrossingRandomsWithBellow10 } from '../../utils';
import { AdditionExerciseService } from './addition-generator.service';

import { AdditionExerciseNumbers } from '../../domain/additive.model';

export class AdditionFrom20To100WithFrom0To10Service extends AdditionExerciseService {
  protected override readonly maxSolution = 100;
  protected override canHaveTenDistanceChoice = false;

  protected createExercise(): AdditionExerciseNumbers {
    const { a, b } = getNotCrossingRandomsWithBellow10(20, 100, this.lastA);

    this.lastA = a;

    return {
      a,
      b,
      solution: a + b,
    };
  }
}
