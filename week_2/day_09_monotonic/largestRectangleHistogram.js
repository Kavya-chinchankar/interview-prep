// File: largestRectangleHistogram.js

function largestRectangleArea(heights) {
    const stack = [];
    heights.push(0); // sentinel
    let maxArea = 0;

    for (let i = 0; i < heights.length; i++) {
        while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
            const h = heights[stack.pop()];
            const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, h * width);
        }
        stack.push(i);
    }
    return maxArea;
}

// INPUT
console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));
// Output: 10
