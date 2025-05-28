export type EnumLike = { [key: string]: string | number };

export type EnumValue<T extends EnumLike> = T[keyof T];

export type ExerciseConfig<
  TType extends EnumLike,
  TDifficulty extends EnumLike
> = {
  exerciseType: EnumValue<TType>;
  exerciseDifficulty: EnumValue<TDifficulty>;
};
