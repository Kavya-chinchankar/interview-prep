const nums = [0, 1, 0, 3, 12];

function moveZeros(nums) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            j++;
        }
    }
    return nums;
}

console.log(moveZeros(nums)); // [1, 3, 12, 0, 0]
