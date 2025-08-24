### 🔁 **Merge Sort in JavaScript — Explained Visually**

**Merge Sort** is a classic **divide and conquer** algorithm. It divides the array into halves, recursively sorts each half, and then **merges** the sorted halves.

---

### 📊 **Step-by-Step Explanation with Example**

Let’s take an array:

```js
[8, 4, 7, 3, 1, 9, 2]
```

#### 🔹 Step 1: Divide

Keep dividing the array until each element stands alone:

```
[8, 4, 7, 3, 1, 9, 2]
        ↓
[8, 4, 7]        [3, 1, 9, 2]
  ↓                  ↓
[8] [4] [7]        [3] [1] [9] [2]
```

#### 🔹 Step 2: Merge

Now we **merge** these individual elements into sorted subarrays:

```
[8] + [4] → [4, 8]
[4, 8] + [7] → [4, 7, 8]

[3] + [1] → [1, 3]
[1, 3] + [9] → [1, 3, 9]
[1, 3, 9] + [2] → [1, 2, 3, 9]

Final merge:
[4, 7, 8] + [1, 2, 3, 9] → [1, 2, 3, 4, 7, 8, 9]
```

---

### 🧠 JavaScript Code

```js
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    left[i] < right[j] ? result.push(left[i++]) : result.push(right[j++]);
  }

  return [...result, ...left.slice(i), ...right.slice(j)];
}

console.log(mergeSort([8, 4, 7, 3, 1, 9, 2]));
```

---

### ⏱ Time and Space Complexity

| Case        | Time Complexity | Explanation                       |
| ----------- | --------------- | --------------------------------- |
| **Best**    | `O(n log n)`    | Always divides in half and merges |
| **Average** | `O(n log n)`    | Consistent regardless of input    |
| **Worst**   | `O(n log n)`    | Same as best, unlike Quick Sort   |

| Metric    | Space Complexity |                                |
| --------- | ---------------- | ------------------------------ |
| **Worst** | `O(n)`           | Due to extra array for merging |

---

### ✅ Advantages

* **Consistent** `O(n log n)` performance
* **Stable** sort (preserves order of equal elements)
* Good for **linked lists** or external sorting (files, streams)

---

### ❌ Disadvantages

* Requires **extra memory** (`O(n)` space)
* Slower than in-place algorithms like Quick Sort on smaller arrays

---

### 📦 Merge Sort Tree Visualization

Imagine the process as a binary tree where:

* The array splits down to the leaves (individual elements)
* Then merges back up in sorted form

```
                  [8,4,7,3,1,9,2]
                 /              \
          [8,4,7]               [3,1,9,2]
         /     \                /       \
      [8]     [4,7]         [3,1]     [9,2]
              /   \         /   \      /   \
            [4]   [7]     [3]  [1]   [9]  [2]
              ↓     ↓     ↓     ↓     ↓     ↓
           [4,7]   [8,4,7]  [1,3]    [2,9] → merge
                          ↓                ↓
                    [1,2,3,4,7,8,9]
```

---