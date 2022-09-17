const date = new Date();
date.setDate(1)
const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
const lastMonthday = new Date(date.getFullYear(), date.getMonth(), 0).getDate()
const month = date.getMonth()
const firstDayofMonth = date.getDay()
const nextMonthday = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay() 
const nextDays = 7 - nextMonthday - 1 
const openCalendar = document.querySelectorAll('h1, .date, .date p')
const Calendar = document.getElementById('calendar')
const Monthdays = document.querySelector('.days')
const Overlay = document.getElementById('calendar-overlay')
const Cancel = document.querySelectorAll('.cancel')

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


console.log(firstDayofMonth)
console.log(lastMonthday)
console.log(lastDay)

openCalendar.forEach(elem => elem.addEventListener('click', active))
Cancel.forEach(elem => elem.addEventListener('click', close))

Overlay.addEventListener('click', () => {
    const Menus = document.querySelectorAll('#calendar-overlay.active')
    Menus.forEach(elem => {
        close(elem)
    })
})

document.querySelector('.date h1').innerHTML = Months[date.getMonth()];
document.querySelector('.date p').innerHTML = MonthsAbb[date.getMonth()] + ' ' + date.getDate();
document.querySelector('.calendar-header span').innerHTML = date.getFullYear();
document.querySelector('.calendar-header h1').innerHTML = Weekdays[date.getDay()] + ', ' + MonthsAbb[date.getMonth()] + ' ' + date.getDate();
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

document.querySelector('.prevMonth').addEventListener('click', () => 
{
    date.setMonth(date.getMonth() - 1)
})

document.querySelector('.nextMonth').addEventListener('click', () => 
{
    date.setMonth(date.getMonth() + 1)
})

function active()
{
    Calendar.classList.add('active')
    Overlay.classList.add('active');
}

function close()
{
    Calendar.classList.remove('active')
    Overlay.classList.remove('active');
}
