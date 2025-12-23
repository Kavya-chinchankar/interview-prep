# Program: valid_parentheses_stack.py

def isValid(s):
    stack = []
    mapping = {')': '(', ']': '[', '}': '{'}

    for ch in s:
        if ch in mapping:
            if not stack or stack.pop() != mapping[ch]:
                return False
        else:
            stack.append(ch)

    return not stack


# INPUT
s = "()[]{}"
print(isValid(s))   # Output: True

s2 = "(]"
print(isValid(s2))  # Output: False
