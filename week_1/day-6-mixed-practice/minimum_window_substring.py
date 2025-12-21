# Program: minimum_window_substring.py
from collections import Counter

def minWindow(s, t):
    if not s or not t:
        return ""

    need = Counter(t)
    count = len(t)
    left = 0
    min_len = float("inf")
    start = 0

    for right in range(len(s)):
        if need[s[right]] > 0:
            count -= 1
        need[s[right]] -= 1

        while count == 0:
            if right - left + 1 < min_len:
                min_len = right - left + 1
                start = left

            need[s[left]] += 1
            if need[s[left]] > 0:
                count += 1
            left += 1

    return "" if min_len == float("inf") else s[start:start + min_len]


# INPUT
s = "ADOBECODEBANC"
t = "ABC"
print(minWindow(s, t))  # Output: "BANC"
