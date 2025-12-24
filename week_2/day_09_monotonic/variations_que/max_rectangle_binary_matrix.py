def maximalRectangle(matrix):
    if not matrix:
        return 0

    heights = [0] * len(matrix[0])
    max_area = 0

    for row in matrix:
        for i in range(len(row)):
            heights[i] = heights[i] + 1 if row[i] == "1" else 0
        max_area = max(max_area, largestRectangleArea(heights))

    return max_area


def largestRectangleArea(heights):
    stack = []
    heights.append(0)
    area = 0

    for i in range(len(heights)):
        while stack and heights[i] < heights[stack[-1]]:
            h = heights[stack.pop()]
            w = i if not stack else i - stack[-1] - 1
            area = max(area, h * w)
        stack.append(i)

    heights.pop()
    return area


# INPUT
matrix = [
    ["1","0","1","0","0"],
    ["1","0","1","1","1"],
    ["1","1","1","1","1"],
    ["1","0","0","1","0"]
]
print(maximalRectangle(matrix))
