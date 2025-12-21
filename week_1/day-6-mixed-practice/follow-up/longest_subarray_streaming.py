# Program: longest_subarray_streaming.py

stream = [1, -1, 5, -2, 3]
k = 3

prefix_sum = 0
index_map = {0: -1}
max_len = 0

for i, num in enumerate(stream):
    prefix_sum += num

    if prefix_sum - k in index_map:
        max_len = max(max_len, i - index_map[prefix_sum - k])

    if prefix_sum not in index_map:
        index_map[prefix_sum] = i

print(max_len)  # Output: 4
