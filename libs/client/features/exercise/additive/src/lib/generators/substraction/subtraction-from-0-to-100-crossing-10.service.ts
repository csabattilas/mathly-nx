import { getUniqueRandomInteger } from '@mathly-nx/utils';
import { SubtractionExerciseService } from './subtraction-generator.service';

import { AdditionExerciseNumbers } from '../../domain/additive.model';

export class SubtractionFrom0To100Crossing10Service extends SubtractionExerciseService {
  protected override readonly maxSolution = 100;

  protected createExercise(): AdditionExerciseNumbers {
    const aa = getUniqueRandomInteger(0, 9);
    const bb = getUniqueRandomInteger(0, aa);

    const aaa = getUniqueRandomInteger(10, 18);
    const bbb = getUniqueRandomInteger((aaa % 10) + 1, 9);

    const a = aaa + aa * 10;
    const b = bbb + bb * 10;

    return {
      a: a,
      b: b,
      solution: a - b,
    };
  }
}
