// ####################################################
// detect-capital

// link: https://leetcode.com/problems/detect-capital/

// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Given a string word, return true if the usage of capitals in it is right.

// let word1 = "USA";
// let word2 = "Yousef";
// let word3 = "mohamed";
// let word4 = "EgypT";

// function isUpperCase(word) {
// 	if (word.toUpperCase() == word || word.toLowerCase() == word) {
// 		return true;
// 	} else if (
// 		word[0].toUpperCase() == word[0] &&
// 		word.slice(1, word.length) == word.slice(1, word.length).toLowerCase()
// 	) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// console.log(isUpperCase(word4));

// ####################################################
// Two Sum

// link: https://leetcode.com/problems/two-sum/

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// let nums = [2, 7, 11, 15];
// let target = 9;

// function twoSum(nums, target) {
// 	for (let I = 0; I < nums.length; I++) {
// 		for (let i = I + 1; i < nums.length; i++) {
// 			if (nums[I] + nums[i] == target) {
// 				return [I, i];
// 			}
// 		}
// 	}
// }

// console.log(twoSum(nums, target));

// ####################################################
// Longest Common Prefix

// link: https://leetcode.com/problems/longest-common-prefix/

// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// let srts1 = ["flower", "flow", "flight"];
// let srts2 = ["dog", "racecar", "car"];

// var longestCommonPrefix = function (strs) {
//     let prefix = "";
//     if (strs.length === 0) return prefix;

//     for (let i = 0; i < strs[0].length; i++) {
//         const character = strs[0][i];
//         for (let j = 0; j < strs.length; j++) {
//             if (strs[j][i] !== character) return prefix;
//         }
//         prefix = prefix + character;
//     }
//     return prefix;
// };

// console.log(longestCommonPrefix(srts1));

// ####################################################

// Palindrome Number
// link: https://leetcode.com/problems/palindrome-number/

// Given an integer x, return true if x is a Palindrome

// An integer is a palindrome when it reads the same forward and backward.

// For example, 121 is a palindrome while 123 is not.

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// let x = 0; true
// let x = 123; false
// let x = 121; true
// let x = -121; false

// function isPalindrome(num) {
//     if (num !== 0 && !num) {
//         return false;
//     }
//     let revNum = num.toString().split("").reverse().join("");
//     if (revNum == num.toString()) {
//         return true;
//     }
//     return false;
// }
// console.log(isPalindrome(x));

// ####################################################

// pascals-triangle
// link: https://leetcode.com/problems/pascals-triangle/

// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

// function pascals(numRows) {
//     let pasArr = [[1]];
//     for (let i = 1; i < numRows; i++) {
//         let row = [];
//         for (let n = 0; n <= i; n++) {
//             let same = pasArr[i - 1][n] ? pasArr[i - 1][n] : 0;
//             let prev = pasArr[i - 1][n - 1] ? pasArr[i - 1][n - 1] : 0;
//             row[n] = same + prev;
//         }
//         pasArr.push(row);
//     }
//     return pasArr;
// }

// console.log(pascals(5));
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

/*
Notes: The idea is that each element is equal to the sum of the element in the previous row in the same index + index -1
*/

// ####################################################

// valid anagram
// link: https://leetcode.com/problems/valid-anagram/

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// let s = "anagram";
// let t = "nagaram";

// function isAnagram(s, t) {
//     let sArr = s.split("");
//     let tArr = t.split("");

//     if (sArr.length != tArr.length) {
//         return false;
//     }

//     let hashMapS = {};
//     let hashMapT = {};

//     for (let i = 0; i < sArr.length; i++) {
//         if (hashMapS[sArr[i]]) {
//             hashMapS[sArr[i]]++;
//         } else {
//             hashMapS[sArr[i]] = 1;
//         }
//     }
//     for (let i = 0; i < tArr.length; i++) {
//         if (hashMapT[tArr[i]]) {
//             hashMapT[tArr[i]]++;
//         } else {
//             hashMapT[tArr[i]] = 1;
//         }
//     }

//     for (str in hashMapS) {
//         if (hashMapS[str] != hashMapT[str]) {
//             return false;
//         }
//     }

