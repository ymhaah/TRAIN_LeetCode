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

// Remove Letter To Equalize Frequency
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

let word1 = "ddaccb";


function equalFrequency(word) {
    let arr = word.split("");
    let repNum = []
    for (let i = 0; i < arr.length; i++) {
        let currentLetI = arr[i];
        let rep = 0;
        for (let n = 0; n < arr.length; n++) {
            let currentLetN = arr[n];
            if(currentLetI == currentLetN) {
                rep++
                repNum[i] = rep;
            }
        }
    }
    let uniq = new Set(repNum)
    let setArr = []
    uniq.forEach((u) => {
        setArr.push(u);
    })
    console.log(repNum, setArr)
    if (uniq.size == 1) {
        if (setArr[0] == 1) {
            return true
        } else {
            return false
        }
    } else if (uniq.size == 2) {
        if (setArr[0] == setArr[1] + 1 || setArr[0] == setArr[1] - 1 ) {
            return true
        } else {
            return false
        }
    }
}
// equalFrequency(word1)
console.log(equalFrequency(word1));
