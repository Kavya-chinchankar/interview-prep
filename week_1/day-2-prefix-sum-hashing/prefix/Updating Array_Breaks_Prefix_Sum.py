arr = [3, -2, 5, -1]

# Update
arr[1] = 10

# Recompute prefix sum
prefix = [0] * len(arr)
prefix[0] = arr[0]

for i in range(1, len(arr)):
    prefix[i] = prefix[i - 1] + arr[i]

print(prefix)  # [3, 13, 18, 17]
