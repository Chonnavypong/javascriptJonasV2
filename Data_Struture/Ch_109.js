/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('  ') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// แก้โจทย์
// 1
const [ player1, player2 ] = game.players

// console.log( player1, player2)

// 2

const [ gk, ...fieldPlayers] = player1

// console.log(gk, fieldPlayers )

//3. Create an array 'allPlayers' containing all players of both teams (22 players)
const allPlayers = [...player1, ...player2]
// console.log(allPlayers)

//4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
 
const players1Final = [ ...player1, 'Thiago', 'Coutinho', 'Perisic']
// console.log(players1Final)

//5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// แบบที่ 1
// const { odds: {team1, x: draw, team2} } = game
// console.log(team1, draw, team2)
// แบบที่ 2
const { team1, x: draw, team2 } = game.odds
console.log( team1, draw, team2 )

//6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

const printGoals = function(...arr) {
  console.log(arr)
  console.log(`${arr.length} goals were scored`)
}

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich')
printGoals(...game.scored)

//7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
const {team1: t1,x: d,team2 : t2} = game.odds
t1 < t2 && console.log('Team 1 is more likely to win')
t1 > t2 && console.log('Team 2 is more likely to win')

//================================================
// Test
// const playerAmount = 11;

// const playerTeamA = [];
// const playerTeamB = [];
// playerTeamA.length = 11;
// playerTeamB.length = 11;

// for (const [i, player] of playerTeamA.entries()) playerTeamA[i] = `A${i}`;

// for (const [i, player] of playerTeamB.entries()) playerTeamB[i] = `B${i}`;

// const playerAll = [...playerTeamA, ...playerTeamB]

// const gamex = {
//   team1 : 'Bayern Munich',
//   team2 : 'Borrusia Dortmund',
//   playbers:[ playerTeamA, playerTeamB],
//   score: '4:0',
//   scored: ['Lewandoski', 'Gnarby', 'Lewandoski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5
//   }
// }
