var currentQuestion = 0;
var score = 0;
var totQuestions = question.length;
var startButton = document.getElementById("start-btn")
var container = document.getElementById("quizContainer");
var questionEl = document.getElementById("question");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");
var seconds = 40
var nextButton = document.getElementById("nextButton");
var resultCont = document.getElementById("result");


console.log(startButton.classList);
startButton.addEventListener('click', startGame, countdown,)


alert("Heres is a 40 seconds multiple choice quiz. If you answer incorrectly you will lose 5 seconds off your time, for every Correct answers you will earn 25 points. PRESS START when you are ready" )

function startGame() {
    console.log('Started')
    
    startButton.classList.add('hidden')
   
	currentQuestionIndex = 0;
    
    container.classList.remove('hidden')
   
    $seconds = document.querySelector('#countdown');
    (function countdown() {
    $seconds.textContent = seconds + ' second' + (seconds == 1 ?  '' :  's')
    if(seconds --> 0) setTimeout(countdown, 1000);
    if(seconds < 0) {
        container.style.display = "none";
        resultCont.style.display = "";
        resultCont.textContent = "Game Over! Your Score: " + score;
        return;
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
    if (question[currentQuestion].answer == answer) {
        score += 25;
        alert("Correct!")
    }
    else {
        seconds -=4;
        alert("WRONG!")
    }

    selectOption.checked = false;
    currentQuestion++;
    if(currentQuestion == totQuestions - 1){
        nextButton.textContent= 'Finish';
    }
    if(currentQuestion == totQuestions){
        container.style.display = "none";
        resultCont.style.display = "";
        resultCont.textContent = "Game Over! Your Score: " + score;
        return;
    }

    loadQuestion(currentQuestion);
}
    loadQuestion(currentQuestion);

    // need high scores storages from local storage and an input for initials at the end of quiz