//     return true;
// }

// console.log(isAnagram(s, t));

// ####################################################

// Contains Duplicate

// link: https://leetcode.com/problems/contains-duplicate/

// Given an integer array nums, return true if any value appears at least twice in the array,
// and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false

// let nums = [1, 1, 4, 2, 3];

// function containsDuplicate(nums) {
//     let hashMap = new Set();

//     let len = nums.length;

//     while (len--) {
//         if (hashMap.has(nums[len])) {
//             return true;
//         } else {
//             hashMap.add(nums[len]);
//         }
//     }

//     // for (let i = 0; i < nums.length; i++) {
//     //     if (hashMap.has(nums[i])) {
//     //         return true;
//     //     } else {
//     //         hashMap.add(nums[i]);
//     //     }
//     // }
//     return false;
// }

// console.log("containsDuplicate:", containsDuplicate(nums));

// ####################################################

// link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// Best Time to Buy and Sell Stock

// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy
//  one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction.
//  If you cannot achieve any profit, return 0.

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,14]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

let prices = [2, 4, 1];

// p = [2,4,1]
// afterMinArr = [] => len =0
// p = [2, 4]
// afterMinArr = [4]
// min in p = 2
// max in afterMinArr= 4

function maxProfit(prices) {
    let afterMinArr = prices.slice(prices.indexOf(Math.min(...prices)) + 1);

    if (afterMinArr.length == 0) {
    }
}
console.log("maxProfit:", maxProfit(prices));

// ####################################################

// Remove Letter To Equalize Frequency (not)
// link: https://leetcode.com/problems/remove-letter-to-equalize-frequency/

// You are given a 0-indexed string word, consisting of lowercase English letters.
//  You need to select one index and remove the letter at that index from word so that the frequency of every letter present in word is equal.

// Return true if it is possible to remove one letter so that the frequency of all letters in word are equal, and false otherwise.

// Note:

// The frequency of a letter x is the number of times it occurs in the string.
// You must remove exactly one letter and cannot chose to do nothing.

// Example 1:

// Input: word = "abcc"
// Output: true
// Explanation: Select index 3 and delete it: word becomes "abc" and each character has a frequency of 1.
// Example 2:

// Input: word = "aazz"
// Output: false
// Explanation: We must delete a character, so either the frequency of "a" is 1 and the frequency of "z" is 2, or vice versa.
//  It is impossible to make all present letters have equal frequency.

// let word1 = "ddaccb";

// function equalFrequency(word) {
//     let arr = word.split("");

//     let hashMap = {};

//     for (let i = 0; i < arr.length; i++) {
//         if (hashMap[arr[i]]) {
//             hashMap[arr[i]]++;
//         } else {
//             hashMap[arr[i]] = 1;
//         }
//     }

//     let friq = Array.from(Object.values(hashMap));

//     if (
//         friq.every((f) => {
//             return f == friq[0];
//         })
//     ) {
//         if (
//             friq.every((f) => {
//                 return f == 1;
//             })
//         ) {
//             return true;
//         } else {
//             return false;
//         }
//     }

//     console.log(friq);
//     for (let i = 0; i < friq.length; i++) {
//         friq[i] = friq[i] - 1;
//         friq.splice(i, 1);
//         if (friq[i] == 0) {
//             if (
//                 friq.every((f) => {
//                     return f == friq[0];
//                 })
//             ) {
//                 return true;
//             }
//         } else {
//             console.log(friq);
//             if (
//                 friq.every((f) => {
//                     return f == friq[0];
//                 })
//             ) {
//                 return true;
//             }
//             friq[i] = friq[i] + 1;
//         }
//     }
//     return false;
// }

// console.log(equalFrequency(word1));

// ####################################################

// Single Number (not)
// link: https://leetcode.com/problems/single-number/

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:

// Input: nums = [2,2,1]
// Output: 1

// function singleNumber(nums) {
//     for (let i = 0; i < nums.length - 1; i++) {}
// }

// console.log(singleNumber([2, 1, 2]));
// Output: 1

// ####################################################
