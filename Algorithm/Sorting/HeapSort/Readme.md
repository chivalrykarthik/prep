### 🧱 Heap Sort in JavaScript — Visual Explanation

**Heap Sort** is a **comparison-based** sorting technique based on a **Binary Heap** (usually a Max Heap). It works in two phases:

1. **Build a Max Heap** from the input.
2. **Extract the largest element** (the root), move it to the end, and rebuild the heap.

---

### 📊 Example: `[4, 10, 3, 5, 1]`

#### Step 1: Build Max Heap

Max Heap: Every parent node is **greater than** its children.

Convert array to binary heap:

```
Initial array:        Heap (binary tree):

[4, 10, 3, 5, 1]       4
                     / \
                   10   3
                  /  \
                 5    1
```

Apply heapify to build Max Heap:

```
After heapify:       10
                     / \
                   5    3
                  / \
                 4   1

Array form: [10, 5, 3, 4, 1]
```

#### Step 2: Sorting by Extraction

* Swap root (10) with last element (1), then heapify the root again:

```txt
[10, 5, 3, 4, 1]  → swap →  [1, 5, 3, 4, 10]  → heapify →  [5, 4, 3, 1, 10]
[5, 4, 3, 1, 10]  → swap →  [1, 4, 3, 5, 10]  → heapify →  [4, 1, 3, 5, 10]
...
```

Repeat until fully sorted:
➡️ `[1, 3, 4, 5, 10]`

---

### 🧠 JavaScript Code for Heap Sort

```js
function heapSort(arr) {
  let n = arr.length;

  // Build max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // Extract elements from heap
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]]; // swap
    heapify(arr, i, 0);
  }

  return arr;
}

function heapify(arr, size, i) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < size && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < size && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, size, largest);
  }
}

console.log(heapSort([4, 10, 3, 5, 1]));
```

---

### ⏱ Time and Space Complexity

| Case    | Time Complexity | Why                                 |
| ------- | --------------- | ----------------------------------- |
| Best    | `O(n log n)`    | Logarithmic heapify over n elements |
| Average | `O(n log n)`    | Same as above                       |
| Worst   | `O(n log n)`    | Always reheapifies down the tree    |

|       | Space Complexity |
| ----- | ---------------- |
| Worst | `O(1)` in-place  |

---

### ✅ Advantages

* **In-place algorithm**: No extra space (`O(1)` space)
* **Consistent performance**: `O(n log n)` in all cases
* Works well when memory is limited

---

### ❌ Disadvantages

* **Not stable** (doesn't preserve order of equal elements)
* Slower in practice than Quick Sort or Merge Sort due to more comparisons and swaps
* More complex to implement than Insertion or Bubble sort

---