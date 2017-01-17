const timer = new Timer({
    tick : 1,
    ontick : function (sec) {
        console.log('interval', sec);
    },
    onstart : function() {
        console.log('timer started');
    }
});

let pomoTime = 3;

// defining options using on
timer.start(pomoTime).on('end', function () {
    console.log('timer ended');
    // this.start(4).off('end');
});

//start timer for 10 seconds
timer.start();

console.log('o');
