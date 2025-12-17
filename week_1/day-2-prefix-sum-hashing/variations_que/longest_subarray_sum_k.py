# longest_subarray_sum_k.py

def longestSubarray(nums, k):
    prefix = 0
    index_map = {0: -1}
    max_len = 0

    for i, num in enumerate(nums):
        prefix += num
        if prefix - k in index_map:
            max_len = max(max_len, i - index_map[prefix - k])
        if prefix not in index_map:
            index_map[prefix] = i

    return max_len

# Example Input
nums = [1, -1, 5, -2, 3]
k = 3

# Function Call
print(longestSubarray(nums, k))  # Output: 4 (subarray [1, -1, 5, -2])
