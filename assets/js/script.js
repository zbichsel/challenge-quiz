var timer = document.getElementById("timer");
var quizRules = document.getElementById("guidelines");
var startButton = document.getElementById("start-btn");
var quizQuestions = document.getElementById("quiz-questions");
var quizAnswers = document.getElementById("quiz-answers");
var initialHere = document.getElementById("initials");
var saveButton = document.getElementById("saveBtn");
var resetButton = document.getElementById("resetBtn");
var currentQuestionIndex = 0;
var timeRemains = 11;
var score = 0;
var timerInterval;

containQuiz.style.visibility = "hidden";
quizResults.style.visibility = "hidden";

var quizContent = [
    {
        frage: "Inside which HTML element do we put the JavaScript?",
        wahlen: ["<scripting>", "<javascript>", "<js>", "<script>"],
        antwort: "<script>"
    },

    {
        frage: "Where is the correct place to insert a JavaScript?",
        wahlen: ["Both the <head> section and the <body> section are correct", "The <head> section", "The <body> section", "None of the above"],
        antwort: "The <body> section"
    },

    {
        frage: "How do you write Hello World in an alert box?",
        wahlen: ["msgBox", "msg", "alertBox", "alert"],
        antwort: "alert"
    },

    {
        frage: "JavaScript is what kind of language?",
        wahlen: ["Object-Oriented", "Object-Based", "Procedural", "None of the above"],
        antwort: "Object-Oriented"
    },

    {
        frage: "How do we declare a constant?",
        wahlen: ["var", "let", "const", "null"],
        antwort: "const"
    },

    {
        frage: "What goes at the end when we declare variables?",
        wahlen: ["period", "colon", "semi-colon", "comma"],
        antwort: "semi-colon"
    },

    {
        frage: "How do we add comments in JavaScript?",
        wahlen: ["<!--This is a comment-->", "//This is a comment", "'This is a comment", "None of the above"],
        antwort: "//This is a comment"
    },

    {
        frage: "Which event occurs when the user clicks on an HTML element?",
        wahlen: ["onclick", "onmouseclick", "onmouseover", "onchange"],
        antwort: "onclick"
    },

    {
        frage: "How do we declare a JavaScript variable?",
        wahlen: ["v carName;", "var carName;", "variable carName;", "None of the above"],
        antwort: "var carName;"
    },

    {
        frage: "Which operator is used to assign a value to a variable?",
        wahlen: ["=", "-", "*", "x"],
        antwort: "="
    }
];

// need to add something to keep quiz invisible before clicking start

// starts the quiz upon clicking
startButton.addEventListener('click', beginQuiz);

function beginQuiz() {
    startButton.style.display = "none";
    intro.style.display = "none";
    containQuiz.style.visibility = "visible";
    timerInterval = setInterval(updateTimer, 900);
    beginQuestions();
};

// test function
// beginQuiz();

// function shows questions
function beginQuestions() {
    var quizState = quizContent[currentQuestionIndex];
    quizQuestions.innerHTML = `${currentQuestionIndex + 1}. ${quizState.frage}`;
    quizAnswers.innerHTML = "";
    for (let i = 0; i < quizState.wahlen.length; i++) {
        var createLi = document.createElement("li");
        var option = document.createElement("button");
        option.textContent = quizState.wahlen[i];
        // need to create checkAnswer function
        option.addEventListener("click", () => checkAnswer(i));
        createLi.appendChild(option);
        quizAnswers.appendChild(option);
    }
};

// test function
// beginQuestions();

// function checks answer
function checkAnswer(answerIndex) {
    var quizState = quizContent[currentQuestionIndex];
    if (quizState.wahlen[answerIndex] === quizState.antwort) {
        score++;
        console.log(score);
        console.log("Selected choice: ", quizState.wahlen[answerIndex]);
        console.log("Correct Answer: ", quizState.antwort);
        console.log("Correct!");
        updateTimer();
    } else {
        console.log("Selected choice: ", quizState.wahlen[answerIndex]);
        console.log("Correct Answer: ", quizState.antwort);
        console.log("Wrong!");
    //     timeRemains-= 0;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizContent.length) {
        beginQuestions();
        timeRemains = 11;
    } else {
        endQuiz();
    }
};

// test function
// checkAnswer();

// create timer function
function updateTimer() {
    timeRemains--;
    if (timeRemains <= 0) {
        endQuiz();
    }
    timer.textContent = `Time: ${timeRemains} seconds`;
};

// test function
// updateTimer();

// create endQuiz function
function endQuiz() {
    clearInterval(timerInterval);
    // change quiz display to "none" before submitting assignment
    quiz.style.display = "none";
    timer.style.display = "visible";

    var message = document.createElement('h3');
    var scoreNum = document.createElement('h4');
    message.textContent = `You finished!`;
    scoreNum.textContent = `Your final score is ${score}0!`;
    containQuiz.appendChild(message);
    containQuiz.appendChild(scoreNum);

    scoreSaver()
};

function scoreSaver() {
    var initials = initialHere.value;
    var highScores = JSON.parse(localStorage.getItem("highscores")) || [];
    var newScore = { score, initials };
    highScores.push(newScore);
    localStorage.setItem("highScores", JSON.stringify(highScores));

}

function showHighScores() {
    statusContainerElement.style.display = "none";
}
// test function
// endQuiz();

// beginQuiz();