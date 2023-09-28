# Quize-App

This is a simple quiz game implemented in JavaScript. It displays a series of questions with multiple-choice answers, keeps track of the player's score, and allows the player to progress through the questions.

## How to Use

1. Clone or download this repository to your local machine.

2. Open the `index.html` file in your web browser to start the quiz.

3. Click on the answer choices for each question. The correct answer(s) will be highlighted in green, and your score will be updated.

4. Click the "Next" button to move to the next question.

5. After answering all the questions, your final score will be displayed.

6. You can choose to play again by clicking the "Play Again" button.

## Project Structure

- `index.html`: The HTML file for the quiz game interface.
- `style.css`: The CSS file for styling the quiz interface.
- `script.js`: The JavaScript file containing the quiz logic.
- `README.md`: This README file providing instructions and information about the project.

## Customizing Questions

You can customize the questions and answers by editing the `script.js` file. The `questions` array in the script contains the quiz data.

```javascript
const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue whale", correct: true },
            // Add more answer choices here if needed
        ]
    },
    // Add more questions here
];
