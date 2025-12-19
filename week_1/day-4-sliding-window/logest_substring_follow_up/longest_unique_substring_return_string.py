s = "pwwkew"  # INPUT

def longestSubstring(s):
    last_seen = {}
    left = 0
    max_len = 0
    start = 0

    for right in range(len(s)):
        if s[right] in last_seen and last_seen[s[right]] >= left:
            left = last_seen[s[right]] + 1

        last_seen[s[right]] = right

        if right - left + 1 > max_len:
            max_len = right - left + 1
            start = left

    return s[start:start + max_len]

print(longestSubstring(s))  # Output: "wke"
