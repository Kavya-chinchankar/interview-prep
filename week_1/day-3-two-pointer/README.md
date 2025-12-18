# WEEK 1 – DAY 3

## Two Pointers, Optimization Thinking, System Trade-offs (Sony Interview Focus)

This day focuses on **Two Pointers**, one of the most frequently tested optimization patterns in **Sony product and platform interviews**. The emphasis is on **reducing brute force**, **writing clean in-place logic**, and **explaining engineering trade-offs clearly**.

Sony evaluates here:

* Ability to reduce brute-force solutions
* Correct pointer movement logic
* In-place, memory-efficient algorithms
* Practical engineering reasoning (not textbook answers)

---

## 1. Two Pointers – Core Concept

### Interview Definition (Say This)

> “Two pointers is an optimization technique where we process an array or string using two indices moving toward each other or in the same direction to reduce time and space complexity.”

---

### When Sony Expects Two Pointers

* Sorted arrays
* In-place modification
* Pair, boundary, or window-based problems
* Memory-constrained systems

---

### Warm-Up Interview Questions

1. Why use two pointers instead of nested loops?
2. When does the two-pointer approach fail?
3. Difference between two pointers and sliding window?
4. Does two pointers always require sorted input?
5. How do you decide pointer movement?

---

## 2. Problem 1: Remove Duplicates from Sorted Array

### Interview Question

> Given a sorted array, remove duplicates in-place and return the number of unique elements.

---

### Constraints

* In-place modification
* O(1) extra space
* Relative order must be preserved

---

### Optimal Two-Pointer Approach

### Key Insight (Say Clearly)

> “Since the array is sorted, duplicates appear next to each other. I maintain a slow pointer that tracks the last unique element.”

---

### Python Solution

```python
def removeDuplicates(nums):
    if not nums:
        return 0

    slow = 0
    for fast in range(1, len(nums)):
        if nums[fast] != nums[slow]:
            slow += 1
            nums[slow] = nums[fast]

    return slow + 1
```

---

### JavaScript Solution

```javascript
function removeDuplicates(nums) {
    if (nums.length === 0) return 0;

    let slow = 0;
    for (let fast = 1; fast < nums.length; fast++) {
        if (nums[fast] !== nums[slow]) {
            slow++;
            nums[slow] = nums[fast];
        }
    }
    return slow + 1;
}
```

---

### Complexity

* **Time:** O(n)
* **Space:** O(1)

---

### Sony Follow-Up Questions

1. What if the array is not sorted?
2. Allow duplicates at most twice?
3. Should the function return the modified array or just the length?
4. Why not use a `Set`?
5. How does this scale for very large arrays?

---

## 3. Problem 2: Container With Most Water

### Interview Question

> Given an array representing heights of vertical lines, find two lines that together hold the maximum amount of water.

---

### Brute Force (Reject Quickly)

* Try all pairs
* Time Complexity: **O(n²)** ❌

---

### Optimal Two-Pointer Approach

### Key Insight (Critical)

> “The area is always limited by the shorter height, so we move the pointer pointing to the smaller height.”

---

### Python Solution

```python
def maxArea(height):
    left, right = 0, len(height) - 1
    max_area = 0

    while left < right:
        width = right - left
        area = min(height[left], height[right]) * width
        max_area = max(max_area, area)

        if height[left] < height[right]:
            left += 1
        else:
            right -= 1

    return max_area
```

---

### JavaScript Solution

```javascript
function maxArea(height) {
    let left = 0, right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        let width = right - left;
        let area = Math.min(height[left], height[right]) * width;
        maxArea = Math.max(maxArea, area);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxArea;
}
```

---

### Complexity

* **Time:** O(n)
* **Space:** O(1)

---

### Sony Follow-Up Questions

1. Why do we move the smaller height?
2. Can moving the larger height ever help?
3. How would this work with streaming input?
4. Can this be parallelized?
5. Any real-world analogy?

---

## 4. Sony-Level Variations (Very Likely)

Expect one or more of these problems:

1. Remove element equal to `k`
2. Pair with target sum in a sorted array
3. Square a sorted array
4. Trapping rain water
5. Palindrome validation for strings

---

## 5. Project (Concept): Where to Store Audit Logs

### Interview Framing

> “Decide the most appropriate storage mechanism for audit logs in ControlHub.”

---

## Option 1: Database Storage

### Pros

* Easy querying
* Indexed by user and timestamp
* ACID compliance

### Cons

* High write pressure
* Expensive storage
* Slower inserts at scale

### When to Use

* Medium-scale systems
* Compliance-heavy requirements
* Frequent querying

---

## Option 2: File-Based Logs

### Pros

* Extremely fast writes
* Append-only
* Low storage cost

### Cons

* Hard to query
* No indexing
* Manual parsing required

### When to Use

* Very high-volume logging
* Rare querying
* Backup and archival logs

---

## Option 3: Hybrid Approach (Sony-Preferred Answer)

### Recommended Architecture

```
Application → Kafka / Queue
            → Database (recent, indexed logs)
            → File Storage (S3 / archival logs)
```

---

### Why Sony Likes This Answer

* Scales horizontally
* Cost-efficient
* Clear separation of concerns
* Industry-grade architecture

---

### How to Explain in Interview (Script)

> “I’d use a hybrid approach where logs are written asynchronously to a queue, recent logs are stored in a database for fast queries, and older logs are archived in file storage.”

---

## 6. Interview Follow-Ups on Audit Log Storage

1. How do you ensure durability?
2. How do you prevent log tampering?
3. What is the log retention policy?
4. How are logs encrypted?
5. How would you replay logs?

---

## 7. End-of-Day Sony Checklist

You are ready if you can:

* Identify two-pointer problems instantly
* Write in-place solutions confidently
* Justify pointer movement logically
* Explain storage trade-offs clearly

---

## ✅ Day 3 Status

✔ Two-pointer fundamentals mastered
✔ In-place optimization achieved
✔ System trade-offs understood

---

**Next:** Day 4 – Sliding Window 
