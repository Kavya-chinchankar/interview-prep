def findAnagrams(s, p):
    from collections import Counter
    res = []
    p_count = Counter(p)
    window = Counter()

    for i, ch in enumerate(s):
        window[ch] += 1
        if i >= len(p):
            left_char = s[i - len(p)]
            if window[left_char] == 1:
                del window[left_char]
            else:
                window[left_char] -= 1

        if window == p_count:
            res.append(i - len(p) + 1)

    return res

# INPUT
print(findAnagrams("cbaebabacd", "abc"))  # [0, 6]
