const date = new Date();
const month = date.getMonth()

const Weekdays = 
[
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
    ]

    const Months = 
    [
        "January",
        "Febuary",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]

    const MonthsAbb =
    [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ]

const changeMonth = () => 
{
    date.setDate(1)
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
    const lastMonthday = new Date(date.getFullYear(), date.getMonth(), 0).getDate()
    
    const firstDayofMonth = date.getDay()
    const nextMonthday = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay() 
    const nextDays = 7 - nextMonthday - 1 
    const Monthdays = document.querySelector('.days')

    document.querySelector('.date2 span').innerHTML = date.getFullYear();
    document.querySelector('.date2 h2').innerHTML = Months[date.getMonth()];
    document.querySelector('.date2 h2').innerHTML = Months[date.getMonth()];

    let days = ""

    for(let x = firstDayofMonth; x > 0; x--)
    {
        days += `<div class="lastMonthdays">${lastMonthday - x + 1}</div>`;
    }

    for(let i = 1; i <= lastDay; i++)
    {
        days += `<div>${i}</div>`;
    }


    for(let z = 1; z <= nextDays; z++)
    {
        days += `<div class="nextMonthdays">${z}</div>`;
        Monthdays.innerHTML = days;
    }
}

document.querySelector('.date h1').innerHTML = Months[date.getMonth()];
document.querySelector('.date p').innerHTML = MonthsAbb[date.getMonth()] + ' ' + date.getDate();
document.querySelector('.calendar-header span').innerHTML = date.getFullYear();
document.querySelector('.calendar-header h1').innerHTML = Weekdays[date.getDay()] + ', ' + MonthsAbb[date.getMonth()] + ' ' + date.getDate();



document.querySelector('.prevMonth').addEventListener('click', () => 
{
    date.setMonth(date.getMonth() - 1)
    changeMonth();
})

document.querySelector('.nextMonth').addEventListener('click', () => 
{
    date.setMonth(date.getMonth() + 1)
    changeMonth();
})



const Calendar = document.getElementById('calendar')
const openCalendar = document.querySelectorAll('.date, .date h1, .date p')
const calendarOverlay = document.getElementById('calendar-overlay')
const Cancel = document.querySelectorAll('.cancel')
const entryButton = document.querySelector('.entry-button')
const entryMenu = document.querySelector('.entry-menu')
const entryMenuOverlay = document.getElementById('entry-menu-overlay')
const entryMenuBack = document.querySelector('.close-menu')
const foodTab = document.getElementById('food')
const drinkTab = document.getElementById('drink')
const othersTab = document.getElementById('others')
const underline = document.querySelector('.underline')





// console.log(firstDayofMonth)
// console.log(lastMonthday)
// console.log(lastDay)

openCalendar.forEach(elem => elem.addEventListener('click', calendarActive))
Cancel.forEach(elem => elem.addEventListener('click', calendarClose))
calendarOverlay.addEventListener('click', () => {
    const calendarMenu = document.querySelectorAll('#calendar-overlay.active')
    calendarMenu.forEach(elem => {
        calendarClose(elem)
    })
})

entryButton.addEventListener('click', entryMenuActive)
entryMenuBack.addEventListener('click', entryMenuClose)
entryMenuOverlay.addEventListener('click', () => {
    const Menus = document.querySelectorAll('#entry-menu-overlay.active')
    Menus.forEach(elem => {
        entryMenuClose(elem)
    })
})

function calendarActive()
{
    changeMonth();
    Calendar.classList.add('active')
    calendarOverlay.classList.add('active');
}

function calendarClose()
{
    Calendar.classList.remove('active')
    calendarOverlay.classList.remove('active');
}

function entryMenuActive()
{
    foodActive();
    entryMenu.classList.add('active')
    entryMenuOverlay.classList.add('active');
}

function entryMenuClose()
{
    entryMenu.classList.remove('active')
    entryMenuOverlay.classList.remove('active');
}

document.getElementById('food').addEventListener('click', foodActive)
document.getElementById('drink').addEventListener('click', drinkActive)
document.getElementById('others').addEventListener('click', othersActive)

function entryDisplay()
{
    document.querySelectorAll('.food').forEach(elem => elem.style.display = 'none')
    document.querySelectorAll('.drink').forEach(elem => elem.style.display = 'none')
    document.querySelectorAll('.others').forEach(elem => elem.style.display = 'none')
}

function foodActive()
{
    entryDisplay();
    // document.querySelector('.food').classList.add('active')
    underline.style.left = '7.4rem'
    document.querySelectorAll('.food').forEach(elem => elem.style.display = 'inline-flex')
}

function drinkActive()
{
    entryDisplay();
    // document.querySelector('.drink').classList.add('active')
    underline.style.left = '18.9rem'
    document.querySelectorAll('.drink').forEach(elem => elem.style.display = 'inline-flex')
}

function othersActive()
{
    entryDisplay();
    // document.querySelector('.others').classList.add('active')
    underline.style.left = '30.55rem'
    document.querySelectorAll('.others').forEach(elem => elem.style.display = 'inline-flex')
}


