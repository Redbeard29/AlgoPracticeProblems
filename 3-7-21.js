/* Product Sum:
Write a function that takes in a special array and returns its product sum. A special array is a non-empty array that
contains either integers or other special arrays. The product sum of a special array is the sum of its elements, where
special arrays inside it are summed themselves and then multiplied by their level of depth. The depth of a special 
array is how far nested it is. For instance, the depth of [] is 1; the depth of the inner array in [[]] is 2; the depth
of the innermost array in [[[]]] is 3. Therefore, the product sum of [x, y] is x + y; the product sum of [x, [y, z]] is
x + 2 * (y + z); the product sum of [x + [y, [z]]] is x + 2 * (y + 3z).
Ex: array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];
returns -> 12 // Calculated as: 5 + 2 + 2 * (7 - 1) + 3 + 2 * (6 + 3 * (-13 + 8) + 4);
*/

function productSum(array, multiplier = 1) {
    let sum = 0;
      for(const elem of array){
          if(Array.isArray(elem)){
        sum += productSum(elem, multiplier + 1);
      }
      else{
        sum += elem;
      }
    }
      return sum * multiplier;
  }

/* Powerset:
Write a function that takes in an array of unique integers and returns its powerset. The powerset P(X) of a set X is
the set of all subsets of X. For example, the powerset of [1, 2] is [[], [1], [2], [1, 2]]. Note that the sets in the
powerset can be in any order.
Ex: array  = [1, 2, 3];
returns -> [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]; 
*/

function powerset(array, idx = null) {
    if(idx === null) idx = array.length - 1;
    if(idx < 0) return [[]];
  
	const elem = array[idx];
	const subsets = powerset(array, idx - 1);
	const length = subsets.length;
	for(let x = 0; x < length; x++){
    const currentSet = subsets[x];
		subsets.push(currentSet.concat(elem));
  }
	return subsets;
}