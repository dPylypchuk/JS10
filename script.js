let elTime = document.querySelector(`#time`)
let btnGo = document.querySelector(`#btnGo`)
let formatTime = (timeObj) => {
    if (timeObj.hours < 10) {
        timeObj.hours = `0${timeObj.hours}`
    }
    if(timeObj.minutes < 10) {
        timeObj.minutes = `0${timeObj.minutes}`
    }
    if(timeObj.seconds < 10) {
        timeObj.seconds = `0${timeObj.seconds}`
    }
    return timeObj
}
let getTime = () => {
    let timeNow = new Date()
    timeNow = {
        hours: timeNow.getHours(),
        minutes: timeNow.getMinutes(),
        seconds: timeNow.getSeconds()
    }
    return formatTime(timeNow)
}
elTime.style.color = "red"
const setTime = () => {
    let currentTime = getTime()
    elTime.innerHTML = `${currentTime.hours}:${currentTime.minutes}:${currentTime.seconds}:`
}

setInterval (setTime, 1000)

btnGo.addEventListener(`click`, () => {
    alert("click")
    setTimeout (() => {
        window.location.href = "http://google.com"
    },5000)
})
