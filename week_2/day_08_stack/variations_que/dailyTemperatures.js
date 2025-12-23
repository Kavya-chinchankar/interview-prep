// dailyTemperatures.js
function dailyTemperatures(t) {
    const res = new Array(t.length).fill(0);
    const stack = [];
    for (let i = 0; i < t.length; i++) {
        while (stack.length && t[i] > t[stack[stack.length - 1]]) {
            const idx = stack.pop();
            res[idx] = i - idx;
        }
        stack.push(i);
    }
    return res;
}

// INPUT
console.log(dailyTemperatures([73,74,75,71,69,72,76,73]));
