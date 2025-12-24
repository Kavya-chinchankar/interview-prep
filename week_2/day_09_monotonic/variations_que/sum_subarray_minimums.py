def sumSubarrayMins(arr):
    mod = 10**9 + 7
    stack = []
    res = 0
    arr.append(0)

    for i in range(len(arr)):
        while stack and arr[i] < arr[stack[-1]]:
            mid = stack.pop()
            left = mid - (stack[-1] if stack else -1)
            right = i - mid
            res += arr[mid] * left * right
        stack.append(i)

    return res % mod


# INPUT
print(sumSubarrayMins([3,1,2,4]))
