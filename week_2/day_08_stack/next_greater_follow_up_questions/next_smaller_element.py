def nextSmaller(nums):
    stack = []
    res = [-1] * len(nums)

    for i in range(len(nums)):
        while stack and nums[i] < nums[stack[-1]]:
            idx = stack.pop()
            res[idx] = nums[i]
        stack.append(i)

    return res

# INPUT
nums = [4, 5, 2, 10]
print(nextSmaller(nums))  # Output: [2, 2, -1, -1]
