Of course! Let's break down Radix Sort, a clever and efficient non-comparative sorting algorithm.

### What is Radix Sort?

Imagine you have a stack of library cards, and you want to sort them by their ID number. Instead of comparing every card to every other card, you could be more systematic. You could first group them by the last digit of their ID, then take those groups and re-group them by the second-to-last digit, and so on, until you've sorted by the most significant digit.

That's exactly what Radix Sort does! It's a non-comparative sorting algorithm that sorts integers by processing individual digits. It groups keys by the individual digits which share the same significant position and value.

The most common version is **LSD (Least Significant Digit) Radix Sort**, which is what we will explore.

---

### Step-by-Step Visual Explanation

Let's sort the array: `[170, 45, 75, 90, 802, 24, 2, 66]`

#### **Preparation Step: Find the Max Digits**

First, we look at the numbers and find the one with the most digits. In our list, `802` has the most digits (3). This tells us we will need to make **3 passes** over our data. We will treat numbers with fewer digits as if they have leading zeros (e.g., `45` is treated as `045`).

---

#### **Pass 1: Sorting by the Least Significant Digit (the "Ones" place)**

We will distribute the numbers into 10 "buckets," one for each digit (0 through 9), based on their **ones** place digit.

1.  **Examine each number's ones digit:**
    *   17**0** -> Bucket 0
    *   4**5** -> Bucket 5
    *   7**5** -> Bucket 5
    *   9**0** -> Bucket 0
    *   80**2** -> Bucket 2
    *   2**4** -> Bucket 4
    *   **2** -> Bucket 2
    *   6**6** -> Bucket 6

2.  **Visualize the Buckets:**
    *   **Bucket 0:** `[170, 90]`
    *   **Bucket 1:** `[]`
    *   **Bucket 2:** `[802, 2]`
    *   **Bucket 3:** `[]`
    *   **Bucket 4:** `[24]`
    *   **Bucket 5:** `[45, 75]`
    *   **Bucket 6:** `[66]`
    *   **Bucket 7:** `[]`
    *   **Bucket 8:** `[]`
    *   **Bucket 9:** `[]`

    *Notice the order is maintained within the buckets (e.g., 170 came before 90 in the original list, so it goes into Bucket 0 first). This property is called **stability** and is crucial for Radix Sort to work.*

3.  **Re-collect the numbers** from the buckets in order (Bucket 0, then Bucket 1, etc.).

Our array is now: `[170, 90, 802, 2, 24, 45, 75, 66]`

---

#### **Pass 2: Sorting by the "Tens" place**

Now we take the *new* order of the array and sort it based on the **tens** place digit. (Numbers like `2` are treated as `02`).

1.  **Examine each number's tens digit:**
    *   1**7**0 -> Bucket 7
    *   **9**0 -> Bucket 9
    *   8**0**2 -> Bucket 0
    *   **0**2 -> Bucket 0
    *   **2**4 -> Bucket 2
    *   **4**5 -> Bucket 4
    *   **7**5 -> Bucket 7
    *   **6**6 -> Bucket 6

2.  **Visualize the Buckets:**
    *   **Bucket 0:** `[802, 2]`
    *   **Bucket 1:** `[]`
    *   **Bucket 2:** `[24]`
    *   **Bucket 3:** `[]`
    *   **Bucket 4:** `[45]`
    *   **Bucket 5:** `[]`
    *   **Bucket 6:** `[66]`
    *   **Bucket 7:** `[170, 75]`
    *   **Bucket 8:** `[]`
    *   **Bucket 9:** `[90]`

3.  **Re-collect the numbers** from the buckets.

Our array is now: `[802, 2, 24, 45, 66, 170, 75, 90]`

---

#### **Pass 3: Sorting by the "Hundreds" place (Most Significant Digit)**

This is our final pass. We use the array from the end of Pass 2 and sort based on the **hundreds** place.

1.  **Examine each number's hundreds digit:**
    *   **8**02 -> Bucket 8
    *   **0**02 -> Bucket 0
    *   **0**24 -> Bucket 0
    *   **0**45 -> Bucket 0
    *   **0**66 -> Bucket 0
    *   **1**70 -> Bucket 1
    *   **0**75 -> Bucket 0
    *   **0**90 -> Bucket 0

