import { Exercise, TypeInDirection } from '@mathly-nx/exercise-domain';
import {
  choiceSmallerDistance,
  choiceBiggerDistance,
  getAdditiveDescription,
} from '../../utils';
import { shuffleArray } from '@mathly-nx/utils';
import { HelpSubtractionContainerComponent } from '../../ui/help/subtraction/help-subtraction-container.component';
import { AdditionExerciseNumbers, Additive } from '../../domain/additive.model';
import {
  PLUS_MINUS_DIFFICULTY_TIMER_STARTS_FROM,
  MINUS_ANDDEND_EXTRA_TIME_TO_SOLVE,
} from '../../domain/additive.structures';
import { IntegerSolutionTypeInRendererComponent } from '@mathly-nx/exercise-renderers';
import {
  AdditiveType,
  AdditiveDifficultyType,
} from '../../domain/additive.model';
import { ExerciseConfig } from '@mathly-nx/exercise-domain';
import { ExerciseService } from '@mathly-nx/exercise-domain';

export abstract class SubtractionExerciseService extends ExerciseService<
  AdditiveType,
  AdditiveDifficultyType
> {
  protected a?: number;
  protected b?: number;
  protected solution?: number;
  protected lastTrackedRandom = -1;
  protected canHaveTenDistanceChoice = true;

  private exerciseSolution?: number;

  protected abstract maxSolution: number;
  public getNewExercise({
    exerciseType,
    exerciseDifficulty,
  }: ExerciseConfig<AdditiveType, AdditiveDifficultyType>): Exercise {
    ({ a: this.a, b: this.b, solution: this.solution } = this.createExercise());

    const isAnddend =
      exerciseType === Additive.SubtractionInitialAnddend ||
      exerciseType === Additive.SubtractionSecondAnddend;

    if (isAnddend) {
      this.exerciseSolution =
        exerciseType === Additive.SubtractionInitialAnddend ? this.a : this.b;
    } else {
      this.exerciseSolution = this.solution;
    }

    const descriptionItems = [
      {
        block: this.a ?? '',
        isNotKnown:
          isAnddend && exerciseType === Additive.SubtractionInitialAnddend,
      },
      {
        block: '-',
        isOperand: true,
      },
      {
        block: this.b ?? '',
        isNotKnown:
          isAnddend && exerciseType === Additive.SubtractionSecondAnddend,
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
        ? timeToSolve + MINUS_ANDDEND_EXTRA_TIME_TO_SOLVE
        : timeToSolve,
      description: getAdditiveDescription(descriptionItems),
      helpComponent: HelpSubtractionContainerComponent,
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
    };
  }

  private getChoices(): string[] | undefined {
    const choices = this.generateChoices(
      this.exerciseSolution!,
      this.b!,
      this.maxSolution,
      this.canHaveTenDistanceChoice
    );
    return choices ? shuffleArray(choices.map((x) => x.toString())) : undefined;
  }

  private generateChoices(
    solution: number,
    b: number,
    maxSolution: number,
    canHaveTenDistanceChoice: boolean
  ): number[] | undefined {
    return [
      solution,
      choiceSmallerDistance(solution, 1, canHaveTenDistanceChoice),
      choiceBiggerDistance(solution, 1, maxSolution, canHaveTenDistanceChoice),
    ];
  }

  protected abstract createExercise(): AdditionExerciseNumbers;
}
