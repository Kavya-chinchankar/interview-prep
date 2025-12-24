function nextGreaterElements(nums) {
    const n = nums.length;
    const res = new Array(n).fill(-1);
    const stack = [];

    for (let i = 0; i < 2 * n; i++) {
        while (stack.length && nums[i % n] > nums[stack[stack.length - 1]]) {
            res[stack.pop()] = nums[i % n];
        }
        if (i < n) stack.push(i);
    }
    return res;
}
