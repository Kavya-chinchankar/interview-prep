// minStack.js
class MinStack {
    constructor() {
        this.stack = [];
    }
    push(val) {
        const minVal = this.stack.length === 0 ? val : Math.min(val, this.stack[this.stack.length - 1][1]);
        this.stack.push([val, minVal]);
    }
    pop() { this.stack.pop(); }
    top() { return this.stack[this.stack.length - 1][0]; }
    getMin() { return this.stack[this.stack.length - 1][1]; }
}

// INPUT
const ms = new MinStack();
ms.push(3); ms.push(5); ms.push(2);
console.log(ms.getMin()); // 2
