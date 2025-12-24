function sumSubarrayMins(arr) {
    const mod = 1e9 + 7;
    const stack = [];
    let res = 0;
    arr.push(0);

    for (let i = 0; i < arr.length; i++) {
        while (stack.length && arr[i] < arr[stack[stack.length - 1]]) {
            const mid = stack.pop();
            const left = mid - (stack.length ? stack[stack.length - 1] : -1);
            const right = i - mid;
            res = (res + arr[mid] * left * right) % mod;
        }
        stack.push(i);
    }
    return res;
}
