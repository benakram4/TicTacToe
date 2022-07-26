
console.log("JavaScript Called");

let player = true; // true - X. false - O
let board = [ [], [], []];


const TakeTurn = (rc) => {
    console.log(`player ${player ? 'X' : 'O'} taking turn`);

    //identify which row and column user have clicked on
    //e.g. rc = 21
    let row = parseInt(rc / 10);    // row = 2
    let col = rc % 10;   // col = 1

    console.log(`row : ${row} col : ${col}`);

    const selectedElem = document.getElementById(`c${row}${col}`);  //c21

    //check if the tile has already been played or not
    if (selectedElem.classList.contains("unoccupied") === true){
        console.log(`selected element at ${row} and column ${col} is unoccupied`);

        //display the text 'X' or 'O' on the selected tile
        selectedElem.innerHTML = `${player ? 'X' : 'O'}`;
        board[row][col] = `${player ? 'X' : 'O'}`;

        //change the player if current player has successfully played their turn
        player = !player;
        console.log(`next turn for player : ${player ? 'X' : 'O'}`);
    }else{
        console.log(`The tile at row ${row} and column ${col} is already occupied.`);
    }  

    //check if any winner has been found
    checkWinner(); 
}


const resetGame = () => {
    player = true; // true - X. false - O
    board = [ [], [], []];

    let tileCells = document.getElementsByTagName("li");

    for (tile of tileCells){
        tile.classList.remove("occupied");
        tile.classList.add("unoccupied");
        tile.innerHTML = "";
    }
}

const checkWinner = () => {
    console.log(`board : ${board}`);
    for (let i = 0 ; i < 3 ; i++){

        //row win
        if (board[i][0] !== undefined && (board[i][0] === board[i][1] && board[i][0] === board[i][2]))
        {
            alert(`${board[i][0]} is winner.`);
            //reset the game
            resetGame();
        }

        //column win
        if (board[0][i] !== undefined && (board[0][i] === board[1][i] && board[0][i] === board[2][i])){
            alert(`${board[0][i]} is winner.`);
            //reset the game
            resetGame();
        }
    }

    //diagonal win
    if (board[1][1] !== undefined && 
        ((board[0][0] === board[1][1] && board[2][2] === board[1][1]) || 
        (board[0][2] === board[1][1] && board[2][0] === board[1][1]))){
            alert(`${board[1][1]} is winner.`);
            //reset the game
            resetGame();
    }
}
