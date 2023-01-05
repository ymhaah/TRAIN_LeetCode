// ####################################################
// detect-capital

// link: https://leetcode.com/problems/detect-capital/

// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Given a string word, return true if the usage of capitals in it is right.

let word1 = "USA";
let word2 = "Yousef";
let word3 = "mohamed";
let word4 = "EgypT";

function isUpperCase(word) {
	if (word.toUpperCase() == word || word.toLowerCase() == word) {
		return true;
	} else if (
		word[0].toUpperCase() == word[0] &&
		word.slice(1, word.length) == word.slice(1, word.length).toLowerCase()
	) {
		return true;
	} else {
		return false;
	}
}
console.log(isUpperCase(word4));

// ####################################################
