s = "ADOBECODEBANC"
t = "ABC"

def minWindow(s, t):
    from collections import Counter
    need = Counter(t)
    left = count = 0
    min_len = float('inf')
    start = 0

    for right, ch in enumerate(s):
        if ch in need:
            need[ch] -= 1
            if need[ch] >= 0:
                count += 1

        while count == len(t):
            if right - left + 1 < min_len:
                min_len = right - left + 1
                start = left

            if s[left] in need:
                need[s[left]] += 1
                if need[s[left]] > 0:
                    count -= 1
            left += 1

    return "" if min_len == float('inf') else s[start:start + min_len]

print(minWindow(s, t))  # Output: "BANC"
