"""
areThereDuplicates
Implement a function called, areThereDuplicates which accepts a variable number of arguments,
and checks whether there are any duplicates among the arguments passed in.
You can solve this using the frequency counter pattern OR the multiple pointers pattern.
To achieve the bonus time and space complexity, use multiple pointers


Examples:
areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true
areThereDuplicates('a', 'b', 'c', 'a') // true


Restrictions:
Time - O(n)
Space - O(n)


Bonus:
Time - O(n log n)
Space - O(1)


        THEORY AND PSEUDOCODE
  If one could sort the array, first. Then duplicates would be contiguous inside array
  Specific to language, consider how sort would work...

  1   Use arbitrary positional arguments to catch any number of arguments passed in
  2   Create an array from the tuple
  3   Sort the arguemnts with built in sort method
  4   Iterate over the arguments array
      3.1   Return true if duplicates are found
  5.  Return false otherwise
"""


def are_there_Duplicates(*args):
    arr = list(args)
    arr.sort(key=str)

    for i in range(len(arr) - 1):
        if arr[i] == arr[i + 1]:
            return True

    return False


print(are_there_Duplicates(1, 2, 3))  # False
print(are_there_Duplicates(1, 2, 3, 2))  # True
print(are_there_Duplicates("a", "b", "c", "a"))  # True
