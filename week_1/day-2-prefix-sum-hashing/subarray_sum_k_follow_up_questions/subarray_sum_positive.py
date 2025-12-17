# subarray_sum_positive.py

def subarraySumPositive(nums, k):
    left = 0
    curr_sum = 0
    count = 0

    for right in range(len(nums)):
        curr_sum += nums[right]

        while curr_sum > k:
            curr_sum -= nums[left]
            left += 1

        if curr_sum == k:
            count += 1

    return count

# Example Input
nums = [1, 2, 1, 1, 1]
k = 3

# Function Call
print(subarraySumPositive(nums, k))  # Output: 4