2.  **Visualize the Buckets:**
    *   **Bucket 0:** `[2, 24, 45, 66, 75, 90]`
    *   **Bucket 1:** `[170]`
    *   **Bucket 2:** `[]`
    *   **Bucket 3:** `[]`
    *   **Bucket 4:** `[]`
    *   **Bucket 5:** `[]`
    *   **Bucket 6:** `[]`
    *   **Bucket 7:** `[]`
    *   **Bucket 8:** `[802]`
    *   **Bucket 9:** `[]`

3.  **Re-collect the numbers one last time.**

Our final, sorted array is: `[2, 24, 45, 66, 75, 90, 170, 802]` ✨

---

### JavaScript Code Implementation

Here is a clean implementation in JS using helper functions.

```javascript
// Helper function to get the digit at a certain place value
function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

// Helper function to count the number of digits in a number
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Helper function to find the max number of digits in an array of numbers
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

/**
 * Radix Sort Main Function
 * @param {number[]} nums - An array of numbers to sort
 * @returns {number[]} - The sorted array
 */
function radixSort(nums) {
  // Find the number with the most digits to determine how many passes we need
  let maxDigitCount = mostDigits(nums);
  
  // Loop from the least significant digit (k=0) to the most significant
  for (let k = 0; k < maxDigitCount; k++) {
    // Create our 10 buckets (0-9)
    let digitBuckets = Array.from({ length: 10 }, () => []);
    
    // Loop through each number in the array
    for (let i = 0; i < nums.length; i++) {
      // Get the digit at the current place (k)
      let digit = getDigit(nums[i], k);
      // Place the number in the corresponding bucket
      digitBuckets[digit].push(nums[i]);
    }
    
    // Reconstruct the array by concatenating the buckets
    nums = [].concat(...digitBuckets);
  }
  
  return nums;
}

// Example Usage:
const unsortedArray = [170, 45, 75, 90, 802, 24, 2, 66];
const sortedArray = radixSort(unsortedArray);
console.log(sortedArray); // Output: [2, 24, 45, 66, 75, 90, 170, 802]
```

---

### Complexity Analysis

Let's define our variables:
*   `n` = the number of elements in the array.
*   `k` = the number of digits in the largest number.
*   `b` = the base of the numbering system (in our case, base 10).

#### **Time Complexity: O(n * k)**

*   The main loop runs `k` times (once for each digit place).
*   Inside that loop, we iterate through all `n` numbers to place them into buckets. This is O(n).
*   We then reconstruct the array, which also takes O(n) time.
*   So, the total time is `k * O(n) = O(n * k)`.
*   This is very powerful. If `k` (the number of digits) is small and constant, Radix Sort is effectively linear time, O(n), which is faster than comparison-based sorts like Merge Sort or Quick Sort (O(n log n)).

#### **Space Complexity: O(n + b)**

*   We need to store the `n` elements in our buckets. In the worst-case scenario, all `n` elements could fall into a single bucket.
*   We also need `b` buckets (in our case, 10).
*   Therefore, the space required is O(n + b). Since `b` is usually a constant (like 10), this is often simplified to **O(n)**.

---

### Advantages and Disadvantages

#### ✅ Advantages

1.  **Extremely Fast:** For the right kind of data (integers or strings with a fixed range of digits/characters), its linear time complexity O(n*k) can outperform O(n log n) algorithms.
2.  **Stable:** Radix sort is a stable sort, meaning that the relative order of elements with equal keys is preserved. This can be very useful in certain applications.
3.  **Non-Comparative:** It sorts without comparing elements to each other, which avoids the O(n log n) lower bound of comparison-based sorting.

#### ❌ Disadvantages

1.  **Not for General Purpose Use:** It's specialized. It works well for integers and strings but is not easily applicable to floating-point numbers or complex objects that don't have a clear digit-based structure.
2.  **Space Inefficient:** It requires significant extra space for the buckets (O(n+b)), unlike in-place sorting algorithms like Heapsort (O(1) space).
3.  **The "k" Factor:** The performance is dependent on the number of digits (`k`) of the largest number. If you are sorting numbers where `k` is very large (e.g., 64-bit integers), the constant `k` can be larger than `log n`, making it slower than an O(n log n) algorithm.