function getPermutations(s) {
  const permutations = [];
  const n = s.length;

  // Base case: If the string has only one character, it's its own permutation.
  if (n <= 1) {
    return [s];
  }

  // Recursive step:
  for (let i = 0; i < n; i++) {
    // Pick a character to be at the beginning
    const firstChar = s[i];

    // Get the remaining characters (excluding the picked one)
    const remainingChars = s.slice(0, i) + s.slice(i + 1);

    // Recursively find all permutations of the remaining characters
    const subPermutations = getPermutations(remainingChars);

    // Add the picked character to the beginning of each sub-permutation
    for (const subPermutation of subPermutations) {
      permutations.push(firstChar + subPermutation);
    }
  }

  return permutations;
}

// Example usage:
const inputString = 'abc';
const result = getPermutations(inputString);
console.log(result); // Output: [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
