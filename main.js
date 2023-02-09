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
const Ok = document.querySelector('.ok')
const headerMinute = document.querySelector('.Minute')
const headerHour = document.querySelector('.Hour')

// calendar menu

const date = new Date();
const month = date.getMonth()
const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
const firstDayofMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay()

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


const adjustCalendar = () =>
{
    
    const lastMonthday = new Date(date.getFullYear(), date.getMonth(), 0).getDate()
    
    
    const nextMonthday = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay() 
    const nextDays = 7 - nextMonthday - 1 
    const Monthdays = document.querySelector('.days')
    

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
            
            document.querySelectorAll('.selected').forEach(elem => elem.classList.remove('selected'))
            event.target.classList.add('selected')
            const clickedDate = document.querySelector('.selected')

            if(clickedDate)
            {
            calendarHeaderDate.innerHTML = Months[date.getMonth()] + ' ' + clickedDate.innerHTML; 
            }
        }))
       
        Monthdays.appendChild(Days);
       
    }
        // const clickedDate = document.querySelector('.selected')
        // if(clickedDate)
        // {
        //    calendarHeaderDate.innerHTML = Months[date.getMonth()] + ' ' + clickedDate.innerHTML; 
        // }
        
         
    for(let z = 1; z <= nextDays; z++)
    {

        const nextMonthDays = document.createElement('div')
        nextMonthDays.classList.add('nextMonthdays')
        nextMonthDays.innerHTML = z
        
        Monthdays.appendChild(nextMonthDays);
        
    }
    
}



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

