def swap(nums: list, first_idx: int, second_idx: int) -> None:
    nums[first_idx], nums[second_idx] = nums[second_idx], nums[first_idx]


def pivot(nums: list[int], start_idx: int, end_idx: int) -> int:
    piv, swap_idx = nums[start_idx], start_idx

    if len(nums) > 1:
        for i in range(start_idx + 1, end_idx + 1):
            if piv > nums[i]:
                swap_idx += 1
                swap(nums, swap_idx, i)
    swap(nums, start_idx, swap_idx)
    return swap_idx


def quick_sort(nums: list[int], start_idx: int, end_idx: int) -> list[int]:
    if start_idx < end_idx:
        pivot_idx = pivot(nums, start_idx, end_idx)
        quick_sort(nums, 0, pivot_idx - 1)
        quick_sort(nums, pivot_idx + 1, end_idx)
    return nums


ints1 = [4, 8, 2, 1, 9, 5, 7, 6, 3, 0]


print(quick_sort(ints1, 0, len(ints1) - 1))
print(ints1)
