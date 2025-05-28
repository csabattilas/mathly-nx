import { AdditionExerciseService } from './addition-generator.service';
import { getNotCrossingRandomsWithBellow10 } from '../../utils';
import { getUniqueRandomInteger } from '@mathly-nx/utils';
import { AdditionExerciseNumbers } from '../../domain/additive.model';

export class AdditionFrom0To1000Service extends AdditionExerciseService {
  protected override readonly maxSolution = 1000;

  protected createExercise(): AdditionExerciseNumbers {
    const { a, b } = getNotCrossingRandomsWithBellow10(0, 100, this.lastA);
    this.lastA = a;

    const aaa = getUniqueRandomInteger(0, 9);
    const bbb = getUniqueRandomInteger(0, 100 - aaa);

    const aa = aaa * 10 + a;
    const bb = bbb * 10 + b;

    return {
      a: Math.max(aa, bb),
      b: Math.min(aa, bb),
      solution: aa + bb,
    };
  }
}
