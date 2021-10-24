       
const countdownEl = document.getElementById('countdown');
document.getElementById("start-btn").addEventListener("click", function() {
document.getElementById("demo2").innerHTML = "Start button"});
document.getElementById("quit"  ).addEventListener("click", function() {
document.getElementById("demo2").innerHTML = "Quit Button"});
var btn = document.getElementById("start-btn");
containerquestion-box







var substracTime = function(){




};
// const startTimer = 1;
let time = 60;
setInterval(updateMinutes, 1000)
function updateMinutes(){
const minutes = Math.floor(time / 60);
let seconds = time;
countdownEl.innerHTML = `${seconds}`;

//time--;
clearInterval (seconds);
}
  


function ativateTimer(){
}
    // let btn = document.createElement("button");

    //     btn.innerHTML = "Save";
    //     btn.onclick = function () {
    //         back
    //       console.log("Button is clicked");
    //     };
    //     document.body.appendChild(btn);//

    