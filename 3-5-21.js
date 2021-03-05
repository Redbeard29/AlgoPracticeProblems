/* Non-Constructible Change:
Given an array of positive integers representing the values of coins in your possession, write a function that 
returns the minimum amount of change (the minimum sum of money) that you cannot create. The given coins can 
have any positive integer value and aren't necessarily unique (meaning you can have multiple coins of the same
value). For example, if you're given coins = [1, 2, 5], the minimum amount of change that you can't create is
4. If you're given no coins, the minimum amount of change that you can't create is 1. 
Ex: coins = [5, 7, 1, 1, 2, 3, 22];
returns -> 20;
*/

function nonConstructibleChange(coins) {
    coins.sort((a,b) => a - b);
      let currentCount = 0;
      for(let x = 0; x < coins.length; x++){
          if(coins[x] > currentCount + 1) return currentCount + 1;
          currentCount += coins[x];
      }
    return currentCount + 1;
  }

/* Find Three Largest Numbers:
Write a function that takes in an array of at least three integers and, without sorting the input array, returns
a sorted array of the three largets integers in the input array. The function should return duplicate integers if
necessary; for example, it should return [10, 10, 12] for an input array of [10, 5, 9, 10, 12].
Ex: array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7];
returns -> [18, 141, 541];
*/

function findThreeLargestNumbers(array) {
	
	const largestNumsArray = [-Infinity, -Infinity, -Infinity];
	
  for(let x = 0; x < array.length; x++){
		if(array[x] > largestNumsArray[2]){
			largestNumsArray[0] = largestNumsArray[1];
			largestNumsArray[1] = largestNumsArray[2];
			largestNumsArray[2] = array[x]; 
		}
		else if(array[x] > largestNumsArray[1]){
			largestNumsArray[0] = largestNumsArray[1];
			largestNumsArray[1] = array[x];
		}
		else if(array[x] > largestNumsArray[0]){
			largestNumsArray[0] = array[x];
		}
	}
	return largestNumsArray;
}