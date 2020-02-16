var currentQuestion = 0;
var score = 0;
var totQuestions = question.length;
var startButton = document.getElementById('start-btn')
var container = document.getElementById("quizContainer");
var questionEl = document.getElementById("question");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");

var nextButton = document.getElementById("nextButton");
var resultCont = document.getElementById("result");

console.log(startButton.classList);
startButton.addEventListener('click', startGame, countdown,)

alert("Heres is a 60 seconds multiple choice quiz. If you answer incorrectly you will lose 5 seconds off your time, PRESS START when you are ready" )
function startGame() {
    console.log('Started')
    
    startButton.classList.add('hide')
   
	currentQuestionIndex = 0;
    
    quizContainer.classList.remove('hide')
    setNextQuestion()
   
    var seconds = 60, $seconds = document.querySelector('#countdown');
    (function countdown() {
    $seconds.textContent = seconds + ' second' + (seconds == 1 ?  '' :  's')
    if(seconds --> 0) setTimeout(countdown, 1000);
    if(seconds < 0) {
      alert("Time is up");
    }
})();
}

function setNextQuestion(){
 
}
    
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
        alert("Please select an Answer!");
        return;
    }
    var answer = selectOption.value;
    if(question[currentQuestion].answer == answer){
        score +=25;
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


// need to work on timer where it dont start right away, but when you hit the start button
