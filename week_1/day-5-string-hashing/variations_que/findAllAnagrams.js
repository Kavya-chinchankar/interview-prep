function findAnagrams(s, p) {
    const res = [];
    const pCount = {};
    const window = {};

    for (let ch of p) pCount[ch] = (pCount[ch] || 0) + 1;

    for (let i = 0; i < s.length; i++) {
        window[s[i]] = (window[s[i]] || 0) + 1;

        if (i >= p.length) {
            const left = s[i - p.length];
            if (window[left] === 1) delete window[left];
            else window[left]--;
        }

        if (JSON.stringify(window) === JSON.stringify(pCount)) {
            res.push(i - p.length + 1);
        }
    }
    return res;
}

console.log(findAnagrams("cbaebabacd", "abc"));
