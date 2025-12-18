nums = [1,1,1,2,2,3]

def removeDuplicatesTwice(nums):
    if len(nums) <= 2:
        return len(nums)

    slow = 2
    for fast in range(2, len(nums)):
        if nums[fast] != nums[slow - 2]:
            nums[slow] = nums[fast]
            slow += 1

    return slow

length = removeDuplicatesTwice(nums)
print(nums[:length])  # Output: [1, 1, 2, 2, 3]
