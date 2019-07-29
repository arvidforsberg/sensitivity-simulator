function roll() {
    var nr1 = Math.random();
    var nr2 = Math.random();
    var treshold = 0.1;
    var text1 = document.getElementById("nr1");
    var text2 = document.getElementById("nr2");

    console.log(nr2);

    if (nr1 >= 0.5) {
        text1.innerHTML = "lower";
    } else {
        text1.innerHTML = "higher";
    }

    for (var i = 0; i < 10; i++) {
        if (nr2 < treshold) {
            text2.innerHTML = treshold.toFixed(1);
            break;
        } else {
            treshold += 0.1;
        }
    }
}