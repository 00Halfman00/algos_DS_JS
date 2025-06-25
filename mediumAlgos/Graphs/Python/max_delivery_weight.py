# # Gemini Version
# import bisect


# def max_delivery_weight(packages):
#     """
#     Maximizes the total weight of packages delivered without any delivery time overlaps.

#     Args:
#         packages: A list of lists, where each inner list is [start_time, end_time, weight].

#     Returns:
#         The maximum total weight of non-overlapping packages.
#     """
#     n = len(packages)
#     if n == 0:
#         return 0

#     # Step 1: Sort packages by their end times in ascending order.
#     # This is crucial for the dynamic programming approach.
#     packages.sort(key=lambda x: x[1])

#     # dp_max_weight[i] will store the maximum weight achievable considering packages[0...i]
#     dp_max_weight = [0] * n

#     # To efficiently find the latest non-overlapping job, we'll store
#     # the end times of all packages considered so far in a separate list
#     # for binary search.
#     # We also store the dp_max_weight values corresponding to these end times.
#     end_times = [package[1] for package in packages]

#     # Base case: For the first package, the max weight is just its own weight.
#     dp_max_weight[0] = packages[0][2]  # packages[0][2] is the weight of the first package

#     # Step 2 & 3: Iterate through the sorted packages and make decisions
#     for i in range(1, n):
#         current_start_time = packages[i][0]
#         current_weight = packages[i][2]

#         # Option 1: Do not include the current package (packages[i]).
#         # The max weight is simply what was achievable up to the previous package.
#         max_weight_excluding_current = dp_max_weight[i - 1]

#         # Option 2: Include the current package (packages[i]).
#         # To do this, we need to find the latest package 'j' that finishes
#         # BEFORE or AT the start time of the current package (packages[i]).
#         # We use binary search (bisect_right) on the sorted end_times list
#         # to find the insertion point for 'current_start_time'.
#         # This effectively finds the first package whose end time is > current_start_time.
#         # We need the package *before* that, so we subtract 1.

#         # bisect_right returns an insertion point 'k' such that all e in end_times[0:k] have e <= x
#         # and all e in end_times[k:] have e > x.
#         # We are looking for an index 'j' such that end_times[j] <= current_start_time.
#         # The 'prev_index' will be the index of the latest package that finishes by current_start_time.
#         # Note: We need to search up to i (exclusive), so end_times[0:i]
#         prev_non_overlapping_index = (
#             bisect.bisect_right(end_times, current_start_time, hi=i) - 1
#         )

#         max_weight_including_current = current_weight
#         if prev_non_overlapping_index >= 0:
#             # Add the maximum weight achieved up to that non-overlapping package
#             max_weight_including_current += dp_max_weight[prev_non_overlapping_index]

#         # Take the maximum of the two options
#         dp_max_weight[i] = max(max_weight_excluding_current, max_weight_including_current)

#     # The last element in dp_max_weight array holds the maximum total weight
#     # considering all packages.
#     return dp_max_weight[n - 1]


# # Example Input (from the problem statement)
# packages_example = [
#     [1, 4, 5],  # start at 1, end at 4, weight 5
#     [3, 5, 1],
#     [0, 6, 8],
#     [4, 7, 4],
#     [3, 8, 6],
#     [5, 9, 3],
# ]

# # This is what the packages look like AFTER sorting by end time, which the example already was.
# # If the input was unsorted, this is what packages.sort(key=lambda x: x[1]) would produce.
# # sorted_packages = [
# #   [1, 4, 5],
# #   [3, 5, 1],
# #   [0, 6, 8],
# #   [4, 7, 4],
# #   [3, 8, 6],
# #   [5, 9, 3]
# # ]

# # Test the function
# output = max_delivery_weight(packages_example)
# print(f"Maximum total weight: {output}")


# # chatGPT version
# def max_delivery_weight(packages):
#     # Sort packages by their end time
#     packages.sort(key=lambda x: x[1])

#     # Extract start, end, weight
#     starts = [p[0] for p in packages]
#     ends = [p[1] for p in packages]
#     weights = [p[2] for p in packages]

#     # dp_max_weight table to store the maximum weight up to each package
#     n = len(packages)
#     dp_max_weight = [0] * n

#     # Helper function to find the last non-overlapping package
#     def find_last_non_overlap(current_index):
#         # We are looking for the last package that ends before the current package starts
#         for j in range(current_index - 1, -1, -1):
#             if ends[j] <= starts[current_index]:
#                 return j
#         return -1  # No non-overlapping package found

#     # dp_max_weight process
#     for i in range(n):
#         # Include current package
#         last_non_overlap = find_last_non_overlap(i)
#         include = weights[i] + (dp_max_weight[last_non_overlap] if last_non_overlap != -1 else 0)

#         # Exclude current package
#         exclude = dp_max_weight[i - 1] if i > 0 else 0

