nums = [1, 2, 4, 6, 10]
target = 8

def pairSum(nums, target):
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

print(pairSum(nums, target))  # Output: (1, 3)
