/* Caesar Cipher Encryptor:
Given a non-empty string of lowercase letters and a non-negative integer representing
a key, write a function that returns a new string obtained by shifting every letter in 
the input string by k positions in the alphabet, where k is the key. Note that letters
should wrap around the alphabet; in other words, the letter z shifted by one returns
the letter a.
Ex: string = "xyz"
key = 2
returns -> "zab"
*/

function caesarCipherEncryptor(string, key) {
	const newKey = key % 26;
	const newLetters = [];
	
	for(let x = 0; x < string.length; x++){
		let newLetterLocation = (string.charCodeAt(x) - 96 + newKey);
		if(newLetterLocation > 26){
			newLetterLocation = (newLetterLocation - 26);
		}
		newLetters.push(String.fromCharCode(newLetterLocation + 96));
}
	return newLetters.join('');
}

/* Move Element to End:
You're given an arary of integers and an integer. Write a function that moves all instances
of that integer in the array to the end of the array and returns the array. The function
should perform this in place and doesn't need to maintain the order of the other integers.
Ex: array = [2, 1, 2, 2, 2, 3, 4, 2]
toMove = 2
returns -> [1, 3, 4, 2, 2, 2, 2, 2] //1, 3, and 4 could be ordered any way here
*/

function moveElementToEnd(array, toMove) {
    let left = 0;
      let right = array.length - 1;
      while(left < right){
          if(array[right] == toMove){
              right --;
          }
          if(array[left] !== toMove){
              left ++;
          }
          else{
              let temp = array[left];
              array[left] = array[right];
              array[right] = temp;
          }
      }
      return array;
  }
  

/* Reverse Words in String:
Write a function that takes in a string of words separated by one or more whitespaces
and returns a stirng that hast hese words in reverse order. For example, given the string
"ben is great", your function should return "great is ben". For this problem, a word 
can contain special characters, punctuation, and numbers. The words in the string will be
separated by one or more whitespaces, and the reversed string must contain the same whitespaces
as the original string. Note that you're not allowed to use any build in split or reverse
methods/functions. However, you can use the built in join method. Also note that the input
string isn't always guaranteed to contain words.
Ex: string "coding is the best!"
returns -> best! is the coding
*/

function reverseWordsInString(string) {
	const words = []; 
	let startOfWord = 0; 
	
  for(let x = 0; x < string.length; x++){
		if(string[x] === ' '){
			words.push(string.slice(startOfWord, x));
			startOfWord = x;
		}
		else if(string[startOfWord] === ' '){
			words.push(' ');
			startOfWord = x;
		}
	}
	
	words.push(string.slice(startOfWord));
	
	reverseWords(words);
	return words.join('');
}

function reverseWords(array){
	let start = 0; 
	let end = array.length - 1;
	
	while(start < end){
		let temp = array[start];
		array[start] = array[end];
		array[end] = temp;
		start++;
		end--;
	}
}