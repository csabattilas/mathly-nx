import { getUniqueRandomInteger } from '@mathly-nx/utils';
import { SubtractionExerciseService } from './subtraction-generator.service';
import { AdditionExerciseNumbers } from '../../domain/additive.model';

export class SubtractionFrom10To20WithFrom0To10Service extends SubtractionExerciseService {
  protected override readonly maxSolution = 20;

  protected override canHaveTenDistanceChoice = false;

  protected createExercise(): AdditionExerciseNumbers {
    const aa = getUniqueRandomInteger(1, 10, [this.lastTrackedRandom]);

    this.lastTrackedRandom = aa;

    const b = getUniqueRandomInteger(1, aa);
    const a = aa + 10;

    return {
      a,
      b,
      solution: a - b,
    };
  }
}
