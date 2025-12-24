def removeKdigits(num, k):
    stack = []

    for d in num:
        while stack and k > 0 and stack[-1] > d:
            stack.pop()
            k -= 1
        stack.append(d)

    result = ''.join(stack[:len(stack)-k]).lstrip('0')
    return result if result else "0"


# INPUT
print(removeKdigits("1432219", 3))
