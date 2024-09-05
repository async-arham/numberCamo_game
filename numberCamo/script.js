var timer = 60
var score = 0
var hitrn = 0

function makeBubble() {
    var clutter = ""
    for (var i = 1; i <= 800; i++) {
        var rn = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rn}</div>`
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10)
    document.querySelector("#hitVal").innerHTML = hitrn
}

function runTimer() {
    var timeStop = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerVal").innerHTML = timer
        } else {
            clearInterval(timeStop)
            document.querySelector("#pbtm").innerHTML = `<h1 id="g-over">!چلو شابا کٹو </h1>`
            document.querySelector(".to-hide1").style.display = "none"
            document.querySelector(".to-hide2").style.display = "none"
        }
    }, 1000)
}

function scoreBoard() {
    score += 10
    document.querySelector("#myScore").innerHTML = score
}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
    var clickedNum = Number(dets.target.textContent);
    if (clickedNum === hitrn) {
        scoreBoard()
        getNewHit()
        makeBubble()
    }
})

getNewHit();
runTimer();
makeBubble();