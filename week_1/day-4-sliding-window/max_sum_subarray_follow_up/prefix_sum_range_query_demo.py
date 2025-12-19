nums = [2, 1, 5, 1, 3, 2]  # INPUT
prefix = [0]
for n in nums:
    prefix.append(prefix[-1] + n)

# sum of range [1..3]
print(prefix[4] - prefix[1])  # Output: 7
