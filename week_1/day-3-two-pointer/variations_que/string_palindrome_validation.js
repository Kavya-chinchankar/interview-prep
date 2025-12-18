const s = "A man, a plan, a canal: Panama";

function isPalindrome(s) {
    let left = 0, right = s.length - 1;

    while (left < right) {
        while (left < right && !/[a-zA-Z0-9]/.test(s[left])) left++;
        while (left < right && !/[a-zA-Z0-9]/.test(s[right])) right--;
        if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
        left++;
        right--;
    }
    return true;
}

console.log(isPalindrome(s)); // true
