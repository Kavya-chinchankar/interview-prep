def moveZeroesLargeArray(nums):
    write = 0
    for num in nums:
        if num != 0:
            nums[write] = num
            write += 1
    for i in range(write, len(nums)):
        nums[i] = 0



nums = [0, 1, 0, 3, 12]
moveZeroesLargeArray(nums)
print(nums)
