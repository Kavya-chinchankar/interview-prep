const arr = [3, -2, 5, -1];

const prefix = [arr[0]];

for (let i = 1; i < arr.length; i++) {
    prefix.push(prefix[prefix.length - 1] + arr[i]);
}

// sum from index 0 to 2
console.log(prefix[2]);
