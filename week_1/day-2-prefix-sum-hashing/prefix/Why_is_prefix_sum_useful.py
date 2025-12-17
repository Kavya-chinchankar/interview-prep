arr = [2, 4, 6, 8]

prefix = [0] * len(arr)
prefix[0] = arr[0]

for i in range(1, len(arr)):
    prefix[i] = prefix[i - 1] + arr[i]

# sum from index 1 to 3
l, r = 1, 3
range_sum = prefix[r] - prefix[l - 1]
