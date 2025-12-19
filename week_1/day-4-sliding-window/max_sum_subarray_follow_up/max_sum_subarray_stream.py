from collections import deque

stream = [2, 1, 5, 1, 3, 2]  # INPUT
k = 3

window = deque()
window_sum = 0
max_sum = float('-inf')

for num in stream:
    window.append(num)
    window_sum += num
    if len(window) > k:
        window_sum -= window.popleft()
    if len(window) == k:
        max_sum = max(max_sum, window_sum)

print(max_sum)  # Output: 9
