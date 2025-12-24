def nextGreaterElements(nums):
    n = len(nums)
    res = [-1] * n
    stack = []

    for i in range(2 * n):
        while stack and nums[i % n] > nums[stack[-1]]:
            res[stack.pop()] = nums[i % n]
        if i < n:
            stack.append(i)

    return res


# INPUT
print(nextGreaterElements([1,2,1]))
