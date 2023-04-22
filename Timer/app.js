window.onload = function () {
    var seconds = 00;
    var tens = 00;
    var hours = 00;
    var appendTens = document.getElementById("tens");
    var appendSeconds = document.getElementById("seconds");
    var appendhours = document.getElementById("hours");
    var btnStart = document.getElementById("startbtn");
    var btnStop = document.getElementById("pausebtn");
    var btnReset = document.getElementById("resetbtn");
    var Interval;

    btnStart.onclick = function () {
        Interval = setInterval(startTimer, 80);
    };

    btnStop.onclick = function () {
        clearInterval(Interval);
    };

    btnReset.onclick = function () {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        hours = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
        appendhours.innerHTML = hours;

    };

    function startTimer() {
        tens++;
        if (tens <= 9) {
            appendTens.innerHTML = "0" + tens;
        }

        if (tens > 9) {
            appendTens.innerHTML = tens;
        }

        if (tens > 60) {
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + tens;
        }

        if (seconds > 9) {
            hours++;
            appendSeconds.innerHTML = "00";
            appendTens.innerHTML = "00";
            appendhours.innerHTML = hours;
            clearInterval(Interval);
        }
    }
};