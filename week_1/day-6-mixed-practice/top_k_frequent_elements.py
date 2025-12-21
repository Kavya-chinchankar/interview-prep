# Program: top_k_frequent_elements.py

from collections import Counter
import heapq

def topKFrequent(nums, k):
    freq = Counter(nums)
    return heapq.nlargest(k, freq.keys(), key=freq.get)

# INPUT
nums = [1, 1, 1, 2, 2, 3, 3, 3, 3, 4]
k = 2
print(topKFrequent(nums, k))  # Output: [3, 1]
