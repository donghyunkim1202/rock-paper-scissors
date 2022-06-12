///  Case: Rock (0), Paper (1), Scisssors (2)
///
///
function computerPlay(game){
    let computer = Math.floor(Math.random() * 3);

    console.log(computer)
    if (game == 0) {
        console.log('switch1');
        switch(computer) {
            case 0:
                document.getElementById("result").innerHTML = "Rock(P) vs. Rock(C):     Draw!";
                break;
            case 1:
                document.getElementById("result").innerHTML = "Rock(P) vs. Paper(C): Lose!";
                break;
            case 2:
                document.getElementById("result").innerHTML = "Rock(P) vs. Scissors(C): Win!";
                break;
        }
    } else if (game == 1) {
        console.log('switch2');
        switch(computer) {
            case 0:
                document.getElementById("result").innerHTML = "Paper(P) vs. Rock(C): Win!";
                break;
            case 1:
                document.getElementById("result").innerHTML = "Paper(P) vs. Paper(C): Draw!";
                break;
            case 2:
                document.getElementById("result").innerHTML = "Paper(P) vs. Scissors(C): Lose!";
                break;
        } 
    } else if (game == 2) {
        console.log('switch2');
        switch(computer) {
            case 0:
                document.getElementById("result").innerHTML = "Scissors(P) vs. Rock(C): Lose!";
                break;
            case 1:
                document.getElementById("result").innerHTML = "Scissors(P) vs. Paper(C): Win!";
                break;
            case 2:
                document.getElementById("result").innerHTML = "Scissors(P) vs. Scissors(C): Draw!";
                break;
        }
    }
}

console.log("help")
