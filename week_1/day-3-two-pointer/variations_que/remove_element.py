nums = [3, 2, 2, 3, 4]
k = 3

def removeElement(nums, k):
    slow = 0
    for fast in range(len(nums)):
        if nums[fast] != k:
            nums[slow] = nums[fast]
            slow += 1
    return slow

length = removeElement(nums, k)
print(length)           # Output: 3
print(nums[:length])    # Output: [2, 2, 4]
