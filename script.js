// Here are all the variables that will be required for the test to work
var startEl = document.querySelector("#start");
var quizEl = document.querySelector("#quiz");
var quizQuestionsEl = document.querySelector("#quizQuestions");
var choices = document.querySelector ("#choices");
var liEl = document.querySelector ("#li");
var answerResponseEl = document.querySelector ("#answerResponse");
var h1 = document.getElementById ("h1");
var scoreH1 = document.querySelector ("#scoreH1");
var quizIntroEl = document.querySelector ("#quizIntro");
var scoreInfo = document.querySelector ("#scoreInfo");
var score = 0;
var timeLeft = 80;
// function for the timer
// var timeInterval = setInterval(function () {
//     timeLeft --;
//     document.getElementById("countdown").innerHTML = "Time left: "+ timeLeft;
//     if (timeLeft <=0) {
//       clearInterval(timeinterval);
//       document.getElementById("countdown").innerHTML = "Time out!";
//     }
//   }, 1000);

// start.addEventListener("click", timeInterval);

// This is the var we will be using to contain the questions for the quiz
let quizQuestions = [{
  "question":"Who first designed javaScript?",
  "choices":["Albert Einstein", "Bill Gates", "Steve Jobs", "Brendan Eich"],
  "correctAnswer":"Brendan Eich",
}, {
  "question":"What is the main purpose of javaScript?",
  "choices":["javaScript helps with creating the backbone of the website", "javaScript is used to make create a GPS for a car", "javaScript is usually used to make websites more interactive", "javaScript is usually used to make websites look more colorful and interesting"],
  "correctAnswer":"javaScript is usually used to make websites more interactive",
}, {
  "question":"What would be the correct HTML tag for javascript?",
  "choices":["<script>", "<nav>", "<body>", "<link>"],
  "correctAnswer":"<script>",
}];


// the next function will help with the display of the questions
function displayQuestion () {
  for (i=0; i<quizQuestions.length; i++){
  var q = quizQuestions[i];
  quizQuestionsEl.innerHTML = q.question;
  // var choicesSplit = q2.split (" ");
  var button = document.createElement("button");
  // button.textContent= choicesSplit;
  liEl.appendChild(button);
  choices.setAttribute("style", "block;");
  return;
}}

// This next function will be used to start the quiz
function quizStart () {
  quizIntroEl.setAttribute("style", "display:none;");
  displayQuestion ();
  quizEl.style.display = "block";
}

// This next function will be used to check wether the answer selected by the user is correct or wrong
function answerCheck () {
  if ()
}

// this next function will help with the start of the quiz when the start button has been pressed
startEl.addEventListener ("click", function () { var timeInterval = setInterval (function(){timeLeft --;
  document.getElementById("countdown").innerHTML = "Time left: "+ timeLeft;
  if (timeLeft <=0) {
    clearInterval(timeInterval);
    document.getElementById("countdown").innerHTML = "Time out!";
    alert("timeout");
  }

  },1000);
  quizStart();
});

