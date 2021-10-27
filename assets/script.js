       

// document.getElementById("demo").innerHTML = "Start button"});
// document.getElementById("start-btn").addEventListener("click", function() {
// document.getElementById("quit"  ).addEventListener("click", function() {
// document.getElementById("demo2").innerHTML = "Quit Button"});
// // 
// GIVEN I am taking a code quiz
// WHEN I click the Start button
// THEN a timer starts and I am presented with a question





// var btn = document.getElementById("start-btn");
// var questionbox  = document.querySelector(".question-box");
// container.addEventListener("click" , function(event){
// var element = event.target;
// if (element.matches( "#corect"));
// var 

// });
var opt = document.querySelector(".option-btn");
var rightAnswer = document.querySelector(".right-answer");
var wrongAnswer1 = document.querySelector(".wrong-answer1");
var wrongAnswer2 = document.querySelector(".wrong-answer2");
var wrongAnswer3= document.querySelector(".wrong-answer3");

// rightAnswer.addEventListener("click", function(){
// //    if(rightAnswer.clicked === rightAnswer)
//     alert("thats correct");
//      console.dir(rightAnswer)
//     });
rightAnswer.addEventListener("click", function(){
        //    if(rightAnswer.clicked === rightAnswer)
            alert("thats correct");

             console.dir(rightAnswer)
            });
wrongAnswer1.addEventListener("click", function(){
        //    if(rightAnswer.clicked === rightAnswer)
            alert("thats wrong");
             console.dir(rightAnswer)
            });
wrongAnswer2.addEventListener("click", function(){
        //    if(rightAnswer.clicked === rightAnswer)
            alert("thats wrong");
             console.dir(rightAnswer)
            });
wrongAnswer3.addEventListener("click", function(){
        //    if(rightAnswer.clicked === rightAnswer)
            alert("thats wrong");
             console.dir(rightAnswer)
            });

            setInterval();
var timer = document.querySelector("#countdown")
var countdown = setInterval(() => {
    var  timeSeconds = 60;
    timer.innerHTML= `00: ${timeSeconds}`;  
    localStorage.setItem("timeSeconds", timeSeconds);
    timeSeconds = localStorage.getItem("timeSeconds");
    timeSeconds--;
    timer.innerHTML = `0: ${timeSeconds}`
    if (timeSeconds ===0)
    clearInterval(countdown)
}, 1000);



// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score
// ```

// The following animation demonstrates the application functionality:

// ![Demonstration of the Coding Quiz Challenge.](./Assets/04-web-apis-homework-demo.gif)

// ### Review

// You are required to submit the following for review:

// * The URL of the functional, deployed application.

// * The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.