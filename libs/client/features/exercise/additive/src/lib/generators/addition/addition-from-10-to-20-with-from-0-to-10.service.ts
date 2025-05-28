import { getNotCrossingRandomsWithBellow10 } from '../../utils';
import { AdditionExerciseService } from './addition-generator.service';

import { AdditionExerciseNumbers } from '../../domain/additive.model';

export class AdditionFrom10To20WithFrom0To10Service extends AdditionExerciseService {
  protected override readonly maxSolution = 20;
  protected override canHaveTenDistanceChoice = false;

  protected createExercise(): AdditionExerciseNumbers {
    const { a, b } = getNotCrossingRandomsWithBellow10(10, 20, this.lastA);

    this.lastA = a;

    return {
      a,
      b,
      solution: a + b,
    };
  }
}
