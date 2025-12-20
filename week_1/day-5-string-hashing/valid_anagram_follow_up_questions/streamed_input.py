from collections import defaultdict

freq = defaultdict(int)

stream_s = "abc"
stream_t = "bca"

for ch in stream_s:
    freq[ch] += 1

for ch in stream_t:
    freq[ch] -= 1

print(all(v == 0 for v in freq.values()))  # True
