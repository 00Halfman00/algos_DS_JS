"""
Supposedly, quicksort is one of the most all-around-efficient algorithms for sorting.
The trick to qucksort is picking the best element in the list/array to sort with.
If the elements in the array are mostly sorted, then it is best not to sort with
the first element, but instead it is best to pick a random element or the median element.

In this recursive version of quicksort, a helper function will be used to sort elements
either to the left or right of the pivot index.


"""


def median_pivot(int_list: list[int], start_idx: int, end_idx: int) -> int:
    """
    function takes a list of integers, a starting index and an end index. It swaps the
    median element with the starting element. Then it moves all the elements smaller
    than the median element to the left/start of the list. Finally, it returns the
    index of the final swap.
    """

    median_index = (start_idx + end_idx) // 2
    int_list[start_idx], int_list[median_index] = (
        int_list[median_index],
        int_list[start_idx],
    )
    swap_element = int_list[start_idx]
    print("swap element: ", swap_element)
    swap_idx = start_idx

    for i in range(start_idx + 1, end_idx + 1):
        if int_list[i] < swap_element:
            swap_idx += 1
            int_list[i], int_list[swap_idx] = int_list[swap_idx], int_list[i]

    int_list[start_idx], int_list[swap_idx] = int_list[swap_idx], int_list[start_idx]
    return swap_idx


ints1 = [4, 8, 2, 9, 5, 1, 7, 6, 3, 0]


def quick_sort(int_list: list[int], start_idx: int, end_idx: int) -> list[int]:
    if start_idx < end_idx:
        pivot_idx = median_pivot(int_list, start_idx, end_idx)
        quick_sort(int_list, start_idx, pivot_idx - 1)
        quick_sort(int_list, pivot_idx + 1, end_idx)

    return int_list


print(quick_sort(ints1, 0, len(ints1) - 1))
