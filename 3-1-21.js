/* Monotonic Array:
Write a function that takes in an array of integers and returns a boolean representing
whether the array is monotonic. An array is said to be montonic if its elements are
entirely non-increasing or entirely non-decreasing (from left to right). Non-increasing
elements aren't necessarily exclusively decreasing; they simply don't increase. Similarly,
non-decreasing elements aren't necessarily exclusively increasing; they simply don't 
decrease. Note that empty arrays and arrays of one element are monotonic.
Ex: array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001];
returns -> true;
*/

function isMonotonic(array) {
	if(array.length <= 2) return true;
	
	let monoDecreasing = true;
	let monoIncreasing = true;
	
	for(let x = 0; x < array.length; x++){
		if(array[x + 1] > array[x]) monoDecreasing = false;
		if(array[x + 1] < array[x]) monoIncreasing = false;
	}
	return monoDecreasing || monoIncreasing;
}

/* Tournament Winner:
There's an algorithm tournament taking place in which teams of programmers compete against
each other to solve algorithmic problems as fast as possible. Teams compete in a round robin,
where each team faces offa gainst all other teams. Only two teams compete against each other
at a time, and for each competition, one team is designated the home team, while the other
team is the away team. In each competition there's alwyas one winner and one loser. A team
receives 3 points if it wins and 0 points if it loses. The winner of the tournament is the
team that receives the most amount of points. Given an array of pairs representing the teams
that have competed against each other and an array containing the results of each competition,
write a function that returns the winner of the tournament. The input array are named
'competitions' and 'results', respectively. The 'competitions' array has elements in the form 
of [homeTeam, awayTeam], where each team is a string of at most 30 characters representing the
name of the team. The results array contains information about the winner of each corresponding
competition in the 'competitions' array. Specifically, results[x] deonts of the winner of 
competitions[x], where a 1 in the results array means that the home team in the corresponding 
competition won and a 0 means that the away team won. It's guaranteed that exactly one team
will win the tournament and that each team will compete against all other teams exactly once.
It's also guaranteed that the tournament will always have at least two teams. 
Ex: competitions = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"]
];
results = [0, 0, 1];
returns -> "Python"; 
(HTML has 0 points, C# has 3 points, and Python has 6 points);
*/

function tournamentWinner(competitions, results) {
    let teamScores = {};
    let currentMax = 0;
    let currentLeader = null;
      
    if(results.length > competitions.length){
        const difference = results.length - competitions.length;
        for(let i = 0; i < difference; i++){
            results.pop();
        }
    }
    
    for(let x = 0; x < results.length; x++){
        const currentResult = results[x];
    const winner = currentResult === 1 ? competitions[x][0] : competitions[x][1];
    teamScores[winner] ? teamScores[winner] += 3 : teamScores[winner] = 3;
        if(teamScores[winner] > currentMax){
            currentMax = teamScores[winner];
            currentLeader = winner;
        }
    }
    return currentLeader;
  }