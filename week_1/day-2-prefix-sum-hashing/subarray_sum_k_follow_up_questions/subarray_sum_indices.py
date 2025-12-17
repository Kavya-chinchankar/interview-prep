# subarray_sum_indices.py

def subarraySumIndices(nums, k):
    prefix_sum = 0
    index_map = {0: [-1]}
    result = []

    for i, num in enumerate(nums):
        prefix_sum += num
        if prefix_sum - k in index_map:
            for start in index_map[prefix_sum - k]:
                result.append((start + 1, i))
        index_map.setdefault(prefix_sum, []).append(i)

    return result

# Example Input
nums = [1, 2, 3, 1, 2]
k = 3

# Function Call
print(subarraySumIndices(nums, k))
# Output: [(0, 1), (2, 2), (3, 4)]
