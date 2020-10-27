// Here are all the variables that will be required for the test to work
var startEl = document.querySelector("#start");
var quizEl = document.querySelector("#quiz");
var quizQuestionsEl = document.querySelector("#quizQuestions");
var choices = document.querySelector ("#choices");
var answerResponseEl = document.querySelector ("#answerResponse");
var h1 = document.getElementById ("h1");
var scoreH1 = document.querySelector ("#scoreH1");
var quizIntroEl = document.querySelector ("#quizIntro");
var scoreInfo = document.querySelector ("#scoreInfo");
var answerValue = document.querySelector("#answer");
var optionA = document.querySelector("#choiceA");
var optionB = document.querySelector("#choiceB");
var optionC = document.querySelector("#choiceC");
var optionD = document.querySelector("#choiceD");
var timeLeft = 80;

// This is the var we will be using to contain the questions for the quiz
let quizQuestions = [{
  question:"Who first designed javaScript?",
  choiceA:"Albert Einstein",
  choiceB:"Bill Gates",
  choiceC:"Steve Jobs",
  choiceD:"Brendan Eich",
  correctAnswer:"D"
}, {
  question:"What is the main purpose of javaScript?",
  choiceA:"javaScript helps with creating the backbone of the website",
  choiceB:"javaScript is used to make create a GPS for a car",
  choiceC:"javaScript is usually used to make websites more interactive",
  choiceD:"javaScript is usually used to make websites look more colorful and interesting",
  correctAnswer:"C",
}, {
  question:"What would be the correct HTML tag for javascript?",
  choiceA:"script",
  choiceB:"nav",
  choiceC:"body",
  choiceD:"link",
  correctAnswer:"A"
},];
// this function will be used later
var  questionIndex=0;
// the next function will help with the display of the questions
function displayQuestion () {
  var q = quizQuestions[questionIndex];
    quizQuestionsEl.innerHTML = q.question;
    optionA.innerHTML = q.choiceA;
    optionB.innerHTML = q.choiceB;
    optionC.innerHTML = q.choiceC;
    optionD.innerHTML = q.choiceD;
    quizEl.style.display = "block";
  return;
}


// This next function will be used to start the quiz
function quizStart () {
  quizIntroEl.setAttribute("style", "display:none;");
  displayQuestion ();
  quizEl.style.display = "block";
}

// this next function will be used to check if the user clicked on the correct answer
function answerCheck(answer) {
  if (questionIndex < quizQuestions.length - 1) {
    if (answer == quizQuestions[questionIndex].correctAnswer) {
        questionIndex++;
        alert("Correct!");
        answerValue.style.display = "block";
        setTimeout(displayQuestion,1000);
    }
    else {
        timeLeft -5;
        questionIndex++;
        alert ('Wrong!');
        answerValue.style.display = "block";
        setTimeout(displayQuestion,1000);
    }
}
else {
    if (answer == quizQuestions[questionIndex].correctAnswer) {
        answerValue.innerHTML= "Correct!"
        answerValue.style.display = "block";
        setTimeout(displayQuestion,1000);
    }
    else {
      answerValue.innerHTML= "Wrong!"
      answerValue.style.display = "block";
      setTimeout(displayQuestion,1000);
    }
}
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
  // answerCheck();
});

