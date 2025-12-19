const nums = [2, 1, 5]; // INPUT
const k = 5;

function maxSumSubarray(nums, k) {
    if (k > nums.length) return null;
    return nums.slice(0, k).reduce((a, b) => a + b, 0);
}

console.log(maxSumSubarray(nums, k)); // null
