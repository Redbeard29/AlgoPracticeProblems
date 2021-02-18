/* Spiral Traverse:
Write a function that takes in an n x m two-dimensional array (that can be square-shaped when n == m) and returns
a one-dimensional array of all the array's elements in spiral order. Spiral order starts at the top left corner of
the two-dimensional array, goes to the right, and peoceeds in a spiral pattern all the way until every element
has been visited.
Ex:
array = [
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7],
]
returns -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
*/

function spiralTraverse(array) {
	const result = [];
	let startOfRow = 0;
	let endOfRow = array.length - 1;
	let startOfCol = 0;
	let endOfCol = array[0].length - 1;
	
	while(startOfRow <= endOfRow && startOfCol <= endOfCol){
		for(let col = startOfCol; col <= endOfCol; col++){
			result.push(array[startOfRow][col]);
		}
		
		for(let row = startOfRow + 1; row <= endOfRow; row++){
			result.push(array[row][endOfCol]);
		}
		
		for(let col = endOfCol - 1; col >= startOfCol; col--){
			if(startOfRow === endOfRow) break;
			result.push(array[endOfRow][col]);
		}
		
		for(let row = endOfRow - 1; row > startOfRow; row--){
			if(startOfCol === endOfCol) break;
			result.push(array[row][startOfCol]);
		}
		
		startOfRow++;
		endOfRow--;
		startOfCol++;
		endOfCol--;
	}
	return result;
}


/* Search in Sorted Matrix
You're given a two-dimensional array (a matrix) of distinct integers and a target integer. Each row in the 
matrix is sorted, and each column is also sorted; the matrix doesn't necessarily have the same height and width.
Write a function that returns an array of the row and column indices of the target integer if it's contained
in the matrix, otherwise [-1, -1]
Ex:
matrix = [
    [1, 4, 7, 12, 15, 1000], 
    [2, 5, 19, 31, 32, 1001], 
    [3, 8, 24, 33, 35, 1002], 
    [40, 41, 42, 44, 45, 1003], 
    [99, 100, 103, 106, 128, 1004],
]
target = 44
returns -> [3, 3]
*/

function searchInSortedMatrix(matrix, target) {
	let row = 0; 
	let col = matrix[0].length - 1;
	
	while(row < matrix.length && col >= 0){
		if(matrix[row][col] > target){
			col --;
		}
		else if(matrix[row][col] < target){
			row ++;
		}
		else{
			return [row, col]
		}
	}
	return [-1, -1]
}

/* Sunset Views
Given an array of buildings and a direction that all of the buildings face, return an array of the indices of the
buildings that can see the sunset. A building can see the sunset if it's strictly taller than all of the buildings
that come after it in the direction that it faces. The input array named buildings contains positive, non-zero 
integers representing the heights of the buildings. A building at index i thus has a height denoted by buildings[i].
All of the buildings face the same direction, and this direction is either "EAST" or "WEST". In relation to the 
input array, you can interpret these directions as right for east and left for west. Note: the indices returned
in the output array should be sorted in ascending order. 
Ex:
buildings = [3, 5, 4, 4, 3, 1, 3, 2]
direction = "EAST"
returns -> [1, 3, 6, 7]
Ex 2:
buildings = [3, 5, 4, 4, 3, 1, 3, 2]
direction = "WEST"
return -> [0, 1]
*/

function sunsetViews(buildings, direction) {
	const buildingsWithViews = [];
	
	const startingIdx = direction === 'WEST' ? 0 : buildings.length - 1;
	const increment = direction === 'WEST' ? 1 : -1;
	
	let tallestBuilding = 0;
	let currentIdx = startingIdx;
	while(currentIdx >= 0 && currentIdx < buildings.length){
		let currentBuilding = buildings[currentIdx];
		if(currentBuilding > tallestBuilding){
			if(direction === 'EAST'){
				buildingsWithViews.unshift(currentIdx);
			}
			else{
				buildingsWithViews.push(currentIdx);
			}
			tallestBuilding = currentBuilding
		}
		currentIdx += increment;
	}
  return buildingsWithViews;
}
