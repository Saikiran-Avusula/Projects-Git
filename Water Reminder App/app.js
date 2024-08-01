//toast notification
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger.addEventListener('click', () => {
        toastBootstrap.show()
    })
}


// for goal input
let btnDec = document.getElementById("btnDec");
let btnInc = document.getElementById("btnInc");
let inputText = document.getElementById("inputText");
let para = document.getElementById("para");

btnDec.addEventListener("click", () => {
    if (inputText.value !== "") {
        if (inputText.value == 0) {
            para.innerHTML = "Please enter value above '0'"

        }
        else {
            inputText.value = parseInt(inputText.value) - 1
        }
    }
})

btnInc.addEventListener("click", () => {
    const caution = "Per day ideal Water consumption Upto 4 Liters Only !"
    if (inputText.value >= 4) {
        para.innerHTML = caution;
        para.style.color = "red"

    }
    else {
        inputText.value = parseInt(inputText.value) + 1
    }
})


// bottle 
const smallCupsContainer = document.getElementById("cups");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById('remained');

let goal = 0;
function setGoal() {
    goal = parseFloat(document.getElementById("goal").value);
    const totalCups = Math.ceil(goal * 1000 / 250);
    createCups(totalCups);
    updateBigCup();
}

function createCups(numCups) {
    smallCupsContainer.innerHTML = ""; // Clear existing cups
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
    updateBigCup();
}

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
    }


    if (fullCups === totalCups) {
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
        triggerConfetti();
    } else {
        remained.style.visibility = 'visible';
        liters.innerText = `${goal - (250 * fullCups / 1000)}L`;
    }
}

function triggerConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}