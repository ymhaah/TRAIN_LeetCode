function log(ele) {
	console.log(ele);
}

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
let word4 = "egypT";

function isUpperCase(word) {
	if (
		word.toUpperCase() == word ||
		word[0].toUpperCase() == word[0] ||
		word.toLowerCase() == word
	) {
		return true;
	} else {
		return false;
	}
}
log(isUpperCase(word4));

// ####################################################
