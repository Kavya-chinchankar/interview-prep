# prefix_2d.py

def buildPrefix2D(matrix):
    m, n = len(matrix), len(matrix[0])
    prefix = [[0]*(n+1) for _ in range(m+1)]

    for i in range(m):
        for j in range(n):
            prefix[i+1][j+1] = (
                matrix[i][j]
                + prefix[i][j+1]
                + prefix[i+1][j]
                - prefix[i][j]
            )
    return prefix

def query(prefix, r1, c1, r2, c2):
    return (
        prefix[r2+1][c2+1]
        - prefix[r1][c2+1]
        - prefix[r2+1][c1]
        + prefix[r1][c1]
    )

# Example Input
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

prefix = buildPrefix2D(matrix)
print(query(prefix, 0, 0, 1, 1))  # Output: 12 (sum of top-left 2x2 submatrix)
print(query(prefix, 1, 1, 2, 2))  # Output: 28 (sum of bottom-right 2x2 submatrix)