headerMinute.addEventListener('click', minutesActive)
headerHour.addEventListener('click', hoursActive)
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

    document.querySelectorAll('.hr').forEach(elem => elem.addEventListener('click', (event) => 
    {
        document.querySelectorAll('.selected').forEach(elem => elem.classList.remove('selected'))
        event.target.classList.add('selected')
        const selected = document.querySelector('.selected') 
        
        if(selected != null)
        {
            hrArm.style.setProperty('--arm-rotation', Number(selected.innerHTML))
            headerHour.innerHTML = selected.innerHTML
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

    document.querySelectorAll('.min b').forEach(elem => elem.addEventListener('click', (event) => 
    {
        
        date.setMinutes(Number(event.target.innerHTML))
        console.log(date.getMinutes())
        document.querySelectorAll('.selected').forEach(elem => elem.classList.remove('selected'))
        document.querySelectorAll('.tics').forEach(elem => elem.style.color = "transparent")
        
        event.target.classList.add('selected')
        const selected = document.querySelector('.selected') 
        event.target.style.color = "var(--white)"
        minArm.style.setProperty('--arm-rotation', Number(selected.innerHTML))

        if(Number(selected.innerHTML) <= 9)
        {
            headerMinute.innerHTML = '0' + selected.innerHTML    
        }
        else
        {
            headerMinute.innerHTML = selected.innerHTML
        }
        // document.querySelectorAll('.tics').forEach(elem => elem.innerHTML = "•")
    }))
}


startTime();


function clockMenuActive()
{
    hoursActive();

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
    headerHour.style.opacity = "1"
    headerMinute.style.opacity = ".5"
    document.querySelector('.hours').style.display = 'block'
    hrArm.style.display = 'block'
}

function minutesActive()
{
    clockDisplay();
    headerMinute.style.opacity = "1"
    headerHour.style.opacity = ".5"
    document.querySelector('.minutes').style.display = 'block'
    minArm.style.display = 'block'
}

function startTime()
{
    if (hour <= 11)
    {
        headerHour.innerHTML = hour 
        am.style.opacity = "1"
    }
    else if (hour > 12)
    {
        headerHour.innerHTML = standard
        pm.style.opacity = "1"
    }
    else 
    {
        headerHour.innerHTML = hour 
        pm.style.opacity = "1"
    }

    if (minute < 10)
    {
        headerMinute.innerHTML = '0' + minute
    }
    else
    {
        headerMinute.innerHTML = minute
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
    headerHour.style.opacity === "1"
    headerMinute.style.opacity === "1"
    if(pm.style.opacity === '1' && Number(headerHour.innerHTML) !== 12)
    {
        selectedTime.innerHTML = headerTime.innerHTML + " " + pm.innerHTML
        date.setHours(Number(headerHour.innerHTML) + 12)
    }
    else if(am.style.opacity === '1' && Number(headerHour.innerHTML) === 12)
    {
        selectedTime.innerHTML = headerTime.innerHTML + " " + am.innerHTML
        date.setHours(Number(headerHour.innerHTML) - 12)
    }
    else if(am.style.opacity === '1')
    {
        selectedTime.innerHTML = headerTime.innerHTML + " " + am.innerHTML
        date.setHours(Number(headerHour.innerHTML))
    }
    else
    {
        selectedTime.innerHTML = headerTime.innerHTML + " " + pm.innerHTML
        date.setHours(Number(headerHour.innerHTML))
    }
    date.setMinutes(Number(headerMinute.innerHTML))
    
    
    console.log(date.getHours())
    console.log(date.getMinutes())
    console.log(date)
    clockMenuClose();
}

// description menu

const openDescriptionMenu = document.querySelector('.description-menu')
const descriptionMenuBack = document.querySelector('.close-description-menu')
const descriptionOverlay =  document.getElementById('description-menu-overlay')
const descriptions = document.querySelector('.descriptions')


openDescriptionMenu.addEventListener('click', descriptionMenuActive)
descriptionMenuBack.addEventListener('click', descriptionMenuClose)
descriptionOverlay.addEventListener('click', () => {
    const descriptionMenu = document.querySelectorAll('#description-menu-overlay.active')
    descriptionMenu.forEach(elem => {
        descriptionMenuClose(elem)
    })
})

function descriptionMenuActive()
{
    descriptions.classList.add('active')
    descriptionOverlay.classList.add('active');
}

function descriptionMenuClose()
{
    descriptions.classList.remove('active')
    descriptionOverlay.classList.remove('active');
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
const entryTypeSelected = document.querySelector('.entry-type-selected')
const entryNameSelected = document.querySelector('.entry-name-selected')
const selectedTime = document.querySelector('.selected-time')
const selectedDate = document.querySelector('.selected-date')
const selectedEntryDay = document.querySelector('.selected-entry-day')
const selectedEntryYear = document.querySelector('.selected-entry-year')
const entryDateMenu = document.querySelector('.date-menu')
const headerDate = document.querySelector('.date h1')

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
    entryTypeSelected.innerHTML = event.target.outerHTML
    entryNameSelected.innerHTML = event.currentTarget.outerText
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
    selectedEntryDay.innerHTML = Months[date.getMonth()] + ' ' + date.getDate();
    selectedEntryYear.innerHTML = date.getFullYear();
}

function newDateSelected()
{
    calendarClose();
    selectedEntryDay.innerHTML = calendarHeaderDate.innerHTML
    selectedEntryYear.innerHTML = date.getFullYear();
}

function lowerEntryMenuCalendar()
{
    adjustCalendar();
    Calendar.classList.add('active')
    calendarOverlay.classList.add('active');
    document.querySelectorAll('.ok, .cancel').forEach(elem => elem.style.display = 'none')
    document.querySelectorAll('.entry-ok, .entry-cancel').forEach(elem => elem.style.display = 'block')
}

// entries 

const saveButton = document.querySelector('.save')
const entries = document.querySelector('.entries')
const savedDescriptions = document.querySelector('.saved-descriptions')
const timeTest = document.querySelectorAll('.entry-main')
const newDescriptionValue = document.querySelector('.description-input')
// const testTime = timeTest.getAttribute('milliseconds')

// saveButton.addEventListener('click', makeNewEntry)
saveButton.addEventListener('click', () => 
{
    entryData();
    console.log(data)
    entryMenuClose();
})
savedDescriptions.addEventListener('click', savedInputs)
Ok.addEventListener('click', changeDayByCalendar)

let data = {};

let entryData = () => 
{
    if(newDescriptionValue.value !== "")
    {
        data['description'] = newDescriptionValue.value
    }
    createEntry();
    newDescriptionValue.value = ""
}

let createEntry = () =>
{
    const entry = document.createElement('div')
    const entryMain = document.createElement('div')
    const typeOfEntry = document.createElement('div')
    const nameOfEntry = document.createElement('div')
    const entryDescription = document.createElement('div')
    const entryDetails = document.createElement('div')
    const timeOfEntry = document.createElement('div')
    const addNewDescription = document.createElement('div')
    const newDescriptionValue = document.querySelector('.description-input').value
    const descriptionsKey = 'descriptions'


    entryMain.classList.add('entry-main')
    typeOfEntry.classList.add('type-of-entry')
    nameOfEntry.classList.add('entry-name')
    entryDescription.classList.add('entry-description')
    entryDetails.classList.add('entry-details')
    timeOfEntry.classList.add('entry-time')
    addNewDescription.classList.add('new-description')

    entryMain.setAttribute('date', Months[date.getMonth()] + ' ' + date.getDate())
    // entryMain.setAttribute('milliseconds', date.getTime())
    typeOfEntry.innerHTML = entryTypeSelected.innerHTML
    nameOfEntry.innerHTML = entryNameSelected.innerHTML
    entryDescription.innerHTML = newDescriptionValue
    timeOfEntry.innerHTML = selectedTime.innerHTML
    
    addNewDescription.innerHTML = newDescriptionValue
    savedDescriptions.innerHTML = addNewDescription.innerHTML 
   
   


    entries.appendChild(entry)
    entry.appendChild(entryMain)
    entryMain.appendChild(typeOfEntry)
    entryMain.appendChild(timeOfEntry)
    typeOfEntry.appendChild(entryDetails)
    entryDetails.appendChild(nameOfEntry)
    entryDetails.appendChild(entryDescription)
    savedDescriptions.appendChild(addNewDescription)

    if(localStorage.getItem('entries') == null)
    { 
    localStorage.setItem('entries', '[]')
    }

    const entryDivs = entryMain.outerHTML
    const oldEntries = JSON.parse(localStorage.getItem('entries'));
    oldEntries.push(entryDivs);
    localStorage.setItem('entries', JSON.stringify(oldEntries));


    // entries.innerHTML += data.description
}

if(JSON.parse(localStorage.getItem('entries')))
{
    entries.innerHTML = JSON.parse(localStorage.getItem('entries')).join('')
}
if(JSON.parse(localStorage.getItem('descriptions')))
{
    savedDescriptions.innerHTML = JSON.parse(localStorage.getItem('descriptions')).join('')
}


const adjustDay = () =>
{
    // console.log(selectedTime.textContent > "2:00PM")
    headerDate.innerHTML = Months[date.getMonth()] + ' ' + date.getDate();
    today();
    console.log()
    
    // document.querySelectorAll('.entry-main[milliseconds]').sort(function(a,b) {return a.milliseconds - b.milliseconds})
    document.querySelectorAll('.entry-main').forEach(elem => elem.style.display = "none");
    document.querySelectorAll('.entry-main[date="' + headerDate.innerHTML + '"]').forEach(elem => elem.style.display = "block");
    // testTime.sort(function(a, b){return a - b});
}

adjustDay();

document.querySelector('.prevDay').addEventListener('click', () => 
{
    date.setDate(date.getDate() - 1)
    adjustDay();
})

document.querySelector('.nextDay').addEventListener('click', () => 
{
    date.setDate(date.getDate() + 1)
    adjustDay();
})
    
 

function makeNewEntry()
{
    const entry = document.createElement('div')
    const entryMain = document.createElement('div')
    const typeOfEntry = document.createElement('div')
    const nameOfEntry = document.createElement('div')
    const entryDescription = document.createElement('div')
    const entryDetails = document.createElement('div')
    const timeOfEntry = document.createElement('div')
    const addNewDescription = document.createElement('div')
    const newDescriptionValue = document.querySelector('.description-input').value
    const descriptionsKey = 'descriptions'


    entryMain.classList.add('entry-main')
    typeOfEntry.classList.add('type-of-entry')
    nameOfEntry.classList.add('entry-name')
    entryDescription.classList.add('entry-description')
    entryDetails.classList.add('entry-details')
    timeOfEntry.classList.add('entry-time')
    addNewDescription.classList.add('new-description')

    entryMain.setAttribute('date', Months[date.getMonth()] + ' ' + date.getDate())
    entryMain.setAttribute('milliseconds', date.getTime())
    typeOfEntry.innerHTML = entryTypeSelected.innerHTML
    nameOfEntry.innerHTML = entryNameSelected.innerHTML
    entryDescription.innerHTML = newDescriptionValue
    timeOfEntry.innerHTML = selectedTime.innerHTML
    
    addNewDescription.innerHTML = newDescriptionValue
    savedDescriptions.innerHTML = addNewDescription.innerHTML 
   
   


    entries.appendChild(entry)
    entry.appendChild(entryMain)
    entryMain.appendChild(typeOfEntry)
    entryMain.appendChild(timeOfEntry)
    typeOfEntry.appendChild(entryDetails)
    entryDetails.appendChild(nameOfEntry)
    entryDetails.appendChild(entryDescription)
    savedDescriptions.appendChild(addNewDescription)
    // saveInputs();

    if(localStorage.getItem('') == null)
    { 
    localStorage.setItem(descriptionsKey, '[]')
    }

    const descriptionDivs = addNewDescription.outerHTML
    const oldDescriptions = JSON.parse(localStorage.getItem(descriptionsKey));
    if(newDescriptionValue !== descriptionDivs)
    { 
        oldDescriptions.push(descriptionDivs);
    }
    localStorage.setItem(descriptionsKey, JSON.stringify(oldDescriptions));

    if(localStorage.getItem('entries') == null)
    { 
    localStorage.setItem('entries', '[]')
    }

    const entryDivs = entryMain.outerHTML
    const oldEntries = JSON.parse(localStorage.getItem('entries'));
    oldEntries.push(entryDivs);
    localStorage.setItem('entries', JSON.stringify(oldEntries));


    

    location.reload();
}

function savedInputs()
{
    const DescriptionValue = document.querySelector('.description-input')
    DescriptionValue.value = event.target.innerHTML
    descriptionMenuClose();
}

function changeDayByCalendar()
{
    if(headerDate.innerHTML < calendarHeaderDate.innerHTML)
    {   
        for(let u = headerDate.innerHTML; u <= calendarHeaderDate.innerHTML; u++)
        {
            date.setDate(date.getDate() + 1)
            console.log(headerDate.innerHTML < calendarHeaderDate.innerHTML)
            calendarClose();
            adjustDay();
        } 
    }
    
            
    console.log(headerDate)
        
        // for(let d = 1; d < ; d++)
        // {
            
        //     date.setDate(date.getDate() + 1)
        // }
        // calendarClose();
        // adjustDay();
        // else
        // {
        //     console.log("else")
        // }
    
    
    
}

// update menu


// const openUpdateMenu = document.querySelectorAll('.entry-main')
// const updateMenuBack = document.querySelector('.close-update-menu')
// const updateOverlay =  document.getElementById('update-menu-overlay')
// const updateMenu = document.querySelector('.update-menu')


// openUpdateMenu.addEventListener('click', updateMenuActive)
// descriptionMenuBack.addEventListener('click', updateMenuClose)
// descriptionOverlay.addEventListener('click', () => {
//     const updateMenu = document.querySelectorAll('#update-menu-overlay.active')
//     updateMenu.forEach(elem => {
//         descriptionMenuClose(elem)
//     })
// })

// function updateMenuActive()
// {
//     updateMenu.classList.add('active')
//     updateOverlay.classList.add('active');
// }

// function updateMenuClose()
// {
//     updateMenu.classList.remove('active')
//     updateOverlay.classList.remove('active');
// }