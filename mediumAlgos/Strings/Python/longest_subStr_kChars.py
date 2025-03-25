from collections import Counter


def lengthOfLongestSubstringKDistinct(s: str, k: int) -> int:
    if len(s) * k == 0:
        return 0
    char_map_counter, max_len, left = Counter(), 1, 0

    for right in range(len(s)):
        char_map_counter[s[right]] += 1

        while len(char_map_counter) > k:
            char_map_counter[s[left]] -= 1
            if char_map_counter[s[left]] == 0:
                del char_map_counter[s[left]]
            left += 1

        max_len = max(max_len, right - left + 1)

    return max_len


s1, k1 = "eceba", 2
s2, k2 = "abacbc", 1

print(lengthOfLongestSubstringKDistinct(s1, k1))
print(lengthOfLongestSubstringKDistinct(s2, k2))
