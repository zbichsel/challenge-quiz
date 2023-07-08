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

// function shows questions
function beginQuestions() {
    var quizState = quizContent[currentQuestionIndex];
    quizQuestions.innerHTML = `${currentQuestionIndex + 1}. ${quizState.frage}`;
    quizAnswers.innerHTML = "";
    for (var i = 0; i < quizState.wahlen.length; i++) {
        var createLi = document.createElement("li");
        var option = document.createElement("button");
        option.textContent = quizState.wahlen[i];
        // need to create checkAnswer function
        option.addEventListener('click', () => checkAnswer(i));
        createLi.appendChild(option);
        quizAnswers.appendChild(option);
    }
}

// test function
beginQuestions();

// function checks answer
function checkAnswer(answerIndex) {
    var quizState = quizContent[currentQuestionIndex];
    if (quizState.wahlen[answerIndex] === quizState.antwort) {
        score++;
        console.log("Score = " + score);
        console.log("Selected choice: ", quizState.wahlen[answerIndex]);
        console.log("Correct Answer: ", quizState.antwort);
    } else {
        timeRemains -= 15;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizContent.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}