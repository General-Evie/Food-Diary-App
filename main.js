const mainColor = "#0e89c2"
const lightBlue = "#52b5e4"
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
const openTimeMenu = document.querySelector('.clock-menu')
const clock = document.querySelector('.clock')
const clockOverlay = document.getElementById('clock-overlay')
const entryOK = document.querySelector('.entry-ok')
const calendarHeaderDate = document.querySelector('.calendar-header h1')




// calendar menu

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

const adjustCalendar = () =>
{
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
    const lastMonthday = new Date(date.getFullYear(), date.getMonth(), 0).getDate()
    
    const firstDayofMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay()
    const nextMonthday = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay() 
    const nextDays = 7 - nextMonthday - 1 
    const Monthdays = document.querySelector('.days')
    
     console.log(Weekdays[date.getDay()])

    document.querySelector('.date2 span').innerHTML = date.getFullYear();
    document.querySelector('.date2 h2').innerHTML = Months[date.getMonth()];
    document.querySelector('.date2 h2').innerHTML = Months[date.getMonth()];
  
    Monthdays.innerHTML = '';

    for(let x = firstDayofMonth; x > 0; x--)
    {
        const prevMonthDays = document.createElement('div')
        prevMonthDays.classList.add('lastMonthdays')
        prevMonthDays.innerHTML = lastMonthday - x + 1
        
        Monthdays.appendChild(prevMonthDays);
    }

    for(let i = 1; i <= lastDay; i++)
    {
        const Days = document.createElement('div') 
        
        Days.innerHTML = i
        if(i === new Date().getDate() && date.getMonth() === new Date().getMonth())
        {
            Days.classList.add('selected')
            Days.classList.add('allDays')
            
            
        }
        else
        {
            Days.classList.add('allDays')
        }
         
        
        document.querySelectorAll('.allDays').forEach(elem => elem.addEventListener('click', (event) => 
        {
            const clickedDate = document.querySelector('.selected')
            document.querySelectorAll('.selected').forEach(elem => elem.classList.remove('selected'))
            event.target.classList.add('selected')
            
            if(clickedDate != null)
            {
            calendarHeaderDate.innerHTML = Months[date.getMonth()] + ' ' + clickedDate.innerHTML; 
            }
        }))
       
        Monthdays.appendChild(Days);
       
    }
        const clickedDate = document.querySelector('.selected')
        if(clickedDate != null)
        {
           calendarHeaderDate.innerHTML = Months[date.getMonth()] + ' ' + clickedDate.innerHTML; 
        }
        
         
    for(let z = 1; z <= nextDays; z++)
    {

        const nextMonthDays = document.createElement('div')
        nextMonthDays.classList.add('nextMonthdays')
        nextMonthDays.innerHTML = z
        
        Monthdays.appendChild(nextMonthDays);
        
    }
    
}


document.querySelector('.date h1').innerHTML = Months[date.getMonth()];
document.querySelector('.date p').innerHTML = MonthsAbb[date.getMonth()] + ' ' + date.getDate();
document.querySelector('.calendar-header span').innerHTML = date.getFullYear();



document.querySelector('.prevMonth').addEventListener('click', () => 
{
    date.setMonth(date.getMonth() - 1)
    adjustCalendar();
})

document.querySelector('.nextMonth').addEventListener('click', () => 
{
    date.setMonth(date.getMonth() + 1)
    adjustCalendar();
})

// document.querySelectorAll('.allDays').forEach(elem => elem.addEventListener('click', (event) =>
// {
//     event.target.classList.add('selected');
//     changeCalendar();
// }))
// console.log(clickedEntryDate)




openCalendar.forEach(elem => elem.addEventListener('click', calendarActive))
Cancel.forEach(elem => elem.addEventListener('click', calendarClose))
calendarOverlay.addEventListener('click', () => {
    const calendarMenu = document.querySelectorAll('#calendar-overlay.active')
    calendarMenu.forEach(elem => {
        calendarClose(elem)
    })
})


function calendarActive()
{
    adjustCalendar();
    Calendar.classList.add('active')
    calendarOverlay.classList.add('active');
    document.querySelectorAll('.ok, .cancel').forEach(elem => elem.style.display = 'block')
    document.querySelectorAll('.entry-ok, .entry-cancel').forEach(elem => elem.style.display = 'none')
}

function calendarClose()
{
    Calendar.classList.remove('active')
    calendarOverlay.classList.remove('active');
}


// entry menu

document.getElementById('food').addEventListener('click', foodActive)
document.getElementById('drink').addEventListener('click', drinkActive)
document.getElementById('others').addEventListener('click', otherActive)

entryButton.addEventListener('click', entryMenuActive)
entryMenuBack.addEventListener('click', entryMenuClose)
entryMenuOverlay.addEventListener('click', () => {
    const entryMenu = document.querySelectorAll('#entry-menu-overlay.active')
    entryMenu.forEach(elem => {
        entryMenuClose(elem)
    })
})


