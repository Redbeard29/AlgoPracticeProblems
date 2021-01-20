/* Two number sum: Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any
two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum
up to the target sum, the function should return an empty array. Note that the target sum has to be obtained by summing tow different
integers in the array; you can't add a single integer to itself in order to obtain the target sum. You can assume that there will be at most
one pair of numbers summing up to the target sum. */

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

/* Smallest Difference: Write a function that takes in two non-empty arrays of integers, finds the pair of numbers (one from each array) 
whose absolute difference is closest to zero, and returns an array containing these two numbers, with the number from the first array in the
first position. Note that the absolute difference of the two integers is the distance between them on the real number line. For example, the
absolute difference of -5 and 5 is 10, and the absolute difference of -5 and -4 is 1. You can assume that there will only be one pair of 
numbers with the smallest difference. 
*/

function smallestDifference(arrayOne, arrayTwo) {
    arrayOne.sort((a,b) => a-b);
      arrayTwo.sort((a,b) => a-b);
      
      let arrOneIdx = 0;
      let arrTwoIdx = 0;
      let smallest = Infinity;
      let smallestPair = [];
      
      while(arrOneIdx < arrayOne.length && arrTwoIdx < arrayTwo.length){
          let numOne = arrayOne[arrOneIdx];
          let numTwo = arrayTwo[arrTwoIdx];
          let currentSum = Math.abs(numOne - numTwo);
          if(currentSum === 0){
              return [numOne, numTwo];
          }
          else if(numOne > numTwo){
              arrTwoIdx ++;
          }
          else{
              arrOneIdx ++;
          }
          if(smallest > currentSum){
              smallest = currentSum;
              smallestPair = [numOne, numTwo];
          }
      }
      return smallestPair;
  }