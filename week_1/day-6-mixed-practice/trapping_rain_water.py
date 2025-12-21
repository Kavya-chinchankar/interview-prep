# Program: trapping_rain_water.py

def trap(height):
    if not height:
        return 0

    left, right = 0, len(height) - 1
    left_max = right_max = 0
    water = 0

    while left < right:
        if height[left] < height[right]:
            left_max = max(left_max, height[left])
            water += left_max - height[left]
            left += 1
        else:
            right_max = max(right_max, height[right])
            water += right_max - height[right]
            right -= 1

    return water


# INPUT
heights = [0,1,0,2,1,0,1,3,2,1,2,1]
print(trap(heights))  # Output: 6
