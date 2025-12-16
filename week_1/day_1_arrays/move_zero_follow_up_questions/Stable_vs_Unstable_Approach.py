def moveZeroesStable(nums):
    j = 0
    for i in range(len(nums)):
        if nums[i] != 0:
            nums[j] = nums[i]
            j += 1
    while j < len(nums):
        nums[j] = 0
        j += 1

nums = [0, 1, 0, 3, 12]
moveZeroesStable(nums)
print(nums)

