// access button boxies
let boxButtons = document.querySelectorAll(".boxButton")
let resetBtn = document.querySelector("#reset-Btn")
let newGameBtn = document.querySelector("#newGameBtn")
let messageContainer = document.querySelector(".messageContainer")
let messageWinnerPlayer = document.querySelector(".messageWinnerPlayer")


// //player-X, player-O
let turnO = true

//2d array to access every pattern of array button 
// let array = [[0, 1, 2], [3, 4, 5], [6, 7, 8]] 
const winingPatters = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

boxButtons.forEach((eachButtonBox) => {

    // console.log("hi")
    eachButtonBox.addEventListener("click", () => {
        console.log("box is clicked")
        // print O or X base on condition
        if (turnO) { //player O
            eachButtonBox.innerHTML = "O"
            eachButtonBox.style.color = "green"
            turnO = false
        }
        else { //player X
            eachButtonBox.innerHTML = "X"
            eachButtonBox.style.color = "red"
            turnO = true
        }
        eachButtonBox.disabled = true
        checkWinner();
    })
})


// reset the game after the winner or in the middle of game
const resetGame = () => {
    turnO = true;
    // resetBtn.style.color = "red"
    console.log("reset is trigged")
    // enabled all disabled button after winner is shown
    enabledButtonboxes()
    // in reset state hidded WInner message
    messageContainer.classList.add("hideWinner_newGameButton")
}

//enable buttons boxes for after winner is shown
const enabledButtonboxes = () => {
    for (let eachButtonBox of boxButtons) {
        eachButtonBox.disabled = false
        eachButtonBox.innerHTML = "" //expmty the box values
        // console.log("buttons are enabled")
    }
}



// checking pattern traversal
const checkWinner = () => {
    for (let pattern of winingPatters) {
        //pattern check indexies
        // console.log(pattern[0], pattern[1], pattern[2])
        // check postion of indexies to print index text
        // console.log(boxButtons[pattern[0]].innerHTML,
        //     boxButtons[pattern[1]].innerHTML,
        //     boxButtons[pattern[2]].innerHTML)
        // have to store the values in a varible to check the winner using postions we can do

        // Get the values of the positions in the current pattern
        let postion1_Value = boxButtons[pattern[0]].innerHTML;
        let postion2_Value = boxButtons[pattern[1]].innerHTML;
        let postion3_Value = boxButtons[pattern[2]].innerHTML;

        // Check if all values in the current pattern are non-empty
        if (postion1_Value != "" && postion2_Value != "" && postion3_Value != "") {
            // Check if all values in the current pattern are the same
            if (postion1_Value === postion2_Value && postion2_Value === postion3_Value) {
                console.log("winner", postion1_Value);
                show_Winner(postion1_Value);
                // break; // Stop further checking once a winner is found
            }
        }
    }
}

// shows winner 
const show_Winner = (winner) => {
    messageWinnerPlayer.style.color = "white"
    messageContainer.style.backgroundColor = "black"
    messageWinnerPlayer.innerHTML = `Congrats!🥳 Winner is '${winner}'`
    messageContainer.classList.remove("hideWinner_newGameButton")
    disabledButtonboxes(); // diables buttons after winner is shown, invokes disablebuttonboxes function
}


//disbale button boxes for after winner is shown
const disabledButtonboxes = () => {
    for (let eachButtonBox of boxButtons) {
        eachButtonBox.disabled = true
    }
}


newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame)
