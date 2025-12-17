// min_subarray_len.js

function minSubArrayLen(k, nums) {
    let left = 0;
    let sum = 0;
    let ans = Infinity;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];
        while (sum >= k) {
            ans = Math.min(ans, right - left + 1);
            sum -= nums[left++];
        }
    }

    return ans === Infinity ? 0 : ans;
}

// Example Input
const nums = [2, 3, 1, 2, 4, 3];
const k = 7;

console.log(minSubArrayLen(k, nums)); // Output: 2 ([4,3])
