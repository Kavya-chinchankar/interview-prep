// Program: longestSubarrayStreaming.js

const stream = [1, -1, 5, -2, 3];
const k = 3;

let prefixSum = 0;
let maxLen = 0;
const indexMap = new Map();
indexMap.set(0, -1);

stream.forEach((num, i) => {
    prefixSum += num;

    if (indexMap.has(prefixSum - k)) {
        maxLen = Math.max(maxLen, i - indexMap.get(prefixSum - k));
    }

    if (!indexMap.has(prefixSum)) {
        indexMap.set(prefixSum, i);
    }
});

console.log(maxLen); // 4
