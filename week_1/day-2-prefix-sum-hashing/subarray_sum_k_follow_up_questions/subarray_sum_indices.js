// subarray_sum_indices.js

function subarraySumIndices(nums, k) {
    let prefixSum = 0;
    const indexMap = new Map();
    indexMap.set(0, [-1]);
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];

        if (indexMap.has(prefixSum - k)) {
            for (let start of indexMap.get(prefixSum - k)) {
                result.push([start + 1, i]);
            }
        }

        if (!indexMap.has(prefixSum)) {
            indexMap.set(prefixSum, []);
        }
        indexMap.get(prefixSum).push(i);
    }

    return result;
}

// Example Input
const nums = [1, 2, 3, 1, 2];
const k = 3;

// Function Call
console.log(subarraySumIndices(nums, k));
// Output: [ [0, 1], [2, 2], [3, 4] ]
