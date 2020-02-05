
var question = [
    {
        prompt:"What state do you live in?"\(a)\ California\n\ (b) Florida\n\(c) Texas\n\(d) Washington",)
        answer: "a"
    },
    {
        prompt: "Which team won the superbowl?"\(a)\ Raiders\n\ (b) Cowboys\n\(c) 49ers\n\(d) Patriots",
        answer: "c"
    },
    {
        prompt: "What team did Kobe Bryant played for?"\(a)\ Clippers\n\ (b) Lakers\n\(c) Bulls\n\(d) Nuggets",
        answer: "b"
    },

    {
        prompt: "How old do citizens have to be to vote for President?"\(a)\ 16\n\ (b) 21\n\(c) 19\n\(d) 18",
        answer: "d"
    },
];

var score = 0;

for(var i=0; i <question.length; i++) {
    var reponse = window.prompt(questions[i].prompt);
    if(response == questions[i].answer){
        score++;
        alert("Corret!");
    } else{
        alert ("Wrong!");
    }
}
alert("You got " + score + "/" + questions.length);
 //click the start button
// a timer starts and I am presented with a question

// I answer a question
// I am presented with another question
// I answer a question incorrectly
// time is subtracted from the clock
// all questions are answered or the timer reaches 0
// the game is over
// the game is over
// I can save my initials and score
