var QandA = [
  {
    question: "What are NOT some commonly used data types?",
    correctAnswer: "Alert",
    options: ["Boolean", "Number", "Alert", "String"],
  },
  {
    question: "Arrays in javascript can be used to store?",
    correctAnswer: "All of the above",
    options: ["Other arrays", "Boolean", "Curly brackets", "All of the above"],
  },
  {
    question: "What is the extension of compiled java classes?",
    correctAnswer: ".class",
    options: [".txt", ".js", ".class", ".java"],
  },
  {
    question: "Which of these cannot be used for a variable name in Java?",
    correctAnswer: "Keyword",
    options: [
      "Identifier & keyword",
      "Identifier",
      "Keyword",
      "None of the above",
    ],
  },
];
var answerOneEl = document.getElementById("answerOne");
var answerTwoEl = document.getElementById("answerTwo");
var answerThreeEl = document.getElementById("answerThree");
var answerFourEl = document.getElementById("answerFour");
var timeEl = document.getElementById("timeCount");
var gameOverEl = document.getElementById("gameOver");
var titlePageEl = document.getElementById("titlePage");
var startQuizBtn = document.getElementById("startQuizBtn");
var questionAndAnswerEl = document.getElementById("questionAndAnswer");
var questionEl = document.getElementById("question");
var answersEl = document.getElementById("answers");
var scoreEl = document.getElementById("score");
var initialsEl = document.getElementById("initials");
var secondsLeft = 20;
var numOfQuestions = QandA.length;
var questionIndex = 0;
var currentScore = 0;
var timerInterval;
var highScore;

startQuizBtn.addEventListener("click", startQuiz);

function setTime() {
  timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.innerHTML = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);

      endGame();
    }
  }, 1000);
}

function endGame() {
  scoreEl.innerHTML = currentScore;
  gameOverEl.classList.replace("hidden", "visible");
  questionAndAnswerEl.classList.replace("visible", "hidden");
  if (secondsLeft !== 0) {
    clearInterval(timerInterval);
  }
}
function saveScore() {
  localStorage.setItem(initialsEl.value + " score", currentScore);
}

function updateQuestion() {
  questionEl.innerHTML = QandA[questionIndex].question;
  answerOneEl.innerHTML = QandA[questionIndex].options[0];
  answerTwoEl.innerHTML = QandA[questionIndex].options[1];
  answerThreeEl.innerHTML = QandA[questionIndex].options[2];
  answerFourEl.innerHTML = QandA[questionIndex].options[3];
}

function selectAnswer(event) {
  console.log(event);
  var correctAnswer = QandA[questionIndex].correctAnswer;
  var selectedAnswer = event.srcElement.innerHTML;

  if (selectedAnswer === correctAnswer) {
    currentScore++;
  }
  questionIndex++;

  if (QandA.length === questionIndex) {
    endGame();
  } else {
    updateQuestion();
  }
}

function startQuiz() {
  titlePageEl.classList.replace("visible", "hidden");
  questionIndex = 0;
  updateQuestion();
  questionAndAnswerEl.classList.replace("hidden", "visible");
  setTime();
}
