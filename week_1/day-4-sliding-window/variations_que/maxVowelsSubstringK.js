const s = "abciiidef";
const k = 3;

function maxVowels(s, k) {
    const vowels = new Set(['a','e','i','o','u']);
    let count = 0;

    for (let i = 0; i < k; i++)
        if (vowels.has(s[i])) count++;

    let max = count;

    for (let i = k; i < s.length; i++) {
        if (vowels.has(s[i])) count++;
        if (vowels.has(s[i - k])) count--;
        max = Math.max(max, count);
    }
    return max;
}

console.log(maxVowels(s, k)); // 3
