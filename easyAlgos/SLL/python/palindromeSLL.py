from typing import Optional


# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


# Helper function to create a singly linked list from a Python list
def create_linked_list(arr):
    """
    Creates a singly linked list from a list of values.
    Returns the head of the linked list.
    """
    if not arr:
        return None

    head = ListNode(arr[0])
    current = head
    for i in range(1, len(arr)):
        current.next = ListNode(arr[i])
        current = current.next
    return head


# Helper function to print a linked list (useful for debugging)
def print_linked_list(head):
    """
    Prints the values of a singly linked list from head to tail.
    """
    current = head
    values = []
    while current:
        values.append(str(current.val))
        current = current.next
    print(" -> ".join(values))


# --- Your Palindrome Linked List Solution (from your code) ---
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        self.outer_pointer = head

        def recursive_check(inner_pointer: Optional[ListNode]) -> bool:
            # Base case: if inner_pointer is None, we've reached the end, so return True
            if inner_pointer is None:
                return True

            # Recursively call the function for the next node
            # If the recursive call returns False at any point, propagate False up
            if not recursive_check(inner_pointer.next):
                return False

            # After the recursive call returns (unwinding the stack)
            # Compare the current inner_pointer's value (from the end/back)
            # with the outer_pointer's value (from the beginning/front)
            if inner_pointer.val != self.outer_pointer.val:
                return False

            # If values match, advance the outer_pointer for the next comparison
            self.outer_pointer = self.outer_pointer.next

            # If all checks pass for this level, return True
            return True

        # Start the recursive check
        return recursive_check(head)


# --- Example Usage for Debugging ---
if __name__ == "__main__":
    # Example 1: Palindrome
    input_list_1 = [1, 2, 2, 1]
    head1 = create_linked_list(input_list_1)
    print(f"Input List 1: {input_list_1}")
    print_linked_list(head1)  # Optional: verify list creation visually

    sol = Solution()
    result1 = sol.isPalindrome(head1)
    print(f"Is Palindrome 1: {result1}")  # Expected: True

    print("-" * 20)

    # # Example 2: Not a Palindrome
    # input_list_2 = [1, 2]
    # head2 = create_linked_list(input_list_2)
    # print(f"Input List 2: {input_list_2}")
    # print_linked_list(head2) # Optional: verify list creation visually

    # sol2 = Solution() # Create a new Solution instance for the new test case
    #                   # to reset self.outer_pointer
    # result2 = sol2.isPalindrome(head2)
    # print(f"Is Palindrome 2: {result2}") # Expected: False

    # print("-" * 20)

    # # Example 3: Single node (Palindrome)
    # input_list_3 = [7]
    # head3 = create_linked_list(input_list_3)
    # print(f"Input List 3: {input_list_3}")
    # print_linked_list(head3)

    # sol3 = Solution()
    # result3 = sol3.isPalindrome(head3)
    # print(f"Is Palindrome 3: {result3}") # Expected: True

    # print("-" * 20)

    # # Example 4: Odd length palindrome
    # input_list_4 = [1, 2, 3, 2, 1]
    # head4 = create_linked_list(input_list_4)
    # print(f"Input List 4: {input_list_4}")
    # print_linked_list(head4)

    # sol4 = Solution()
    # result4 = sol4.isPalindrome(head4)
    # print(f"Is Palindrome 4: {result4}") # Expected: True
