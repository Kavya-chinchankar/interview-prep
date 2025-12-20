def isAnagram(s, t):
    if len(s) != len(t):
        return False

    freq = [0] * 26  # for 'a' to 'z'

    for ch in s:
        freq[ord(ch) - ord('a')] += 1

    for ch in t:
        freq[ord(ch) - ord('a')] -= 1
        if freq[ord(ch) - ord('a')] < 0:
            return False

    return True


s = "Listen"
t = "Silent"

result = isAnagram(s.lower(), t.lower())
print("Are the strings anagrams?", result)
