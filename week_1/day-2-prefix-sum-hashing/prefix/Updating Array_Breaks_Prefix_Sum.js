let arr = [3, -2, 5, -1];

// build prefix
let prefix = [arr[0]];
for (let i = 1; i < arr.length; i++) {
    prefix.push(prefix[i - 1] + arr[i]);
}
