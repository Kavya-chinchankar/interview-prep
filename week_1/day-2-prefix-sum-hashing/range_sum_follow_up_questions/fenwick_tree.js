// fenwick_tree.js

class FenwickTree {
    constructor(n) {
        this.bit = new Array(n + 1).fill(0);
    }

    update(i, delta) {
        i += 1;
        while (i < this.bit.length) {
            this.bit[i] += delta;
            i += i & -i;
        }
    }

    query(i) {
        let s = 0;
        i += 1;
        while (i > 0) {
            s += this.bit[i];
            i -= i & -i;
        }
        return s;
    }

    rangeSum(l, r) {
        return this.query(r) - this.query(l - 1);
    }
}

// Example Usage
const nums = [1, 2, 3, 4, 5];
const ft = new FenwickTree(nums.length);

// Build the tree
nums.forEach((val, i) => ft.update(i, val));

console.log(ft.rangeSum(0, 2)); // Output: 6 (1+2+3)
console.log(ft.rangeSum(1, 3)); // Output: 9 (2+3+4)

// Update index 2 by +2 (nums[2] = 5)
ft.update(2, 2);
console.log(ft.rangeSum(0, 2)); // Output: 8 (1+2+5)
