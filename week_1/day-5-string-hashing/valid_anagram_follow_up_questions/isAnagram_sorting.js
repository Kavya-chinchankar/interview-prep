const s = "listen";
const t = "silent";

function isAnagramSorting(s, t) {
    return s.split('').sort().join('') === t.split('').sort().join('');
}

console.log(isAnagramSorting(s, t)); // true
