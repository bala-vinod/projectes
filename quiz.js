// script.js

const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: 2
    },
    {
        question: "Which is the largest planet in our solar system?",
        options: ["Earth", "Jupiter", "Saturn", "Mars"],
        correctAnswer: 1
    },
    {
        question: "Which programming language is used for web development?",
        options: ["C", "Java", "JavaScript", "Python"],
        correctAnswer: 2
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionData = questions[currentQuestionIndex];
    document.getElementById("question").innerText = questionData.question;
    document.getElementById("option1").innerText = questionData.options[0];
    document.getElementById("option2").innerText = questionData.options[1];
    document.getElementById("option3").innerText = questionData.options[2];
    document.getElementById("option4").innerText = questionData.options[3];
    document.getElementById("nextBtn").disabled = true; // Disable next button initially
}

function checkAnswer(selectedOption) {
    const questionData = questions[currentQuestionIndex];
    if (selectedOption === questionData.correctAnswer) {
        score++;
    }
    document.getElementById("nextBtn").disabled = false; // Enable next button after an answer is selected
}

function showResult() {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("score").innerText = score; // Display the final score
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("quiz-container").style.display = "block";
    document.getElementById("result").style.display = "none";
    loadQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

document.getElementById("option1").addEventListener("click", () => checkAnswer(0));
document.getElementById("option2").addEventListener("click", () => checkAnswer(1));
document.getElementById("option3").addEventListener("click", () => checkAnswer(2));
document.getElementById("option4").addEventListener("click", () => checkAnswer(3));

document.getElementById("nextBtn").addEventListener("click", nextQuestion);

loadQuestion();
