const nums = [-2, -1, -3, -4]; // INPUT
const k = 2;

function maxSumSubarray(nums, k) {
    let windowSum = nums[0] + nums[1];
    let maxSum = windowSum;
    for (let i = k; i < nums.length; i++) {
        windowSum += nums[i] - nums[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }
    return maxSum;
}

console.log(maxSumSubarray(nums, k)); // -3
