const date = document.querySelector('#date')
const day = document.querySelector('#day')
const month = document.querySelector('#month')
const year = document.querySelector('#year')
const clock = document.querySelector("#clock")

const today = new Date
const allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

function showNewDay() {
    const today = new Date().getDay();
    let newDay;
    switch (today) {
        case 0:
            newDay = "Sunday";
            break;
        case 1:
            newDay = "Monday";
            break;
        case 2:
            newDay = "Tuesday";
            break;
        case 3:
            newDay = "Wednesday";
            break;
        case 4:
            newDay = "Thursday";
            break;
        case 5:
            newDay = "Friday";
            break;
        case 6:
            newDay = "Saturday";
            break;
        default:
            newDay = "Invalid";
    }
    return newDay;
}

day.innerHTML = `<p id="date">${today.getDay()}</p>`
date.innerHTML = `<p>${today.getDate()}</p>`
day.innerHTML = `<p  id="day">${showNewDay()}</p>`
month.innerHTML = `<p id="month">${allMonths[today.getMonth()]}</p>`
year.innerHTML = `<p id="year">${today.getFullYear()}</p>`

function updateTime() {
    const today = new Date
    clock.innerHTML = `
    <p>
    ${today.getHours()}
    :${today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes()}
    :${today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds()}
    </p>
    `
}
updateTime()

setInterval(updateTime, 1000)


