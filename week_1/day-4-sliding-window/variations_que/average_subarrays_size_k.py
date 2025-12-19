nums = [1, 3, 2, 6, -1, 4, 1, 8, 2]
k = 5

def averages(nums, k):
    res = []
    window_sum = sum(nums[:k])
    res.append(window_sum / k)

    for i in range(k, len(nums)):
        window_sum += nums[i] - nums[i - k]
        res.append(window_sum / k)

    return res

print(averages(nums, k))
