def maxSubArrayWithIndices(nums):
    max_sum = curr_sum = nums[0]
    start = end = temp_start = 0

    for i in range(1, len(nums)):
        if nums[i] > curr_sum + nums[i]:
            curr_sum = nums[i]
            temp_start = i
        else:
            curr_sum += nums[i]

        if curr_sum > max_sum:
            max_sum = curr_sum
            start = temp_start
            end = i

    return max_sum, start, end


nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
print(maxSubArrayWithIndices(nums))
