// range_sum.js

class RangeSum {
    constructor(nums) {
        this.prefix = new Array(nums.length + 1).fill(0);
        for (let i = 0; i < nums.length; i++) {
            this.prefix[i + 1] = this.prefix[i] + nums[i];
        }
    }

    query(l, r) {
        return this.prefix[r + 1] - this.prefix[l];
    }
}

// Example Input
const nums = [1, 2, 3, 4, 5];
const rs = new RangeSum(nums);

// Queries
console.log(rs.query(0, 2)); // Output: 6 (1+2+3)
console.log(rs.query(1, 3)); // Output: 9 (2+3+4)
