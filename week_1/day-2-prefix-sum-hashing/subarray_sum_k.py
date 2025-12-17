# subarray_sum_k.py

def subarraySum(nums, k):
    count = 0
    prefix_sum = 0
    freq = {0: 1}

    for num in nums:
        prefix_sum += num
        if prefix_sum - k in freq:
            count += freq[prefix_sum - k]
        freq[prefix_sum] = freq.get(prefix_sum, 0) + 1

    return count

# Example Input
nums = [1, 2, 3, 4, 2]
k = 5

# Function Call
print(subarraySum(nums, k))  # Output: 2
