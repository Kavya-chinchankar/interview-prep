// Program: firstNonRepeatingStream.js
const stream = "leetcode";
const freq = {};
const queue = [];

for (let ch of stream) {
    freq[ch] = (freq[ch] || 0) + 1;
    queue.push(ch);

    while (queue.length && freq[queue[0]] > 1) {
        queue.shift();
    }
}

console.log(queue.length ? queue[0] : -1); // l
