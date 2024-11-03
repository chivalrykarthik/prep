function longestUniqueSubstring(s) {
    let windowStart = 0;
    let maxLength = 0;
    let charIndexMap = {};

    for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        const char = s[windowEnd];

        // If the character is already in the map, slide the window start
        if (char in charIndexMap) {
            windowStart = Math.max(windowStart, charIndexMap[char] + 1);
        }

        // Update the map with the current character's index
        charIndexMap[char] = windowEnd;
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }

    return maxLength;
}

// Example usage
const s = "abcabcbb";
console.log(longestUniqueSubstring(s)); // Output: 3 (substring "abc")
