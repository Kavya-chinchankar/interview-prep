// prefix_sum_memory_usage.js

const arr = [2, 4, 6, 8];

// Extra array of size n
const prefix = new Array(arr.length);

// Build prefix sum
prefix[0] = arr[0];
for (let i = 1; i < arr.length; i++) {
    prefix[i] = prefix[i - 1] + arr[i];
}

console.log(prefix); // [2, 6, 12, 20]
