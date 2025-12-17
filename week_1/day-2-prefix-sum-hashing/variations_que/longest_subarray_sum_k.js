// longest_subarray_sum_k.js

function longestSubarray(nums, k) {
    let prefix = 0;
    const map = new Map();
    map.set(0, -1);
    let maxLen = 0;

    for (let i = 0; i < nums.length; i++) {
        prefix += nums[i];
        if (map.has(prefix - k)) {
            maxLen = Math.max(maxLen, i - map.get(prefix - k));
        }
        if (!map.has(prefix)) {
            map.set(prefix, i);
        }
    }
    return maxLen;
}

// Example Input
const nums = [1, -1, 5, -2, 3];
const k = 3;

console.log(longestSubarray(nums, k)); // Output: 4 (subarray [1, -1, 5, -2])
