arr = [3, -2, 5, -1]
prefix = [arr[0]]

for i in range(1, len(arr)):
    prefix.append(prefix[-1] + arr[i])

# sum from index 0 to 2
print(prefix[2])  # Output: 6
