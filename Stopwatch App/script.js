let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');
let time = document.getElementById('time');

let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;
let isRunning = false;

function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    time.textContent =
        (hours < 10 ? '0' + hours : hours) + ':' +
        (minutes < 10 ? '0' + minutes : minutes) + ':' +
        (seconds < 10 ? '0' + seconds : seconds);
}
start.addEventListener('click', function() {
    if (!isRunning) {
        interval = setInterval(updateTime, 1000);
        isRunning = true;
        start.style.display = 'none';
        stop.style.display = 'inline-block';
        reset.style.display = 'inline-block';
    }
});
stop.addEventListener('click', function() {
    clearInterval(interval);
    isRunning = false;
    start.style.display = 'inline-block';
    stop.style.display = 'none';
}
);
reset.addEventListener('click', function() {
    clearInterval(interval);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    time.textContent = '00:00:00';
    start.style.display = 'inline-block';
    stop.style.display = 'none';
    reset.style.display = 'none';
});

