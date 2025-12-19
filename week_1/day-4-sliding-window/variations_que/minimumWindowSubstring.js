const s = "ADOBECODEBANC";
const t = "ABC";

function minWindow(s, t) {
    const need = {};
    for (let c of t) need[c] = (need[c] || 0) + 1;

    let left = 0, count = 0, minLen = Infinity, start = 0;

    for (let right = 0; right < s.length; right++) {
        if (need[s[right]] !== undefined) {
            if (--need[s[right]] >= 0) count++;
        }

        while (count === t.length) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                start = left;
            }
            if (need[s[left]] !== undefined) {
                if (++need[s[left]] > 0) count--;
            }
            left++;
        }
    }
    return minLen === Infinity ? "" : s.slice(start, start + minLen);
}

console.log(minWindow(s, t)); // BANC
