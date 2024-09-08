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
    homeScore.textContent = homeResult
    guestScore.textContent = guestResult
}