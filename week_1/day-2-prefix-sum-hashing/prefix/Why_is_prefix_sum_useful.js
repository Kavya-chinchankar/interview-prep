const arr = [2, 4, 6, 8];

// Build prefix sum array
const prefix = new Array(arr.length);
prefix[0] = arr[0];

for (let i = 1; i < arr.length; i++) {
    prefix[i] = prefix[i - 1] + arr[i];
}

// Sum from index 1 to 3
const l = 1, r = 3;
const rangeSum = prefix[r] - prefix[l - 1];

console.log(rangeSum); // Output: 18
