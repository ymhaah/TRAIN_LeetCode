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

// Binary Search

// link: https://leetcode.com/problems/binary-search/

// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

// let nums = [-1, 0, 3, 5, 9, 12];
// let target = -2;

// function search(nums, target) {
//     // let start = 0;
//     // let end = nums.length - 1;
//     // while (end >= start) {
//     //     let mid = Math.floor((start + end) / 2);
//     //     if (nums[mid] == target) {
//     //         return mid;
//     //     } else if (nums[mid] > target) {
//     //         end = mid - 1;
//     //     } else if (nums[mid] < target) {
//     //         start = mid + 1;
//     //     }
//     // }
//     // return -1;
//     // (not)
//     // if (nums.length == 0) {
//     //     return -1;
//     // }
//     // let mid = Math.floor(nums.length - 1 / 2);
//     // if (nums[mid] == target) {
//     //     return mid;
//     // }
//     // if (nums[mid] > target) {
//     //     return search(nums.slice(0, mid), target);
//     // }
//     // if (nums[mid] < target) {
//     //     return search(nums.slice(mid - 1, nums.length - 1), target);
//     // }
// }
// console.log(search(nums, target));

// ####################################################

// Search Insert Position

// link: https://leetcode.com/problems/search-insert-position/

// Given a sorted array of distinct integers and a target value,
//  return the index if the target is found. If not,
//  return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1

// let nums = [1, 3, 5, 6];
// let target = 0;

// function searchInsert(nums, target) {
//     let start = 0;
//     let end = nums.length - 1;
//     let center;

//     while (end >= start) {
//         center = Math.floor((start + end) / 2);
//         if (target == nums[center]) {
//             return center;
//         } else if (target > nums[center]) {
//             start = center + 1;
//         } else if (target < nums[center]) {
//             end = center - 1;
//         }
//     }
//     return start;
// }

// console.log(searchInsert(nums, target));

// ####################################################

// Majority Element

// link: https://leetcode.com/problems/majority-element/

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times.
//  You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// let nums: number[] = [3, 2, 3];

// function majorityElement(nums: number[]): number {
//     // let hashMap = new Map();

//     // let len = nums.length;
//     // let halfLen = Math.floor(len / 2);

//     // nums.forEach((num) => {
//     //     if (hashMap.has(num)) {
//     //         hashMap.set(num, hashMap.get(num) + 1);
//     //     } else {
//     //         hashMap.set(num, 1);
//     //     }
//     // });

//     // while is better than forEach
//     // while (len--) {
//     //     if (hashMap.has(nums[len])) {
//     //         hashMap.set(nums[len], hashMap.get(nums[len]) + 1);
//     //     } else {
//     //         hashMap.set(nums[len], 1);
//     //     }
//     //     if (hashMap.get(nums[len]) > halfLen) {
//     //         return nums[len];
//     //     }
//     // }

//     // let hashLen = [...hashMap].length;

//     // while(hashLen--) {
//     //     if ([...hashMap][hashLen][1] > Math.floor(nums.length) / 2) {
//     //         return [...hashMap][hashLen][0];
//     //     }
//     // }

//     // for (let i = 0; i < [...hashMap].length; i++) {
//     //     if ([...hashMap][i][1] > Math.floor(nums.length) / 2) {
//     //         return [...hashMap][i][0];
//     //     }
//     // }

//     // ##################################
//     let res = 0;
//     let count = 0;

//     // let len = nums.length;

//     // while (len--) {
//     //     if (count == 0) {
//     //         res = nums[len]
//     //     }
//     //     if (nums[len] == res) {
//     //         count++
//     //     } else {
//     //         count--
//     //     }
//     // }

//     return res;
// }

// console.log(majorityElement(nums));

// ####################################################
// Intersection of Two Arrays II

// link: https://leetcode.com/problems/intersection-of-two-arrays-ii/

// Given two integer arrays nums1 and nums2,
//  return an array of their intersection.
//  Each element in the result must appear as many
//  times as it shows in both arrays and you may return the result in any order.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.

// let nums1 = [1, 2, 2, 1];
// let nums2 = [2, 2, 2, 2, 2, 2];

// function intersect(nums1: number[], nums2: number[]): number[] | void {
//     let hashMap = new Map();
//     let res = [];
//     let len1 = nums1.length;
//     let len2 = nums2.length;

//     while (len1--) {
//         if (hashMap.has(nums1[len1])) {
//             hashMap.set(nums1[len1], hashMap.get(nums1[len1]) + 1);
//         } else {
//             hashMap.set(nums1[len1], 1);
//         }
//     }
//     while (len2--) {
//         if (hashMap.has(nums2[len2])) {
//             if (hashMap.get(nums2[len2]) > 0) {
//                 hashMap.set(nums2[len2], hashMap.get(nums2[len2]) - 1);
//                 res.push(nums2[len2]);
//             }
//         }
//     }

//     return res;
// }

// console.log("intersect:", intersect(nums1, nums2));

// ####################################################

// link: https://leetcode.com/problems/sort-an-array/

// sort an array
// Given an array of integers nums, sort the array in ascending order and return it.

