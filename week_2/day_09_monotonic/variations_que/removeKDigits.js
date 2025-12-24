function removeKdigits(num, k) {
    const stack = [];

    for (const d of num) {
        while (stack.length && k > 0 && stack[stack.length - 1] > d) {
            stack.pop();
            k--;
        }
        stack.push(d);
    }

    let res = stack.slice(0, stack.length - k).join("").replace(/^0+/, "");
    return res || "0";
}
