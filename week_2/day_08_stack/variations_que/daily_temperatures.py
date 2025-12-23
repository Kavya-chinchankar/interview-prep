# daily_temperatures.py
def dailyTemperatures(t):
    res = [0]*len(t)
    stack = []
    for i in range(len(t)):
        while stack and t[i] > t[stack[-1]]:
            idx = stack.pop()
            res[idx] = i - idx
        stack.append(i)
    return res

# INPUT
print(dailyTemperatures([73,74,75,71,69,72,76,73]))
