const questions = [
    { question: "What is your favorite color?", answer: "blue" },
    { question: "What is your favorite food?", answer: "pizza" },
    { question: "What is your favorite movie?", answer: "inception" },
];

let currentQuestionIndex = 0;

function checkAnswer() {
    const answer = document.getElementById("answer").value.toLowerCase();
    const message = document.getElementById("message");

    if (answer === questions[currentQuestionIndex].answer) {
        message.textContent = "Correct! 🎉";
        currentQuestionIndex++;
        document.getElementById("answer").value = "";

        if (currentQuestionIndex < questions.length) {
            document.getElementById("question").textContent = questions[currentQuestionIndex].question;
        } else {
            message.textContent = "All answers correct! Here’s your letter! ❤️";
            showLetter();
        }
    } else {
        message.textContent = "Try again! ❌";
    }
}

function showLetter() {
    document.getElementById("quiz").style.display = "none";
    const letterContainer = document.getElementById("letter");
    letterContainer.style.display = "block";
    letterContainer.style.opacity = "1"; // Show letter
}

// Show first question on load
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("question").textContent = questions[currentQuestionIndex].question;
    document.getElementById("quiz").style.opacity = "1"; // Fade in quiz
});

// Confetti animation (optional)
function createConfetti() {
    const confetti = document.getElementById("confetti");
    confetti.style.display = "block";

    for (let i = 0; i < 100; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDelay = `${Math.random() * 5}s`;
        confetti.appendChild(heart);
    }
}

// Trigger confetti when the letter is shown
document.getElementById("letter").addEventListener("animationend", createConfetti);
