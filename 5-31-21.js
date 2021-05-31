/* First Non-Repeating Character:
Write a function that takes in a string of lowercase letters and returns the index of the string's first non-repeating character.
The first non-repeating character is the first character in a string that occurs only once. If the input string doesn't have any
non-repeating characters, your function should return -1.
Ex: string = 'abcdcaf'
output -> 1
*/

function firstNonRepeatingCharacter(string) {
	const charCount = {};
  for(let x = 0; x < string.length; x++){
    const currentChar = string[x];
		charCount[currentChar] ? charCount[currentChar] ++ : charCount[currentChar] = 1;
  }
	for(let x = 0; x < string.length; x++){
		const currentChar = string[x];
		if(charCount[currentChar] === 1){
      return x;
    }
  }
  return -1;
}