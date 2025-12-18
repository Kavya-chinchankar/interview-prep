const nums = [3, 1, 4, 2];
const target = 6;

function twoSumUnsorted(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i];
        }
        map.set(nums[i], i);
    }
}

console.log(twoSumUnsorted(nums, target)); // [2, 3]
