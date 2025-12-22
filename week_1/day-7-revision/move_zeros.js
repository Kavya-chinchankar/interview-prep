function moveZeroes(nums) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            j++;
        }
    }
}

let nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums);

