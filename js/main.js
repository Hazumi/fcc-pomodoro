const $timer = document.getElementById('timer');
const $duration = document.getElementById('duration');

let duration = document.getElementById('duration').value
let paused = false;

duration = 4 * 60; // 4 minutes
duration = 3;

const pomodoro = new Timer({
    tick: 1,
    ontick: function (sec) {
        $timer.innerHTML = Math.round(sec/1000);
        console.log('interval', sec);
    },
    onstart: function() {
        console.log('STARTING');
    },
    onpause: function() {
        console.log('paused');
    }
});

$timer.addEventListener('click', function() {
    if (paused) {
        pomodoro.start();
        paused = false;
    } else {
        pomodoro.pause();
        paused = true;
    }
});

// defining options using on
pomodoro.start(duration).on('end', function () {
    //$timer.innerHTML = "0";
    this.start(4).off('end');
});

