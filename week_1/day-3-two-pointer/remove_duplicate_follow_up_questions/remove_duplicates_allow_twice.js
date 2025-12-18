let nums = [1, 1, 1, 2, 2, 3];

function removeDuplicatesTwice(nums) {
    if (nums.length <= 2) {
        return nums.length;
    }

    let slow = 2;

    for (let fast = 2; fast < nums.length; fast++) {
        if (nums[fast] !== nums[slow - 2]) {
            nums[slow] = nums[fast];
            slow++;
        }
    }

    return slow;
}

let length = removeDuplicatesTwice(nums);
console.log(nums.slice(0, length)); // Output: [1, 1, 2, 2, 3]
