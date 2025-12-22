# WEEK 1 – DAY 7

## Revision Day – Thinking, Speaking, Confidence (Sony Interview Focus)

Day 7 is designed to **simulate real Sony interview behavior**. The goal is not solving new problems, but demonstrating **clarity of thought, calm explanation, and pattern recognition**.

Sony interviewers prioritize **how you think and explain**, not how fast you type.

---

## What Sony Evaluates on Revision Days

* Can you recognize the **correct pattern instantly**?
* Can you explain the logic **without jumping into code**?
* Do you avoid over-explaining?
* Are your revision notes **concise and reusable**?

---

## PART A: Re‑Solve 5 Core Problems (High Yield)

These 5 problems cover **almost all Week‑1 patterns**.

---

### 1️⃣ Maximum Subarray Sum (Kadane’s Algorithm)

**Pattern:** Dynamic Programming / Greedy

**What to Say in Interview:**

> At each index, I decide whether to extend the previous subarray or start a new one. This local decision produces the global maximum.

**Key Logic:**

* Carry forward only positive contribution
* Reset when continuing becomes harmful

**One‑Line Insight:**

> Drop negative baggage.

---

### 2️⃣ Subarray Sum = K (Count)

**Pattern:** Prefix Sum + Hash Map

**What to Say in Interview:**

> If the current prefix sum minus k has appeared before, then a valid subarray ends at this index.

**Key Logic:**

* Use `prefix[j] − prefix[i] = k`
* Hash map stores frequency of prefix sums

**One‑Line Insight:**

> Convert subarray logic into a difference lookup.

---

### 3️⃣ Remove Duplicates from Sorted Array

**Pattern:** Two Pointers (Slow–Fast)

**What to Say in Interview:**

> Since the array is sorted, duplicates are adjacent. I overwrite duplicates in‑place using a slow pointer.

**Key Logic:**

* Slow pointer tracks last unique element
* Fast pointer scans forward

**One‑Line Insight:**

> Sorted array means adjacency; adjacency allows overwrite.

---

### 4️⃣ Longest Substring Without Repeating Characters

**Pattern:** Sliding Window + Hash Map

**What to Say in Interview:**

> I maintain a window with unique characters. When a character repeats, I shrink the window from the left until it becomes valid again.

**Key Logic:**

* Window always satisfies uniqueness
* Left pointer never moves backward

**One‑Line Insight:**

> Never revisit characters on the left.

---

### 5️⃣ Valid Anagram

**Pattern:** Hashing / Frequency Counting

**What to Say in Interview:**

> Two strings are anagrams if their character frequencies match exactly.

**Key Logic:**

* Increment frequency for first string
* Decrement for second string
* Any mismatch fails

**One‑Line Insight:**

> Same frequency means same structure.

---

## PART B: Explain First, Code Later

Sony interviewers often say:
**“Explain your approach first.”**

### Example: Sliding Window Question

❌ Weak explanation:

> I’ll use a hashmap and loop.

✅ Strong explanation:

> I maintain a window that always satisfies the constraint. I expand it to include elements and shrink it when the constraint breaks.

---

## PART C: Interview‑Ready Cheat Notes

These notes should fit on **1–2 pages** for quick revision.

---

### Pattern Recognition Cheat Sheet

**Kadane’s Algorithm**

* Maximum or minimum contiguous sum
* Reset when contribution becomes harmful

**Prefix Sum**

* Subarray sum or range query
* Convert problem into prefix difference lookup

**Two Pointers**

* Sorted arrays
* In‑place modification
* Boundary optimization

**Sliding Window**

* Substring or subarray problems
* Dynamic constraints

**Hashing**

* Frequency counting
* Uniqueness checks
* State tracking

---

### Common Sony Follow‑Up Questions

* Can this work for streaming data?
* How does this scale?
* What breaks this approach?
* Can space be optimized?
* What are the edge cases?

---

## PART D: 15‑Minute Daily Self‑Mock

Repeat this routine:

1. Pick **one problem**
2. Speak for **2 minutes**:

   * Pattern
   * Logic
   * Complexity
3. Write code
4. Explain trade‑offs

If you can do this calmly, you are interview‑ready.

---

## PART E: System Thinking Quick Revision

Be ready to say:

> Audit logs are append‑only, immutable, role‑protected, and preferably written asynchronously. Admin UIs are read‑only with pagination and filtering.

---
