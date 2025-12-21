# Program: longest_subarray_sum_k.py

def longestSubarraySum(nums, k):
    prefix_sum = 0
    index_map = {0: -1}  # prefix sum -> earliest index
    max_len = 0

    for i, num in enumerate(nums):
        prefix_sum += num

        if prefix_sum - k in index_map:
            max_len = max(max_len, i - index_map[prefix_sum - k])

        if prefix_sum not in index_map:
            index_map[prefix_sum] = i

    return max_len


# INPUT
nums = [1, -1, 5, -2, 3]
k = 3
print(longestSubarraySum(nums, k))  # Output: 4
