/* Min Rewards:
Imagine that you're a teacher who's just graded the final exam in a class. You have a list of student scores on the final
exam in a particular order (not necessarilty sorted), and you want to reward your students. You decide to do so fairly by
given them arbitrary rewards following two rules:
1. All students must receive at least 1 reward
2. Any given student must receive strictly more rewards than an adjacent student with a lower score and must receive
strictly fewer rewards than an adjacent student with a higher score. 
Write a function that takes in a list of scores and returns the minimum number of rewards that you must give out to
students to satisfy the two rules. You can assume that all students have unique scores.
Ex: scores = [8, 4, 2, 1, 3, 6, 7, 9, 5];
returns -> 25 // the rewards would be [4, 3, 2, 1, 2, 3, 4, 5, 1] 
*/

function minRewards(scores) {
    const rewards = scores.map(x => 1);
      for(let x = 1; x < scores.length; x++){
          if(scores[x] > scores[x - 1]) rewards[x] = rewards[x - 1] + 1;
    }
      
      let rewardSum = rewards[rewards.length - 1];
      for(let x = scores.length - 2; x >= 0; x--){
      if(scores[x] > scores[x + 1]) rewards[x] = Math.max(rewards[x], rewards[x + 1] + 1);
          rewardSum += rewards[x];
      }
      return rewardSum;
  }

  
/* Generate Document:
You're given a string of available characters and a string representing a document that you need to generate. Write a 
function that determines if you can generate the document using the available characters. If you can generate the document,
your function should return true; otherwise it should return false. You're only able to generate the document if the 
frequency of unique characters in the characters string is greater than or equal to the frequency of unique characters
in the document string. For example, if you're given characters = "abcabc" and document = "aabbccc" you cannot generate
the document because you're missing one c. The document that you need to create may contain any characters, including
special characters, capital letters, numbers, and spaces. Note: you can always generate an empty string.
Ex: characters = "Bste!hetsi ofEAxpelrt x";
document = "AlgoExpert is the Best!";
returns -> true;
*/

function generateDocument(characters, document) {
    const charCounter = {};
      
      for(const char of characters){
          charCounter[char] ? charCounter[char] ++ : charCounter[char] = 1;
      }
      
      for(const char of document){
      if(!(charCounter[char]) || charCounter[char] === 0) return false;
          charCounter[char]--;
    }
    return true;
  }
  