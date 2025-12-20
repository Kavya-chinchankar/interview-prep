// Program: firstUniqueCharacter.js
function firstUniqueChar(s) {
    const freq = {};
    for (let ch of s) freq[ch] = (freq[ch] || 0) + 1;

    for (let ch of s) {
        if (freq[ch] === 1) return ch;
    }
    return null;
}

console.log(firstUniqueChar("leetcode")); // l
