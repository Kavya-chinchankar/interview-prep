// Program: validParenthesesStack.js

function isValid(s) {
    const stack = [];
    const map = { ')': '(', ']': '[', '}': '{' };

    for (let ch of s) {
        if (map[ch]) {
            if (!stack.length || stack.pop() !== map[ch]) {
                return false;
            }
        } else {
            stack.push(ch);
        }
    }
    return stack.length === 0;
}

// INPUT
console.log(isValid("()[]{}")); // true
console.log(isValid("(]"));     // false
