// Set the date we're counting down to
var countDownDate = new Date("Nov. 31,2022 22:00:20 EST").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="countdown"

    document.getElementById("countdownPhrase").innerHTML = "Minting Soon";



    // document.getElementById("countdownPhrase").innerHTML =
    //     "MINTING DEC X, 2021 5PM EST 0.5SOL";

    // document.getElementById("countdown").innerHTML =
    //     "|" + days + "D|" + hours + "H|" + minutes + "M|" + seconds + "S|";

    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdownPhrase").innerHTML =
            "MINTING IS LIVE";
        document.getElementById("countdown").innerHTML = "0.5 SOL";
        document.getElementById("mintButton").style.display = "inline";
    }
}, 1000);