const nums = [-7, -3, 2, 3, 11];

function sortedSquares(nums) {
    const n = nums.length;
    const res = new Array(n);
    let left = 0, right = n - 1;

    for (let i = n - 1; i >= 0; i--) {
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            res[i] = nums[left] ** 2;
            left++;
        } else {
            res[i] = nums[right] ** 2;
            right--;
        }
    }
    return res;
}

console.log(sortedSquares(nums)); // [4, 9, 9, 49, 121]
