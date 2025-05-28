import { getUniqueRandomInteger } from '@mathly-nx/utils';
import { SubtractionExerciseService } from './subtraction-generator.service';

import { AdditionExerciseNumbers } from '../../domain/additive.model';

export class SubtractionFrom0To10Service extends SubtractionExerciseService {
  protected override readonly maxSolution = 10;
  protected override canHaveTenDistanceChoice = false;

  protected createExercise(): AdditionExerciseNumbers {
    const a = getUniqueRandomInteger(1, 10, [this.lastTrackedRandom]);

    this.lastTrackedRandom = a;

    const b = getUniqueRandomInteger(1, a);

    return {
      a,
      b,
      solution: a - b,
    };
  }
}
