height = [1,8,6,2,5,4,8,3,7]

def max_area(height):
    left, right = 0, len(height) - 1
    max_area = 0

    while left < right:
        area = (right - left) * min(height[left], height[right])
        max_area = max(max_area, area)

        if height[left] < height[right]:
            left += 1
        else:
            right -= 1

    return max_area

print(max_area(height))  # Output: 49
