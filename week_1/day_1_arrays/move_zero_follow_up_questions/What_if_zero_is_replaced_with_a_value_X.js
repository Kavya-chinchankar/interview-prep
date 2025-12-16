function moveValueToEnd(nums, X) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== X) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            j++;
        }
    }
}

let nums = [2, 1, 2, 3, 2, 4, 2];
moveValueToEnd(nums, 2);
console.log(nums);
