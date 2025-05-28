import { AdditiveDifficulty } from '@mathly/domain';

export const PLUS_MINUS_DIFFICULTY_TIMER_STARTS_FROM: Record<
  AdditiveDifficulty,
  number
> = {
  [AdditiveDifficulty.From0To10]: 2,
  [AdditiveDifficulty.From10To20WithFrom0To10]: 15,
  [AdditiveDifficulty.From20To100WithFrom0To10]: 15,
  [AdditiveDifficulty.From0To100]: 20,
  [AdditiveDifficulty.From0To1000]: 40,
  [AdditiveDifficulty.From0To100SolutionIsBy10]: 20,
  [AdditiveDifficulty.From0To20Crossing10]: 20,
  [AdditiveDifficulty.From0To100Crossing10]: 20,
  [AdditiveDifficulty.Mixed]: 0,
  [AdditiveDifficulty.MixedTill100]: 0,
  [AdditiveDifficulty.With100]: 15,
  [AdditiveDifficulty.With1000]: 25,
};

export const PLUS_ANDDEND_EXTRA_TIME_TO_SOLVE = 50;
export const MINUS_ANDDEND_EXTRA_TIME_TO_SOLVE = 50;
