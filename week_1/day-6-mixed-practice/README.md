# WEEK 1 – DAY 6

## Mixed Practice, Pattern Switching, Admin Visibility (Sony Interview Focus)

This day is designed to simulate **real Sony interview conditions**, where problems are mixed and you must quickly identify the **correct pattern** while also demonstrating **end-to-end engineering thinking** (backend → UI → auditability).

---

## What Sony Evaluates on Day 6

* Pattern recognition under time pressure
* Choosing the **simplest correct approach**
* Avoiding over-engineering
* Connecting DSA logic with **practical product features**

---

## PART A: Mixed Practice — Medium-Level Problems

These questions intentionally mix patterns to test adaptability.

---

### 1. Longest Subarray with Sum = K

**Pattern:** Prefix Sum + Hash Map

**Key Insight (Interview Script):**

> Store the *first occurrence* of each prefix sum so the subarray length is maximized.

```python
def longestSubarraySum(nums, k):
    prefix_sum = 0
    index_map = {0: -1}
    max_len = 0

    for i, num in enumerate(nums):
        prefix_sum += num
        if prefix_sum - k in index_map:
            max_len = max(max_len, i - index_map[prefix_sum - k])
        if prefix_sum not in index_map:
            index_map[prefix_sum] = i

    return max_len
```

**Sony Follow-Ups:**

* Why store the first index only?
* When can sliding window work instead?
* How would this behave for streaming data?

---

### 2. Minimum Window Substring

**Pattern:** Sliding Window + Hashing

**Key Insight:**

> Expand the window until the condition is met, then shrink it to find the minimum.

```python
from collections import Counter

def minWindow(s, t):
    need = Counter(t)
    left = 0
    count = len(t)
    min_len = float("inf")
    start = 0

    for right in range(len(s)):
        if need[s[right]] > 0:
            count -= 1
        need[s[right]] -= 1

        while count == 0:
            if right - left + 1 < min_len:
                min_len = right - left + 1
                start = left

            need[s[left]] += 1
            if need[s[left]] > 0:
                count += 1
            left += 1

    return "" if min_len == float("inf") else s[start:start + min_len]
```

**Sony Follow-Ups:**

* Why decrement counts even for extra characters?
* Unicode considerations?
* Can this work on a real-time text stream?

---

### 3. Trapping Rain Water

**Pattern:** Two Pointers

**Key Insight:**

> Water trapped depends on the minimum of max height on the left and right.

```python
def trap(height):
    left, right = 0, len(height) - 1
    left_max = right_max = 0
    water = 0

    while left < right:
        if height[left] < height[right]:
            left_max = max(left_max, height[left])
            water += left_max - height[left]
            left += 1
        else:
            right_max = max(right_max, height[right])
            water += right_max - height[right]
            right -= 1

    return water
```

**Sony Follow-Ups:**

* Why two pointers over prefix arrays?
* Space vs clarity trade-offs?

---

### 4. Top K Frequent Elements

**Pattern:** Hashing + Heap

```python
from collections import Counter
import heapq

def topKFrequent(nums, k):
    freq = Counter(nums)
    return heapq.nlargest(k, freq.keys(), key=freq.get)
```

**Sony Follow-Ups:**

* Heap vs bucket sort?
* How would you handle streaming data?

---

## PART B: Project — Admin Audit Log UI (Basic)

### Interview Framing

> Design a simple admin interface to view audit logs securely.

Sony focuses on **clarity, security, and scalability**, not UI polish.

---

### Minimum Fields to Display

* Timestamp
* User ID
* Action
* Resource
* Status

---

### Option 1: Backend-Rendered HTML Table

```html
<table border="1">
  <thead>
    <tr>
      <th>Timestamp</th>
      <th>User ID</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {% for log in logs %}
    <tr>
      <td>{{ log.timestamp }}</td>
      <td>{{ log.user_id }}</td>
      <td>{{ log.action }}</td>
    </tr>
    {% endfor %}
  </tbody>
</table>
```

---

### Option 2: React-Based Table

```jsx
function AuditTable({ logs }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Time</th>
          <th>User</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {logs.map(log => (
          <tr key={log.id}>
            <td>{log.timestamp}</td>
            <td>{log.user_id}</td>
            <td>{log.action}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
```

---

### Backend API Example

```python
@app.route("/admin/audit-logs")
def get_logs():
    logs = AuditLog.query.order_by(AuditLog.timestamp.desc()).limit(100)
    return jsonify([{
        "id": l.id,
        "user_id": l.user_id,
        "action": l.action,
        "timestamp": l.timestamp
    } for l in logs])
```

---

### What Sony Expects You to Say

> Admin access is role-protected, logs are read-only, paginated, and sorted by timestamp.

---

## End-of-Day Checklist (Sony Standard)

You are ready if you can:

* Identify the correct DSA pattern within seconds
* Justify trade-offs clearly
* Explain why audit logs are immutable
* Connect backend data to admin visibility

---

## Suggested Repo Structure

```
week-1/
  day-6-mixed-practice/
    README.md
    problems/
    admin-ui/
```

---

## Next Steps

* Week-1 full revision & cheat sheet

