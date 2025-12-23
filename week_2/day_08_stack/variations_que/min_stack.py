# min_stack.py
class MinStack:
    def __init__(self):
        self.stack = []

    def push(self, val):
        min_val = val if not self.stack else min(val, self.stack[-1][1])
        self.stack.append((val, min_val))

    def pop(self):
        self.stack.pop()

    def top(self):
        return self.stack[-1][0]

    def getMin(self):
        return self.stack[-1][1]

# INPUT
ms = MinStack()
ms.push(3); ms.push(5); ms.push(2)
print(ms.getMin())  # 2
