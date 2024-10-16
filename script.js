window.addEventListener('error', (event) => {
    event.preventDefault()
    console.log(`Error in ${event.filename} at line ${event.lineno}:${event.colno} message => ${event.message}`);
    return true
})


const quiz = function () {
    try {
        const startBtn = document.querySelector('.start-button')
        let timeID
        let time = 90
        const timerDisplay = document.querySelector('.timer')
        let total = 0


        let isStarting = false;
        

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
               return false
            }
    
            const parsedValue = parseFloat(value);
            const isCorrect = parsedValue === correctAnswer;
            input.classList.add(isCorrect ? 'correct': 'incorrect');
            return isCorrect;
        };
    
        const calculateScore = function () {
            let allAnswered = true;
            total = 0
            const inputs = document.querySelectorAll('input')
            // console.log(inputs);
            inputs.forEach(input => {
                const info = input.dataset.info
                if (info in correctAnswers) {
                    if (input.value.trim() === '') {
                        allAnswered = false;
                    }else if (validateAndMarkInput(input, correctAnswers[info])) {
                        total += 20; // 20% for each correct answer
                    }
                } else {
                    console.log(`Unknown input type: ${info}`);
                }                   
            })
            return { score: total, allAnswered: allAnswered };
        }

        const endQuiz = function() {
            clearInterval(timeID);
            isStarting = false;
            startBtn.textContent = 'Start Quiz';
            const { score } = calculateScore();
            window.alert(`Quiz ended! You managed to answer ${score}% of the questions correctly`);
        };



        const startQuiz = function () {
            if(!isStarting){
                isStarting = true
                startBtn.textContent = 'Quiz in Progress'
                time = 90
                timerDisplay.textContent = time;
                const inputs = document.querySelectorAll('input');
                inputs.forEach(input => {
                    input.value = ''; // Clear inputs
                    input.classList.remove('correct', 'incorrect'); // Remove previous markings
                    input.addEventListener('change', checkCompletion); // Add input listener
                });
                timer()
            }
        }

        // timer

        function timer() {
            timeID = setInterval(() =>{
                time--
                timerDisplay.textContent = time
                if(time <= 0){
                    endQuiz()
                }
            },1000)            
        }
        
        function checkCompletion() {
            if (isStarting) {
                const { allAnswered } = calculateScore();
                if (allAnswered) {
                    endQuiz();
                }
            }
        }

        startBtn.addEventListener('click', startQuiz)
        
    } catch (error) {
        console.log(error);
        
    }   
}






window.addEventListener('load', quiz)