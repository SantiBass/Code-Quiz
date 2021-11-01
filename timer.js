
var timer = document.querySelector("#countdown");
var scoreEl = document.querySelector("#highScore");
var score = 0;
var finalScoreEl = document.querySelector("#endScore")
var wrongBtn = document.querySelectorAll(".wrong-answer")
var rightBtn = document.querySelectorAll(".right-answer");
var timeSeconds = localStorage.getItem("timeSeconds");


var countdown = setInterval(() => {

    timer.innerHTML = `00: ${timeSeconds}`;
    localStorage.setItem("timeSeconds", timeSeconds);
    timeSeconds = localStorage.getItem("timeSeconds");
    timeSeconds--;
    timer.innerHTML = `0: ${timeSeconds}`
    if (timeSeconds === 0)

        clearInterval(countdown);

}, 1000);
var timeOut = function () {
    if (setInterval === 0) {

        return window.location.assign("./finish.html")
    };
}
timeOut();






var finalScore111 = function(){
    finalScoreEl
};

var wrongAnswerDecreaseTime = function () {
    var pressed = true;
    if (wrongBtn === pressed) {
        timeSeconds -= 10;
    };
};


wrongBtn.on("click", function () {
    if (wrongAnswer == true) {
        console.log(wrongBtn);
        wrongAnswerDecreaseTime();
        var x = localStorage.setItem("recentScore", (score));
        console.log(x);
    }
})
var rightAnswerIincreaseTime = function () {
    var pressed2 = true;
    if (rightBtn === pressed2) {

         timeSeconds += 10;
        console.log(timeSeconds);
    };
};

rightBtn.on("click", function () {
    var correct = true;
    if (rightAnswerIincreaseTime === true) {
        console.log(rightBtn);
        rightAnswerIincreaseTime();

    }
});




