// Validate Subsequence

/* 
Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one. A
subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear in
the array. For instance, the numbers [1,3,4] form a subsequence of the array [1,2,3,4], and so do the numbers [2,4]. Note that a single
number in an array and the array itself are both valid subsequences of the array.
Ex:
Input:
array = [5, 1, 22, 25, 6, -1, 8, 10]
sequence = [1, 6, -1, 10]
Output: True
*/

function isValidSubsequence(array, sequence){
    // two pointers
    // iterate through larger array checking to see if you have a match with first value of sequence
    // if you do, incremement both and repeat process until you reach sequence.length
    // if you reach the end and have all matches, return true
    // otherwise, return false
    var x = 0;
    var y = 0;
    for(var x = 0; x < array.length; x++){
        if(sequence.length > array.length) return false;
        if(array[x] == sequence[y]){
            y ++;
        }
        if(y == sequence.length){
            return true;
        }
    }
    return false; 
}

console.log(isValidSubsequence([5,1,22,25,6,-1,8,10], [4,5,1,22,25,6,-1,8,10]));
