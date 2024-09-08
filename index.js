let homeScore = document.getElementById("home-score")
let homeResult = 0

let guestScore = document.getElementById("guest-score")
let guestResult = 0


function homeSum1() {
    homeResult += 1
    homeScore.textContent = homeResult
}
function homeSum2() {
    homeResult += 2
    homeScore.textContent = homeResult
}
function homeSum3() {
    homeResult += 3
    homeScore.textContent = homeResult
}


function guestSum1() {
    guestResult += 1
    guestScore.textContent = guestResult
}
function guestSum2() {
    guestResult += 2
    guestScore.textContent = guestResult
}
function guestSum3() {
    guestResult += 3
    guestScore.textContent = guestResult
}

function newGame() {
    guestResult = 0
    homeResult = 0
    periodResult = 0
    homeScore.textContent = homeResult
    guestScore.textContent = guestResult
    periodNum.textContent = periodResult
}

let periodNum = document.getElementById("period-score")
let periodResult = 0
function period() {
    periodResult += 1
    periodNum.textContent = periodResult
}

// function bonus() {
//     let bonusColor = document.getElementsByClassName("bonus").style.backgroundColor
//     if (bonusColor.style.backgroundColor = #FEF3C7) {
//         bonusColor.style.backgroundColor = #F59E0B
//     }
//     else {
//         bonusColor.style.backgroundColor = #FEF3C7
//     }
// }