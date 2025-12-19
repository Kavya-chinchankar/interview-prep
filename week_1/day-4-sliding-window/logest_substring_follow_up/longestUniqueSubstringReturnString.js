const s = "pwwkew"; // INPUT

function longestSubstring(s) {
    const map = new Map();
    let left = 0, maxLen = 0, start = 0;

    for (let right = 0; right < s.length; right++) {
        if (map.has(s[right]) && map.get(s[right]) >= left) {
            left = map.get(s[right]) + 1;
        }
        map.set(s[right], right);

        if (right - left + 1 > maxLen) {
            maxLen = right - left + 1;
            start = left;
        }
    }
    return s.substring(start, start + maxLen);
}

console.log(longestSubstring(s)); // "wke"
