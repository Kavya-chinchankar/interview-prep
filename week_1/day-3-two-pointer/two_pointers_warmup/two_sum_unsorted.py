nums = [3, 1, 4, 2]
target = 6

def two_sum_unsorted(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        if target - num in seen:
            return seen[target - num], i
        seen[num] = i

print(two_sum_unsorted(nums, target))  # Output: (2, 3)
