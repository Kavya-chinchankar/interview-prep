# Program: longest_subarray_positive_numbers.py

def longestSubarrayPositive(nums, k):
    left = 0
    curr_sum = 0
    max_len = 0

    for right in range(len(nums)):
        curr_sum += nums[right]

        while curr_sum > k:
            curr_sum -= nums[left]
            left += 1

        if curr_sum == k:
            max_len = max(max_len, right - left + 1)

    return max_len


# INPUT
nums = [1, 2, 1, 1, 1]
k = 3
print(longestSubarrayPositive(nums, k))  # Output: 3
