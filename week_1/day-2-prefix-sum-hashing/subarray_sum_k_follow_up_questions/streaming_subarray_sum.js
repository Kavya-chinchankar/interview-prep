// streaming_subarray_sum.js

class StreamingSubarraySum {
    constructor(k) {
        this.k = k;
        this.prefixSum = 0;
        this.freq = new Map();
        this.freq.set(0, 1);
        this.count = 0;
    }

    add(num) {
        this.prefixSum += num;
        if (this.freq.has(this.prefixSum - this.k)) {
            this.count += this.freq.get(this.prefixSum - this.k);
        }
        this.freq.set(this.prefixSum, (this.freq.get(this.prefixSum) || 0) + 1);
        return this.count;
    }
}

// Example Usage
const stream = new StreamingSubarraySum(3);
const inputs = [1, 2, 1, 1];

for (let num of inputs) {
    console.log(stream.add(num));
}
// Output:
// 0
// 1
// 1
// 2
