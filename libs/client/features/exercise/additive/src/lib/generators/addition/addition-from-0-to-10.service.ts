import { getNotCrossingRandomsWithBellow10 } from '../../utils';
import { AdditionExerciseService } from './addition-generator.service';

import { AdditionExerciseNumbers } from '../../domain/additive.model';

export class AdditionFrom0To10Service extends AdditionExerciseService {
  protected override readonly maxSolution = 10;

  protected override lastA = -1;

  protected override createExercise(): AdditionExerciseNumbers {
    const { a, b } = getNotCrossingRandomsWithBellow10(0, 10, this.lastA);

    console.log(a, b);

    this.lastA = a;

    return {
      a,
      b,
      solution: a + b,
    };
  }
}
