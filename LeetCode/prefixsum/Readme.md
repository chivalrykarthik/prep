# Prefix Sum

### Overview
A **prefix sum** is a data structure used to efficiently compute the sum of elements in a subarray by precomputing cumulative sums. This approach is highly useful in scenarios where multiple queries are made for sums over various ranges in an array, as it reduces the time complexity of each query to constant time \(O(1)\).

### How It Works
1. **Compute Prefix Sum Array**: We create an array `prefixSum` where each element at index `i` contains the sum of all elements from the start of the array up to index `i - 1`.
2. **Range Sum Calculation**: Using the prefix sum array, the sum of any subarray from index `left` to `right` can be found by subtracting `prefixSum[left]` from `prefixSum[right + 1]`.

### Real-World Use Cases
Prefix sums are widely used across different fields for efficient range calculations. Here are some practical use cases:

1. **Data Analysis and Statistics**: Calculating rolling averages, monthly expenses, or profits over specified time windows.
2. **Image Processing**: Used in integral images for fast pixel sum calculations within rectangular regions.
3. **Gaming and Simulations**: Quick calculations of accumulated points or resources over a game level or a period.
4. **Query Optimization in Databases**: Efficiently retrieve sums over specific date or time ranges in large datasets.
5. **Time Series Analysis**: Perform anomaly detection or compute moving averages over a time series.
6. **Sensor Networks and IoT**: Aggregate sensor data over time, such as total rainfall or average air quality index over different intervals.

### Implementation Example

Here’s a JavaScript implementation of prefix sum and how to use it for range sum queries:

```javascript
/**
 * Computes the prefix sum array for a given input array.
 * @param {number[]} nums - The input array of numbers.
 * @returns {number[]} The prefix sum array.
 */
function computePrefixSum(nums) {
    const prefixSum = [0]; // Start with 0 for easier calculations
    for (let i = 0; i < nums.length; i++) {
        prefixSum[i + 1] = prefixSum[i] + nums[i];
    }
    return prefixSum;
}

/**
 * Gets the sum of elements in a subarray from index `left` to `right`
 * using the prefix sum array.
 * @param {number[]} prefixSum - The prefix sum array.
 * @param {number} left - Starting index of the subarray.
 * @param {number} right - Ending index of the subarray.
 * @returns {number} The sum of the elements in the subarray.
 */
function getRangeSum(prefixSum, left, right) {
    return prefixSum[right + 1] - prefixSum[left];
}

// Example Usage
const nums = [1, 2, 3, 4, 5];  // Input array
const prefixSum = computePrefixSum(nums);

console.log(getRangeSum(prefixSum, 1, 3)); // Output: 9 (sum of elements 2, 3, 4)
```

### Explanation
1. **Compute Prefix Sum**: `computePrefixSum(nums)` returns a `prefixSum` array where `prefixSum[i]` is the sum of elements from the start up to index `i-1` in `nums`.
2. **Range Sum Calculation**: `getRangeSum(prefixSum, left, right)` returns the sum of elements in `nums` from index `left` to `right`, using the formula:
   \[
   \text{range sum} = \text{prefixSum}[right + 1] - \text{prefixSum}[left]
   \]

This method provides efficient range sum queries, making it a powerful tool for performance-sensitive applications.