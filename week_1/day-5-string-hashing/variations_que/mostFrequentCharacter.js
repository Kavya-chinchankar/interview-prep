function mostFrequentChar(s) {
    const freq = {};
    let maxChar = s[0];

    for (let ch of s) {
        freq[ch] = (freq[ch] || 0) + 1;
        if (freq[ch] > freq[maxChar]) maxChar = ch;
    }
    return maxChar;
}

console.log(mostFrequentChar("success")); // s
