# range_sum.py

class RangeSum:
    def __init__(self, nums):
        self.prefix = [0] * (len(nums) + 1)
        for i in range(len(nums)):
            self.prefix[i + 1] = self.prefix[i] + nums[i]

    def query(self, l, r):
        return self.prefix[r + 1] - self.prefix[l]

# Example Input
nums = [1, 2, 3, 4, 5]
rs = RangeSum(nums)

# Queries
print(rs.query(0, 2))  # Output: 6 (1+2+3)
print(rs.query(1, 3))  # Output: 9 (2+3+4)
