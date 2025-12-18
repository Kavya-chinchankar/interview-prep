const nums = [1, 2, 4, 6, 10];
const target = 8;

function pairSum(nums, target) {
    let left = 0, right = nums.length - 1;
    while (left < right) {
        const sum = nums[left] + nums[right];
        if (sum === target) return [left, right];
        sum < target ? left++ : right--;
    }
    return -1;
}

console.log(pairSum(nums, target)); // [1, 3]
