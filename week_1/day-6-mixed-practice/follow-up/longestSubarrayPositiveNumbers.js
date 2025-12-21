// Program: longestSubarrayPositiveNumbers.js

function longestSubarrayPositive(nums, k) {
    let left = 0, sum = 0, maxLen = 0;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];

        while (sum > k) {
            sum -= nums[left];
            left++;
        }

        if (sum === k) {
            maxLen = Math.max(maxLen, right - left + 1);
        }
    }
    return maxLen;
}

// INPUT
console.log(longestSubarrayPositive([1, 2, 1, 1, 1], 3)); // 3