// You must solve the problem without using any built-in functions in O(n log(n)) time complexity and with the smallest space complexity possible.

// Input: head = [-1,5,3,4,0]
// Output: [-1,0,3,4,5]

// let head = [0, 0, 0, 1, 0];

// function sortList(head: number[]): number[] | null {
//     let l = 0;
//     let r = head.length - 1;

//     function quickSort(arr: number[], l: number, r: number) {
//         if (l >= r) {
//             return arr;
//         }

//         function partition(arr: number[], l: number, r: number): number {
//             let j = l - 1;
//             let ele = r;

//             for (let k = l; k <= ele - 1; k++) {
//                 if (arr[k] < arr[ele]) {
//                     j++;
//                     let s1 = arr[j];
//                     let s2 = arr[k];
//                     arr[j] = s2;
//                     arr[k] = s1;
//                 }
//             }
//             let s3 = arr[ele];
//             let s4 = arr[j + 1];
//             arr[j + 1] = s3;
//             arr[ele] = s4;
//             return j + 1;
//         }

//         let pos = partition(arr, l, r);

//         if (l < r) {
//             quickSort(arr, l, pos - 1);
//             quickSort(arr, pos + 1, r);
//         }

//         return arr;
//     }
//     return quickSort(head, l, r);
// }

// console.log(sortList(head));

// ####################################################

// Move Zeroes

// link: https://leetcode.com/problems/move-zeroes/description/

// Given an integer array nums, move all 0's to the end of it while maintaining
//  the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

// let nums = [0, 1, 0, 3, 12];

// console.log(nums);

// function moveZeroes(nums: number[]): void {
//     if (nums.length <= 1) return;
//     let nonZeroIndex = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== 0) {
//             [nums[i], nums[nonZeroIndex]] = [nums[nonZeroIndex], nums[i]];
//             nonZeroIndex++;
//         }
//     }
// }
// moveZeroes(nums);
// console.log(nums);

// ####################################################

// Roman to Integer
// link: https://leetcode.com/problems/roman-to-integer/description/

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// For example, 2 is written as II in Roman numeral, just two ones added together.
//  12 is written as XII, which is simply X + II. The number 27 is written as XXVII,
//  which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right.
//  However, the numeral for four is not IIII. Instead, the number four is written as IV.
//  Because the one is before the five we subtract it making four.
//  The same principle applies to the number nine, which is written as IX.
//  There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

// let s = "LVIII";

// function romanToInt(s: string): number {
//     let roman = new Map<string, number>([
//         ["I", 1],
//         ["V", 5],
//         ["X", 10],
//         ["L", 50],
//         ["C", 100],
//         ["D", 500],
//         ["M", 1000],
//     ]);
//     let arr = s.split("");
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         const e1 = roman.get(arr[i] as string) as number;
//         const e2 = arr[i + 1] ? (roman.get(arr[i + 1] as string) as number) : 0;

//         if (e1 >= e2) {
//             sum = sum + e1;
//         } else if (e1 < e2) {
//             sum = sum + (e2 - e1);
//             i++;
//         }
//     }

//     return sum;
// }

// console.log(romanToInt(s));

// ####################################################

// Link: https://leetcode.com/problems/missing-number/description/

// Missing Number

// Given an array nums containing n distinct numbers in the range [0, n],
//  return the only number in the range that is missing from the array.

// Example 1:

// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3].
//  2 is the missing number in the range since it does not appear in nums.

// Example 2:

// Input: nums = [0,1]
// Output: 2
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2].
//  2 is the missing number in the range since it does not appear in nums.

// Example 3:

// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8
// Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9].
//  8 is the missing number in the range since it does not appear in nums.

let nums = [3, 0, 1];
function missingNumber(nums: number[]): number {
    let n = nums.length;

    const numberMap = new Map();

    for (let num of nums) {
        numberMap.set(num, true);
    }

    for (let i = 0; i <= n; i++) {
        if (!numberMap.has(i)) {
            return i;
        }
    }

    return -1;
}

console.log(missingNumber(nums));

// ####################################################

// link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// Best Time to Buy and Sell Stock (not)

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

// let prices = [7, 5, 2, 1, 4];

// p = [3, 2, 6, 1, 2, 3]
// afterMinArr = [1, 2, 3]
// beforeMinArr = [3, 2, 6]
// max in afterMinArr 3
// max in p 6

// function maxProfit(prices) {
//     let afterMinArr = prices.slice(prices.indexOf(Math.min(...prices)) + 1);
//     let beforeMinArr = prices.slice(
//         undefined,
//         prices.indexOf(Math.min(...prices))
//     );

//     if (afterMinArr.length == 0) {
//         if (prices.length == 0) {
//             console.log("t");
//             return 0;
//         }
//         return maxProfit(
//             prices.slice(undefined, prices.indexOf(Math.min(...prices)))
//         );
//     }

//     return (
//         afterMinArr[afterMinArr.indexOf(Math.max(...afterMinArr))] -
//         prices[prices.indexOf(Math.min(...prices))]
//     );
// }
// console.log("maxProfit:", maxProfit(prices));

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