function entryMenuActive()
{
    foodActive();
    entryMenu.classList.add('active')
    entryMenuOverlay.classList.add('active');
}

function entryMenuClose()
{
    closeLowerEntryMenu();
    entryMenu.classList.remove('active')
    entryMenuOverlay.classList.remove('active');
}

function entryDisplay()
{
    document.querySelectorAll('.food').forEach(elem => elem.style.display = 'none')
    document.querySelectorAll('.drink').forEach(elem => elem.style.display = 'none')
    document.querySelectorAll('.others').forEach(elem => elem.style.display = 'none')
}

function foodActive()
{
    entryDisplay();
    underline.style.left = '7.4rem'
    document.querySelectorAll('.food').forEach(elem => elem.style.display = 'inline-flex')
}

function drinkActive()
{
    entryDisplay();
    underline.style.left = '18.9rem'
    document.querySelectorAll('.drink').forEach(elem => elem.style.display = 'inline-flex')
}

function otherActive()
{
    entryDisplay();
    underline.style.left = '30.55rem'
    document.querySelectorAll('.others').forEach(elem => elem.style.display = 'inline-flex')
}

// lower entry menu 

const entryButtons = document.querySelectorAll('.entry-type')
const lowerEntryMenu = document.querySelector('.lower-entry-menu')
const entrySelected = document.querySelector('.entry-type-selected')
const selectedTime = document.querySelector('.selected-time')
const selectedDate = document.querySelector('.selected-date')
const entryDateMenu = document.querySelector('.date-menu')
// const EntryDate = (event) => {
//     event.target.classList.add('date-clicked');
//   }

    


entryButtons.forEach(elem => elem.addEventListener('click', openLowerEntryMenu))
entryDateMenu.addEventListener('click', lowerEntryMenuCalendar)
entryOK.addEventListener('click', newDateSelected)

today();

function openLowerEntryMenu()
{
    entryType();
    timeSet();
    lowerEntryMenu.style.display = 'block'
}

function closeLowerEntryMenu()
{
    lowerEntryMenu.style.display = 'none'
}

function entryType()
{
    entrySelected.innerHTML = event.target.innerHTML
}

// function Time()
// {
//     if (hour <= 11)
//     {
//         selectedTime.innerHTML = headerTime.innerHTML + ' ' + am.innerHTML
//     }
//     else if (hour > 12)
//     {
//         selectedTime.innerHTML = headerTime.innerHTML + ' ' + pm.innerHTML
//     }
//     else 
//     {
//         selectedTime.innerHTML = headerTime.innerHTML + ' ' + pm.innerHTML
//     }
// }

function today()
{
    selectedDate.innerHTML = Months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
}

function newDateSelected()
{
    calendarClose();
    selectedDate.innerHTML = calendarHeaderDate.innerHTML + ', ' + date.getFullYear();
}

function lowerEntryMenuCalendar()
{
    adjustCalendar();
    Calendar.classList.add('active')
    calendarOverlay.classList.add('active');
    document.querySelectorAll('.ok, .cancel').forEach(elem => elem.style.display = 'none')
    document.querySelectorAll('.entry-ok, .entry-cancel').forEach(elem => elem.style.display = 'block')
}

// function clickedEntryDate(event)
// {
//     event.target.classList.add('selected')
//     console.log(date)
// }


// clock menu

const hour = date.getHours();
const minute = date.getMinutes();
const standard = hour - 12
const am = document.getElementById('am')
const pm = document.getElementById('pm')
const hrArm = document.querySelector('.hr-arm')
const minArm =document.querySelector('.min-arm')
const hoursRatio = hour / 12
const clockHours = document.querySelector('.hours')
const clockMinutes = document.querySelector('.minutes')
const hrDivs = document.querySelector('.hr')
const headerTime = document.querySelector('.clock-header h1')
const clockOK = document.querySelector('.clock-ok')

// Time();



openTimeMenu.addEventListener('click', clockMenuActive)
entryMenuBack.addEventListener('click', clockMenuClose)
clockOverlay.addEventListener('click', () => {
    const clockMenu = document.querySelectorAll('#clock-overlay.active')
    clockMenu.forEach(elem => {
        clockMenuClose(elem)
    })
})

document.querySelector('.Minute').addEventListener('click', minutesActive)
document.querySelector('.Hour').addEventListener('click', hoursActive)
am.addEventListener('click', setAM)
pm.addEventListener('click', setPM)
clockOK.addEventListener('click', timeSet)


// document.querySelector('.analog').addEventListener('mousemove', () =>
// {
//     selector.style.transform = "rotate(30deg)";
// })

