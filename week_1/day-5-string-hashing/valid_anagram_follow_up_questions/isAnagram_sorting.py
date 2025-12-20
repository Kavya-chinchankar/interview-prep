s = "listen"
t = "silent"

def isAnagram_sorting(s, t):
    return sorted(s) == sorted(t)

print(isAnagram_sorting(s, t))  # True
