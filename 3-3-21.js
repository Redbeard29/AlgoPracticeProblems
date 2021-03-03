/* Balanced Brackets:
Write a function that takes in a string made up of brackets - (, [, {, }, ], ) - and
other optional characters. The function should return a boolean representing whether the 
string is blanced with regards to brackets. A string is balanced if it has as many opening
brackets of a certain type as it has closing brackets of that type and if no bracket is 
unmatched. Note that an opening bracket can't match a correspoding closing bracket that
comes before it, and similarly, a closing bracket can't match a corresponding opening 
bracket that comes after it. Also, brackets can't overlap each other as in [(]).

Ex: string = "([])(){}(())()()"
returns -> true;
*/

function balancedBrackets(string) {
	const stack = [];
	const closingBrackets = ')]}';
	const bracketPairs = {'[' : ']', '(' : ')', '{' : '}' };
	for(let x = 0; x < string.length; x++){
		const char = string[x];
		if(char in bracketPairs){
      stack.push(bracketPairs[char]);
		}
		else if(char === stack[stack.length - 1]){
			stack.pop();
		}
		else if(closingBrackets.includes(char)){
			return false;
		}
	}
	return stack.length === 0;
}

/* Nth Fibonacci:
The Fibonacci sequence is defined as follows: the first number of the sequence is 0, the
second number is 1, and the nth number is the sum of the (n-1)th and (n-2)th numbers.
Write a function that takes in an integer n and returns the nuth Fibonacci number. Note:
The Fibonacci sequence is often defined with its first two njmbers as F0 = 0 and F1 = 1. 
For the purpose of this question, the first Fibonacci number is F0; therefore, getNthFib(1)
is equal to F0, and getNthFib(2) is equal to F1, etc. 
Ex: n = 6
returns -> 5;
*/

function getNthFib(n, memo = {1: 0, 2: 1}) {
    if(n in memo){
          return memo[n];
      }
      else{
          memo[n] = getNthFib(n - 1, memo) + getNthFib(n - 2, memo);
          return memo[n];
      }
  }
  