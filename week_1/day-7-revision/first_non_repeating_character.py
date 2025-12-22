# Program: first_non_repeating_character.py

def firstUniqChar(s):
    freq = {}

    # First pass: frequency count
    for ch in s:
        freq[ch] = freq.get(ch, 0) + 1

    # Second pass: find first unique
    for i, ch in enumerate(s):
        if freq[ch] == 1:
            return i

    return -1


# INPUT
s = "leetcode"
print(firstUniqChar(s))  # Output: 0
