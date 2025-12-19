nums = [-2, -1, -3, -4]  # INPUT
k = 2

def maxSumSubarray(nums, k):
    window_sum = sum(nums[:k])
    max_sum = window_sum
    for i in range(k, len(nums)):
        window_sum += nums[i] - nums[i - k]
        max_sum = max(max_sum, window_sum)
    return max_sum

print(maxSumSubarray(nums, k))  # Output: -3
