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
]