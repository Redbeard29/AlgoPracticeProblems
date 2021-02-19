/* Run Length Encoding:
Write a functionthat takesin a non-empty string and return its run-length encoding. Run-length encoding is a 
form of lossless data compression in which runs of data are stored as a single data vlue and count, rather than
as the original run. For this problem, a run of data is any sequence of consecutive, identical characters. So
the run "AAA" would be encoded as "3A". However, the input string can contain all sorts of special characters,
including numbers. And since encoded data must be decodable, this means that we can't naively run-length-encode
long runs. For example, the run "AAAAAAAAAAAA" (12 As), can't be naively encoded as "12A" since this string can 
mean either "AAAAAAAAAAAA" or "1AA". Therefore, runs of 10 or more characters should be encoded in a split fashion;
the aforementioned runs should be encoded as "9A3A".
Ex:
string = "AAAAAAAAAAAAABBCCCCDD"
returns -> "9A4A2B4C2D"
*/

function runLengthEncoding(string) {
	const encodedStringChars = [];
	let currentRunLength = 1;
	
	for (let x = 1; x < string.length; x++){
		const currentChar = string[x];
		const prevChar = string[x - 1];
		
		if(currentChar !== prevChar || currentRunLength === 9){
			encodedStringChars.push(currentRunLength.toString());
			encodedStringChars.push(prevChar);
			currentRunLength = 0;
		}
		
		currentRunLength ++;
	}
	
	encodedStringChars.push(currentRunLength.toString());
	encodedStringChars.push(string[string.length - 1]);
	
	return encodedStringChars.join('');
}

/* Longest Palindromic Substring:
Write a function that, given a string, returns its longest palindromic substring. A palindrome is a string that's
written the same forward and backward. Note that single-character strings are palindromes. You can assume that there
will only be one longest palindromic substring.
Ex: string = "abaxyzzyxf"
returns -> "xyzzyx"
*/

function longestPalindromicSubstring(string) {
	
	let currentLongest = [0, 1];
	
	for(let x = 1; x < string.length; x++){
		const odd = getLongestPalindrome(string, x - 1, x + 1);
		const even = getLongestPalindrome(string, x - 1, x);
		const longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
		currentLongest = currentLongest[1] - currentLongest[0] > longest[1] - longest[0] ? currentLongest : longest;
	}
	return string.slice(currentLongest[0], currentLongest[1]);
}

function getLongestPalindrome(string, leftIdx, rightIdx){
	while(leftIdx >= 0 && rightIdx < string.length){
		if(string[leftIdx] !== string[rightIdx]) break;
		leftIdx --;
		rightIdx ++;
	}
	return [leftIdx + 1, rightIdx];
}