#         # Take the maximum of including or excluding the current package
#         dp_max_weight[i] = max(include, exclude)

#     return dp_max_weight[-1]


# # Example usage
# packages = [[1, 4, 5], [3, 5, 1], [0, 6, 8], [4, 7, 4], [3, 8, 6], [5, 9, 3]]

# print(max_delivery_weight(packages))  # Output: 9


# def max_delivery_weight_no_bisect(packages):
#     """
#     Maximizes the total weight of packages delivered without any delivery time overlaps,
#     WITHOUT using bisect (i.e., using a linear scan to find the previous non-overlapping package).

#     Args:
#         packages: A list of lists, where each inner list is [start_time, end_time, weight].

#     Returns:
#         The maximum total weight of non-overlapping packages.
#     """
#     n = len(packages)
#     if n == 0:
#         return 0

#     # Step 1: Sort packages by their end times in ascending order.
#     packages.sort(key=lambda x: x[1])

#     # dp_max_weight[i] will store the maximum weight achievable considering packages[0...i]
#     dp_max_weight = [0] * n

#     # Base case: For the first package, the max weight is just its own weight.
#     dp_max_weight[0] = packages[0][2]

#     # Step 2 & 3: Iterate through the sorted packages and make decisions
#     for i in range(1, n):
#         current_start_time = packages[i][0]
#         current_weight = packages[i][2]

#         # Option 1: Do not include the current package (packages[i]).
#         max_weight_excluding_current = dp_max_weight[i - 1]

#         # Option 2: Include the current package (packages[i]).
#         # To do this, we need to find the maximum weight from a sequence
#         # of packages that ends before current_start_time.

#         # This variable will store the max dp_max_weight value of a non-overlapping prior sequence.
#         # Initialize with 0, in case no prior non-overlapping package is found.
#         max_prev_dp_max_weight_value = 0

#         # Linear scan backwards from i-1 down to 0
#         for j in range(i - 1, -1, -1):
#             if packages[j][1] <= current_start_time:
#                 # Found a package 'j' that finishes before or at current_start_time.
#                 # The optimal sum ending at 'j' is dp_max_weight[j].
#                 # We need to find the BEST such dp_max_weight[j] among all non-overlapping j's.
#                 # However, the structure of dp_max_weight usually relies on finding the *single latest*
#                 # non-overlapping package, because dp_max_weight[j] already carries the optimal sum.
#                 # So, simply finding the first one encountered (which is the latest due to backward scan)
#                 # is sufficient.
#                 max_prev_dp_max_weight_value = dp_max_weight[j]
#                 break  # Exit the loop as we found the latest one

#         # If we didn't find any non-overlapping previous package, max_prev_dp_max_weight_value remains 0.
#         max_weight_including_current = current_weight + max_prev_dp_max_weight_value

#         # Take the maximum of the two options
#         dp_max_weight[i] = max(
#             max_weight_excluding_current, max_weight_including_current
#         )

#     return dp_max_weight[n - 1]


# # Example Input (from the problem statement)
# packages_example = [
#     [1, 4, 5],  # start at 1, end at 4, weight 5
#     [3, 5, 1],
#     [0, 6, 8],
#     [4, 7, 4],
#     [3, 8, 6],
#     [5, 9, 3],
# ]

# output_no_bisect = max_delivery_weight_no_bisect(packages_example)
# print(f"Maximum total weight (no bisect, corrected): {output_no_bisect}")


def max_delivery_weight(packages: list[list[int]]) -> int:
    len_packages = len(packages)
    if not len_packages:
        return 0

    packages.sort(key=lambda x: x[1])
    dp_max_weight = [0] * len_packages
    dp_max_weight[0] = packages[0][2]

    for i in range(1, len_packages):
        curr_package_start_time = packages[i][0]
        curr_package_weight = packages[i][2]
        max_weight_excluding_curr_package = dp_max_weight[i - 1]
        max_weight_prev_packages = 0

        for j in range(i - 1, -1, -1):
            prev_package_end_time = packages[j][1]
            if prev_package_end_time <= curr_package_start_time:
                max_weight_prev_packages = dp_max_weight[j]
                break

        max_weight_including_curr_package = (
            curr_package_weight + max_weight_prev_packages
        )
        dp_max_weight[i] = max(
            max_weight_excluding_curr_package, max_weight_including_curr_package
        )

    return dp_max_weight[len_packages - 1]


# Example Input (from the problem statement)
packages1 = [
    [1, 4, 5],  # start at 1, end at 4, weight 5
    [3, 5, 1],
    [0, 6, 8],
    [4, 7, 4],
    [3, 8, 6],
    [5, 9, 3],
]

max_weight1 = max_delivery_weight(packages1)
print(f"Maximum total weight (no bisect, corrected): {max_weight1}")
