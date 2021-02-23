/* Bubble Sort:
Implement Bubble Sort
*/

function bubbleSort(array) {
	let isSorted = false;
	let count = 0;
	
	while(!isSorted){
		isSorted = true;
		for(let x = 0; x < array.length - count; x++){
			if(array[x] > array[x + 1]){
				let temp = array[x];
				array[x] = array[x + 1];
				array[x + 1] = temp;
				isSorted = false;
			}
		}
		count ++;
	}
	return array;
}


/* Selection Sort:
Implement Selection Sort
*/

function selectionSort(array) {
	let start = 0;
	while(start < array.length ){
		let minIdx = start;
		for(let x = start + 1; x < array.length; x++){
			if(array[x] < array[minIdx]) minIdx = x;
		}
		const temp = array[minIdx];
		array[minIdx] = array[start];
		array[start] = temp;
		start++;
	}
	return array;
}
