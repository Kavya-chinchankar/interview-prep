nums = [2, 1, 5, 1, 3, 2]  # INPUT
k = 3

def maxSumSubarray(nums, k):
    if k > len(nums):
        return None

    window_sum = sum(nums[:k])
    max_sum = window_sum

    for i in range(k, len(nums)):
        window_sum += nums[i]
        window_sum -= nums[i - k]
        max_sum = max(max_sum, window_sum)

    return max_sum

print(maxSumSubarray(nums, k))  # Output: 9
