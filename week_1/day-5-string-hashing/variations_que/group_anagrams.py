def groupAnagrams(strs):
    from collections import defaultdict
    groups = defaultdict(list)

    for word in strs:
        key = tuple(sorted(word))
        groups[key].append(word)

    return list(groups.values())

# INPUT
words = ["eat", "tea", "tan", "ate", "nat", "bat"]
print(groupAnagrams(words))