for(let h = 1; h <= 12; h++)
{
    const Hours = document.createElement('div')
    const reverse = document.createElement('b')
    Hours.classList.add('hr')
    reverse.innerHTML = h
    clockHours.appendChild(Hours)
    Hours.appendChild(reverse)
    Hours.style.setProperty('--rotation', h)
    reverse.style.setProperty('--Reverse-rotation', h)

    document.querySelectorAll('.hr').forEach(elem => elem.addEventListener('mouseover', (event) => 
    {
        const selected = document.querySelector('.selected') 
        document.querySelectorAll('.selected').forEach(elem => elem.classList.remove('selected'))
        // console.log(date)
        event.target.classList.add('selected')
        
        
        if(selected != null)
        {
            hrArm.style.setProperty('--arm-rotation', Number(selected.innerHTML))
            document.querySelector('.Hour').innerHTML = selected.innerHTML
        }
    }))
}

for(let m = 0; m <= 59; m++)
{
    const Minutes = document.createElement('div')
    const reverse = document.createElement('b')
    
    Minutes.classList.add('min')
    
    if
    ((
           m/5 === Math.floor(0)
        || m/5 === Math.floor(1) 
        || m/5 === Math.floor(2)
        || m/5 === Math.floor(3)
        || m/5 === Math.floor(4)
        || m/5 === Math.floor(5)
        || m/5 === Math.floor(6)
        || m/5 === Math.floor(7)
        || m/5 === Math.floor(8)
        || m/5 === Math.floor(9)
        || m/5 === Math.floor(10)
        || m/5 === Math.floor(11)
    ))
    {
        reverse.innerHTML = m
    }
    else
    {
        reverse.innerHTML = m
        reverse.classList.add('tics')
    }
   
    clockMinutes.appendChild(Minutes)
    Minutes.appendChild(reverse)
    Minutes.style.setProperty('--rotation', m)
    reverse.style.setProperty('--Reverse-rotation', m)

    document.querySelectorAll('.min').forEach(elem => elem.addEventListener('mouseover', (event) => 
    {
        const selected = document.querySelector('.selected') 
        
        document.querySelectorAll('.selected').forEach(elem => elem.classList.remove('selected'))
        document.querySelectorAll('.tics').forEach(elem => elem.style.color = "transparent")
        
        event.target.classList.add('selected')
        event.target.style.color = "var(--white)"
        minArm.style.setProperty('--arm-rotation', Number(selected.innerHTML))

        if(Number(selected.innerHTML) <= 9)
        {
            document.querySelector('.Minute').innerHTML = '0' + selected.innerHTML    
        }
        else
        {
            document.querySelector('.Minute').innerHTML = selected.innerHTML
        }
        // document.querySelectorAll('.tics').forEach(elem => elem.innerHTML = "•")
    }))
}


startTime();


function clockMenuActive()
{
    hoursActive();
    // setArm(selected, hoursRatio);
    clock.classList.add('active')
    clockOverlay.classList.add('active');
    document.querySelectorAll('.clock-ok, .clock-cancel').forEach(elem => elem.style.display = 'block')
}

function clockMenuClose()
{
    entryMenuActive();
    clock.classList.remove('active')
    clockOverlay.classList.remove('active');
}

function clockDisplay()
{
    document.querySelector('.hours').style.display = 'none'
    document.querySelector('.minutes').style.display = 'none'
    hrArm.style.display = 'none'
    minArm.style.display = 'none'
}

function hoursActive()
{
    clockDisplay();
    document.querySelector('.Hour').style.opacity = "1"
    document.querySelector('.Minute').style.opacity = ".5"
    document.querySelector('.hours').style.display = 'block'
    hrArm.style.display = 'block'
}

function minutesActive()
{
    clockDisplay();
    document.querySelector('.Minute').style.opacity = "1"
    document.querySelector('.Hour').style.opacity = ".5"
    document.querySelector('.minutes').style.display = 'block'
    minArm.style.display = 'block'
}

function startTime()
{
    if (hour <= 11)
    {
        document.querySelector('.Hour').innerHTML = hour 
        am.style.opacity = "1"
    }
    else if (hour > 12)
    {
        document.querySelector('.Hour').innerHTML = standard
        pm.style.opacity = "1"
    }
    else 
    {
        document.querySelector('.Hour').innerHTML = hour 
        pm.style.opacity = "1"
    }

    if (minute < 10)
    {
        document.querySelector('.Minute').innerHTML = '0' + minute
    }
    else
    {
        document.querySelector('.Minute').innerHTML = minute
    }
}

function setAM()
{
    am.style.opacity = "1"
    pm.style.opacity = ".5"
}

function setPM()
{
    pm.style.opacity = "1"
    am.style.opacity = ".5"
}

function timeSet()
{
    if(am.style.opacity === '1')
    {
        selectedTime.innerHTML = headerTime.innerHTML + " " + am.innerHTML
    }
    else
    {
        selectedTime.innerHTML = headerTime.innerHTML + " " + pm.innerHTML
    }
}

function setArm(element, rotation)
{
    element.style.setProperty('--rotation', rotation * 360)
}

function setHours(element, rotation)
{
    element.style.setProperty('--rotation', rotation = h)
}

