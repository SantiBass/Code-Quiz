
var timer = document.querySelector("#countdown")
var timeSeconds=localStorage.getItem("timeSeconds");
var countdown = setInterval(() => {

    timer.innerHTML= `00: ${timeSeconds}`;  
    localStorage.setItem("timeSeconds", timeSeconds);
    timeSeconds = localStorage.getItem("timeSeconds");
    timeSeconds--;
    timer.innerHTML = `0: ${timeSeconds}`
    if (timeSeconds ===0)
    clearInterval(countdown)
}, 1000);
 
//console.log(rightAnswer)

setInterval();

var wrongAnswer = function(){
timeSeconds -=10;
};

var wrongBtn = document.querySelectorAll(".wrong-answer1")
wrongBtn.on("click", function(){
wrongAnswer();

})