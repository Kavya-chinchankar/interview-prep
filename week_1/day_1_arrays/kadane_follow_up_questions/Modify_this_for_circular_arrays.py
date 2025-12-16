def maxSubarrayCircular(nums):
    total_sum = 0
    max_sum = curr_max = nums[0]
    min_sum = curr_min = nums[0]

    for num in nums:
        total_sum += num
        curr_max = max(num, curr_max + num)
        max_sum = max(max_sum, curr_max)

        curr_min = min(num, curr_min + num)
        min_sum = min(min_sum, curr_min)

    # All numbers negative case
    if max_sum < 0:
        return max_sum

    return max(max_sum, total_sum - min_sum)

nums = [1, -2, 3, -2]
print(maxSubarrayCircular(nums))
