
function buildPrefix(arr) {
    const prefix = new Array(arr.length);
    prefix[0] = arr[0];

    for (let i = 1; i < arr.length; i++) {
        prefix[i] = prefix[i - 1] + arr[i];
    }

    return prefix;
}

const arr = [2, 4, 6, 8];
console.log(buildPrefix(arr));

