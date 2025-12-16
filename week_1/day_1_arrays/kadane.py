def maxSubArray(nums):
    max_sum = nums[0]
    curr_sum = nums[0]

    for i in range(1, len(nums)):
        curr_sum = max(nums[i], curr_sum + nums[i])
        max_sum = max(max_sum, curr_sum)

    return max_sum


nums = [-2,1,-3,4,-1,2,1,-5,4]
print(maxSubArray(nums))



# To determine an actual output, we must know the input.

# ### Example 1

# ```python
# nums = [-2,1,-3,4,-1,2,1,-5,4]
# print(maxSubArray(nums))
# ```

# **Output**

# ```
# 6
# ```

# **Explanation:**
# The subarray `[4, -1, 2, 1]` has the maximum sum = `6`.

# ---

# ### Example 2

# ```python
# nums = [1]
# print(maxSubArray(nums))
# ```

# **Output**

# ```
# 1
# ```

# ---

# ### Example 3

# ```python
# nums = [5, 4, -1, 7, 8]
# print(maxSubArray(nums))
# ```

# **Output**

# ```
# 23
# ```

# ---

# ### Interview-ready one-line explanation

# > This function returns the maximum possible sum of any contiguous subarray using Kadane’s Algorithm in O(n) time and O(1) space.

