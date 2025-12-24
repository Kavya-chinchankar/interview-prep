# File: largest_rectangle_histogram.py

def largestRectangleArea(heights):
    stack = []
    max_area = 0
    heights.append(0)  # sentinel to flush stack

    for i in range(len(heights)):
        while stack and heights[i] < heights[stack[-1]]:
            h = heights[stack.pop()]
            width = i if not stack else i - stack[-1] - 1
            max_area = max(max_area, h * width)
        stack.append(i)

    return max_area


# INPUT
heights = [2, 1, 5, 6, 2, 3]
print(largestRectangleArea(heights))
# Output: 10
