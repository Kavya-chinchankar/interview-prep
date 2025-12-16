class StreamingKadane:
    def __init__(self):
        self.curr_sum = None
        self.max_sum = None

    def add(self, num):
        if self.curr_sum is None:
            self.curr_sum = self.max_sum = num
        else:
            self.curr_sum = max(num, self.curr_sum + num)
            self.max_sum = max(self.max_sum, self.curr_sum)

        return self.max_sum


sk = StreamingKadane()
print(sk.add(-2))  # -2
print(sk.add(1))   # 1
print(sk.add(-3))  # 1
print(sk.add(4))   # 4
print(sk.add(-1))  # 4
print(sk.add(2))   # 5
print(sk.add(1))   # 6
print(sk.add(-5))  # 6
print(sk.add(4))   # 6
