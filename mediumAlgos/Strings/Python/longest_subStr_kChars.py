from collections import Counter


def lengthOfLongestSubstringKDistinct(s: str, k: int) -> int:
    n = len(s)
    max_size = 0
    counter = Counter()

    left_idx = 0
    for right_idx in range(n):
        counter[s[right_idx]] += 1

        while len(counter) > k:
            counter[s[left_idx]] -= 1
            if counter[s[left_idx]] == 0:
                del counter[s[left_idx]]
            left_idx += 1

        max_size = max(max_size, right_idx - left_idx + 1)

    return max_size


s1, k1 = "eceba", 2
s2, k2 = "aa", 1

print(lengthOfLongestSubstringKDistinct(s1, k1))
