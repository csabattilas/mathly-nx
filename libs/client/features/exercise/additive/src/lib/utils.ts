import { getUniqueRandomInteger, getRandomItemFrom } from '@mathly-nx/utils';
import { ExerciseDescriptorItem } from '@mathly-nx/exercise-domain';

export function choiceSmallerDistance(
  base: number,
  smallDistance: number,
  canHaveTenDistanceChoice: boolean
): number {
  return (
    base -
    (canHaveTenDistanceChoice && base > 10
      ? getRandomItemFrom(smallDistance, 10)
      : smallDistance)
  );
}

export function choiceBiggerDistance(
  base: number,
  smallDistance: number,
  maxSolution: number,
  canHaveTenDistanceChoice: boolean
): number {
  return (
    base +
    (canHaveTenDistanceChoice && base < maxSolution - 10
      ? getRandomItemFrom(smallDistance, 10)
      : smallDistance)
  );
}

export function getNotCrossingRandomsWithBellow10(
  lowerLimit: number,
  upperLimit: number,
  lastA: number
): {
  a: number;
  b: number;
} {
  console.log('limits', lowerLimit, upperLimit, lastA);

  const a = getUniqueRandomInteger(lowerLimit, upperLimit, [lastA]);

  console.log(a);

  const bEndRemnant = 10 - (a % 10);

  console.log('bEndRemnant', bEndRemnant);

  const b = getUniqueRandomInteger(0, bEndRemnant);

  return {
    a,
    b,
  };
}

export function getAdditiveDescription(
  exerciseDescription: ExerciseDescriptorItem[]
): string {
  let description = '';

  for (const item of exerciseDescription) {
    if (item.block === '=') {
      break;
    }
    description += item.block;
  }

  return description;
}
