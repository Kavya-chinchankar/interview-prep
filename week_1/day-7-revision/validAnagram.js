// Input
const s = "listen";
const t = "silent";

function isAnagram(s, t) {
    if (s.length !== t.length) return false;

    const freq = {};

    // Count frequency of s
    for (let ch of s) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    // Decrease frequency using t
    for (let ch of t) {
        if (!freq[ch]) return false;
        freq[ch]--;
    }

    return true;
}

console.log(isAnagram(s, t)); // Output: true
