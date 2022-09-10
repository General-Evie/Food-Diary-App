const openCalendar = document.querySelectorAll('h1')
const Calendar = document.getElementById('calendar')
const Overlay = document.getElementById('calendar-overlay')
const Cancel = document.querySelectorAll('.cancel')

openCalendar.forEach(elem => elem.addEventListener('click', active))
Cancel.forEach(elem => elem.addEventListener('click', close))

Overlay.addEventListener('click', () => {
    const Menus = document.querySelectorAll('#calendar-overlay.active')
    Menus.forEach(elem => {
        close(elem)
    })
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
