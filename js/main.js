const $timer = document.getElementById('timer');
const $duration = document.getElementById('duration');
const $break = document.getElementById('break');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
let duration = 1500;
let breaktime = 300;

document.addEventListener('keydown', function(event) {
  if (event.which === 13) {
    duration = $duration.value * 60 || 1500;
    breaktime = $break.value * 60 || 300;
    pomodoro.stop().start(duration).on('end', function() {
      $timer.innerHTML = "0:00";
      this.start(breaktime).off('end'); 
    });
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
    console.log('starting');
  },
  onstop: function() {
    pomodoro.stop();
    console.log('Stopping');
  },
  onend: function() {
    //timer end normally
  }
});

start.addEventListener('click', function() {
  pomodoro.start(duration);
});

stop.addEventListener('click', function() {
  pomodoro.stop();
});

// options
pomodoro.start(duration).on('end', function () {
    this.start(breaktime).off('end');
});
