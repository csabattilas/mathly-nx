// import {
//   ExerciseCategory,
//   ExerciseType,
//   ExerciseDifficulty,
// } from '@mathly/domain';

// import { ExerciseGeneratorFactoryService } from '@mathly/generators/base';

// import { ExerciseGeneratorFactoryServiceModule } from './exercise-generator-factory.model';

// const cache: Record<string, ExerciseGeneratorFactoryService> = {};

// export async function getGeneratorFactory(
//   exerciseCategory: ExerciseCategory
// ): Promise<ExerciseGeneratorFactoryService> {
//   const serviceName: string = getGeneratorClassName(exerciseCategory);
//   let module: ExerciseGeneratorFactoryServiceModule = {};

//   if (!cache[serviceName]) {
//     switch (exerciseCategory) {
//       case ExerciseCategory.Additive: {
//         module = await import('@mathly-nx/exercise-additive');
//         break;
//       }
//       case ExerciseCategory.Multiplicative: {
//         module = await import('@mathly-nx/exercise-multiplicative');
//         break;
//       }
//       case ExerciseCategory.WordProblem: {
//         module = await import('@mathly-nx/exercise-word-problem');
//         break;
//       }
//     }

//     cache[serviceName] = new module[serviceName]();
//   }

//   return cache[serviceName];
// }

// export function capitalizeSpecial(str: string): string {
//   return str.replace(/(?:^|[-])(\w)/g, (match, p1) => p1.toUpperCase());
// }

// export function getGeneratorClassName(
//   exerciseTypeOrCategory: ExerciseCategory | ExerciseType,
//   exerciseDifficulty?: ExerciseDifficulty
// ): string {
//   return `${capitalizeSpecial(
//     `${exerciseTypeOrCategory}${
//       exerciseDifficulty ? `-${exerciseDifficulty}` : ''
//     }`.toLowerCase()
//   )}Service`;
// }
