     localStorage.setItem("timeSeconds", 60)


// document.getElementById("demo").innerHTML = "Start button"});
// document.getElementById("start-btn").addEventListener("click", function() {
// document.getElementById("quit"  ).addEventListener("click", function() {
// document.getElementById("demo2").innerHTML = "Quit Button"});
// // 
// GIVEN I am taking a code quiz
// WHEN I click the Start button
// THEN a timer starts and I am presented with a question

// alt/option + shift + down arrow to duplicate code selection

// var questionIndex = 0;

// var questions = {
    
//         question1: "Question 1?",
//         answers1: ["a", "b", "c", "d"],
//         answer1: "b",
    
//         question2: "Question 2?",
//         answers2: ["a", "b", "c", "d"],
//         answer2: "c",
    
   
//         question3: "Question 3?",
//         answers3: ["a", "b", "c", "d"],
//         answer3: "d",

    
//         question4: "Question 4?",
//         answers4: ["a", "b", "c", "d"],
//         answer4: "d",
    
// };
// var btn = document.getElementById("start-btn");
// var questionbox  = document.querySelector("#main-box");
// btn.addEventListener("click" , function(event){
// var element = event.target;
//  questionbox.innerHTML = "";
//  var questionEl = document.createElement("p");
//  var answer1btn = document.createElement("button");

//  questionEl.innerText = "Questrion #1";
// questionbox.appendChild(questionEl);
 
// for (var i = 0; questions.answer1.length< 3; i++){

// }
// });



// var questionsBox = document.createElement("div");
// // var questionOptions = document.createElement("ul")
// questionsBox.textContent = questions[questionIndex].question;
// // questionsBox.textContent = answers[questionIndex].question;
// // document.querySelector("#main-box").appendChild(questionsBox);






// var questionIndex = 0;

// var questions = [
//     {
//         question: "Question #1? ",
//         answers: ["a", "b", "c", "d"],
//         answer: "b"
//     },
//     {
//         question: "Question 2?",
//         answers: ["a", "b", "c", "d"],
//         answer: "c"
//     },
//     {
//         question: "Question 3?",
//         answers: ["a", "b", "c", "d"],
//         answer: "d"
//     },
//     {
//         question: "Question 4?",
//         answers: ["a", "b", "c", "d"],
//         answer: "d"
//     }
// ];




// var btn = document.getElementById("start-btn");
// var questionbox  = document.querySelector("#main-box");
// btn.addEventListener("click" , function(event){
// var element = event.target;
//  questionbox.innerHTML = "";
//  var questionEl = document.createElement("h1");
//  questionEl.innerText = questions[questionIndex].question;
// questionbox.appendChild(questionEl);
 

// for (i=0; i< questions[questionIndex].answers.length; i++) {
  
//     questionEl.innerText = questions[questionIndex].question;
//     console.log(questions[questionIndex].answers[i])
   
   
// }
// });



































// var questionsBox = document.createElement("div");
// // var questionOptions = document.createElement("ul")
// questionsBox.textContent = questions[questionIndex].question;
// // questionsBox.textContent = answers[questionIndex].question;
// // document.querySelector("#main-box").appendChild(questionsBox);
// var score = document.querySelector(".totalScore");
// var rightAnswer = document.querySelector(".right-answer");
// var wrongAnswer1 = document.querySelector(".wrong-answer1");
// var wrongAnswer2 = document.querySelector(".wrong-answer2");
// var wrongAnswer3= document.querySelector(".wrong-answer3");

// rightAnswer.addEventListener("click", function(){
// //    if(rightAnswer.clicked === rightAnswer)
//     alert("thats correct");
//      console.dir(rightAnswer)
//     });

//  var scoreTotal = 0;

// rightAnswer.addEventListener("click", function(){
//         //    if(rightAnswer.clicked === rightAnswer)
            
//              scoreTotal = scoreTotal + 5; 
//                 alert(scoreTotal);
//                 localStorage.setItem("score", JSON(scoretottoString))
//             // rightAnswer.this;
//         //   localStorage.key(1) = scoreTotal;
//         document.getElementsByClassName("score").innerHTML = "TEST";
//             // window.localStorage.setItem("scoreTotal", JSON.stringify(scoreTotal));
//             score.innerHTML =  scoreTotal ;
//             console.log(score)
//             return score;
//         });
           
       
            
// wrongAnswer1.addEventListener("click", function(){
//         //    if(rightAnswer.clicked === rightAnswer)
//             alert("thats wrong");
//              console.dir(rightAnswer)
//             });
// wrongAnswer2.addEventListener("click", function(){
//         //    if(rightAnswer.clicked === rightAnswer)
//             alert("thats wrong");
//              console.dir(rightAnswer)
//             });
// wrongAnswer3.addEventListener("click", function(){
//         //    if(rightAnswer.clicked === rightAnswer)
//             alert("thats wrong");
//              console.dir(rightAnswer)
//             });

//  setInterval();
// var timer = document.querySelector("#countdown")
// var countdown = setInterval(() => {
//     var  timeSeconds = 60;
//     timer.innerHTML= `00: ${timeSeconds}`;  
//     localStorage.setItem("timeSeconds", timeSeconds);
//     timeSeconds = localStorage.getItem("timeSeconds");
//     timeSeconds--;
//     timer.innerHTML = `0: ${timeSeconds}`
//     if (timeSeconds ===0)
//     clearInterval(countdown)
// }, 1000);
 
// console.log(rightAnswer)









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