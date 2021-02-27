/* Single Cycle Check:
You're given an array of integers where each integers represents a jump of its value in the array.
For instance, the integer 2 represent a jhump of two indices forward in the array; the integer 
-3 represents a jump of three indices backward in the array. If a jump spills past the array's
bounds, it wraps over to the other side. For instance, a jump of -1 at index 0 brings us to the
last index in the array. Similarly, a jump of 1 at the last index in the array brings us to
index 0. Write a function that returns a boolean represneting whether the jumps in the array form 
a single cycle. A single cycle if, starting at any index in the array and following the jumps,
every element in the array is visited exactly once before landing back on the starting index. 
Ex: array = [2, 3, 1, -4, -4, 2];
returns -> true;
*/

function hasSingleCycle(array) {
	let elementsVisited = 0; 
	let currentIdx = 0;
	
	while(elementsVisited < array.length){
		if(elementsVisited > 0 && currentIdx === 0) return false;
		const distanceToShift = array[currentIdx];
		const nextPreShift = (currentIdx + distanceToShift) % array.length;
		const nextIdx = nextPreShift >= 0 ? nextPreShift : nextPreShift + array.length;
		elementsVisited++;
		currentIdx = nextIdx;
	}
	return currentIdx === 0;
}

/* First Duplicate Value:
Given an array of integers between 1 and n, inclusive, where n is the length of the array, write
a function that returns the firs tinteger that appears more than once when the array is read left
to right. In other words, out of all the integers that might occur more than once in the input
array, your function should return the one whose first duplicate has the minimum index. If no
integer appears more than once, your function should return -1. You are not allowed to mutate
the input array. 
Ex: array = [2, 1, 5, 2, 3, 3, 4];
returns -> 2;
*/

function firstDuplicateValue(array) {
    let frequencyCounter = {};
      
      for(let x = 0; x < array.length; x++){
          let num = array[x];
          frequencyCounter[num] ? frequencyCounter[num] ++ : frequencyCounter[num] = 1;
          if(frequencyCounter[num] === 2){
              return num;
          }
      }
      return -1;
  }