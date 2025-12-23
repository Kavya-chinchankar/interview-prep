function nextGreaterCircular(nums) {
    const n = nums.length;
    const res = new Array(n).fill(-1);
    const stack = [];

    for (let i = 0; i < 2 * n; i++) {
        const curr = nums[i % n];
        while (stack.length && nums[stack[stack.length - 1]] < curr) {
            const idx = stack.pop();
            res[idx] = curr;
        }
        if (i < n) stack.push(i);
    }
    return res;
}

// INPUT
console.log(nextGreaterCircular([1, 2, 1])); // [2, -1, 2]
