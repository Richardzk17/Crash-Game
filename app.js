const timerEl = document.getElementById('timer')

let timerIntervalId
let min, sec, seconds = 0

startTimer()

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
    min = Math.floor(seconds / 60) 
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
    let randomStopTime = Math.floor(Math.random() * (10000 - 1000) + 1000); 
    console.log(`${randomStopTime / 1000}`);

    timerId = setTimeout(() => {
        timerEl.style.color = 'red'
        stopTimer()
        clearInterval(timerId);
    }, randomStopTime);
}

randomStopTimer()
