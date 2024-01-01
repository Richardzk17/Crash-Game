const timerEl = document.getElementById('timer')
const betBtn = document.getElementById('bet')
const cashOutBtn = document.getElementById('out')
const startBtn = document.getElementById('start')

betBtn.addEventListener('click', placeBet)
cashOutBtn.addEventListener('click', cashOut)
startBtn.addEventListener('click', init)


let timerIntervalId
let min, sec, seconds = 0
let startTime, endTime;


function init() {
    startTimer()
    randomStopTimer()
}



function startTimer() {
    if (timerIntervalId) {
        seconds = 0
        clearInterval(timerIntervalId)
    }
    renderTime()
    timerIntervalId = setInterval(tick, 100)
}

function tick() {
    seconds++
    renderTime()
}


function renderTime() {
    min = Math.floor(seconds / 60) + 1
    sec = seconds % 60

    if (sec < 10) {
        console.log(`${min}.0${sec}`)
        timerEl.textContent = `${min}.0${sec}`
    } else {
        console.log(`${min}.${sec}`)
        timerEl.textContent = `${min}.${sec}`

    }
}

function stopTimer() {
    clearInterval(timerIntervalId)
}



function randomStopTimer() {
    let randomStopTime = Math.floor(Math.random() * (5000 - 1000) + 1000);
    console.log(`${randomStopTime / 1000}`);

    timerId = setTimeout(() => {
        timerEl.style.color = 'red'
        stopTimer()
        clearInterval(timerId);
    }, randomStopTime);
}



function placeBet() {
    startTime = performance.now()

}

function cashOut() {
    endTime = performance.now()
    let timeDiff = endTime - startTime
    timeDiff /= 1000;



    console.log(`cash out : ${min}.${sec}`)
}