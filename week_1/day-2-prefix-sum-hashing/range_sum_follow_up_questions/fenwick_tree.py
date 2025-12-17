# fenwick_tree.py

class FenwickTree:
    def __init__(self, n):
        self.bit = [0] * (n + 1)

    def update(self, i, delta):
        i += 1
        while i < len(self.bit):
            self.bit[i] += delta
            i += i & -i

    def query(self, i):
        s = 0
        i += 1
        while i > 0:
            s += self.bit[i]
            i -= i & -i
        return s

    def range_sum(self, l, r):
        return self.query(r) - self.query(l - 1)


# Example Usage
nums = [1, 2, 3, 4, 5]
ft = FenwickTree(len(nums))

# Build the tree
for i, val in enumerate(nums):
    ft.update(i, val)

print(ft.range_sum(0, 2))  # Output: 6 (1+2+3)
print(ft.range_sum(1, 3))  # Output: 9 (2+3+4)

# Update index 2 by +2 (nums[2] = 5)
ft.update(2, 2)
print(ft.range_sum(0, 2))  # Output: 8 (1+2+5)
