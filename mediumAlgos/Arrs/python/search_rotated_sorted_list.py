def search(nums: list[int], target: int) -> int:
    left, right, mid = 0, len(nums) - 1, None

    while left <= right:
        mid = (left + right) // 2  #                        7
        if nums[mid] == target:
            return mid
        if target < nums[mid]:
            if nums[left] <= target and nums[mid] >= target:
                right = mid - 1
            else:
                left += 1
        else:
            if nums[mid] <= target and target <= nums[right]:
                left = mid + 1
            else:
                right += 1
    return -1


def search2(nums: list[int], target: int) -> int:
    left, right, mid = 0, len(nums) - 1, None
    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        if nums[left] <= nums[mid]:
            if nums[left] <= target and nums[mid] >= target:
                right = mid - 1
            else:
                left = mid + 1
        else:
            if nums[mid] <= target and nums[right] >= target:
                left = mid + 1
            else:
                right = mid - 1
    return -1


nums1 = [4, 5, 6, 7, 0, 1, 2]
target1 = 0

nums2 = [1, 3]
target2 = 3

nums3 = [1, 3, 5]
target3 = 1


print(search(nums1, target1))
