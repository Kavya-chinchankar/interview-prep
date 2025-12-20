const freq = new Map();

const stream_s = "abc";
const stream_t = "bca";

// Process first stream
for (const ch of stream_s) {
    freq.set(ch, (freq.get(ch) || 0) + 1);
}

// Process second stream
for (const ch of stream_t) {
    freq.set(ch, (freq.get(ch) || 0) - 1);
}

// Check if all counts are zero
let isAnagram = true;
for (const value of freq.values()) {
    if (value !== 0) {
        isAnagram = false;
        break;
    }
}

console.log("Are the strings anagrams?", isAnagram);
