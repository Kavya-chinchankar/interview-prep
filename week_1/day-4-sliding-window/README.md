# WEEK 1 – DAY 4

## Sliding Window, Real-Time Thinking, API Flow Design (Sony Interview Focus)

This day focuses on **Sliding Window techniques** and **real-time backend thinking**, exactly how **Sony product, platform, and security interviewers** evaluate candidates. The emphasis is on **maintaining state efficiently**, avoiding recomputation, and explaining **end-to-end request flows** clearly.

Sony evaluates:

* Efficient state maintenance
* Avoidance of repeated computation
* Ability to reason about real-time streams
* Clear API and request-flow modeling

---

## 1. Sliding Window – Core Concept

### Interview Definition (Say This)

> “Sliding window maintains a dynamic window over data and updates state incrementally instead of recomputing from scratch.”

---

### When Sony Expects Sliding Window

* Substrings and subarrays
* Continuous data streams
* Fixed-size or variable-size windows
* Performance-critical code paths

---

### Sliding Window Types

| Type          | Example                                        |
| ------------- | ---------------------------------------------- |
| Fixed size    | Maximum sum subarray of size K                 |
| Variable size | Longest substring without repeating characters |

---

### Warm-Up Interview Questions

1. Why use sliding window instead of brute force?
2. Difference between sliding window and two pointers?
3. Can sliding window work with negative numbers?
4. What breaks sliding window logic?
5. How do you track window state efficiently?

---

## 2. Problem 1: Longest Substring Without Repeating Characters

### Interview Question

> Given a string, find the length of the longest substring without repeating characters.

---

### Brute Force (Reject Quickly)

* Generate all substrings
* Time Complexity: **O(n²)** ❌

---

### Optimal Approach: Sliding Window + Hash Map

### Key Insight (Say Clearly)

> “When a character repeats, I move the left pointer just past the previous occurrence of that character.”

---

### Python Solution

```python
def lengthOfLongestSubstring(s):
    char_index = {}
    left = 0
    max_len = 0

    for right in range(len(s)):
        if s[right] in char_index and char_index[s[right]] >= left:
            left = char_index[s[right]] + 1

        char_index[s[right]] = right
        max_len = max(max_len, right - left + 1)

    return max_len
```

---

### JavaScript Solution

```javascript
function lengthOfLongestSubstring(s) {
    const map = new Map();
    let left = 0;
    let maxLen = 0;

    for (let right = 0; right < s.length; right++) {
        if (map.has(s[right]) && map.get(s[right]) >= left) {
            left = map.get(s[right]) + 1;
        }
        map.set(s[right], right);
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}
```

---

### Complexity

* **Time:** O(n)
* **Space:** O(min(n, charset))

---

### Sony Follow-Up Questions

1. Why move `left` to `lastIndex + 1`?
2. Can this be implemented using a `Set`?
3. How would you return the actual substring?
4. How does this behave with Unicode input?
5. How would you process a real-time text stream?

---

## 3. Problem 2: Maximum Sum Subarray of Size K

### Interview Question

> Given an array of integers and an integer `k`, find the maximum sum of any contiguous subarray of size `k`.

---

### Brute Force (Reject Quickly)

* Sum every subarray of size `k`
* Time Complexity: **O(n·k)** ❌

---

### Optimal Approach: Fixed-Size Sliding Window

### Key Insight (Say Clearly)

> “Instead of recomputing the sum, I add the new element entering the window and remove the element leaving it.”

---

### Python Solution

```python
def maxSumSubarray(nums, k):
    window_sum = sum(nums[:k])
    max_sum = window_sum

    for i in range(k, len(nums)):
        window_sum += nums[i]
        window_sum -= nums[i - k]
        max_sum = max(max_sum, window_sum)

    return max_sum
```

---

### JavaScript Solution

```javascript
function maxSumSubarray(nums, k) {
    let windowSum = 0;
    for (let i = 0; i < k; i++) {
        windowSum += nums[i];
    }
    let maxSum = windowSum;

    for (let i = k; i < nums.length; i++) {
        windowSum += nums[i];
        windowSum -= nums[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }
    return maxSum;
}
```

---

### Complexity

* **Time:** O(n)
* **Space:** O(1)

---

### Sony Follow-Up Questions

1. What if `k > n`?
2. Can this handle negative numbers?
3. Sliding window vs prefix sum – when to use each?
4. How would you process this in a data stream?
5. Can this be parallelized?

---

## 4. Sony-Level Variations (Very Likely)

Expect at least one of the following:

1. Minimum window substring
2. Longest substring with at most K distinct characters
3. Average of subarrays of size K
4. Find all anagrams in a string
5. Maximum number of vowels in a substring of size K

---

## 5. Project (Concept): Secure API Flow with Audit Logging

### Interview Framing

> “Design a secure API request flow that includes audit logging.”

---

### High-Level API Flow

```
Client
  ↓
API Gateway
  ↓
Authentication Service (JWT / Session)
  ↓
Authorization (RBAC / ABAC)
  ↓
Business Logic
  ↓
Audit Log Writer (Async)
  ↓
Response
```

---

### Step-by-Step Explanation (Say This)

1. **Authentication** – Validate token or session and extract `user_id`
2. **Authorization** – Verify permissions using RBAC or ABAC
3. **Action Execution** – Perform the requested operation and capture metadata
4. **Audit Logging** – Write logs asynchronously with request IDs
5. **Response** – Return response correlated with the request ID

---

### What Sony Listens For

* Clear separation of concerns
* Non-blocking, asynchronous logging
* Failure handling strategy
* End-to-end traceability using `request_id`
* Security boundaries between services

---

## 6. Interview Follow-Ups on API Flow

1. What happens if audit logging fails?
2. Should logging block the request?
3. How do you prevent duplicate logs?
4. How do you trace requests across services?
5. How do you handle PII in logs?

---

## 7. End-of-Day Sony Checklist

You are ready if you can:

* Identify sliding-window problems instantly
* Update window state without recomputation
* Explain window expansion and shrinking clearly
* Draw and explain the API flow confidently

---

## ✅ Day 4 Status

✔ Sliding window fundamentals mastered
✔ Real-time processing logic understood
✔ API flow design articulated clearly

---

**Next:** Day 5 – Strings + Hashing
