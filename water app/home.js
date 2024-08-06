
//    salutation 
const greetText = document.getElementById("greetText");
let presentTime = new Date().getHours();
// presentTime = 20
const greeting = presentTime >= 5 && presentTime < 12 ? "Good Morning🌤️" : presentTime >= 12 && presentTime < 18 ? "Good Afternoon🌞" : "Good Evening🌥️"
// console.log(greeting);
greetText.innerHTML = `${greeting} Sai Kiran !`


//toast notification
const toastTrigger = document.getElementById('liveToastBtn')
    const toastLiveExample = document.getElementById('liveToast')
    const liveToastBtnOff = document.getElementById('liveToastBtnOff');

    liveToastBtn.style.color = "green"
    liveToastBtnOff.style.color = "red"

    if (toastTrigger) {
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
        toastTrigger.addEventListener('click', () => {
            let timer = setInterval(() => {
                toastBootstrap.show()

            }, 2000);

            liveToastBtnOff.addEventListener('click', () => {
                clearInterval(timer);
            })
        })


    }


// bottle section
let btnDec = document.getElementById("btnDec")
let btnInc = document.getElementById("btnInc")
let para = document.getElementById("para");

para.style.fontStyle = "bold"
btnDec.addEventListener("click", () => {
    const goal = document.getElementById("goal")
    btnDec.style.color = "red";
    if (goal.value == 0 || goal.value == "") {
        para.innerHTML = "Enter value above '0'"
    }
    else {
        goal.value = parseInt(goal.value) - 1
    }
})

btnInc.addEventListener("click", (e) => {
    e.preventDefault()
    const goal = document.getElementById("goal")
    btnInc.style.color = "green";
    btnInc.style.border = "2px solid"
    if (goal.value > 4) {
        para.innerHTML = `${goal.value} Liters of water per day is not recommended ideally, consume upto 4L(Liters)! (WHO)`;
    } else
        goal.value = parseInt(goal.value) + 1;
})

// bottle and cups section
const smallCupsContainer = document.getElementById("cups");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById('remained');

function setGoal() {
    if (goal.value <= 4) {
        goal = parseFloat(document.getElementById("goal").value);
        const totalCups = Math.ceil(goal * 1000 / 250);
        createCups(totalCups);
        updateBigCup();
        totalEmptyCups();
    }
    else if (goal.value >= 5) {
        para.innerHTML = `${goal.value} Liters of water per day is not recommended ideally, consume upto 4L(Liters)! (WHO)`
    }
}


// creating dynamic cups as per input
function createCups(numCups) {
    smallCupsContainer.innerHTML = " "; // Clear existing cups
    for (let i = 0; i < numCups; i++) {
        const bottle = document.createElement("div");
        bottle.classList.add("bottle", "bottle-small");
        bottle.innerText = "250 ml";
        bottle.addEventListener("click", () => highlightCup(i));
        smallCupsContainer.appendChild(bottle);
    }

}

function highlightCup(idx) {
    const smallCups = document.querySelectorAll(".bottle-small");
    if (smallCups[idx].classList.contains("full") && (idx === smallCups.length - 1 || !smallCups[idx + 1].classList.contains("full"))) {
        idx--;
    }

    smallCups.forEach((bottle, idx2) => {
        if (idx2 <= idx) {
            bottle.classList.add("full");
        } else {
            bottle.classList.remove("full");
        }
    });
    totalEmptyCups();
    updateBigCup();

}

// big bootle updATE
function updateBigCup() {
    const smallCups = document.querySelectorAll(".bottle-small");
    const fullCups = document.querySelectorAll(".bottle-small.full").length;
    const totalCups = smallCups.length;

    if (fullCups === 0) {
        percentage.style.visibility = "hidden";
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = "visible";
        percentage.style.height = `${fullCups / totalCups * 330}px`;
        percentage.innerText = `${fullCups / totalCups * 100}%`;
        totalCupsFull();
    }

    if (fullCups === totalCups) {
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    } else {
        remained.style.visibility = 'visible';
        liters.innerText = `${goal - (250 * fullCups / 1000)}L`;
        totalEmptyCups();
    }
}


// TOTAL Empty cups update
function totalEmptyCups() {
    const cardPara = document.getElementById("cardPara");
    cardPara.innerHTML = `Just ${liters.innerHTML}(Liters) of water is remain, it's your daily hydration goal. Stay refreshed and energized!💧 `;
}

// total full cups update
function totalCupsFull() {
    const cardPara = document.getElementById("cardPara")
    cardPara.innerHTML = `Yohhoo! 🎉 You nailed  it by taking ${liters.innerText} of water today. ${percentage.innerText} of your goal!😀`
}
// party popuu popper
// function triggerConfetti() {
//     confetti({
//         particleCount: 100,
//         spread: 70,
//         origin: { y: 0.6 }
//     });
// }

