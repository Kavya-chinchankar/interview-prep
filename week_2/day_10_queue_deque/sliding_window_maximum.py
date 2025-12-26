# File: sliding_window_maximum.py
from collections import deque

def maxSlidingWindow(nums, k):
    if not nums or k == 0:
        return []

    dq = deque()
    result = []

    for i in range(len(nums)):
        # Remove out-of-window indices
        if dq and dq[0] <= i - k:
            dq.popleft()

        # Maintain decreasing order
        while dq and nums[dq[-1]] < nums[i]:
            dq.pop()

        dq.append(i)

        # Window formed
        if i >= k - 1:
            result.append(nums[dq[0]])

    return result


# ---- INPUT ----
nums = [1, 3, -1, -3, 5, 3, 6, 7]
k = 3

print("Sliding Window Maximum:", maxSlidingWindow(nums, k))
