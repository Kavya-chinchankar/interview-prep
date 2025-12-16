class StreamingKadane {
    constructor() {
        this.currSum = null;
        this.maxSum = null;
    }

    add(num) {
        if (this.currSum === null) {
            this.currSum = this.maxSum = num;
        } else {
            this.currSum = Math.max(num, this.currSum + num);
            this.maxSum = Math.max(this.maxSum, this.currSum);
        }
        return this.maxSum;
    }
}

const sk = new StreamingKadane();

console.log(sk.add(-2)); // -2
console.log(sk.add(1));  // 1
console.log(sk.add(-3)); // 1
console.log(sk.add(4));  // 4
console.log(sk.add(-1)); // 4
console.log(sk.add(2));  // 5
console.log(sk.add(1));  // 6
console.log(sk.add(-5)); // 6
console.log(sk.add(4));  // 6
