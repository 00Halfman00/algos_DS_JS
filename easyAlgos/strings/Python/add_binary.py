"""
67. Add Binary

Given two binary strings a and b, return their sum as a binary string.

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"


Constraints:

1 <= a.length, b.length <= 104
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself."""


def addBinary(a: str, b: str) -> str:
    i = len(a) - 1
    j = len(b) - 1
    sum, carry, result = 0, 0, ""

    while i >= 0 or j >= 0 or carry > 0:
        sum = carry
        if i >= 0 and a[i] == "1":
            sum += 1
        if j >= 0 and b[j] == "1":
            sum += 1

        result = str(sum % 2) + result
        carry = sum // 2

        i -= 1
        j -= 1

    return result


"""
time complesity: O(n)
"""

print(addBinary("11", "1"))
# expect 100
print(addBinary("1010", "1011"))
# expect "10101"


# add many binary strings
def addManyBinaryStrs(digits: list[str]) -> str:
    """
    Job: Adds multiple binary strings and returns their sum.
    Args: A list of binary strings.
    Returns: The sum of the binary strings as a binary string.
    """
    max_len = max(map(len, digits))
    i = max_len - 1
    carry, sum, index, result = 0, 0, 0, ""

    while i >= 0 or carry > 0:  # i = 3
        sum = carry
        for _, num in enumerate(digits):
            index = (len(num) - 1) - (max_len - 1 - i)
            if index >= 0 and num[index] == "1":
                sum += 1

        result = str(sum % 2) + result
        carry = sum // 2

        i -= 1

    return result


"""
time complexity is O(m * n)
m is the maximum length of any binary string in the input list.
n is the number of binary strings in the input list.
"""
print(addManyBinaryStrs(["11", "1", "1010", "1011"]))
