import { AdditionExerciseService } from './addition-generator.service';
import { getUniqueRandomInteger } from '@mathly-nx/utils';
import { AdditionExerciseNumbers } from '../../domain/additive.model';

export class AdditionFrom0To100SolutionIsBy10Service extends AdditionExerciseService {
  protected override readonly maxSolution = 100;

  protected createExercise(): AdditionExerciseNumbers {
    const solution = getUniqueRandomInteger(1, 10) * 10;

    const a = getUniqueRandomInteger(0, solution);

    const b = solution - a;

    return {
      a,
      b,
      solution,
    };
  }
}
