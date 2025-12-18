const nums = [2, 1, 5, 1, 3, 2];
const k = 3;

function maxSumSubarray(nums, k) {
    let windowSum = nums.slice(0, k).reduce((a, b) => a + b, 0);
    let maxSum = windowSum;

    for (let i = k; i < nums.length; i++) {
        windowSum += nums[i] - nums[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }
    return maxSum;
}

console.log(maxSumSubarray(nums, k)); // 9
