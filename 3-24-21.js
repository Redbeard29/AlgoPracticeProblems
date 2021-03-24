/* Index Equals Value:
Write a function that takes in a sorted array of distinct integers and returns the first index in the array
that is equal to the value at that index. In other words, your function should return the minimum index where 
index == array[index]. If there is no such index, your function should return -1.
Ex: array = [-5, -3, 0, 3, 4, 5, 9];
returns -> 3;
*/


function indexEqualsValue(array) {
    let left = 0;
	let right = array.length - 1;
    while(left <= right){
		const middle = Math.floor((left + right) / 2);
		const val = array[middle];
		if(val === middle){
            return val;
        }
	}
}