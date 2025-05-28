import {
  Additive,
  AdditiveDifficulty,
  AdditiveDifficultyType,
  AdditiveType,
} from './domain/additive.model';
import { getRandomItemFrom } from '@mathly-nx/utils';
import { AdditionFrom0To20Crossing10Service } from './generators/addition/addition-from-0-to-20-crossing-10.service';
import { AdditionFrom20To100WithFrom0To10Service } from './generators/addition/addition-from-20-to-100-with-from-0-to-10.service';
import { AdditionFrom0To100Crossing10Service } from './generators/addition/addition-from-0-to-100-crossing-10.service';
import { AdditionFrom0To100Service } from './generators/addition/addition-from-0-to-100.service';
import { AdditionFrom10To20WithFrom0To10Service } from './generators/addition/addition-from-10-to-20-with-from-0-to-10.service';
import { SubtractionFrom0To10Service } from './generators/substraction/subtraction-from-0-to-10.service';
import { SubtractionFrom10To20WithFrom0To10Service } from './generators/substraction/subtraction-from-10-to-20-with-from-0-to-10.service';
import { SubtractionFrom20To100WithFrom0To10Service } from './generators/substraction/subtraction-from-20-to-100-with-from-0-to-10.service';
import { SubtractionFrom0To100Service } from './generators/substraction/subtraction-from-0-to-100.service';
import { SubtractionFrom0To20Crossing10Service } from './generators/substraction/subtraction-from-0-to-20-crossing-10.service';
import { SubtractionFrom0To100Crossing10Service } from './generators/substraction/subtraction-from-0-to-100-crossing-10.service';
import { AdditionFrom0To100SolutionIsBy10Service } from './generators/addition/addition-from-0-to-100-solution-is-by-10.service';
import { SubtractionFrom0To100SolutionIsBy10Service } from './generators/substraction/subtraction-from-0-to-100-solution-is-by-10.service';
import { ExerciseFactoryService } from '@mathly-nx/exercise-domain';
import { AdditionWith100Service } from './generators/addition/addition-with-100.service';
import { SubtractionWith100Service } from './generators/substraction/subtraction-with-100.service';
import { SubtractionWith1000Service } from './generators/substraction/subtraction-with-1000.service';
import { AdditionWith1000Service } from './generators/addition/addition-with-1000.service';
import { AdditionFrom0To1000Service } from './generators/addition/addition-from-0-to-1000.service';
import { SubtractionFrom0To1000Service } from './generators/substraction/subtraction-from-0-to-1000.service';
import { ExerciseConfig } from '@mathly-nx/exercise-domain';
import { AdditionFrom0To10Service } from './generators/addition/addition-from-0-to-10.service';

export class AdditiveService extends ExerciseFactoryService<
  AdditiveType,
  AdditiveDifficultyType
