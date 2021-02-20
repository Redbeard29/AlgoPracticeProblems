/* Longest Peak:
Write a function that takes in an array of integers and returns the length of the longest peak in the array. A
peak is defined as adjacent itegers in the array that are strictly increasing until they reach the highest value
in the peak, at which point they become strictly decreasing. At least three integers are required to form a peak.
For example, the integers 1, 4, 10, 2 form a peak, but the integers 4, 0, 10 don't and neither do the integers
1, 2, 2, 0. Similarly, the integers 1, 2, 3 don't form a peak because there aren't any strictly decreasing 
integers after the 3. 
Ex: array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3];
returns -> 6 //(0, 10, 6, 5, -1, -3 are the peaks);
*/

function longestPeak(array) {
	let longestPeakCount = 0;
	let current = 1;
	
  while(current < array.length - 1){
		const isPeak = array[current - 1] < array[current] && array[current + 1] < array[current];
		if(!isPeak){
			current ++;
		}
		
		else{
			let leftPointer = current - 2;
			while(leftPointer >= 0 && array[leftPointer] < array[leftPointer + 1]){
				leftPointer --;
			}
			let rightPointer = current + 2;
			while(rightPointer < array.length && array[rightPointer] < array[rightPointer - 1]){
				rightPointer ++;
			} 
			const currentPeakCount = rightPointer - leftPointer - 1;
			longestPeakCount = Math.max(longestPeakCount, currentPeakCount);
			current = rightPointer;
		}
	}
	return longestPeakCount;
}

/* Three Number Sort:
You're given an array of integers and another array of three distinct integers. The first array is guaranteed
to only contain integers that are in the second array, and the second array represents a desired order for the 
integers in the first array. For example, a second array of [x, y, z] represents a desired order of [x, x, ..., x, y, y, ..., y, z, z, ..., z]
in the first array. Write a function that sorts the first array according to the desired order in the second array.
The function that sorts the first array according to the desired order in the second array. The function should
perform this in place (without mutating the input array).  Note: the desired order won't necessarily be ascending
or descending and that the first array won't necessarily contain all three integers found in the second array.
Ex: array = [1, 0, 0, -1, -1, 0, 1, 1];
order = [0, 1, -1];
returns -> [0, 0, 0, 1, 1, 1, -1, -1];
*/

//Naive solution:

function threeNumberSort(array, order) {
	const frequencyCounter = {};
	
	for(let x = 0; x < array.length; x++){
		const val = array[x];
		frequencyCounter[val] ? frequencyCounter[val] ++ : frequencyCounter[val] = 1;
	}
	
	let x = 0, y = 0;
	while(x < array.length && y < order.length){
		const val = order[y];
		if(frequencyCounter[val] > 0){
			array[x] = val;
			frequencyCounter[val] --;
			x++;
		}
		else{
			y++;
		}
	}
	return array;
}

//More Efficient Solution:

function threeNumberSort(array, order) {
	const lastVal = order[2];
	const midVal = order[1];
	
	let rightIdx = array.length - 1;
	let midIdx = array.length - 1;
	let leftIdx = 0;
	
	while(midIdx >= leftIdx){
		const val = array[midIdx];
		
		if(val === lastVal){
			swap(rightIdx, midIdx, array);
			rightIdx--;
			midIdx--;
		}
		else if(val === midVal){
			midIdx--;
		}
		else{
			swap(midIdx, leftIdx, array);
			leftIdx++;
		}
	}
	return array;
}

function swap(x, y, array){
	const temp = array[x];
	array[x] = array[y];
	array[y] = temp;
}