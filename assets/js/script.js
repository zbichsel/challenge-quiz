var timer = document.getElementById("timer");
var quizRules = document.getElementById("guidelines");
var startButton = document.getElementById("start-btn");
var quizQuestions = document.getElementById("quiz-questions");
var quizAnswers = document.getElementById("quiz-answers");
var currentQuestionIndex = 0;
var timeRemains = 11;
var score = 0;
var timerInterval;

containQuiz.style.visibility = "hidden";

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
        wahlen: ["Chef", "Dev", "Taxifahrer", "Metzger"],
        antwort: "Dev"
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
    quiz.style.display = "visible";
    timer.style.display = "visible";

    var message = document.createElement('h2');
    var scoreNum = document.createElement('h4');
    message.textContent = `You finished`;
    scoreNum.textContent = `Your final score is ${score + 7}0`;
    containQuiz.appendChild(message);
    containQuiz.appendChild(scoreNum);

    var initials = document.createElement('input');
    initials.placeholder = "Write your initials here";
    containQuiz.appendChild(initials);

    var submitBtn = document.createElement('button');
    submitBtn.setAttribute("id", "submitBtn");
    submitBtn.innerText = "Submit";
    containQuiz.appendChild(submitBtn);

    resetBtn = document.createElement('button');
    resetBtn.setAttribute("id", "resetBtn");
    resetBtn.innerText = "Reset Game";
    containQuiz.appendChild(resetBtn);
};

// test function
// endQuiz();

// beginQuiz();