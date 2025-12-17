# min_subarray_len.py

def minSubArrayLen(k, nums):
    left = 0
    curr_sum = 0
    ans = float('inf')

    for right in range(len(nums)):
        curr_sum += nums[right]
        while curr_sum >= k:
            ans = min(ans, right - left + 1)
            curr_sum -= nums[left]
            left += 1

    return 0 if ans == float('inf') else ans

# Example Input
nums = [2, 3, 1, 2, 4, 3]
k = 7

# Function Call
print(minSubArrayLen(k, nums))  # Output: 2 ([4,3])
