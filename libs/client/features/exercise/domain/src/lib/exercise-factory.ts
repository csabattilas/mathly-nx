import { EnumLike, ExerciseConfig } from './exercise-config';
import { ExerciseService } from './exercise-service';

export abstract class ExerciseFactoryService<
  TType extends EnumLike,
  TDifficulty extends EnumLike
> {
  private _activeGeneratorService!: ExerciseService<TType, TDifficulty>;

  public get activeGeneratorService(): ExerciseService<TType, TDifficulty> {
    return this._activeGeneratorService;
  }

  protected setActiveGeneratorService(
    activeGeneratorService: ExerciseService<TType, TDifficulty>
  ): void {
    this._activeGeneratorService = activeGeneratorService;
  }

  public abstract setConfig(
    config: ExerciseConfig<TType, TDifficulty>
  ): ExerciseConfig<TType, TDifficulty>;

  public abstract setGenerator(
    config: ExerciseConfig<TType, TDifficulty>
  ): void;
}
