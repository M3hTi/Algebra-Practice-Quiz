window.addEventListener('error', (event) => {
    event.preventDefault()
    console.log(`Error in ${event.filename} at line ${event.lineno}:${event.colno} message => ${event.message}`);
    return true
})


const quiz = function () {
    try {
        const startBtn = document.querySelector('.start-button')


        const correctAnswers = {
            firstAdd: 10,
            firstSub: 4,
            secondAdd: -6,
            secondSub: 5,
            thirdAdd: -7
        };
    
        const validateAndMarkInput = (input, correctAnswer) => {
            const value = input.value.trim();
            input.classList.remove('correct', 'incorrect');
            
            if (value === '') {
                console.log(`Empty input for ${input.dataset.info}`);
                input.classList.add('incorrect');
            }
    
            const parsedValue = parseFloat(value);
            const isCorrect = parsedValue === correctAnswer;
            input.classList.add(isCorrect ? 'correct': 'incorrect');
            return isCorrect;
        };
    
        const startQuiz = function () {
            let total = 0
            const inputs = document.querySelectorAll('input')
            console.log(inputs);
            inputs.forEach(input => {
                const info = input.dataset.info
                if (info in correctAnswers) {
                    validateAndMarkInput(input, correctAnswers[info]);
                    if (validateAndMarkInput(input, correctAnswers[info])) {
                        total += 20; // 20% for each correct answer
                    }
                } else {
                    console.log(`Unknown input type: ${info}`);
                }                   
            })
            window.alert(`You managed to answer ${total}% of the questions correctly`);
        }

        const totalScore = (input, correctAnswer) => {
            const value = input.value.trim();
            const parsedValue = parseFloat(value);
            if (parsedValue === correctAnswer) {
                total += 20;
            }
        }

        startBtn.addEventListener('click', startQuiz)
        
    } catch (error) {
        console.log(error);
        
    }   
}






window.addEventListener('load', quiz)