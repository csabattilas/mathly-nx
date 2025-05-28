export interface AdditionExerciseNumbers {
  a: number;
  b: number;
  solution: number;
}

export type AdditiveType = typeof Additive;

export type AdditiveDifficultyType = typeof AdditiveDifficulty;

export enum Additive {
  Addition = 'addition',
  AdditionAnddends = 'addition-anddends',
  Subtraction = 'subtraction',
  SubtractionInitialAnddend = 'subtraction-initial-anddend',
  SubtractionSecondAnddend = 'subtraction-second-anddend',
  SubtractionAnddend = 'subtraction-anddend',
  MixedAdditionSubtraction = 'mixed-addition-subtraction',
  MixedAnddendsOnly = 'mixed-anddend-only',
  MixedAll = 'mixed-all',
}

export enum AdditiveDifficulty {
  From0To10 = 'from-0-to-10',
  From10To20WithFrom0To10 = 'from-10-to-20-with-from-0-to-10',
  From20To100WithFrom0To10 = 'from-20-to-100-with-from-0-to-10',
  From0To100 = 'from-0-to-100',
  From0To1000 = 'from-0-to-1000',
  From0To100SolutionIsBy10 = 'from-0-to-100-solution-is-by-10',
  From0To20Crossing10 = 'from-0-to-20-crossing-10',
  From0To100Crossing10 = 'from-0-to-100-crossing-10',
  With100 = 'with-100',
  With1000 = 'with-1000',
  Mixed = 'mixed',
  MixedTill100 = 'mixed-till-100',
}
