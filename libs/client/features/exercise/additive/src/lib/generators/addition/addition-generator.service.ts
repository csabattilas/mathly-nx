import {
  choiceSmallerDistance,
  choiceBiggerDistance,
  getAdditiveDescription,
} from '../../utils';

import { HelpAdditionContainerComponent } from '../../ui/help/addition/help-addition-container.component';
import {
  AdditionExerciseNumbers,
  AdditiveType,
  AdditiveDifficultyType,
} from '../../domain/additive.model';
import {
  PLUS_ANDDEND_EXTRA_TIME_TO_SOLVE,
  PLUS_MINUS_DIFFICULTY_TIMER_STARTS_FROM,
} from '../../domain/additive.structures';
import { IntegerSolutionTypeInRendererComponent } from '@mathly-nx/exercise-renderers';
import { Additive } from '../../domain/additive.model';
import {
  ExerciseConfig,
  ExerciseService,
  TypeInDirection,
} from '@mathly-nx/exercise-domain';
import { Exercise } from '@mathly-nx/exercise-domain';

export abstract class AdditionExerciseService extends ExerciseService<
  AdditiveType,
  AdditiveDifficultyType
> {
  protected a?: number;
  protected b?: number;
  protected solution?: number;
  protected lastA = -1;
  protected canHaveTenDistanceChoice = true;

  private exerciseSolution?: number;

  protected abstract maxSolution?: number;

  public getNewExercise({
    exerciseType,
    exerciseDifficulty,
  }: ExerciseConfig<AdditiveType, AdditiveDifficultyType>): Exercise {
    ({ a: this.a, b: this.b, solution: this.solution } = this.createExercise());

    let isNotKnowAnddend = false;
    const isAnddend = exerciseType === Additive.AdditionAnddends;

    if (isAnddend) {
      isNotKnowAnddend = Math.random() >= 0.5;
      this.exerciseSolution = isNotKnowAnddend ? this.a : this.b;
    } else {
      this.exerciseSolution = this.solution;
    }

    const descriptionItems = [
      {
        block: this.a ?? '',
        isNotKnown: isAnddend ? isNotKnowAnddend : false,
      },
      {
        block: '+',
        isOperand: true,
      },
      {
        block: this.b ?? '',
        isNotKnown: isAnddend ? !isNotKnowAnddend : false,
      },
      {
        block: '=',
        isEqualSign: true,
      },
      {
        block: this.solution ?? '',
        isNotKnown: !isAnddend,
      },
    ];

    const canHaveChoices =
      this.exerciseSolution > 10 &&
      !(
        (this.exerciseSolution === this.maxSolution &&
          (this.b === 1 || this.b === 2)) ||
        (this.maxSolution &&
          this.exerciseSolution === this.maxSolution - 1 &&
          this.b === 1)
      );

    const timeToSolve =
      PLUS_MINUS_DIFFICULTY_TIMER_STARTS_FROM[exerciseDifficulty] +
      String(this.solution).length * 10;

    const isVerticalRendering =
      (!isAnddend &&
        this.a.toString().length > 1 &&
        this.b.toString().length > 1) ||
      this.a.toString().length > 2;

    return {
      solution:
        this.exerciseSolution !== undefined
          ? this.exerciseSolution.toString()
          : '-',
      descriptor: descriptionItems,
      timeToSolve: isAnddend
        ? timeToSolve + PLUS_ANDDEND_EXTRA_TIME_TO_SOLVE
        : timeToSolve,
      description: getAdditiveDescription(descriptionItems),
      helpComponent: HelpAdditionContainerComponent,
      rendererComponent: IntegerSolutionTypeInRendererComponent,
      rendererOptions: {
        verticalRendering: isVerticalRendering,
        typeInDirection: isVerticalRendering
          ? TypeInDirection.FromRight
          : undefined,
      },
      scoreConfig: {
        timeBonus: [],
        mistakePenalty: {
          basePenalty: 0,
          tooManyMistakesPenalty: 0,
          tooManyMistakesThreshold: 0,
        },
        allowTimeBonusAfterNumberOfMistakes: 0,
        allowTimeBonusAfterNumberOfChoiceMistakes: 0,
        helpPenalty: 0,
        hintPenalty: 0,
        minScore: 0,
      },
      sessionScoreConfig: {
        bla: 0,
      },
      choices: this.getChoices(),
    };
  }

  private getChoices(): string[] | undefined {
    const choices = this.generateChoices(
      this.exerciseSolution!,
      this.maxSolution!,
      this.b!,
      this.canHaveTenDistanceChoice
    );
    return choices?.map((x) => x.toString()); // ? shuffleArray(choices.map((x) => x.toString())) : undefined;
  }

  private generateChoices(
    solution: number,
    maxSolution: number,
    b: number,
    canHaveTenDistanceChoice = true
  ): number[] | undefined {
    if (
      (solution === maxSolution && (b === 1 || b === 2)) ||
      (solution === maxSolution - 1 && b === 1)
    ) {
      return undefined;
    } else if (solution === maxSolution) {
      return [
        solution,
        choiceSmallerDistance(solution, 1, canHaveTenDistanceChoice),
        choiceSmallerDistance(solution, 2, canHaveTenDistanceChoice),
      ];
    } else if (b === 1) {
      return [
        solution,
        choiceBiggerDistance(
          solution,
          1,
          maxSolution,
          canHaveTenDistanceChoice
        ),
        choiceBiggerDistance(
          solution,
          2,
          maxSolution,
          canHaveTenDistanceChoice
        ),
      ];
    } else {
      return [
        solution,
        choiceSmallerDistance(solution, 1, canHaveTenDistanceChoice),
        choiceBiggerDistance(
          solution,
          1,
          maxSolution,
          canHaveTenDistanceChoice
        ),
      ];
    }
  }

  protected abstract createExercise(): AdditionExerciseNumbers;
}
