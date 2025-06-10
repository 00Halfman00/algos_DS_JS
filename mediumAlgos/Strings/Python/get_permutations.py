def get_permutations(s):
    permutations = []
    n = len(s)

    # Base case: If the string has only one character, it's its own permutation.
    if n <= 1:
        return [s]

    # Recursive step:
    for i in range(n):
        # Pick a character to be at the beginning
        first_char = s[i]

        # Get the remaining characters (excluding the picked one)
        remaining_chars = s[:i] + s[i + 1 :]

        # Recursively find all permutations of the remaining characters
        sub_permutations = get_permutations(remaining_chars)

        # Add the picked character to the beginning of each sub-permutation
        for sub_permutation in sub_permutations:
            permutations.append(first_char + sub_permutation)

    return permutations


# Example usage:
input_string = "abc"
result = get_permutations(input_string)
print(result)
