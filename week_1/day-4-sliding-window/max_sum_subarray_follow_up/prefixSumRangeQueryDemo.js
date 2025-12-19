const nums = [2, 1, 5, 1, 3, 2]; // INPUT
const prefix = [0];

for (const n of nums) {
    prefix.push(prefix[prefix.length - 1] + n);
}

console.log(prefix[4] - prefix[1]); // 7
