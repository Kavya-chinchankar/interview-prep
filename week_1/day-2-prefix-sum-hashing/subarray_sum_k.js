// subarray_sum_k.js

function subarraySum(nums, k) {
    let count = 0;
    let prefixSum = 0;
    let freq = new Map();
    freq.set(0, 1);

    for (let num of nums) {
        prefixSum += num;
        if (freq.has(prefixSum - k)) {
            count += freq.get(prefixSum - k);
        }
        freq.set(prefixSum, (freq.get(prefixSum) || 0) + 1);
    }
    return count;
}

// Example Input
const nums = [1, 2, 3, 4, 2];
const k = 5;

// Function Call
console.log(subarraySum(nums, k));  // Output: 2
