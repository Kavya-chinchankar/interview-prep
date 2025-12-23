# evaluate_postfix.py
def evalPostfix(tokens):
    stack = []
    for t in tokens:
        if t in "+-*/":
            b, a = stack.pop(), stack.pop()
            stack.append(int(eval(f"{a}{t}{b}")))
        else:
            stack.append(int(t))
    return stack[0]

# INPUT
print(evalPostfix(["2","1","+","3","*"]))  # 9
