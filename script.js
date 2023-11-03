'use strict';


const playerOne = document.querySelector(".player--0")
const playerTwo = document.querySelector(".player--1")


const playerOneScore = document.getElementById("score--0")
let playerOneCurrentScore = document.getElementById("current--0")

const playerTwoScore = document.getElementById("score--1")
let playerTwoCurrentScore = document.getElementById("current--1")

let diceImg = document.querySelector(".dice")

const btnNewGame = document.querySelector(".btn--new")
const btnRollDice = document.querySelector(".btn--roll")
const btnHoldButton = document.querySelector(".btn--hold")



function reset(){
    playerOneScore.textContent = 0
    playerTwoScore.textContent = 0
    playerOneCurrentScore.textContent = 0
    playerTwoCurrentScore.textContent = 0
    curScoreOne = 0
    curScoreTwo = 0
    scoreOne = 0
    scoreTwo = 0
}






let curScoreOne = 0
let curScoreTwo = 0



btnRollDice.addEventListener("click", function(){
    let randomNumber = Math.floor(Math.random() * 6) + 1
    diceImg.src = `dice-${randomNumber}.png`


    

    

    if(randomNumber === 1){
        switchPlayers()
    }else{
            if(playerOne.classList.contains("player--active")){
                curScoreOne += randomNumber
                playerOneCurrentScore.textContent = curScoreOne
            }else{
                curScoreTwo += randomNumber
                playerTwoCurrentScore.textContent = curScoreTwo
            }
    }
})


function switchPlayers(){
    playerOne.classList.toggle("player--active")
    playerTwo.classList.toggle("player--active")
    playerOneCurrentScore.textContent = 0
    playerTwoCurrentScore.textContent = 0
    curScoreOne = 0
    curScoreTwo = 0
}

let scoreOne = 0
let scoreTwo = 0


btnHoldButton.addEventListener("click", function(){
    if(playerOne.classList.contains("player--active")){
        scoreOne += curScoreOne
        playerOneScore.textContent = scoreOne
    }else{
        scoreTwo += curScoreTwo
        playerTwoScore.textContent = scoreTwo
    }
    switchPlayers()


    if(scoreOne >= 100){
        playerOne.classList.add("player--winner")
        switchPlayers = false
        btnHoldButton = false
        btnRollDice = false
    }else if(scoreTwo >= 100){
        playerTwo.classList.add("player--winner")
        switchPlayers = false
        btnHoldButton = false
        btnRollDice = false
    }
    
})


btnNewGame.addEventListener("click", reset)