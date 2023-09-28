// Define an array of objects, each representing a question with its possible answers.
const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            { text: "Asia", correct: false },
            { text: "Australia", correct: true },
            { text: "Arctic", correct: false },
            { text: "Africa", correct: false },
        ]
    },
    // Repeat this structure for additional questions.
];

// Get references to HTML elements by their IDs.
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

// Initialize variables to keep track of the current question index and the player's score.
let currentQuestionIndex = 0;
let score = 0;

// Function to start the quiz and reset variables.
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

// Function to display the current question and its answer choices.
function showQuestion() {
    resetState();

    // Get the current question object.
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;

    // Display the question text.
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    // Loop through the answer choices and create buttons for each.
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        // Store information about whether the answer is correct in the button's data attribute.
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

        // Add a click event listener to each answer button.
        button.addEventListener("click", selectAnswer);
    });
}

// Function to reset the state by hiding the "Next" button and clearing answer buttons.
function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// Function to handle the selection of an answer.
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++; // Increase the score if the answer is correct.
    } else {
        selectedBtn.classList.add("incorrect");
    }

    // Disable all answer buttons and highlight the correct answer(s).
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true")
            button.classList.add("correct");
        button.disabled = true;
    });

    nextButton.style.display = "block"; // Show the "Next" button.
}

// Function to display the final score and allow the player to play again.
function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

// Function to handle the "Next" button click.
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(); // Display the next question.
    } else {
        showScore(); // Show the final score when all questions are answered.
    }
}

// Add a click event listener to the "Next" button.
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz(); // Restart the quiz if the player chooses to play again.
    }
});

// Start the quiz when the page loads.
startQuiz();
