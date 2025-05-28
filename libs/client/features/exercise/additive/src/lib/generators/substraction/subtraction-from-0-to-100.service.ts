import { SubtractionExerciseService } from './subtraction-generator.service';
import { AdditionExerciseNumbers } from '../../domain/additive.model';
import { getUniqueRandomInteger } from '@mathly-nx/utils';

export class SubtractionFrom0To100Service extends SubtractionExerciseService {
  protected override readonly maxSolution = 100;

  protected createExercise(): AdditionExerciseNumbers {
    const aa = getUniqueRandomInteger(1, 10);
    const bb = getUniqueRandomInteger(1, aa);

    const aaa = aa * 10;
    const bbb = bb * 10;

    const a = getUniqueRandomInteger(1, 10);
    const b = getUniqueRandomInteger(1, a) + bbb;

    return {
      a: a + aaa,
      b,
      solution: a + aaa - b,
    };
  }
}
