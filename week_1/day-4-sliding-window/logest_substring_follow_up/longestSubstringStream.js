const stream = "abcabcbb"; // INPUT

let map = new Map();
let left = 0, maxLen = 0;

for (let i = 0; i < stream.length; i++) {
    if (map.has(stream[i]) && map.get(stream[i]) >= left) {
        left = map.get(stream[i]) + 1;
    }
    map.set(stream[i], i);
    maxLen = Math.max(maxLen, i - left + 1);
}

console.log(maxLen); // 3
