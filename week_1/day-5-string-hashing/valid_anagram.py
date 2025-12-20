# Input
s = "listen"
t = "silent"

def isAnagram(s, t):
    if len(s) != len(t):
        return False

    freq = {}

    # Count frequency of s
    for ch in s:
        freq[ch] = freq.get(ch, 0) + 1

    # Decrease frequency using t
    for ch in t:
        if ch not in freq or freq[ch] == 0:
            return False
        freq[ch] -= 1

    return True

print(isAnagram(s, t))  # Output: True
