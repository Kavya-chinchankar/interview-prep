// Program: topKFrequentElements.js

function topKFrequent(nums, k) {
    const freq = new Map();

    for (let num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    // Convert map entries to array and sort by frequency
    const sorted = Array.from(freq.entries())
                        .sort((a, b) => b[1] - a[1]);

    return sorted.slice(0, k).map(item => item[0]);
}

// INPUT
console.log(topKFrequent([1,1,1,2,2,3,3,3,3,4], 2)); // Output: [3, 1]
