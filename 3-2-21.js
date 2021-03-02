/* Subarray Sort:
Write a function that takes in an array of at least two integers and that returns an 
array of the starting and ending indices of the smallest subarray in the input array that
needs to be sorted in place in order for the entire input array to be sorted in ascending
order. If the input array is already sorted, return [-1, -1].
Ex: array = [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19];
returns -> [3, 9];
*/

function subarraySort(array) {
    const subarrayIndices = [];
      let smallestOutOfOrder = Infinity;
      let largestOutOfOrder = - Infinity;
      
      for(let x = 0; x < array.length; x++){
      let num = array[x];
          if(isOutOfOrder(x, num, array)){
        smallestOutOfOrder = Math.min(array[x], smallestOutOfOrder);
              largestOutOfOrder = Math.max(array[x], largestOutOfOrder);
      }
    }
      if(smallestOutOfOrder === Infinity){
      return [-1, -1];
    }
      let leftIdx = 0;
      while(smallestOutOfOrder >= array[leftIdx]){
      leftIdx++;
    }
      let rightIdx = array.length - 1;
      while(largestOutOfOrder <= array[rightIdx]){
      rightIdx--;
    }
      return [leftIdx, rightIdx];
  }
  
  function isOutOfOrder(x, num, array){
    if(x === 0) return num > array[x + 1];
      if(x === array.length - 1) return num < array[x - 1];
      return num > array[x + 1] || num < array[x - 1];
  }

/* Two number sum: 
Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any
two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum
up to the target sum, the function should return an empty array. Note that the target sum has to be obtained by summing tow different
integers in the array; you can't add a single integer to itself in order to obtain the target sum. You can assume that there will be at most
one pair of numbers summing up to the target sum. */

//Naive Solution:

function twoNumberSum(array, targetSum) {
	var newArr = []
	for(var x = 0; x < array.length; x++){
		for(var y = x+1; y < array.length; y++){
			if(array[x] + array[y] == targetSum){
				newArr.push(array[x], array[y]);
			}
		}
	}
	return newArr;
}


//O(n) solution:
function twoNumberSum(array, targetSum) {
	array.sort((a,b) => a - b);
  let left = 0;
	let right = array.length - 1;
	
	while(left < right){
    const currentSum = array[left] + array[right];
		if(currentSum === targetSum){
      return [array[left], array[right]];
    }
		else if(currentSum < targetSum){
      left++;
    }
		else{
      right--;
    }
  }
	return [];
}

//O(nlog(n)) solution:

function twoNumberSum(array, targetSum) {
    const numCounter = {};
      
      for(const num of array){
      const difference = targetSum - num;
          if(difference in numCounter){
        return [num, difference];
      }
          else{
        numCounter[num] = true;
      }
    }
      return [];
  }
  