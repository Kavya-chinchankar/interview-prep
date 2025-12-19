s = "abciiidef"
k = 3

def maxVowels(s, k):
    vowels = set("aeiou")
    count = sum(1 for c in s[:k] if c in vowels)
    max_count = count

    for i in range(k, len(s)):
        if s[i] in vowels: count += 1
        if s[i - k] in vowels: count -= 1
        max_count = max(max_count, count)

    return max_count

print(maxVowels(s, k))  # Output: 3
