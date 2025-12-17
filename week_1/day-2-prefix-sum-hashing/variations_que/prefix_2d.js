// prefix_2d.js

function buildPrefix2D(matrix) {
    const m = matrix.length, n = matrix[0].length;
    const prefix = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            prefix[i+1][j+1] =
                matrix[i][j]
                + prefix[i][j+1]
                + prefix[i+1][j]
                - prefix[i][j];
        }
    }
    return prefix;
}

function query(prefix, r1, c1, r2, c2) {
    return (
        prefix[r2+1][c2+1]
        - prefix[r1][c2+1]
        - prefix[r2+1][c1]
        + prefix[r1][c1]
    );
}

// Example Input
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const prefix = buildPrefix2D(matrix);
console.log(query(prefix, 0, 0, 1, 1)); // Output: 12
console.log(query(prefix, 1, 1, 2, 2)); // Output: 28
