// let's take two varibles
// user & computer scores => 0

let userScore = 0
let computerScore = 0

// selecting all options to peform actions with each options
const options = document.querySelectorAll(".option")
const messageText = document.querySelector("#messageText")
const userScoreText = document.querySelector("#userScore")
const computerScoreText = document.querySelector("#computerScore")




// this was for selecting the user selection of options
options.forEach((eachOption) => {
    // console.dir(options);
    eachOption.addEventListener("click", () => {
        // what if i want ot know on which option i was click, 
        // it can be done through ID attribute
        const userOption = eachOption.getAttribute("id")
        // console.log("options was clicked", userOption);
        playGame(userOption)  // taking userOption, it will enters into playGame()
    })
})


// this was for selecting computer random options
const generateComputerOption = () => {
    // from rock, paper , scissor, it will select any of them options randomly 
    // store the options in array
    const optionsStored = ["rock", "paper", "scissor"]

    // here, particulary used array for using random() method, it will generate random numbers from 0-9
    // So, now we can select the array of indexes uisng their index placing by using random method (slecting random index)
    // for that Math.random()*3 ==> for we need (0-2) otput, multiply with "3", ==> for 0-9=> multiply with *10 (n-1)number
    // For except whole to generate use floor method
    const randomIndex = Math.floor(Math.random() * 3)
    return optionsStored[randomIndex] //radom ganerated ouptut will retruns in options variable

}



// we passing the useroption to playGame funtion, know what option is selected
const playGame = (userOption) => {
    // console.log(userOption);
    console.log("user was clicked =>", userOption);

    //Note to learn: // Now, to generate computer choice of option --> this way of programming, diving te funtionis called "Modulars"
    // Breaking down into different functions - it makes re-usage components

    // computer choice 
    const computerOption = generateComputerOption()
    // similary we can print computer choice as well like user choice
    console.log("computer choice =>", computerOption);

    // fighting conditions checking
    if (userOption === computerOption) {
        // draw game  ==> moves to draw game function 
        gameDraw()
    }
    else {
        // varibale for userWin to track winnigs
        let userWin = true
        let count = 0
        if (userOption === "rock") {

            // now, computer option s remaian to select paper, scossor
            userWin = computerOption === "paper" ? false : true
            count++ //score to display
            // in this case computer win, paper can cover rock, So, userWin will assigns with paper => false will replace
            // else if computer scissor taken then, userWin = true //users wins 
        } else if (userOption === "paper") {
            //rock, scissor
            userWin = computerOption === "scissor" ? false : true
            count++
        } else {
            //rock, papper
            userWin = computerOption === "rock" ? false : true
            count++
        }
        showWinner(userWin, userOption, computerOption) //to show the winner moves to showWinner function
    }

}

const gameDraw = () => {
    console.log("== Game was draw ==");
    messageText.innerHTML = "Game was Draw. Play Again!"
    messageText.style.backgroundColor = "white"
    messageText.style.color = "black"
    soundForDraw()

}


const showWinner = (userWin, userOption, computerOption) => {
    if (userWin) { // checking true or flase conditions
        userScore++
        userScoreText.innerHTML = userScore
        // console.log("You Won the game!");
        messageText.innerHTML = `You WON!, Your ${userOption} beats ${computerOption}`
        messageText.style.backgroundColor = "Green"
        messageText.style.color = "white"
        soundForWinner()

    } else {
        computerScore++
        console.log("You Lost the game ! ");
        computerScoreText.innerHTML = computerScore
        messageText.innerHTML = `You LOST!, ${computerOption} beats your ${userOption}`
        messageText.style.backgroundColor = "red"
        messageText.style.color = "white"
        soundForLost()
    }
}



const soundForWinner = () => {
    const audio = document.getElementById("soundForWinner")
    audio.play()
    console.log("winner sound")
}


const soundForLost = () => {
    const audio = document.getElementById("soundForLost")
    audio.play()
    console.log("lost sound")
}

const soundForDraw = () => {
    const audio = document.getElementById("soundForDraw")
    audio.play()
    console.log("lost sound")
}

const soundForRest = () => {
    const audio = document.getElementById("soundForRest")
    audio.play()
    // console.log("lost sound")
}



const resetGameButton = document.querySelector("#resetgameButton")

// resetting game
resetGameButton.addEventListener("click", () => {
    userScoreText.innerHTML = 0
    computerScoreText.innerHTML = 0
    messageText.innerHTML = "Play your turns"
    messageText.style.color = "white"
    messageText.style.backgroundColor = "#000435"
    soundForRest()
})

// const restGameButton = () => {
// }
