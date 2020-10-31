'use strict'

// showText('.message', 'Hahaha 🥨')

// document.querySelector('.guess').value = 35

// console.log(document.querySelector('.guess').value)

let score = 20
let highScore = 0
const mathGuess = Math.trunc(Math.random() * 20) + 1

function showText(className, message) {
  document.querySelector(className).textContent = message
}

// Start to code implement

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value)
  if (!guess) {
    showText('.message', 'No Number!')
  } else if (guess === mathGuess) {
    showText('.message', 'You Win')
    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width = '30rem'
    showText('.number', mathGuess)
    if (score > highScore) highScore = score
    showText('.highscore', highScore)
  } else if (guess !== mathGuess) {
    if (score > 1) {
      showText('.message', guess > mathGuess ? '📈 Too high!' : '📉 Too low!')
      score--
      showText('.score', score)
    } else {
      showText('.message', '💥 You lost the game!')
      showText('.score', 0)
    }
  }
})

document.querySelector('.again').addEventListener('click', function(){
  showText('.score', 20)
  showText('.number', '?')
  document.querySelector('.guess').value = ''
  document.querySelector('body').style.backgroundColor = '#222'
  document.querySelector('.number').style.width = '15rem'
})
