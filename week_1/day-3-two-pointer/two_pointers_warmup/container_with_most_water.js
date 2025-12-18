const height = [1,8,6,2,5,4,8,3,7];

function maxArea(height) {
    let left = 0, right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        const area = (right - left) * Math.min(height[left], height[right]);
        maxArea = Math.max(maxArea, area);

        height[left] < height[right] ? left++ : right--;
    }
    return maxArea;
}

console.log(maxArea(height)); // 49
