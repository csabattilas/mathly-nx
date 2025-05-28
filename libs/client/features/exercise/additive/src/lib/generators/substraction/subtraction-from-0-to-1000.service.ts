import { getUniqueRandomInteger } from '@mathly-nx/utils';
import { SubtractionExerciseService } from './subtraction-generator.service';
import { AdditionExerciseNumbers } from '../../domain/additive.model';

export class SubtractionFrom0To1000Service extends SubtractionExerciseService {
  protected override readonly maxSolution = 100;

  protected createExercise(): AdditionExerciseNumbers {
    const aa = getUniqueRandomInteger(1, 100);
    const bb = getUniqueRandomInteger(1, aa);

    const aaa = aa * 100;
    const bbb = bb * 100;

    const a = getUniqueRandomInteger(1, 100);
    const b = getUniqueRandomInteger(1, a) + bbb;

    return {
      a: a + aaa,
      b,
      solution: a + aaa - b,
    };
  }
}
