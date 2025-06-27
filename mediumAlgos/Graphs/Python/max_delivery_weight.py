"""
STRATEGY
    Maximize the total weight of packages delivered without any delivery time overlaps,
    using a manual binary search to find the previous non-overlapping package.

PSEUDOCODE
    1.  Return zero if the list of packages is empty
    2.  Sort the list of packages by end time
    3.  Declare an initiate a dp array of length of packages filled with zeros
    4.  Assign the weight of the first package to the first index of bp (base case)
    5.  Iterate over the sorted list of packages, starting at the second package
        5.1 get the start time of current package
        5.2 get the weight of the current package
        5.3 get the max weight of package/s exlcluding the current package at index i - 1
        5.4 binary search over all the packages before the current package
            5.4.1   get the index(if any) of the package that does not overlap
                    with current package until condition is false
        5.5 get the max weight of the sequence of previous package that do not overlap with curr
            by index in dp, if any
        5.6 calculate the inclusive max weight by adding curr weight and max sequence of previous
            packages
        5.7 Enter the max weight for the current package in dp by getting the greater value
            between the inclusive max weight vs the exclusive max weight
    6.  Return the last value in the dp array

time complexity: O(n log n)

"""


def max_delivery_weight_bs(packages: list[list[int]]):
    packages_len = len(packages)
    if not packages_len:
        return 0
    #   sort list of packages
    packages.sort(key=lambda x: x[1])
    dp = [0] * packages_len
    dp[0] = packages[0][2]

    #   loop over the list of packages starting with the second
    for i in range(1, packages_len):

        curr_start_time = packages[i][0]
        curr_weight = packages[i][2]
        max_weight_excluding_curr = dp[i - 1]

        left = 0
        right = i - 1
        prev_idx_bs = -1
        #   perform a binary search over the list of packages seen prior to current
        while left <= right:
            mid = left + (right - left) // 2
            if packages[mid][1] <= curr_start_time:
                prev_idx_bs = mid
                left = mid + 1
            else:
                right = mid - 1
        #   if binary search yielded positive results, assign value to variable
        max_weight_prev_nonoverlap_sequence = 0
        if prev_idx_bs != -1:
            max_weight_prev_nonoverlap_sequence = dp[prev_idx_bs]
        #   calculate max weight up to current package
        max_weight_including_curr = curr_weight + max_weight_prev_nonoverlap_sequence
        #   assign the highest seen max weight to dp at index i; that is, the index of the current package
        dp[i] = max(max_weight_excluding_curr, max_weight_including_curr)

    return dp[packages_len - 1]


# Example Input (from the problem statement)
packages_1 = [
    [1, 4, 5],  # start at 1, end at 4, weight 5
    [3, 5, 1],
    [0, 6, 8],
    [4, 7, 4],
    [3, 8, 6],
    [5, 9, 3],
]

output = max_delivery_weight_bs(packages_1)
print(f"Maximum total weight (manual binary search): {output}")
