def nextGreaterCircular(nums):
    n = len(nums)
    res = [-1] * n
    stack = []

    for i in range(2 * n):
        curr = nums[i % n]
        while stack and nums[stack[-1]] < curr:
            idx = stack.pop()
            res[idx] = curr
        if i < n:
            stack.append(i)

    return res

# INPUT
nums = [1, 2, 1]
print(nextGreaterCircular(nums))  # Output: [2, -1, 2]
