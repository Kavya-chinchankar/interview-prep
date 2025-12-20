def mostFrequentChar(s):
    freq = {}
    max_char = s[0]
    for ch in s:
        freq[ch] = freq.get(ch, 0) + 1
        if freq[ch] > freq[max_char]:
            max_char = ch
    return max_char

# INPUT
print(mostFrequentChar("success"))  # s
