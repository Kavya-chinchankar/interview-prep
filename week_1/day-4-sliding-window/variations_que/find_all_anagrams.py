s = "cbaebabacd"
p = "abc"

def findAnagrams(s, p):
    from collections import Counter
    res = []
    p_count = Counter(p)
    window = Counter()

    for i in range(len(s)):
        window[s[i]] += 1
        if i >= len(p):
            if window[s[i - len(p)]] == 1:
                del window[s[i - len(p)]]
            else:
                window[s[i - len(p)]] -= 1
        if window == p_count:
            res.append(i - len(p) + 1)

    return res

print(findAnagrams(s, p))  # [0, 6]
