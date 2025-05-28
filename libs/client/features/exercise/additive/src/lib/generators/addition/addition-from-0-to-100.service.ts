import { AdditionExerciseService } from './addition-generator.service';
import { getNotCrossingRandomsWithBellow10 } from '../../utils';
import { AdditionExerciseNumbers } from '../../domain/additive.model';
import { getUniqueRandomInteger } from '@mathly-nx/utils';

export class AdditionFrom0To100Service extends AdditionExerciseService {
  protected override readonly maxSolution = 100;

  protected createExercise(): AdditionExerciseNumbers {
    const { a, b } = getNotCrossingRandomsWithBellow10(0, 10, this.lastA);
    this.lastA = a;

    const aaa = getUniqueRandomInteger(0, 9);
    const bbb = getUniqueRandomInteger(0, 10 - aaa);

    const aa = aaa * 10 + a;
    const bb = bbb * 10 + b;

    return {
      a: aa,
      b: bb,
      solution: aa + bb,
    };
  }
}
