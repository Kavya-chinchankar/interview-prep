nums = [1, 2, 4, 6, 10]
target = 8

def two_sum_sorted(nums, target):
    left, right = 0, len(nums) - 1
    while left < right:
        s = nums[left] + nums[right]
        if s == target:
            return left, right
        elif s < target:
            left += 1
        else:
            right -= 1
    return -1

print(two_sum_sorted(nums, target))  # Output: (1, 3)
