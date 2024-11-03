function maxSumSubarray(arr, k) {
  if (arr.length < k) return null; // Edge case: if array length is smaller than k

  // Step 1: Calculate the sum of the first 'k' elements
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
      windowSum += arr[i];
  }

  let maxSum = windowSum;

  // Step 2: Slide the window across the array
  for (let i = k; i < arr.length; i++) {
      // Slide the window to the right
      windowSum += arr[i] - arr[i - k];
      maxSum = Math.max(maxSum, windowSum); // Update max sum if the current window sum is larger
  }

  return maxSum;
}

// Example usage
const arr = [2, 1, 5, 1, 3, 2];
const k = 3;
console.log(maxSumSubarray(arr, k)); // Output: 9 (subarray [5, 1, 3])
