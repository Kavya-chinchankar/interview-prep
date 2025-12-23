def stockSpan(prices):
    stack = []
    span = [0] * len(prices)

    for i in range(len(prices)):
        while stack and prices[stack[-1]] <= prices[i]:
            stack.pop()
        span[i] = i + 1 if not stack else i - stack[-1]
        stack.append(i)

    return span

# INPUT
prices = [100, 80, 60, 70, 60, 75, 85]
print(stockSpan(prices))  # Output: [1,1,1,2,1,4,6]
