const timer = document.getElementById('timer');

const pomodoro = new Timer({
    tick : 1,
    ontick : function (sec) {
        timer.innerHTML = Math.round(sec / 1000);
        console.log('interval', sec);
    },
    onstart : function() {
        console.log('STARTING');
    }
});

let duration = 3;

let pomoTime = 10;

// defining options using on
pomodoro.start(pomoTime).on('end', function () {

    console.log('timer ended');
    // this.start(4).off('end');
});

//start timer for 10 seconds
