// subarray_sum_positive.js

function subarraySumPositive(nums, k) {
    let left = 0;
    let currSum = 0;
    let count = 0;

    for (let right = 0; right < nums.length; right++) {
        currSum += nums[right];

        while (currSum > k) {
            currSum -= nums[left];
            left++;
        }

        if (currSum === k) {
            count++;
        }
    }

    return count;
}

// Example Input
const nums = [1, 2, 1, 1, 1];
const k = 3;

// Function Call
console.log(subarraySumPositive(nums, k));  // Output: 4
