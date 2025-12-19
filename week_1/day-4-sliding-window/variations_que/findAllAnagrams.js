const s = "cbaebabacd";
const p = "abc";

function findAnagrams(s, p) {
    const res = [];
    const freq = {};
    for (let c of p) freq[c] = (freq[c] || 0) + 1;

    let left = 0, count = p.length;

    for (let right = 0; right < s.length; right++) {
        if (freq[s[right]]-- > 0) count--;

        if (right - left + 1 === p.length) {
            if (count === 0) res.push(left);
            if (freq[s[left]]++ >= 0) count++;
            left++;
        }
    }
    return res;
}

console.log(findAnagrams(s, p)); // [0,6]
