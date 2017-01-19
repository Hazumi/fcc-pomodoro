const $timer = document.getElementById('timer');
const $duration = document.getElementById('duration');
const $break = document.getElementById('break');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
let duration = 1500;
let breaktime = 300;
let pomoTime = true;

function startTimer() {
  duration = $duration.value * 60 || 1500;
  breaktime = $break.value * 60 || 300;
  pomodoro.stop().start(duration).on('end', function() {
    this.start(breaktime).on('end', startTimer);
  });
}

document.addEventListener('keydown', function(event) {
  if (event.which === 13) {
    startTimer();
  }
});

function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

const pomodoro = new Timer({
  tick: 1,
  ontick: function (sec) {
    $timer.innerHTML = millisToMinutesAndSeconds(sec);
  },
  onstart: function() {
    $timer.innerHTML = 'Ready';
  },
  onstop: function() {
    pomodoro.stop();
  }
});

start.addEventListener('click', function() {
  startTimer();
});

stop.addEventListener('click', function() {
  pomodoro.stop();
});

startTimer();
