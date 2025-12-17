# streaming_subarray_sum.py

class StreamingSubarraySum:
    def __init__(self, k):
        self.k = k
        self.prefix_sum = 0
        self.freq = {0: 1}
        self.count = 0

    def add(self, num):
        self.prefix_sum += num
        self.count += self.freq.get(self.prefix_sum - self.k, 0)
        self.freq[self.prefix_sum] = self.freq.get(self.prefix_sum, 0) + 1
        return self.count

# Example Usage
stream = StreamingSubarraySum(3)
inputs = [1, 2, 1, 1]

for num in inputs:
    print(stream.add(num))
# Output:
# 0
# 1
# 1
# 2
