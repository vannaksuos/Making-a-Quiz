var currentQuestion = 0;
var score = 0;
var totQuestions = question.length;

var container = document.getElementById("quizContainer");
var questionEl = document.getElementById("question");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");

var nextButton = document.getElementById("nextButton");
var resultCont = document.getElementById("result");




alert("You have 60 seconds to take this multiple choice quiz, if you answered incorrectly you will lose 5 seconds off your timer. Press ok when you are ready")

function loadQuestion (questionIndex){
    var q = question[questionIndex];
    questionEl.textContent = (questionIndex + 1) + "- " + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
};

function loadNextQuestion (){
    var selectOption = document.querySelector("input[type=radio]:checked");
    if(!selectOption){
        alert("Please Choose an Answer!");
        return;
    }
    var answer = selectOption.value;
    if(question[currentQuestion].answer == answer){
        score +=10;
    }
    selectOption.checked = false;
    currentQuestion++;
    if(currentQuestion == totQuestions - 1){
        nextButton.textContent= 'Finish';
    }
    if(currentQuestion == totQuestions){
        container.style.display = "none";
        resultCont.style.display = "";
        resultCont.textContent = "Your Score:" + score;
        return;
    }
    loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);
var seconds = 60, $seconds = document.querySelector('#countdown');
(function countdown() {
  $seconds.textContent = seconds + ' second' + (seconds == 1 ?  '' :  's')
  if(seconds --> 0) setTimeout(countdown, 1000);
  if(seconds < 0) {
    alert("Time is up");
  }
})();

