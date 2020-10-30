'use strict'
const team = [
  {
    name: "Dolphins",
    score: [44, 23, 71],
  },
  {
    name: "Koalas",
    score: [65, 54, 49],
  },
];

const team2 = [
  {
    name: "Dolphins",
    score: [85, 54, 41],
  },
  {
    name: "Koalas",
    score: [23, 34, 27],
  },
];

const calcAverage = (score) => {
  let total = 0
  for(let x = 0; x < score.length; x++){
    total += score[x]
  }
  let aveScore = total / score.length

  return aveScore
}

function checkWinner(data) {
  for (let i = 0; i < data.length; i++){
    data[i].avgScore = calcAverage(data[i].score)
  }
  
  if(data[0].avgScore >= 2 * data[1].avgScore){
    console.log(`${data[0].name} win (${data[0].avgScore} vs ${data[1].avgScore})`)
  } else if (data[1].avgScore >= 2 * data[0].avgScore) {
    console.log(`${data[1].name} win (${data[1].avgScore} vs ${data[0].avgScore})`)
  } else {
    console.log('No team wins...')
  }
}

checkWinner(team)
checkWinner(team2)

