var ramadan = new Date('Apr 12, 2021 00:00:00').getTime();

function countdown(){
    var today = new Date().getTime();
    
    gap = ramadan - today;

    var seconds = 1000;
    var minute = seconds * 60;
    var hour = minute * 60;
    var day = hour * 24;

    var d = Math.floor(gap/(day));
    var h = Math.floor((gap % (day)) / (hour));
    var m = Math.floor((gap % (hour)) / (minute));
    var s = Math.floor((gap % (minute)) / (seconds));

    document.getElementById('days').innerHTML = d;
    document.getElementById('hours').innerHTML = h;
    document.getElementById('minutes').innerHTML = m;
    document.getElementById('seconds').innerHTML = s;
}

setInterval(function() {
    countdown()
}, 1000)