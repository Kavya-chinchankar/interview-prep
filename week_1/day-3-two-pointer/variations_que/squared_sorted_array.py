nums = [-7, -3, 2, 3, 11]

def sortedSquares(nums):
    n = len(nums)
    res = [0] * n
    left, right = 0, n - 1

    for i in range(n - 1, -1, -1):
        if abs(nums[left]) > abs(nums[right]):
            res[i] = nums[left] ** 2
            left += 1
        else:
            res[i] = nums[right] ** 2
            right -= 1
    return res

print(sortedSquares(nums))  # Output: [4, 9, 9, 49, 121]
