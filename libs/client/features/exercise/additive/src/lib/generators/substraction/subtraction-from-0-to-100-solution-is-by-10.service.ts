import { getUniqueRandomInteger } from '@mathly-nx/utils';
import { AdditionExerciseNumbers } from '../../domain/additive.model';
import { SubtractionExerciseService } from './subtraction-generator.service';

export class SubtractionFrom0To100SolutionIsBy10Service extends SubtractionExerciseService {
  protected override readonly maxSolution = 90;

  protected createExercise(): AdditionExerciseNumbers {
    const solution = getUniqueRandomInteger(1, 10) * 10;

    const b = getUniqueRandomInteger(0, solution);

    const a = solution + b;

    return {
      a,
      b,
      solution,
    };
  }
}