> {
  public setConfig(
    config: ExerciseConfig<AdditiveType, AdditiveDifficultyType>
  ): ExerciseConfig<AdditiveType, AdditiveDifficultyType> {
    let selectedTypeName: Additive;
    let selectedDifficulty = config.exerciseDifficulty;

    switch (config.exerciseType) {
      case Additive.MixedAll:
        selectedTypeName = getRandomItemFrom(
          Additive.Addition,
          Additive.AdditionAnddends,
          Additive.Subtraction,
          Additive.SubtractionInitialAnddend,
          Additive.SubtractionSecondAnddend
        );
        break;
      case Additive.MixedAnddendsOnly:
        selectedTypeName = getRandomItemFrom(
          Additive.AdditionAnddends,
          Additive.SubtractionInitialAnddend,
          Additive.SubtractionSecondAnddend
        );
        break;
      case Additive.SubtractionAnddend:
        selectedTypeName = getRandomItemFrom(
          Additive.SubtractionInitialAnddend,
          Additive.SubtractionSecondAnddend
        );
        break;
      case Additive.MixedAdditionSubtraction:
        selectedTypeName = getRandomItemFrom(
          Additive.Subtraction,
          Additive.Addition
        );
        break;
      default:
        selectedTypeName = config.exerciseType;
    }

    if (config.exerciseDifficulty === AdditiveDifficulty.Mixed) {
      selectedDifficulty = getRandomItemFrom(
        AdditiveDifficulty.From0To10,
        AdditiveDifficulty.From10To20WithFrom0To10,
        AdditiveDifficulty.From20To100WithFrom0To10,
        AdditiveDifficulty.From0To100,
        AdditiveDifficulty.From10To20WithFrom0To10,
        AdditiveDifficulty.From0To100Crossing10,
        AdditiveDifficulty.From0To100SolutionIsBy10
      );
    } else if (config.exerciseDifficulty === AdditiveDifficulty.MixedTill100) {
      selectedDifficulty = getRandomItemFrom(
        AdditiveDifficulty.From20To100WithFrom0To10,
        AdditiveDifficulty.From0To100,
        AdditiveDifficulty.From0To100Crossing10,
        AdditiveDifficulty.From0To100SolutionIsBy10
      );
    } else {
      selectedDifficulty = config.exerciseDifficulty;
    }

    return {
      exerciseType: selectedTypeName,
      exerciseDifficulty: selectedDifficulty,
    };
  }

  public override setGenerator(
    config: ExerciseConfig<AdditiveType, AdditiveDifficultyType>
  ): void {
    if (
      [Additive.Addition, Additive.AdditionAnddends].includes(
        config.exerciseType as Additive
      )
    ) {
      switch (config.exerciseDifficulty) {
        case AdditiveDifficulty.With1000:
          this.setActiveGeneratorService(new AdditionWith1000Service());
          break;
        case AdditiveDifficulty.With100:
          this.setActiveGeneratorService(new AdditionWith100Service());
          break;
        case AdditiveDifficulty.From0To10:
          this.setActiveGeneratorService(new AdditionFrom0To10Service());
          break;
        case AdditiveDifficulty.From10To20WithFrom0To10:
          this.setActiveGeneratorService(
            new AdditionFrom10To20WithFrom0To10Service()
          );
          break;
        case AdditiveDifficulty.From20To100WithFrom0To10:
          this.setActiveGeneratorService(
            new AdditionFrom20To100WithFrom0To10Service()
          );
          break;
        case AdditiveDifficulty.From0To1000:
          this.setActiveGeneratorService(new AdditionFrom0To1000Service());
          break;
        case AdditiveDifficulty.From0To100:
          this.setActiveGeneratorService(new AdditionFrom0To100Service());
          break;
        case AdditiveDifficulty.From0To100SolutionIsBy10:
          this.setActiveGeneratorService(
            new AdditionFrom0To100SolutionIsBy10Service()
          );
          break;
        case AdditiveDifficulty.From0To20Crossing10:
          this.setActiveGeneratorService(
            new AdditionFrom0To20Crossing10Service()
          );
          break;
        case AdditiveDifficulty.From0To100Crossing10:
          this.setActiveGeneratorService(
            new AdditionFrom0To100Crossing10Service()
          );
          break;
        default:
          break;
      }
    } else {
      switch (config.exerciseDifficulty) {
        case AdditiveDifficulty.With1000:
          this.setActiveGeneratorService(new SubtractionWith1000Service());
          break;
        case AdditiveDifficulty.With100:
          this.setActiveGeneratorService(new SubtractionWith100Service());
          break;
        case AdditiveDifficulty.From0To10:
          this.setActiveGeneratorService(new SubtractionFrom0To10Service());
          break;
        case AdditiveDifficulty.From10To20WithFrom0To10:
          this.setActiveGeneratorService(
            new SubtractionFrom10To20WithFrom0To10Service()
          );
          break;
        case AdditiveDifficulty.From20To100WithFrom0To10:
          this.setActiveGeneratorService(
            new SubtractionFrom20To100WithFrom0To10Service()
          );
          break;
        case AdditiveDifficulty.From0To100:
          this.setActiveGeneratorService(new SubtractionFrom0To100Service());
          break;
        case AdditiveDifficulty.From0To1000:
          this.setActiveGeneratorService(new SubtractionFrom0To1000Service());
          break;
        case AdditiveDifficulty.From0To100SolutionIsBy10:
          this.setActiveGeneratorService(
            new SubtractionFrom0To100SolutionIsBy10Service()
          );
          break;
        case AdditiveDifficulty.From0To20Crossing10:
          this.setActiveGeneratorService(
            new SubtractionFrom0To20Crossing10Service()
          );
          break;
        case AdditiveDifficulty.From0To100Crossing10:
          this.setActiveGeneratorService(
            new SubtractionFrom0To100Crossing10Service()
          );
          break;
        default:
          break;
      }
    }
  }
}
