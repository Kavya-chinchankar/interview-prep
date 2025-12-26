# Week 2 – Day 10: Queue, Deque & Brute-Force Protection

## Overview

This module is **Sony / MNC interview–grade** and focuses on:

* Queue vs Deque fundamentals
* Sliding Window Maximum using Monotonic Deque
* Applying sliding-window concepts to **real-world security systems**

The goal is to demonstrate **DSA mastery + production-level security thinking**, which is critical for **platform and security-aware backend engineer roles**.

---

## Key Concepts

### Queue (FIFO)

* Insert at rear, remove from front
* Used in BFS, scheduling, buffering

### Deque (Double-Ended Queue)

* Insert and remove from both ends
* Enables efficient **sliding window optimizations**

**Interview Line to Say:**

> A deque allows constant-time insertion and deletion at both ends, making it ideal for maintaining window-based maximum or minimum values.

---

## Problem: Sliding Window Maximum

### Problem Statement

Given an array `nums` and a window size `k`, return the maximum element in every sliding window.

### Why Brute Force Fails

* Scanning each window → O(n × k)
* Does not scale for large inputs

### Optimal Approach: Monotonic Deque

**Key Insight (Say Clearly):**

> I maintain a decreasing deque of indices. The front always holds the maximum element for the current window.

### Deque Rules

1. Remove indices that are out of the current window
2. Remove smaller elements from the back
3. Front of deque always represents the window maximum

### Time & Space Complexity

* Time: O(n)
* Space: O(k)

---

## Pattern Recognition

If the question mentions:

* Subarray of size `k`
* Maximum or minimum in a continuous range
* Real-time window processing

➡️ Immediately think **Deque / Sliding Window**

---

## Mini Project: Brute-Force Protection Design

This project builds on:

* Login attempt logging (Day 8)
* Failed login counter (Day 9)

Now the system actively **prevents attacks**, not just records them.

### Threats Addressed

* Credential stuffing
* Password guessing
* User enumeration

---

## Core Security Strategy

1. Rate limiting
2. Failure thresholds
3. Sliding time window
4. Temporary account lock
5. Progressive delay (backoff)

**Interview Explanation:**

> I track failed login attempts per user or IP within a sliding time window. If attempts exceed a threshold, I temporarily block further logins and progressively increase delay.

---

## Sliding Window Applied to Security

Conceptually identical to sliding window maximum:

* Maintain timestamps of failed attempts
* Remove entries outside the time window
* Block if threshold exceeded

Example:

```
Attempts: [t1, t2, t3, t4, t5]
Window: last 10 minutes
If count > 5 → block
```

---

## Implementation Notes (Sony-Level)

* Use **Redis** for low-latency checks
* TTL-based keys for automatic expiry
* Counters maintained per:

  * Username
  * IP address
  * Device fingerprint

### Example Redis Key

```
login_fail:user123 → [timestamps]
TTL: 10 minutes
```

---

## Advanced Enhancements

* CAPTCHA after repeated failures
* Exponential backoff
* Geo-location risk scoring
* Alerting on anomaly detection

---

## Strong Closing Statement (Memorize)

> I combine sliding-window rate limiting with progressive lockouts, implemented using Redis for low latency and backed by persistent storage for auditability.

---
