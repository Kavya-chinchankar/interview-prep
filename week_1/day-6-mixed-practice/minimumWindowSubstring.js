// Program: minimumWindowSubstring.js
function minWindow(s, t) {
    if (!s || !t) return "";

    const need = {};
    for (let ch of t) need[ch] = (need[ch] || 0) + 1;

    let left = 0;
    let count = t.length;
    let minLen = Infinity;
    let start = 0;

    for (let right = 0; right < s.length; right++) {
        if (need[s[right]] > 0) count--;
        need[s[right]] = (need[s[right]] || 0) - 1;

        while (count === 0) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                start = left;
            }

            need[s[left]]++;
            if (need[s[left]] > 0) count++;
            left++;
        }
    }

    return minLen === Infinity ? "" : s.substring(start, start + minLen);
}

// INPUT
console.log(minWindow("ADOBECODEBANC", "ABC")); // "BANC"
