function isAnagramOptimized(s, t) {
    if (s.length !== t.length) return false;

    const count = new Array(26).fill(0);

    for (let ch of s) {
        count[ch.charCodeAt(0) - 97]++;
    }

    for (let ch of t) {
        const idx = ch.charCodeAt(0) - 97;
        if (--count[idx] < 0) return false;
    }
    return true;
}

console.log(isAnagramOptimized("anagram", "nagaram")); // true
