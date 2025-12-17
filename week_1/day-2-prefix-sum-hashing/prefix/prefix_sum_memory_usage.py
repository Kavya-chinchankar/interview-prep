# prefix_sum_memory_usage.py

arr = [2, 4, 6, 8]

# Extra array of size n
prefix = [0] * len(arr)

# Build prefix sum
prefix[0] = arr[0]
for i in range(1, len(arr)):
    prefix[i] = prefix[i - 1] + arr[i]

print(prefix)  # Output: [2, 6, 12, 20]
