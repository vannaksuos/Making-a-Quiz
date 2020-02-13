var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var choicesElement = document.getElementById('choices-buttons')
let shuffledQuestions, currentQuestionIndex

console.log(startButton.classList);
startButton.addEventListener('click', startGame, countdown,)

function startGame() {
    console.log('Started')
    //add the hide class and it hides the start button
    startButton.classList.add('hide')
    //removing the hide class from the questionContainerElement
   
	  currentQuestionIndex = 0;
    //the questionContainerElement will now show.
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
   
    var seconds = 30, $seconds = document.querySelector('#countdown');
(function countdown() {
    $seconds.textContent = seconds + ' second' + (seconds == 1 ?  '' :  's')
    if(seconds --> 0) setTimeout(countdown, 1000);
    if(seconds < 0) {
      alert("Time is up");
    }
})();
//we need the buttons on the answer to work
// when answer it will be correct or incorrect
// we need to store the answer 
//we need it to go to the next question with new muliple answers answers

}

function setNextQuestion(){
    resetState()
  // showQuestion()
}
    
//function showQuestion(){

  //change the text of the question div from "Question" to whatever Question we have 
  // questionElement.textContent = 
  //console.log(questions[0])
  // cahnge the text of our answer buttons with our answers.





    // questionContainerElement.innerText = question.question
  //   question.question.forEach(function(answer) {
  //     var button = document.createElement.apply('button')
  //     button.innerText =answer.innerText
  //     button.classList.add('btn')
  //   if (answer.correct) {
  //     button.dataset.correct = answer.correct
  //   }
  // button.addEventListener('click', selectAnswer)
  // choicesButtonsElement.appendChild(button)  
  // })



  
function resetState() {
  //hides the nextButton
//  nextButton.classList.add('hide')
}

// function setStatusClass(element, correct) {
//   clearStatusClass(element)
//   if (correct) {
//     element.classList.add('correct')
//   } 
//   else {
//     element.classList.add('wrong')
//   }
// }

// function clearStatusClass(element) {
//   element.classList.remove("correct")
//   element.clearStatusClass.remove('wrong')
// }

// function selectAnswer(e){
//   var selectButton = e.target
//   var correct = selectButton.dataset.correct
//   setStatusClass(document.body, correct)
//   Array.from(choicesButtonsElement.children).forEach(button => {
//     setStatusClass(button, button.dataset.correct)
//   })
// }

var questions = [
    {
      question: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      question: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      question: "Arrays in JavaScript can be used to store ____.",
      choices: ["numbers and strings",
        "other arrays",
        "booleans",
        "all of the above"
      ],
      answer: "all of the above"
    },
    {
      question:
        "String values must be enclosed within ____ when being assigned to variables.",
      choices: ["commas", "curly brackets", "quotes", "parentheses"],
      answer: "quotes"
    },
    {
      question:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
      answer: "console.log"
    }
]