var timer = document.getElementById("timer");
var quizRules = document.getElementById("guidelines");
var startButton = document.getElementById("start-btn");
var quizQuestions = document.getElementById("quiz-questions");
var quizAnswers = document.getElementById("quiz-answers");
var currentQuestionIndex = 0;
var timeRemains = 30;
var timerInterval;

var quizContent = [
    {
    frage: "Wie heißt du?",
    wahlen: ["zack", "seth", "mark", "brian"],
    antwort: "zack"
    },

    {
        frage: "Wie alt bist du?",
        wahlen: ["sechszehn", "zwanzig", "zweiunddreißig", "fünfzig"],
        antwort: "zweiunddreißig"
    },

    {
        frage: "Was ist dein Beruf?",
        wahlen: ["Chef", "Dev", "Taxifahrer", "Metzger"]
    }
];

// need to add something to keep quiz invisible before clicking start

// starts the quiz upon clicking
startButton.addEventListener('click', startButton);

function beginQuiz() {
    startButton.style.display = "none";
    intro.style.display = "none";
    quiz.style.display = "visible";
    timerInterval = setInterval(updateTimer, 1000);
    showQuestion();
}

// test function
beginQuiz();