# WEEK 1 – DAY 5

## Strings + Hashing, Frequency Thinking, Practical Logging

Sony evaluates:

* Ability to model **frequency/state**
* Correct **data structure selection**
* Clean edge-case handling
* Translating algorithms into **real backend features**

---

## 1. Strings + Hashing — Core Concept

### What You Should Say (Interview Script)

> "Hashing enables constant-time lookups for tracking frequency or state, which is essential for string comparison and streaming problems."

---

### When Sony Expects Hashing

* Character frequency counting
* Uniqueness validation
* Pattern matching
* Streaming or real-time text processing

---

### Warm-Up Interview Questions

1. Why use a hash map over an array?
2. When is a fixed-size array better?
3. Hash map vs sorting trade-offs?
4. How do you handle Unicode characters?
5. Memory vs speed considerations?

---

## 2. Problem 1: Valid Anagram

### Interview Question

> Given two strings `s` and `t`, return true if `t` is an anagram of `s`.

---

### Optimal Approach: Hash Map

#### Key Insight (Say This)

> "Two strings are anagrams if their character frequencies match exactly."

---

### Python Solution

```python
def isAnagram(s, t):
    if len(s) != len(t):
        return False

    freq = {}
    for ch in s:
        freq[ch] = freq.get(ch, 0) + 1

    for ch in t:
        if ch not in freq or freq[ch] == 0:
            return False
        freq[ch] -= 1

    return True
```

---

### JavaScript Solution

```javascript
function isAnagram(s, t) {
    if (s.length !== t.length) return false;

    const freq = {};
    for (let ch of s) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    for (let ch of t) {
        if (!freq[ch]) return false;
        freq[ch]--;
    }
    return true;
}
```

---

### Complexity

* **Time:** O(n)
* **Space:** O(1) for fixed charset / O(n) otherwise

---

### Sony Follow-Ups

1. Can sorting be used? Complexity?
2. How do you handle Unicode?
3. Case-insensitive anagram?
4. Streamed input?
5. Memory-optimized approach?

---

## 3. Problem 2: First Non-Repeating Character

### Interview Question

> Given a string, find the index of the first non-repeating character.

---

### Optimal Approach: Two Pass + Hash Map

#### Key Insight (Say This)

> "First count frequencies, then return the first index with frequency 1."

---

### Python Solution

```python
def firstUniqChar(s):
    freq = {}

    for ch in s:
        freq[ch] = freq.get(ch, 0) + 1

    for i, ch in enumerate(s):
        if freq[ch] == 1:
            return i

    return -1
```

---

### JavaScript Solution

```javascript
function firstUniqChar(s) {
    const freq = {};

    for (let ch of s) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    for (let i = 0; i < s.length; i++) {
        if (freq[s[i]] === 1) return i;
    }

    return -1;
}
```

---

### Complexity

* **Time:** O(n)
* **Space:** O(1) / O(n)

---

### Sony Follow-Ups

1. Can this be done in one pass?
2. What if the string is very large?
3. Streaming characters?
4. Return character instead of index?
5. How to optimize memory?

---

## 4. Sony-Level Variations (Very Likely)

* Group anagrams
* Palindrome permutation check
* Longest palindrome length
* Find all anagram indices
* Most frequent character

---

## 5. Project: Implement Audit Logging (Basic)

### Interview Framing

> "Implement a basic audit logging mechanism for ControlHub."

Focus is on **design clarity**, not frameworks.

---

### Core Requirements

* Log `user_id`
* Log `action`
* Log `timestamp`
* Append-only
* Non-blocking design

---

## Option A: Database-Backed Logging (Flask Example)

### Audit Log Model

```python
from datetime import datetime
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class AuditLog(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, nullable=False)
    action = db.Column(db.String(100), nullable=False)
    timestamp = db.Column(db.DateTime, default=datetime.utcnow)
```

---

### Logging Helper

```python
def log_action(user_id, action):
    log = AuditLog(user_id=user_id, action=action)
    db.session.add(log)
    db.session.commit()
```

---

### Usage Example

```python
@app.route("/update-profile", methods=["POST"])
def update_profile():
    user_id = get_current_user_id()
    # business logic
    log_action(user_id, "UPDATE_PROFILE")
    return {"status": "success"}
```

---

## Option B: File-Based Logging

```python
import logging

logging.basicConfig(
    filename="audit.log",
    level=logging.INFO,
    format="%(asctime)s | %(message)s"
)

def log_action(user_id, action):
    logging.info(f"user_id={user_id}, action={action}")
```

---

### What Sony Likes You to Say

> "I abstract audit logging behind a helper so storage can evolve without impacting business logic."

---

## Interview Follow-Ups on Logging

1. Should logging be async?
2. What if logging fails?
3. How do you prevent tampering?
4. How do you add request_id?
5. How does this scale?

---

## 6. Interview Explanation Script

> "Audit logging is encapsulated and append-only. The design allows future migration to async or distributed logging systems without refactoring core logic."

---
