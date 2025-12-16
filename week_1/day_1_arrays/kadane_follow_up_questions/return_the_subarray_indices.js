function maxSubArrayWithIndices(nums) {
    let maxSum = nums[0], currSum = nums[0];
    let start = 0, end = 0, tempStart = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > currSum + nums[i]) {
            currSum = nums[i];
            tempStart = i;
        } else {
            currSum += nums[i];
        }

        if (currSum > maxSum) {
            maxSum = currSum;
            start = tempStart;
            end = i;
        }
    }

    return { maxSum, start, end };
}

const result = maxSubArrayWithIndices(
  [-2, 1, -3, 4, -1, 2, 1, -5, 4]
);
console.log(result);
