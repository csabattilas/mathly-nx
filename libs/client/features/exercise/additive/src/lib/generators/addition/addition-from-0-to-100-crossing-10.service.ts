import { AdditionExerciseService } from './addition-generator.service';

import { AdditionExerciseNumbers } from '../../domain/additive.model';
import { getUniqueRandomInteger } from '@mathly-nx/utils';

export class AdditionFrom0To100Crossing10Service extends AdditionExerciseService {
  protected override readonly maxSolution = 100;

  protected createExercise(): AdditionExerciseNumbers {
    const aaa = getUniqueRandomInteger(2, 9);
    const bbb = getUniqueRandomInteger(11 - aaa, 9);

    const aa = getUniqueRandomInteger(0, 9);
    const bb = getUniqueRandomInteger(0, 8 - aa);

    const b = bb * 10 + bbb;
    const a = aa * 10 + aaa;

    return {
      a,
      b,
      solution: a + b,
    };
  }
}
