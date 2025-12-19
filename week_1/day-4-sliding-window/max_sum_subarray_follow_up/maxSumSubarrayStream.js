const stream = [2, 1, 5, 1, 3, 2]; // INPUT
const k = 3;

let queue = [];
let windowSum = 0;
let maxSum = -Infinity;

for (const num of stream) {
    queue.push(num);
    windowSum += num;
    if (queue.length > k) {
        windowSum -= queue.shift();
    }
    if (queue.length === k) {
        maxSum = Math.max(maxSum, windowSum);
    }
}

console.log(maxSum); // 9
