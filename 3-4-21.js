/* Sorted Squared Array:
Write a function that takes in a non-empty array of integers that are sorted in ascending
order and returns a new array of the same length with the squares of the original integers
also sorted in ascending order. Note: the array may contain negative numbers.
Ex: array = [1, 2, 3, 5, 6, 8, 9];
returns -> [1, 4, 9, 25, 36, 64, 81];
Ex: [-10, -5, 0, 5, 10];
returns -> [0, 25, 25, 100, 100];
*/

function sortedSquaredArray(array) {
	const outputArray = array.map(x => 0);
  let leftIdx = 0;
	let rightIdx = array.length - 1;
	
	for(let x = array.length - 1; x >= 0; x--){
    const leftVal = array[leftIdx];
		const rightVal = array[rightIdx];
		
		if(Math.abs(leftVal) > Math.abs(rightVal)){
      outputArray[x] = (leftVal * leftVal);
			leftIdx++;
    }
		else{
      outputArray[x] = (rightVal * rightVal);
			rightIdx--;
    }
  }
  return outputArray;
}

/* Array of Products:
Write a function that takes in a non-empty array of integers and returns an array of the
same length, where each element in the output array is equal to the product of every other
number in the input array. In other words, the at output[x] is equal to the product of every
number in the input array other than input[x]. Note that you're expected to solve this problem
without using division.
Ex: array = [5, 1, 4, 2];
returns -> [8, 40, 10, 20];
*/

function arrayOfProducts(array) {
	const products = [];
	
	for(let x = 0; x < array.length; x++){
		let temporaryProduct = 1;
		for(let y = 0; y < array.length; y++){
			if(x !== y){
				temporaryProduct *= array[y];
			}
			products[x] = temporaryProduct;
		}
	}
	return products;
}
