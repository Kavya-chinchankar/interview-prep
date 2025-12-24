# 🔹 WEEK 2 – DAY 9

## Monotonic Stack, Span Problems & Security Counters (Sony Interview Focus)

Day 9 is a **high-impact Sony interview day**. Sony frequently asks at least one **monotonic stack** problem to test whether candidates truly understand **linear-time optimization** and **index-based reasoning**, not memorized code.

This day also connects DSA to a **real security backend feature**: failed login tracking.

---

## What Sony Evaluates on Day 9

* Instant recognition of **monotonic stack patterns**
* Ability to reduce **O(n²) → O(n)**
* Comfort with **index-based stack logic**
* Translating algorithms into **security protections**

---

## 1. Monotonic Stack — Core Concept

**Interview Explanation:**

> A monotonic stack maintains elements in increasing or decreasing order so that each element is pushed and popped at most once, resulting in linear time complexity.

---

### Types of Monotonic Stacks

| Type                 | Order                  | Used For                     |
| -------------------- | ---------------------- | ---------------------------- |
| Monotonic Increasing | Bottom → top increases | Next smaller element         |
| Monotonic Decreasing | Bottom → top decreases | Next greater / span problems |

---

### Warm-Up Questions Sony May Ask

* Why is monotonic stack O(n)?
* Why store indices instead of values?
* When does this approach fail?
* Difference between monotonic stack and two pointers?
* Real-world analogy?

---

## 2. Problem 1: Stock Span Problem

### Problem Statement

Given daily stock prices, calculate the span of each day. The span is the number of consecutive days **before today** where the price was less than or equal to today’s price.

---

### Key Insight (What to Say)

> I pop all previous prices that are smaller or equal to today’s price because today’s price dominates them.

---

### Python Implementation

```python
def stockSpan(prices):
    stack = []
    span = [0] * len(prices)

    for i in range(len(prices)):
        while stack and prices[stack[-1]] <= prices[i]:
            stack.pop()
        span[i] = i + 1 if not stack else i - stack[-1]
        stack.append(i)

    return span
```

---

### JavaScript Implementation

```javascript
function stockSpan(prices) {
    const stack = [];
    const span = new Array(prices.length);

    for (let i = 0; i < prices.length; i++) {
        while (stack.length && prices[stack[stack.length - 1]] <= prices[i]) {
            stack.pop();
        }
        span[i] = stack.length === 0 ? i + 1 : i - stack[stack.length - 1];
        stack.push(i);
    }
    return span;
}
```

---

### Complexity

* Time: **O(n)**
* Space: **O(n)**

---

### Sony Follow-Ups

* Why use indices instead of values?
* Can this work for streaming prices?
* Online vs offline computation?
* Financial system use cases?

---

## 3. Problem 2: Largest Rectangle in Histogram

### Why Sony Loves This Problem

* Tests deep understanding of monotonic stacks
* Tests boundary and width calculation
* Separates real understanding from memorization

---

### Key Insight (Very Important)

> For each bar, the maximum rectangle uses that bar as the smallest height between the first smaller bar on the left and right.

---

### Python Implementation

```python
def largestRectangleArea(heights):
    stack = []
    max_area = 0
    heights.append(0)

    for i in range(len(heights)):
        while stack and heights[i] < heights[stack[-1]]:
            h = heights[stack.pop()]
            width = i if not stack else i - stack[-1] - 1
            max_area = max(max_area, h * width)
        stack.append(i)

    return max_area
```

---

### JavaScript Implementation

```javascript
function largestRectangleArea(heights) {
    const stack = [];
    heights.push(0);
    let maxArea = 0;

    for (let i = 0; i < heights.length; i++) {
        while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
            const h = heights[stack.pop()];
            const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, h * width);
        }
        stack.push(i);
    }
    return maxArea;
}
```

---

### Complexity

* Time: **O(n)**
* Space: **O(n)**

---

### Sony Follow-Ups (Very Common)

* Why add a sentinel `0`?
* How is width calculated?
* Can you explain with an example?
* Largest rectangle in binary matrix?

---

## 4. High-Probability Monotonic Stack Variations

Sony often asks one of these:

* Daily Temperatures
* Next greater element in circular array
* Sum of subarray minimums
* Remove K digits
* Max rectangle in binary matrix

---

## 5. Mini Project: Failed Login Counter (Security Feature)

### Interview Framing

> Design a mechanism to detect brute-force attacks by tracking failed login attempts.

---

### Core Requirements

* Count consecutive failures
* Reset on success
* Time-window awareness
* Support account lockout

---

### Database Schema Example

```python
class FailedLoginCounter(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), unique=True)
    failed_count = db.Column(db.Integer, default=0)
    last_failed_at = db.Column(db.DateTime)
```

---

### Logic Flow (What to Say)

> On each failed login, increment the counter. On success, reset it. If failures exceed a threshold within a time window, temporarily lock the account.

---

### Helper Functions

```python
def record_failure(username):
    record = FailedLoginCounter.query.filter_by(username=username).first()
    if not record:
        record = FailedLoginCounter(username=username, failed_count=1)
        db.session.add(record)
    else:
        record.failed_count += 1
        record.last_failed_at = datetime.utcnow()
    db.session.commit()
```

```python
def reset_failures(username):
    record = FailedLoginCounter.query.filter_by(username=username).first()
    if record:
        record.failed_count = 0
        db.session.commit()
```

---

### What Sony Expects You to Say

> I would combine a counter with a time window and store it in Redis for fast access, while persisting state in a database for durability.

---

### Sony Follow-Ups on Failed Login Counters

* Fixed threshold vs time-based limits?
* Distributed system handling?
* Redis vs database?
* Avoiding user enumeration attacks?
* CAPTCHA integration?

---

## End-of-Day Checklist (Sony Standard)

You are ready if you can:

* Identify monotonic stack problems instantly
* Explain span and histogram logic verbally
* Use index-based stacks confidently
* Design a secure failure counter

---

## Suggested Repo Structure

```
week-2/
  day-9-monotonic-stack/
    README.md
    problems/
    security-counter/
```

---

## Next Steps

* Day 10: Queue + Deque (Sliding Window Maximum)
