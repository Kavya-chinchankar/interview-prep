# Program: first_unique_character.py
def firstUniqueChar(s):
    freq = {}
    for ch in s:
        freq[ch] = freq.get(ch, 0) + 1

    for ch in s:
        if freq[ch] == 1:
            return ch
    return None

print(firstUniqueChar("leetcode"))  # Output: l
