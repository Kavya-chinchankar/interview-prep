// evaluatePostfix.js
function evalPostfix(tokens) {
    const stack = [];
    for (let t of tokens) {
        if ("+-*/".includes(t)) {
            const b = stack.pop(), a = stack.pop();
            stack.push(Math.trunc(eval(a + t + b)));
        } else {
            stack.push(Number(t));
        }
    }
    return stack[0];
}

// INPUT
console.log(evalPostfix(["2","1","+","3","*"])); // 9
