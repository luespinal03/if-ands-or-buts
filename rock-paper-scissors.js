const prompt = require('prompt-sync')({sigint: true});

let Player1Choice = (prompt("Player 1, enter rock, paper or scissors: "));

let Player2Choice = (prompt("Player 2, enter rock, paper or scissors: ")); 

if (Player1Choice === Player2Choice){
    console.log("Tie");
}

// code in favor of player 1
if (Player1Choice === "rock" && Player2Choice === "scissors"){
    console.log("player 1 wins, you suck player 2!");
}
if (Player1Choice === "paper" && Player2Choice === "rock"){
    console.log("player 1 wins, you suck player 2!");
}
if (Player1Choice === "scissors" && Player2Choice === "paper"){
    console.log("player 1 wins, you suck player 2!");
}



// code in favor of player 2
if (Player2Choice === "rock" && Player1Choice === "scissors"){
    console.log("player 2 wins, you suck player 1!");
}
if (Player2Choice === "paper" && Player1Choice === "rock"){
    console.log("player 2 wins, you suck player 1!");
}
if (Player2Choice === "scissors" && Player1Choice === "paper"){
    console.log("player 2 wins, you suck player 1!")
}
else{
    console.log("error, resubmit your entry")
}





