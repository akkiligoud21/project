let is12Hr = true;
const hms = document.getElementById('hms');
const ampm = document.getElementById('ampm');
const dateEl = document.getElementById('date');
const toggle = document.getElementById('toggle');

function updateTime() {
    const now = new Date();
    let hr = now.getHours();
    const min = now.getMinutes().toString().padStart(2, '0');
    const sec = now.getSeconds().toString().padStart(2, '0');
    let ampmText = '';

    if (is12Hr) {
        ampmText = hr >= 12 ? 'PM' : 'AM';
        if (hr > 12) hr -= 12;
        if (hr === 0) hr = 12;
    }
    hr = hr.toString().padStart(2, '0');

    hms.textContent = `${hr}:${min}:${sec}`;
    ampm.textContent = ampmText;

    // Date display
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dayName = days[now.getDay()];
    const monthName = months[now.getMonth()];
    const dayNum = now.getDate();
    dateEl.textContent = `${dayName}, ${monthName} ${dayNum}`;
}

// Event listener for toggle
toggle.addEventListener('click', () => {
    is12Hr = !is12Hr;
    toggle.textContent = is12Hr ? '12 Hr' : '24 Hr';
    ampm.textContent = is12Hr ? ampm.textContent : '';  // Hide AM/PM in 24hr
});

// Initial update and interval
updateTime();
setInterval(updateTime, 1000);
