s = "eceba"
k = 2

def longestKDistinct(s, k):
    from collections import defaultdict
    freq = defaultdict(int)
    left = max_len = 0

    for right in range(len(s)):
        freq[s[right]] += 1
        while len(freq) > k:
            freq[s[left]] -= 1
            if freq[s[left]] == 0:
                del freq[s[left]]
            left += 1
        max_len = max(max_len, right - left + 1)

    return max_len

print(longestKDistinct(s, k))  # Output: 3
