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

let srts1 = ["flower", "flow", "flight"];
let srts2 = ["dog", "racecar", "car"];


// function longestCommonPrefix(arr) {
// 	for (let item = 0; item < arr.length; item++) {
// 		for(let str= 0; str< arr[item].length; str++){
// 			if(item < arr.length -1) {
// 				for (let sItem = 1; sItem < arr.length; sItem++) {
// 					if(arr[item][str] == arr[sItem][str]) {
// 						console.log(arr[item][str], arr[item +1][str] )
// 					} else {
						
// 					}
// 				}
// 			} 
// 		}
// 	}

// }

function longestCommonPrefix(arr) {
	let minLength = []
	let min = 0;
	let ok = 0;
	let res = []
	for(let item = 0; item < arr.length; item++){
		minLength.push(arr[item].length);
		min = Math.min(...minLength)

		for(let i=0; i < min; i++) {
			if(item < arr.length -1) {
				if(arr[item][i] == arr[item + 1][i]){
					res[i] = arr[item][i];
					console.log(res)
				}
			}
		}
	}
	
}
longestCommonPrefix(srts1)
// console.log(longestCommonPrefix(srts1));
