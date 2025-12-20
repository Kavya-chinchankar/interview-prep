// Program: firstNonRepeatingOptimized.js
function firstUniqCharOptimized(s) {
    const count = new Array(26).fill(0);

    for (let ch of s) {
        count[ch.charCodeAt(0) - 97]++;
    }

    for (let i = 0; i < s.length; i++) {
        if (count[s.charCodeAt(i) - 97] === 1) return i;
    }
    return -1;
}

console.log(firstUniqCharOptimized("leetcode")); // 0
