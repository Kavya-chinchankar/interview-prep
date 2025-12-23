# File: next_greater_element_stack.py

def nextGreater(nums):
    stack = []
    result = [-1] * len(nums)

    for i in range(len(nums)):
        while stack and nums[i] > nums[stack[-1]]:
            idx = stack.pop()
            result[idx] = nums[i]
        stack.append(i)

    return result


# INPUT
nums = [4, 5, 2, 25]
print(nextGreater(nums))  # Output: [5, 25, 25, -1]
