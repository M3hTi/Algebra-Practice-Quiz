# Quiz JavaScript Code Explanation

## Overview

This JavaScript code implements an interactive quiz with a timer. The quiz presents algebra questions, allows users to input answers, and provides immediate feedback. Here's a step-by-step breakdown of the code:

## Global Error Handling

```javascript
window.addEventListener('error', (event) => {
    event.preventDefault()
    console.log(`Error in ${event.filename} at line ${event.lineno}:${event.colno} message => ${event.message}`);
    return true
})
```

This sets up a global error handler. It logs any JavaScript errors that occur, providing the file name, line number, column number, and error message. This is useful for debugging.

## Main Quiz Function

The main functionality is wrapped in a function called `quiz`:

```javascript
const quiz = function () {
    try {
        // Quiz logic here
    } catch (error) {
        console.log(error);
    }   
}
```

This function is called when the window loads:

```javascript
window.addEventListener('load', quiz)
```

## Variable Declarations

Inside the `quiz` function, several important variables are declared:

```javascript
const startBtn = document.querySelector('.start-button')
let timeID
let time = 90
const timerDisplay = document.querySelector('.timer')
let total = 0
let isStarting = false
```

- `startBtn`: References the start button element
- `timeID`: Will store the interval ID for the timer
- `time`: Initializes the quiz time to 90 seconds
- `timerDisplay`: References the timer display element
- `total`: Will store the total score
- `isStarting`: A flag to indicate if the quiz is in progress

## Correct Answers

The correct answers for the quiz are stored in an object:

```javascript
const correctAnswers = {
    firstAdd: 10,
    firstSub: 4,
    secondAdd: -6,
    secondSub: 5,
    thirdAdd: -7
};
```

## Helper Functions

### validateAndMarkInput

```javascript
const validateAndMarkInput = (input, correctAnswer) => {
    // Logic to validate and mark input
}
```

This function checks if an input is correct and applies appropriate CSS classes.

### calculateScore

```javascript
const calculateScore = function () {
    // Logic to calculate the score
}
```

This function calculates the total score and checks if all questions are answered.

### endQuiz

```javascript
const endQuiz = function() {
    // Logic to end the quiz
}
```

This function is called when the quiz ends, either due to time running out or all questions being answered.

### startQuiz

```javascript
const startQuiz = function () {
    // Logic to start the quiz
}
```

This function initializes the quiz when the start button is clicked.

### timer

```javascript
function timer() {
    // Logic for the countdown timer
}
```

This function handles the countdown timer logic.

### checkCompletion

```javascript
function checkCompletion() {
    // Logic to check if all questions are answered
}
```

This function is called whenever an input changes, checking if the quiz should end.

## Event Listeners

The code sets up event listeners:

1. For the start button:
   ```javascript
   startBtn.addEventListener('click', startQuiz)
   ```

2. For each input field (set up in the `startQuiz` function):
   ```javascript
   input.addEventListener('change', checkCompletion)
   ```

## Key Points to Remember

1. The quiz starts when the "Start Quiz" button is clicked.
2. Users have 90 seconds to complete the quiz.
3. The quiz ends when time runs out or all questions are answered.
4. Correct answers are marked in green, incorrect in red.
5. The score is calculated as a percentage of correct answers.

By understanding these components, you should be able to grasp the overall structure and functionality of the quiz, even after a long break from the code.