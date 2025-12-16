def moveValueToEnd(nums, X):
    j = 0
    for i in range(len(nums)):
        if nums[i] != X:
            nums[i], nums[j] = nums[j], nums[i]
            j += 1

nums = [2, 1, 2, 3, 2, 4, 2]
moveValueToEnd(nums, 2)
print(nums)
