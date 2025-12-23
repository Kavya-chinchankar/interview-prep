# WEEK 2 – DAY 8

## Stack, State Tracking & Security Logging (Sony Interview Focus)

This day introduces **Stacks** with a strong emphasis on **state management, monotonic patterns, and real-world security use cases**. Sony platform and security teams expect you to clearly explain *why* a stack is the correct abstraction before writing code.

---

## What Sony Evaluates on Day 8

* Correct modeling of **LIFO state**
* Ability to explain stack behavior verbally
* Use of **monotonic stacks** for optimization
* Translating DSA concepts into **security-grade backend features**

---

## 1. Stack — Core Concept

**Interview Explanation:**

> A stack follows LIFO—last in, first out—making it suitable for nested state tracking, rollback logic, and order-sensitive validation.

---

### Common Sony Use Cases

* Syntax and parentheses validation
* Expression parsing and evaluation
* Undo / redo operations
* Call stack modeling
* Monotonic stacks for performance optimization

---

### Warm-Up Questions Sony May Ask

* Stack vs recursion?
* Stack vs queue?
* Can stacks be implemented using arrays?
* How do you handle overflow and underflow?
* Real-world system examples?

---

## 2. Problem 1: Valid Parentheses

### Problem Statement

Given a string containing `()[]{}`, determine whether it is valid.

---

### Key Insight (What to Say)

> Every opening bracket must be closed in the correct order.

---

### Python Implementation

```python
def isValid(s):
    stack = []
    mapping = {')': '(', ']': '[', '}': '{'}

    for ch in s:
        if ch in mapping:
            if not stack or stack.pop() != mapping[ch]:
                return False
        else:
            stack.append(ch)

    return not stack
```

---

### JavaScript Implementation

```javascript
function isValid(s) {
    const stack = [];
    const map = { ')': '(', ']': '[', '}': '{' };

    for (let ch of s) {
        if (map[ch]) {
            if (!stack.length || stack.pop() !== map[ch]) {
                return false;
            }
        } else {
            stack.push(ch);
        }
    }
    return stack.length === 0;
}
```

---

### Complexity

* Time: **O(n)**
* Space: **O(n)**

---

### Sony Follow-Ups

* Why use a stack instead of counters?
* How would you validate HTML/XML tags?
* Can recursion replace stack here?
* How would you handle streamed input?

---

## 3. Problem 2: Next Greater Element

### Problem Statement

For each element, find the next element to its right that is greater.

---

### Key Insight (Very Important)

> Maintain a decreasing monotonic stack; resolve elements when a greater value appears.

---

### Python Implementation

```python
def nextGreater(nums):
    stack = []
    result = [-1] * len(nums)

    for i in range(len(nums)):
        while stack and nums[i] > nums[stack[-1]]:
            idx = stack.pop()
            result[idx] = nums[i]
        stack.append(i)

    return result
```

---

### JavaScript Implementation

```javascript
function nextGreater(nums) {
    const stack = [];
    const res = new Array(nums.length).fill(-1);

    for (let i = 0; i < nums.length; i++) {
        while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {
            const idx = stack.pop();
            res[idx] = nums[i];
        }
        stack.push(i);
    }
    return res;
}
```

---

### Complexity

* Time: **O(n)**
* Space: **O(n)**

---

### Sony Follow-Ups

* Why store indices instead of values?
* Circular array variation?
* Next smaller element?
* Stock span problem?

---

## 4. High-Probability Stack Variations

Sony often asks one of these:

* Min Stack
* Evaluate postfix expressions
* Daily Temperatures
* Remove adjacent duplicates
* Largest rectangle in histogram

---

## 5. Mini Project: Login Attempt Logging (Security-Oriented)

### Interview Framing

> Design login attempt logging to support auditing and brute-force detection.

---

### Core Requirements

Log **every login attempt**, not only successful ones.

**Fields to Log:**

* Username / user_id
* Timestamp
* IP address
* User agent
* Status (SUCCESS / FAILURE)

---

### SQLAlchemy Model Example

```python
class LoginAttempt(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100))
    ip_address = db.Column(db.String(45))
    user_agent = db.Column(db.Text)
    status = db.Column(db.String(10))
    timestamp = db.Column(db.DateTime, default=datetime.utcnow)
```

---

### Logging Helper

```python
def log_login_attempt(username, status, ip, user_agent):
    attempt = LoginAttempt(
        username=username,
        status=status,
        ip_address=ip,
        user_agent=user_agent
    )
    db.session.add(attempt)
    db.session.commit()
```

---

### Usage in Login API

```python
@app.route("/login", methods=["POST"])
def login():
    username = request.json["username"]
    ip = request.remote_addr
    agent = request.headers.get("User-Agent")

    if authenticate(username):
        log_login_attempt(username, "SUCCESS", ip, agent)
        return {"status": "ok"}
    else:
        log_login_attempt(username, "FAILURE", ip, agent)
        return {"status": "failed"}, 401
```

---

### What Sony Expects You to Say

> Logging both successful and failed login attempts enables anomaly detection, account lockouts, and forensic analysis.

---

### Security Follow-Ups Sony May Ask

* How do you prevent log flooding?
* How would you detect brute-force attacks?
* Retention policy for login logs?
* PII and privacy considerations?
* Async vs sync logging trade-offs?

---

## End-of-Day Checklist (Sony Standard)

You are ready if you can:

* Explain stack usage without code
* Solve monotonic stack problems confidently
* Connect DSA patterns to security features
* Handle security design follow-ups calmly

---

## Suggested Repo Structure

```
week-2/
  day-8-stack/
    README.md
    problems/
    security-logging/
```

---

## Next Steps

* Day 9: Monotonic Stack

