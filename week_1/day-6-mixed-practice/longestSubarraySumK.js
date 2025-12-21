// Program: longestSubarraySumK.js

function longestSubarraySum(nums, k) {
    let prefixSum = 0;
    const indexMap = new Map();
    indexMap.set(0, -1);
    let maxLen = 0;

    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];

        if (indexMap.has(prefixSum - k)) {
            maxLen = Math.max(maxLen, i - indexMap.get(prefixSum - k));
        }

        if (!indexMap.has(prefixSum)) {
            indexMap.set(prefixSum, i);
        }
    }
    return maxLen;
}

// INPUT
const nums = [1, -1, 5, -2, 3];
const k = 3;
console.log(longestSubarraySum(nums, k)); // Output: 4
