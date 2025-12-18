const nums = [3, 2, 2, 3, 4];
const k = 3;

function removeElement(nums, k) {
    let slow = 0;
    for (let fast = 0; fast < nums.length; fast++) {
        if (nums[fast] !== k) {
            nums[slow++] = nums[fast];
        }
    }
    return slow;
}

const length = removeElement(nums, k);
console.log(length);              // 3
console.log(nums.slice(0, length)); // [2, 2, 4]
