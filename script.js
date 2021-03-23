let nav = 0;
let clicked = null;
let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];


const calendar = document.getElementById('calendar');
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function load() {
    const dt = new Date();

    const weekday = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    });
    
    const paddingDays = days.indexOf(dateString.split(', ')[0]);

    document.getElementById('monthDisplay').innerText = `${dt.toLocaleDateString('en-us', { month: 'long' })} ${year}`
    
    for(let i =1; i <= paddingDays + daysInMonth; i++) {
        const daySquare = document.createElement('div');
        daySquare.classList.add('day');

        if (i > paddingDays) {
            daySquare.innerText = i - paddingDays;

            daySquare.addEventListener('click', () => console.log('click'));
        } else {
            daySquare.classList.add('padding');
        }
        calendar.appendChild(daySquare);
    }

}

load();