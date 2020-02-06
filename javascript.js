var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var choicesElement = document.getElementById('choices-buttons')

// var countDownTimer;
//Set the end date for the timer.
//Make the timer function update every second.
//Calculate the remaining time in days, hours, minutes, and seconds.
//Display the output to users.
//Display a message when the timer is over.
//Implementation.

console.log(startButton.classList);

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('Started')
    //add the hide class and it hides the start button
    startButton.classList.add('hide')
    //removing the hide class from the questionContainerElement
    //the questionContainerElement will now show.
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion(){
    resetState()
    showQuestion()
}
    
function showQuestion(){
  //change the text of the question div from "Question" to whatever Question we have 
  // questionElement.textContent = 
  console.log(questions[0])
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

}

  
function resetState() {
  //hides the nextButton
  nextButton.classList.add('hide')
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