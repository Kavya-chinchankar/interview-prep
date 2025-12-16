function maxSubarrayCircular(nums) {
    let totalSum = 0;
    let maxSum = nums[0], currMax = nums[0];
    let minSum = nums[0], currMin = nums[0];

    for (let num of nums) {
        totalSum += num;

        currMax = Math.max(num, currMax + num);
        maxSum = Math.max(maxSum, currMax);

        currMin = Math.min(num, currMin + num);
        minSum = Math.min(minSum, currMin);
    }

    if (maxSum < 0) return maxSum;

    return Math.max(maxSum, totalSum - minSum);
}

console.log(maxSubarrayCircular([1, -2, 3, -2]));
