// File: slidingWindowMaximum.js
function maxSlidingWindow(nums, k) {
    if (nums.length === 0 || k === 0) return [];

    const dq = [];
    const res = [];

    for (let i = 0; i < nums.length; i++) {
        // Remove out-of-window indices
        if (dq.length && dq[0] <= i - k) dq.shift();

        // Maintain decreasing order
        while (dq.length && nums[dq[dq.length - 1]] < nums[i]) {
            dq.pop();
        }

        dq.push(i);

        if (i >= k - 1) {
            res.push(nums[dq[0]]);
        }
    }
    return res;
}

// ---- INPUT ----
const nums = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;

console.log("Sliding Window Maximum:", maxSlidingWindow(nums, k));
