import { Type } from '@angular/core';
import { HelpContainerComponent } from './ui/help-container.component';
import { ExerciseRendererComponent } from './ui/exercise-renderer.component';
// import { HelpContainerComponent } from '../ui/help/container/help-container.component';
// import { ExerciseRendererComponent } from '../ui/renderer/exercise-renderer.component';

export interface ExerciseRendererOptions {
  showOnlyNotKnown?: boolean;
  allowHelp?: boolean;
  allowSkip?: boolean;
  typeInDirection?: TypeInDirection;
  verticalRendering?: boolean;
}

export enum TypeInDirection {
  FromLeft = 'fromLeft',
  FromRight = 'fromRight',
}

export interface TimeBonusConfig {
  percentage: number;
  bonusScore: number;
  choicesBonusScore?: number;
}

export interface MistakePenaltyConfig {
  basePenalty: number;
  tooManyMistakesPenalty: number;
  tooManyMistakesThreshold: number;
}

export interface SessionScoreConfig {
  bla?: number;
}

export interface ExerciseScoreConfig {
  timeBonus: TimeBonusConfig[];
  mistakePenalty: MistakePenaltyConfig;
  allowTimeBonusAfterNumberOfMistakes: number;
  allowTimeBonusAfterNumberOfChoiceMistakes: number;
  helpPenalty: number;
  hintPenalty: number;
  minScore: number;
}

export interface RoutineScoreConfig {
  timeBonus: TimeBonusConfig[];
}

export interface ExerciseDescriptorItem {
  block: number | string;
  isNotKnown?: boolean;
  isOperand?: boolean;
  isEqualSign?: boolean;
}

export interface Exercise {
  solution: string;
  rendererOptions?: ExerciseRendererOptions;
  choices?: string[];
  timeToSolve: number;
  descriptor: ExerciseDescriptorItem[];
  description: string;
  scoreConfig: ExerciseScoreConfig;
  sessionScoreConfig: SessionScoreConfig;
  helpComponent?: Type<HelpContainerComponent>;
  rendererComponent?: Type<ExerciseRendererComponent>;
}
