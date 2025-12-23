function stockSpan(prices) {
    const stack = [];
    const span = new Array(prices.length);

    for (let i = 0; i < prices.length; i++) {
        while (stack.length && prices[stack[stack.length - 1]] <= prices[i]) {
            stack.pop();
        }
        span[i] = stack.length === 0 ? i + 1 : i - stack[stack.length - 1];
        stack.push(i);
    }
    return span;
}

// INPUT
console.log(stockSpan([100,80,60,70,60,75,85])); // [1,1,1,2,1,4,6]
