///  Case: Rock (0), Paper (1), Scisssors (2)
///
///
let playerScore = 0;
let computerScore = 0;
let total = 0;



function computerPlay(game){
    let computer = Math.floor(Math.random() * 3);

    if (game == 0) {
        // console.log('switch1');
        switch(computer) {
            case 0:
                document.getElementById("result").innerHTML = "Rock(P) vs. Rock(C): Draw!";
                total++;
                break;
            case 1:
                document.getElementById("result").innerHTML = "Rock(P) vs. Paper(C): Lose!";
                computerScore++;
                total++;
                break;
            case 2:
                document.getElementById("result").innerHTML = "Rock(P) vs. Scissors(C): Win!";
                playerScore++;
                total++;
                break;
        }
    } else if (game == 1) {
        // console.log('switch2');
        switch(computer) {
            case 0:
                document.getElementById("result").innerHTML = "Paper(P) vs. Rock(C): Win!";
                playerScore++;
                total++;
                break;
            case 1:
                document.getElementById("result").innerHTML = "Paper(P) vs. Paper(C): Draw!";
                total++;
                break;
            case 2:
                document.getElementById("result").innerHTML = "Paper(P) vs. Scissors(C): Lose!";
                computerScore++;
                total++;
                break;
        } 
    } else if (game == 2) {
        // console.log('switch2');
        switch(computer) {
            case 0:
                document.getElementById("result").innerHTML = "Scissors(P) vs. Rock(C): Lose!";
                computerScore++;
                total++;
                break;
            case 1:
                document.getElementById("result").innerHTML = "Scissors(P) vs. Paper(C): Win!";
                playerScore++;
                total++;
                break;
            case 2:
                document.getElementById("result").innerHTML = "Scissors(P) vs. Scissors(C): Draw!";
                total++;
                break;
        }
    }


    document.getElementById("player_score").innerHTML = playerScore;
    document.getElementById("computer_score").innerHTML = computerScore;
    document.getElementById("ending").innerHTML = "Round: " + total;


    if (total == 1) {
        document.getElementById("you-diedd").classList.remove('you-died');
        document.getElementById("you-diedd").innerHTML = ""

    }

    if (total > 4) {
        console.log("You dead son");

        if (playerScore > computerScore) {
            playerScore = 0;
            computerScore = 0;
            total = 0;
            console.log(1);
            document.getElementById("ending").innerHTML = "CONGRATS, YOU WIN!"
        } else if (playerScore < computerScore) {
            playerScore = 0;
            computerScore = 0;
            total = 0;
            console.log(2);
            document.getElementById("ending").innerHTML = "Wait...what is this?"
            document.getElementById("you-diedd").innerHTML = "YOU DIED"
            document.getElementById("you-diedd").classList.add('you-died');
        } else {
            playerScore = 0;
            computerScore = 0;
            total = 0;
            console.log(3);
            document.getElementById("ending").innerHTML = "DRAW! TRY AGAIN?"
        }
        console.log(playerScore, computerScore);
    }
}

function reset(){
    playerScore = 0;
    computerScore = 0;
    total = 0;

    document.getElementById("player_score").innerHTML = playerScore;
    document.getElementById("computer_score").innerHTML = computerScore;
    document.getElementById("ending").innerHTML = "Round: " + total;

    document.getElementById("you-diedd").classList.remove('you-died');
    document.getElementById("you-diedd").innerHTML = ""

}

console.log("help");
