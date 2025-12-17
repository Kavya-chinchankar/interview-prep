// subarrays_div_by_k.js

function subarraysDivByK(nums, k) {
    let count = 0;
    let prefix = 0;
    let freq = new Map();
    freq.set(0, 1);

    for (let num of nums) {
        prefix = ((prefix + num) % k + k) % k; // handle negative numbers
        count += freq.get(prefix) || 0;
        freq.set(prefix, (freq.get(prefix) || 0) + 1);
    }
    return count;
}

// Example Input
const nums = [4, 5, 0, -2, -3, 1];
const k = 5;

console.log(subarraysDivByK(nums, k)); // Output: 7
