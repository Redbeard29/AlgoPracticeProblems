/* Four Number Sum:
Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum.
The function should find all quadruplets in the array that sum up to the target sum and return a two-dimensional
array of all these quadruplets in no particular order. If no four numbers sum up to the target sumn, the function
should return an empty array.
Ex: array = [7, 6, 4, -1, 1, 2], targetSum = 16;
returns -> [[7, 6, 4, -1], [7, 6, 1, 2]];
*/

function fourNumberSum(array, targetSum) {
    const sumsOfPairs = {}; 
      const quadruplets = [];
      
      for(let x = 1; x < array.length - 1; x++){
          for(let y = x + 1; y < array.length; y++){
              const currentSum = array[y] + array[x];
              const difference = targetSum - currentSum;
              if(difference in sumsOfPairs){
                  for(const nums of sumsOfPairs[difference]){
                      quadruplets.push(nums.concat([array[x], array[y]]));
                  }
              }
          }
          for(let z = 0; z < x; z++){
              const currentSum = array[z] + array[x];
              sumsOfPairs[currentSum] ? sumsOfPairs[currentSum].push([array[z],array[x]]) : sumsOfPairs[currentSum] = [[array[z], array[x]]];
          }
      }
      return quadruplets;
  }
  
  /*Largest Range:
  Write a function that takes in an array of integers and returns an array of length 2 representing the largest
  range of integers contained in that array. The first number in the output array shouldbe the first number in 
  the range, while the second number should be the last number in the range. A range of numbers is defined as a set
  of numbers that come right after each other in the set of real integers. For instance, the output array [2,6]
  represents the range [2,3,4,5,6], which is a range of length 5. Note that numbers don't need to be sorted or 
  adjacent in the input array in order to form a range. You can assume that there will only be one largest range.
  Ex: array = [1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6]
  returns -> [0,7]
  */

  function largestRange(array) {
    const numsVisited = {};
      let largestRangeIdx = [];
      let largestRangeCount = 0;
      
      for(const num of array){
          numsVisited[num] = false;
    }
      
      for(const num of array){
          numsVisited[num] = true;
          let currentRangeCount = 1;
          let left = num - 1;
          let right = num + 1;
          
          while(left in numsVisited){
        numsVisited[left] = true;
              currentRangeCount++;
              left--;
      }
          
          while(right in numsVisited){
        numsVisited[right] = true;
              currentRangeCount++;
              right++;
      }
          
          if(currentRangeCount > largestRangeCount){
        largestRangeCount = currentRangeCount;
              largestRangeIdx = [left + 1, right - 1];
      }
    }
      return largestRangeIdx;
  }
  
  /* Group Anagrams:
  Write a function that takes in an array of strings and groups anagrams together. Anagrams are strings made up
  of exactly the same letters, where the order doesn't matter. For example, "cinema" and "iceman". Your function
  should return a list of anagram groups in no particular order. 
  Ex: words = ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"];
  returns -> [["yo", "oy"], ["flop", "olfp"], ["act", "tac", "cat"], ["foo"]];
  */
  function groupAnagrams(words) {
	const anagramCounter = {};
	
	for(const word of words){
		const wordSort = word.split('').sort().join('');
		anagramCounter[wordSort] ? anagramCounter[wordSort].push(word) : anagramCounter[wordSort] = [word];
	}
	return Object.values(anagramCounter);
}
