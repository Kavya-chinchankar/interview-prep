function nextSmaller(nums) {
    const stack = [];
    const res = new Array(nums.length).fill(-1);

    for (let i = 0; i < nums.length; i++) {
        while (stack.length && nums[i] < nums[stack[stack.length - 1]]) {
            const idx = stack.pop();
            res[idx] = nums[i];
        }
        stack.push(i);
    }
    return res;
}

// INPUT
console.log(nextSmaller([4, 5, 2, 10])); // [2, 2, -1, -1]
