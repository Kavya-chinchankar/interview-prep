# File: monotonic_stack_next_greater.py

def nextGreater(nums):
    stack = []
    res = [-1] * len(nums)

    for i in range(len(nums)):
        while stack and nums[i] > nums[stack[-1]]:
            idx = stack.pop()
            res[idx] = nums[i]
        stack.append(i)

    return res


# INPUT
nums = [4, 5, 2, 25]
print(nextGreater(nums))  # Output: [5, 25, 25, -1]
