function longestPalindrome(s) {
    const freq = {};
    for (let ch of s) freq[ch] = (freq[ch] || 0) + 1;

    let len = 0;
    let odd = false;

    for (let k in freq) {
        len += Math.floor(freq[k] / 2) * 2;
        if (freq[k] % 2 === 1) odd = true;
    }
    return odd ? len + 1 : len;
}

console.log(longestPalindrome("abccccdd")); // 7
