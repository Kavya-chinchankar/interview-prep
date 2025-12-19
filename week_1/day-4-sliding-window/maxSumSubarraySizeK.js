const nums = [2, 1, 5, 1, 3, 2]; // INPUT
const k = 3;

function maxSumSubarray(nums, k) {
    if (k > nums.length) return null;

    let windowSum = 0;
    for (let i = 0; i < k; i++) {
        windowSum += nums[i];
    }

    let maxSum = windowSum;

    for (let i = k; i < nums.length; i++) {
        windowSum += nums[i];
        windowSum -= nums[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }
    return maxSum;
}

console.log(maxSumSubarray(nums, k)); // Output: 9
