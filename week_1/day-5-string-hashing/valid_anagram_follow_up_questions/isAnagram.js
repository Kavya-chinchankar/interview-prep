function isAnagram(s, t) {
    if (s.length !== t.length) return false;

    const freq = new Array(26).fill(0);

    for (let ch of s) {
        freq[ch.charCodeAt(0) - 97]++;
    }

    for (let ch of t) {
        freq[ch.charCodeAt(0) - 97]--;
        if (freq[ch.charCodeAt(0) - 97] < 0) return false;
    }

    return true;
}

const s = "listen";
const t = "silent";

console.log("Are the strings anagrams?", isAnagram(s, t));
