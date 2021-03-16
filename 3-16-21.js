/* Permutations:
Write a function that takes in an array of unique integers and returns an array of all permutations of 
those integers in no particular order. If the input array is empty, the function should return an empty
array.
Ex: array = [1, 2, 3];
returns -> [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]];
*/

function getPermutations(array) {
    const permutations = [];
    permutationsHelper(0, array, permutations);
    return permutations;
}
  
function permutationsHelper(x, array, permutations){
    if(x === array.length - 1){
        permutations.push(array.slice());
        console.log(permutations);
    }
    else{
        for(let y = x; y < array.length; y++){
            swap(x, y, array);
            permutationsHelper(x + 1, array, permutations);
            swap(x, y, array);
        }
    }
}
  
function swap(x, y, array){
    const temp = array[x];
    array[x] = array[y];
    array[y] = temp;
}