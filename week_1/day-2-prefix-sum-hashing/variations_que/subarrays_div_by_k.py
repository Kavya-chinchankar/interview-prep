# subarrays_div_by_k.py

def subarraysDivByK(nums, k):
    count = 0
    prefix = 0
    freq = {0: 1}

    for num in nums:
        prefix = (prefix + num) % k
        count += freq.get(prefix, 0)
        freq[prefix] = freq.get(prefix, 0) + 1

    return count

# Example Input
nums = [4, 5, 0, -2, -3, 1]
k = 5

# Function Call
print(subarraysDivByK(nums, k))  # Output: 7
