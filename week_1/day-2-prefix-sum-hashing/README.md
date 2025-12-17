# WEEK 1 – DAY 2

## Prefix Sum, Hashing, Analytical Thinking (Sony Interview Focus)

This day focuses on **prefix sum and hashing patterns**, which Sony interviewers frequently use to evaluate a candidate’s ability to **optimize brute-force solutions**, reason analytically, and connect DSA concepts to **real product and platform features**.

Sony evaluates here:

* Converting **O(n²) → O(n)** solutions
* Correct use of **prefix math + hash maps**
* Handling **edge cases and negative numbers**
* Translating logic into **scalable backend design**

---

## 1. Prefix Sum – Core Concept

### Interview Definition (Say This)

> “Prefix sum is a preprocessing technique where we store cumulative sums so that range queries and subarray calculations can be answered in constant time.”

---

### Definition

For an array `arr`:

```
prefix[i] = arr[0] + arr[1] + ... + arr[i]
```

### Range Sum Formula

```
sum(l, r) = prefix[r] - prefix[l - 1]
```

---

### Interview Warm-Up Questions

1. Why is prefix sum useful?
2. What is the preprocessing cost?
3. Can prefix sum handle negative numbers?
4. When is prefix sum not sufficient?
5. How much memory does it consume?

---

### Sony One-Line Wrap-Up

> “Prefix sum trades O(n) preprocessing time and memory for O(1) range query performance, making it ideal for static arrays with frequent queries.”

---

## 2. Problem 1: Subarray Sum = K

### Interview Question

> Given an integer array and an integer `k`, return the total number of continuous subarrays whose sum equals `k`.

---

### Brute Force (Explain First)

* Check all subarrays
* Time Complexity: **O(n²)** ❌

Sony expects you to reject this approach quickly.

---

### Optimized Approach: Prefix Sum + Hash Map

### Key Insight (Say Clearly)

> “If two prefix sums differ by `k`, then the elements between those indices form a subarray whose sum is `k`.”

Formally:

```
prefix[j] - prefix[i] = k → subarray (i+1 to j)
```

---

### Python Solution

```python
def subarraySum(nums, k):
    count = 0
    prefix_sum = 0
    freq = {0: 1}

    for num in nums:
        prefix_sum += num
        if prefix_sum - k in freq:
            count += freq[prefix_sum - k]
        freq[prefix_sum] = freq.get(prefix_sum, 0) + 1

    return count
```

### JavaScript Solution

```javascript
function subarraySum(nums, k) {
    let count = 0;
    let prefixSum = 0;
    let freq = new Map();
    freq.set(0, 1);

    for (let num of nums) {
        prefixSum += num;
        if (freq.has(prefixSum - k)) {
            count += freq.get(prefixSum - k);
        }
        freq.set(prefixSum, (freq.get(prefixSum) || 0) + 1);
    }
    return count;
}
```

---

### Complexity

* **Time:** O(n)
* **Space:** O(n)

---

### Sony Follow-Up Questions

1. Why does `{0:1}` exist?
2. Can sliding window work here?
3. What if all numbers are positive?
4. How would you return indices instead of count?
5. How does this work for real-time streaming data?

---

### Sony Power Statement

> “Using prefix sum with a hash map allows us to count subarrays summing to k in linear time, even when negative numbers are present.”

---

## 3. Problem 2: Range Sum Query

### Interview Question

> Given an array and multiple queries `[l, r]`, return the sum of elements between indices `l` and `r`.

---

### Optimal Approach: Prefix Sum Preprocessing

> “I preprocess the array into a prefix sum array so that each range query can be answered in constant time using subtraction.”

---

### Python Implementation

```python
class RangeSum:
    def __init__(self, nums):
        self.prefix = [0] * (len(nums) + 1)
        for i in range(len(nums)):
            self.prefix[i + 1] = self.prefix[i] + nums[i]

    def query(self, l, r):
        return self.prefix[r + 1] - self.prefix[l]
```

### JavaScript Implementation

```javascript
class RangeSum {
    constructor(nums) {
        this.prefix = new Array(nums.length + 1).fill(0);
        for (let i = 0; i < nums.length; i++) {
            this.prefix[i + 1] = this.prefix[i] + nums[i];
        }
    }

    query(l, r) {
        return this.prefix[r + 1] - this.prefix[l];
    }
}
```

---

### Complexity

* **Preprocessing:** O(n)
* **Each Query:** O(1)

---

### Sony Follow-Ups

1. What if the array updates frequently?
2. How would you handle millions of queries?
3. When would you use a Fenwick Tree?
4. Can this be parallelized?
5. What about memory constraints?

---

## 4. Sony-Level Variations (Very Important)

Expect at least one of the following:

1. Count subarrays with sum divisible by `k`
2. Longest subarray with sum `k`
3. Minimum size subarray ≥ `k` (positive numbers)
4. 2D prefix sum (matrix range query)
5. Prefix XOR instead of prefix sum

---

## 5. Project (Concept): Audit Log Schema Design

### Interview Framing

> “Design an audit logging system to track user actions in ControlHub.”

---

### Core Requirements

* Track **who did what and when**
* Immutable, append-only records
* Query-friendly for audits
* Secure and compliant

---

### Basic Schema (SQL)

```sql
audit_logs (
    id BIGINT PRIMARY KEY,
    user_id BIGINT NOT NULL,
    action VARCHAR(100),
    resource VARCHAR(100),
    metadata JSON,
    ip_address VARCHAR(45),
    user_agent TEXT,
    created_at TIMESTAMP
)
```

### MongoDB-Style Schema

```json
{
  "user_id": "U123",
  "action": "LOGIN",
  "resource": "CONTROL_PANEL",
  "metadata": { "status": "SUCCESS" },
  "ip_address": "192.168.1.10",
  "timestamp": "2025-01-01T10:30:00Z"
}
```

---

### Design Decisions Sony Likes

* Indexed timestamps
* Append-only logs
* Tamper prevention
* Log retention policy
* Separation from transactional databases

---

## 6. End-of-Day Expectations (Sony Standard)

By the end of Day 2, you should be able to:

* Solve **Subarray Sum = K** without hints
* Use prefix sum instinctively
* Explain audit log schema like a backend engineer
* Handle scale and security follow-up questions

---

## ✅ Day 2 Status

✔ Prefix Sum fundamentals completed
✔ Hash map integration mastered
✔ System design thinking demonstrated

---

**Next:** Day 3 – Two Pointers
