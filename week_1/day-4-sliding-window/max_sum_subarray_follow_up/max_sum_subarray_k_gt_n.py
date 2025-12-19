nums = [2, 1, 5]  # INPUT
k = 5

def maxSumSubarray(nums, k):
    if k > len(nums):
        return None
    return sum(nums[:k])

print(maxSumSubarray(nums, k))  # Output: None
