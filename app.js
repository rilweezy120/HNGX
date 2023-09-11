
// ********** set date ************
// const date = document.getElementById('date')
const day = document.getElementById('day');
const time = document.getElementById('time');



const dt = new Date();
// date.textContent = dt.getFullYear();
day.textContent = dt.toLocaleDateString('en-EN', { weekday: 'long' });
let hours = dt.getHours();
let minutes = dt.getMinutes();
let seconds = dt.getSeconds();

time.textContent = `${hours}:${minutes}:${seconds}`;

window.addEventListener('scroll', () => {
    const navBar = document.getElementById('nav')
    const topBtn = document.querySelector('.top-link')
    const scrollHeight = window.scrollY;

    if(scrollHeight > 2){
        topBtn.classList.add('show-link');
    }
    else{
        topBtn.classList.remove('show-link')
    }

})
