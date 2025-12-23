// File: nextGreaterElementStack.js

function nextGreater(nums) {
    const stack = [];
    const res = new Array(nums.length).fill(-1);

    for (let i = 0; i < nums.length; i++) {
        while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {
            const idx = stack.pop();
            res[idx] = nums[i];
        }
        stack.push(i);
    }
    return res;
}

// INPUT
console.log(nextGreater([4, 5, 2, 25])); // [5, 25, 25, -1]
