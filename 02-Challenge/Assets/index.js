//creat an object array of questions
const questions=[
{
    question:"Which color is NOT in the rainbow?",
    answer1 :"Orange",
    answer2 :"Indigo",
    answer3 :"White",
    answer4 :"Red",
    answerC :"White",
},
{ 
   question : "What is the Netherlands national color?",
    answer1 :"Blue",
    answer2 :"Orange",
    answer3 :"White",
    answer4 :"Green",
    answerC :"Orange",
},
{
    question : "What is Scotands national animal?",
    answer1 : "Unicorn",
    answer2 : "Golfer",
    answer3 : "Shepard",
    answer4 : "Rabbit",
    answerC : "unicorn",
},
{
    question:"Which team has won the most Chmapions League titles?",
    answer1:"Barcelona",
    answer2:"Ajax",
    answer3:"Real Madrid",
    answer4:"Liverpool",
    answerC:"Real Madrid",
}
];
//answer C is the correct answer, use this to comapre for cycling through

// Selects element by class
var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");

var secondsLeft = 10;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      endScreen();
    }

  }, 1000);
}

// Function to create and append colorsplosion image
function endScreen() {
//make end screen

}

setTime();