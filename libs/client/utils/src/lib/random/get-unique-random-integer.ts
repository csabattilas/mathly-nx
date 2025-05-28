function getCryptoRandomInteger(): number {
  if (window.crypto?.getRandomValues) {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return array[0] / (0xffffffff + 1);
  } else {
    return Math.random();
  }
}

export function getUniqueRandomInteger(
  min: number,
  max: number,
  exclusions: number[] = []
): number {
  if (min >= max) {
    throw new Error("'min' must be less than 'max'");
  }

  const range = max - min;
  const exclusionSet = new Set(exclusions);

  if (exclusions.length >= range) {
    throw new Error(
      'Not enough numbers available in the range to avoid exclusions'
    );
  }

  const maxExclusionTries = 50;
  let attempts = 0;

  while (attempts < maxExclusionTries) {
    // Entropy sources
    const randomFraction = getCryptoRandomInteger(); // Strong base randomness
    const timestamp = Date.now(); // Adds a time-based element
    const randomOffset = Math.random(); // Weak randomness for diversity

    // Combine entropy sources
    const mixedEntropy = (randomFraction + randomOffset + timestamp) % 1;

    // Generate candidate number
    const candidate = Math.floor(mixedEntropy * range) + min;

    console.log('exclusion:', exclusionSet);
    console.log('candidate:', candidate);

    if (!exclusionSet.has(candidate)) {
      return candidate;
    }

    attempts++;
  }

  throw new Error(
    'Failed to generate a unique random number within the allowed attempts'
  );
}
