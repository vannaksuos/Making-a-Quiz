// currentQuestion is the first question in my question index
var currentQuestion = 0;

// totQuestions = question.length is the length of my question
var totQuestions = question.length;
// startButton is and button element 
var startButton = document.getElementById("start-btn")
// container is my container for my quiz for question and answers, everything in the container
var container = document.getElementById("quizContainer");
//questionEl is my question from my question.js
var questionEl = document.getElementById("question");
// opt 1 thru 4 is my opt elements from my html page
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");
// var seconds is my seconds in my countdown
var seconds = 60
// var nextButton is my next button element
var nextButton = document.getElementById("nextButton");
//resultCont is my result element
var resultCont = document.getElementById("result");


console.log(startButton.classList);
startButton.addEventListener('click', startGame, countdown,)


alert("Heres is a 60 seconds multiple choice quiz. If you answer incorrectly you will lose 5 seconds off your time. Your time left will be your score. PRESS START when you are ready" )

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
        resultCont.textContent = "Game Over! Your Score: " + seconds;
        return;
   }
})();
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
        // alert("Please select an Answer!");
        return;
    }
    var answer = selectOption.value;
    if (question[currentQuestion].answer == answer) {
        
    }
    else {
        seconds -=4;
        
    }

    selectOption.checked = false;
    currentQuestion++;
    if(currentQuestion == totQuestions - 1){
        nextButton.textContent= 'Finish';
    }
    if(currentQuestion == totQuestions){
        container.style.display = "none";
        resultCont.style.display = "";
        resultCont.textContent = "Game Over! Your Score: " + seconds;
        return;
    }

    loadQuestion(currentQuestion);
    
}
    loadQuestion(currentQuestion);

    // need high scores storages from local storage and an input for initials at the end of quiz
