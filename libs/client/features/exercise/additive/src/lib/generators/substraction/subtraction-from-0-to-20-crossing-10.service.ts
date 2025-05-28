import { SubtractionExerciseService } from './subtraction-generator.service';

import { AdditionExerciseNumbers } from '../../domain/additive.model';
import { getUniqueRandomInteger } from '@mathly-nx/utils';

export class SubtractionFrom0To20Crossing10Service extends SubtractionExerciseService {
  protected override readonly maxSolution = 20;

  protected createExercise(): AdditionExerciseNumbers {
    const a = getUniqueRandomInteger(10, 18, [this.lastTrackedRandom]);

    this.lastTrackedRandom = a;

    const b = getUniqueRandomInteger((a % 10) + 1, 9);

    return {
      a,
      b,
      solution: a - b,
    };
  }

  // override async getHelp() {
  //   return super.getHelp();
  // }
}
