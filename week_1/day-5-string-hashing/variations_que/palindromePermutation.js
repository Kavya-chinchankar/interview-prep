function canPermutePalindrome(s) {
    const freq = {};
    for (let ch of s) freq[ch] = (freq[ch] || 0) + 1;

    let odd = 0;
    for (let key in freq) {
        if (freq[key] % 2 === 1) odd++;
        if (odd > 1) return false;
    }
    return true;
}

console.log(canPermutePalindrome("carrace")); // true
