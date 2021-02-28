/* Valid IP Addresses:
You're given a string of length 12 or smaller, containing only digits. Write a function that
returns all the possible IP addresses that can be created by inserting three .s in the string.
An IP address is a sequence of four positive integers that are separated by .s, where each
individual integer is within the range 0 - 255 inclusive. An IP address isn't valid if any of the
individual integers contains leading 0s. For example, "192.168.0.1" is valid, but "192.168.00.1"
and "192.168.0.01" aren't because they contain "00" and "01" respectively. Another example of a 
valid IP address is "99.1.1.10"; conversely, "991.1.1.0" is invalid because "991" is greater
than 255. Your function should return the IP addresses in string format and in no particular order.
If no valid IP addresses can be created from the string, your function should return an empty list.
Ex: string = "1921680";
returns -> [
    "1.9.216.80",
    "1.92.16.80",
    "1.92.168.0",
    "19.2.16.80",
    "19.2.168.0",
    "19.21.6.80",
    "19.21.68.0",
    "19.216.8.0",
    "192.1.6.80",
    "192.1.68.0",
    "192.16.8.0"
]
*/

function validIPAddresses(string) {
	const collectedIPAddresses = [];
	
	for(let x = 0; x < Math.min(string.length, 4); x++){
		const currentParts = ['', '', '', ''];
		
		currentParts[0] = string.slice(0, x);
		
		if(validSection(currentParts[0])){
			for(let y = x + 1; y < x + Math.min(string.length, 4); y++){
				currentParts[1] = string.slice(x, y);
				
				if(validSection(currentParts[1])){
					for(let z = y + 1; z < y + Math.min(string.length, 4); z++){
						currentParts[2] = string.slice(y, z);
						currentParts[3] = string.slice(z);
						
						if(validSection(currentParts[2]) && validSection(currentParts[3])){
							collectedIPAddresses.push(currentParts.join('.'));
						}
					}
				}
			}
		}
	}
	return collectedIPAddresses;
}

function validSection(string){
	const stringAsInt = parseInt(string);
	if(stringAsInt > 255) return false;

	return string.length === stringAsInt.toString().length;
}

/* Longest Substring Without Duplication:
Write a function that takes in a string and returns its longest substring without duplicate 
characters. You can assume that there will only be one longest substring without duplication.
Ex: string = "clementisacap";
returns -> "mentisac"; 
*/

function longestSubstringWithoutDuplication(string) {
    const mostRecentIndex = {};
      let longestStringIndices = [0,1];
      let startIndex = 0;
      
      for(let x = 0; x < string.length; x++){
          const char = string[x];
          if(char in mostRecentIndex){
              startIndex = Math.max(startIndex, mostRecentIndex[char] + 1);
          }
          if(longestStringIndices[1] - longestStringIndices[0] < x + 1 - startIndex){
              longestStringIndices = [startIndex, x + 1];
          }
          mostRecentIndex[char] = x;
      }
      return string.slice(longestStringIndices[0], longestStringIndices[1]);
  }
  

/* Insertion Sort:
Implement Insertion Sort
*/

function insertionSort(array) {
    for(let x = 1; x < array.length; x++){
        let y = x;
        while(y > 0 && array[y] < array[y - 1]){
            const temp = array[y];
            array[y] = array[y - 1];
            array[y - 1] = temp;
            y--;
        }
    }
    return array;
}
  