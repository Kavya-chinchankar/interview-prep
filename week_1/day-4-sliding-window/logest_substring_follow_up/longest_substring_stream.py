stream = "abcabcbb"  # INPUT

seen = {}
left = 0
max_len = 0

for i, ch in enumerate(stream):
    if ch in seen and seen[ch] >= left:
        left = seen[ch] + 1
    seen[ch] = i
    max_len = max(max_len, i - left + 1)

print(max_len)  # Output: 3
