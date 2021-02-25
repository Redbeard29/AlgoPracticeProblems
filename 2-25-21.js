/* Breadth-First Search:
You're given a Node class that has a name and an array of optional children nodes. When put
together, nodes form an acyclic tree-like structure. Implement the breadthFirstSearch method on
the Node class, which takes in an empty array, traverses the tree using the Breadth First Search
approach, stores the names of all the nodes in the input array, and returns it.
Ex:
graph =  A
      /  |  \
     B   C   D
    /\       /\
   E  F     G  H
      /\     \
     I J      K

returns -> ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];
*/

class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }
  
    breadthFirstSearch(array) {
      const queue = [this];
          while(queue.length){
              const current = queue.shift();
              array.push(current.name);
              for(const child of current.children){
                  queue.push(child);
              }
          }
          return array;
    }
  }

/* Shifted Binary Search:
Write a function that takes in a sorted array of distinct integers as well as a target integer.
The caveat is that the integers in the array have been shifted by some amount: in other words,
they've been moved to the left or to the right by one or more positions. For example, [1, 2, 3, 4]
might be shifted to [3, 4, 1, 2]. The function should use a variation of the Binary Search algorithm
to determine if the target integer is contained in the array and should return its index it is. 
Otherwise, it should return -1.
Ex: array = [45, 61, 71, 72, 73, 0, 1, 21, 33, 37];
target = 33;
returns -> 8; 
*/

function shiftedBinarySearch(array, target) {
    let left = 0;
      let right = array.length - 1;
      
      while(left <= right){
          const middle = Math.floor((left + right) / 2);
          if(array[middle] === target){
        return middle;
      }
          else if(array[left] <= array[middle]){
              if(target >= array[left] && target < array[middle]){
          right = middle - 1;
        }
              else{
          left = middle + 1;
        }
      }
          else{
        if(target <= array[right] && target > array[middle]){
          left = middle + 1;
        }
              else{
          right = middle - 1;
        }
      }
    }
      return - 1;
  }
  