var playerOneCount = 0;
var playerTwoCount = 0;

function clickMe(){
    const a = randomNumber();
    const b = randomNumber();
    var dice1 = throwDice(a);
    var dice2 = throwDice(b);
    updateDice("img1", dice1);
    updateDice("img2", dice2);
    setWinner(dice1, dice2);
    updateScore("score1", playerOneCount);
    updateScore("score2", playerTwoCount);
}

function updateDice(n, m){
    document.getElementById(n).src = m;
}

function updateScore(n, m){
    document.getElementById(n).textContent = m;
}

function randomNumber(){
    return Math.floor(Math.random()*6+1);
}

function throwDice(n){
    var diceNumber = "images/dice" + n + ".png";
    return diceNumber;
}

function setWinner(n, m){
    if(n>m){
        document.getElementById('refresher').textContent = "Player 1 wins! 😱 👏🏻";
        playerOneCount++;
    }
    else if(n<m){
        document.getElementById('refresher').textContent = "Player 2 wins! 🏆 👏🏻";
        playerTwoCount++;
    }
    else document.getElementById('refresher').textContent = "It's a draw! 😰";
}