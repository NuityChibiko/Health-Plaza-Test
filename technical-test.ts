// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:
// * 1 <= strs.length <= 200
// * 0 <= strs[i].length <= 200
// * strs[i] consists of only lower-case English letters.

function longestCommonPrefix(strs: string[]): string {
  // Constraints
  if (strs.length < 1 || strs.length > 200) {
    throw new Error("Array length must be between 1 and 200.");
  }

  for (let str of strs) {
    if (str.length > 200 || !/^[a-z]*$/.test(str)) {
      throw new Error(
        "Each string must be between 0 and 200 characters and consist of only lower-case English letters."
      );
    }
  }

  if (strs.length === 0) return "";

  let prefix = strs[0]; // Start with the first string as the initial prefix

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1); // Reduce the prefix by one character
      if (prefix === "") return ""; // If prefix becomes empty, return ""
    }
  }

  return prefix;
}

// Example 1
const example1: string[] = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(example1)); // Output: "fl"

// Example 2
const example2: string[] = ["dog", "racecar", "car"];
console.log(longestCommonPrefix(example2)); // Output: ""
