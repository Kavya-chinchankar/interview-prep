function maximalRectangle(matrix) {
    if (!matrix.length) return 0;
    const heights = new Array(matrix[0].length).fill(0);
    let maxArea = 0;

    for (const row of matrix) {
        for (let i = 0; i < row.length; i++) {
            heights[i] = row[i] === "1" ? heights[i] + 1 : 0;
        }
        maxArea = Math.max(maxArea, largestRectangleArea(heights));
    }
    return maxArea;
}
