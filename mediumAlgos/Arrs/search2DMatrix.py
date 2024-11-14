

matrix1 = [[1]]


matrix2 = [[1,4,7,11,15],
           [2,5,8,12,19],
           [3,6,9,16,22],
           [10,13,14,17,24],
           [18,21,23,26,30]]


def searchMatrix(matrix, target):
    '''''
    1.  traverse the matrix row by row
    2.  skip any row whose last element is smaller than target
    3.  perform a binary search on each row, looking for target
    4.  return True if target is found, else return false
    '''''
    left, right, mid = 0, 0, 0
    for i in range(len(matrix)):
        left, right = 0, len(matrix[i]) - 1
        if( target > matrix[i][right]): continue
        while left <= right:
            mid = (left + right)//2
            count += 1
            if(matrix[i][mid] == target):
                return True
            if(matrix[i][mid] > target): right = mid - 1
            else: left = mid + 1
    return False

print(searchMatrix(matrix2, 19))


# can it be that this thing below has a bug?
# this thing below doesn't actually work and it's copied right out of the leet code descriptions/answers
def searchMatrix1( matrix, target):
    m = len(matrix)
    if m == 0:
        return False
    n = len(matrix[0])
    # binary search
    left, right = 0, m * n - 1
    while left <= right:
        pivot_idx = (left + right) // 2
        pivot_element = matrix[pivot_idx // n][pivot_idx % n]
        count += 1
        if target == pivot_element:
            return True
        else:
            if target < pivot_element:
                right = pivot_idx - 1
            else:
                left = pivot_idx + 1
    return False


print(searchMatrix1(matrix2, 19))
