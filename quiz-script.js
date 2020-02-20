// currentQuestion is the first question in my question index which will load at beginning and a reference to where to start on my function
var currentQuestion = 0;
// totQuestions is how many question I have
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
// var nextButton is my next button element that will get me to my next question and answers
var nextButton = document.getElementById("nextButton");
//resultCont is my result element
var resultCont = document.getElementById("result");



startButton.addEventListener('click', startGame, countdown,)


var initials = prompt("Heres is a 60 seconds multiple choice quiz. If you answer incorrectly you will lose 5 seconds off your time. Your time left will be your score, PLEASE INPUT YOUR INITIALS or Your NAME. PRESS START when you are ready")


function startGame() {
    
    
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
        resultCont.textContent = "Game Over!";
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
       alert("CORRECT!")
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
        resultCont.textContent = "Game Over! " + initials + " Your Score is " + seconds + " points"; 
        return;
    }

    loadQuestion(currentQuestion);
    
}
    loadQuestion(currentQuestion);

    
