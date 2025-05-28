import { Exercise } from './exercise.model';
import { Injectable } from '@angular/core';
import { EnumLike, ExerciseConfig } from './exercise-config';

@Injectable()
export abstract class ExerciseService<
  TTypeEnum extends EnumLike,
  TDifficultyEnum extends EnumLike
> {
  constructor(
    protected readonly options?: Record<string, boolean | number | string>
  ) {}

  // public getHelp(): Type<HelpComponent> {
  //   return HelpComponent;
  // }

  public abstract getNewExercise(
    config: ExerciseConfig<TTypeEnum, TDifficultyEnum>
  ): Exercise;
}
