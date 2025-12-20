def longestPalindrome(s):
    freq = {}
    for ch in s:
        freq[ch] = freq.get(ch, 0) + 1

    length = 0
    odd_found = False

    for count in freq.values():
        length += (count // 2) * 2
        if count % 2 == 1:
            odd_found = True

    return length + 1 if odd_found else length

# INPUT
print(longestPalindrome("abccccdd"))  # 7
