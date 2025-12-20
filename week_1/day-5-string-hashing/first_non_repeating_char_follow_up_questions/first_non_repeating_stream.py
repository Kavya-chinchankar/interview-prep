# Program: first_non_repeating_stream.py
from collections import defaultdict, deque

stream = "leetcode"
freq = defaultdict(int)
queue = deque()

for ch in stream:
    freq[ch] += 1
    queue.append(ch)

    while queue and freq[queue[0]] > 1:
        queue.popleft()

print(queue[0] if queue else -1)  # Output: l
