/**
 *  Code based on Youtube tutorial 'Build a Quiz App with JavaScript'by WebDev Simplified - coded along, 
 * please see the link in Readme file 
 * */

const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

/**
 * Starts the game when start button's clicked, questions are shuffled and a question gets set
 */

function startGame() {
    console.log('Started');
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

/**
 * Sets the next question to be displayed when next button's pressed
 */

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

/**
 * Displays question and enables the buttons to indicate correct or incorrect answers 
 */

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener ('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

/**
 * Enables the next button to reset the question area to display the next question
 */

function resetState() {
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

/**
 * Enables the score being taken while the next question is being
 * selected from the array, if no more questions, Next button turns
 * into Let's play again so the user can restart the game
 */

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.querySelector("#score"), correct);   //My code
    if (correct) {                                              //My code
        incrementScore();                                        // My code
    } else {                                                    // My code
        incrementWrongAnswer();                                  // My code
    }                                                           // My code  
    setStatusClass(document.querySelector("#game-area"), correct);           
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestions.length > currentQuestionIndex +1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = "Let's play again!";            // My own content
        startButton.classList.remove('hide');
    }
}

/**
 * Determines whether the correct answer button 
 * has been selected by the user
 */

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

/**
 * Clears the action - 
 * whether correct or incorrect answer has been selected
 */

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

/**
 * Gets the current score from the DOM and increments it by 1
 * - code from CI Love Maths Walkthrough Project
 */
function incrementScore() {

    let oldscore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldscore;

}

/**
 * Gets the current tally of incorrect answers from the DOM and increments it by 1
 *  - code from CI Love Maths Walkthrough Project
 */

 function incrementWrongAnswer() {

    let oldscore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldscore;

}

/**
 * My own content for the questions but code taken and modified from 'Build a Quiz App with JavaScript'by WebDev Simplified 
 *  */ 

const questions = [
    {
        question: 'He is one of the best football players in history, he is Argentinian and ruined his career because of drugs. Who is he?',
        answers: [
            { text: 'Diego Maradona', correct: true },
            { text: 'Pelé', correct: false },
            { text: 'Johann Criff', correct: false },
            { text: 'Adrian Mutu', correct: false },
        ]
    },
    {
        question: 'He is English, played with Frank Lampard for the National Team and is one of the best Liverpool players ever. Who is he?',
        answers: [
            { text: 'Wayne Rooney', correct: false },
            { text: 'Steven Gerrard', correct: true },
            { text: 'Joe Hard', correct: false },
            { text: 'Glen Johnson', correct: false },
        ]
    },
    {
        question: 'He is from Belgium, was one of the most amazing players for Chelsea, but he has not played that well for Real Madrid. Who is he?',
        answers: [
            { text: 'Romelu Lukaku', correct: false },
            { text: 'Thorgan Hazard', correct: false },
            { text: 'Jan Vertronghen', correct: false },
            { text: 'Eden Hazard', correct: true },
        ]
    },
    {
        question: 'He is from France, he is young and has very heavy links to Real Madrid. Who is he?',
        answers: [
            { text: 'Ousmane Dembélé', correct: false },
            { text: 'Kylian Mbappé', correct: true },
            { text: 'Kingsley Coman', correct: false },
            { text: 'Anthony Martial ', correct: false },
        ]
    },
    {
        question: 'He is Italian, came through the Academy of AC Milan, he never left the club and retired there. Who is he?',
        answers: [
            { text: 'Gianni Rivera', correct: false },
            { text: 'Roberto Baggio', correct: false },
            { text: 'Gianluigi Buffon', correct: false },
            { text: 'Paolo Maldini', correct: true },
        ]
    },
    {
        question: 'He is a famous striker, a Liverpool legend, but comes from Wales. Who is he?',
        answers: [
            { text: 'Aaron Ramsey', correct: false },
            { text: 'Gareth Bale', correct: false },
            { text: 'Ian Rush', correct: true },
            { text: 'Ryan Giggs', correct: false },
        ]
    },
    {
        question: 'Manchester City recently signed him for 100 million pounds, he is English, but they do not like his attitude. Who is he?',
        answers: [
            { text: 'Jack Grealish', correct: true },
            { text: 'Phil Foden', correct: false },
            { text: 'Kyle Walker', correct: false },
            { text: 'John Stones', correct: false },
        ]
    },
    {
        question: 'He has played for Liverpool FC, FC Barcelona and Atletico Madrid, and he is "famous" for biting other footballers. Who is he?',
        answers: [
            { text: 'Christiano Ronaldo', correct: false },
            { text: 'Luis Suárez', correct: true },
            { text: 'Edison Cavani', correct: false },
            { text: 'Alessandro Nesta', correct: false },
        ]
    },
    {
        question: 'He currently plays for AC Milan, but he has been to many clubs and he is 40 years old. Who is he?',
        answers: [
            { text: 'Thomas Müller', correct: false },
            { text: 'Zlatan Ibrahimović', correct: true },
            { text: 'Edin Džeko', correct: false },
            { text: 'Sergio Ramos', correct: false },
        ]
    },
    {
        question: 'He is Croatian, he scored in the World Cup final 2018 and he has always played as a forward. Who is he?',
        answers: [
            { text: 'Mario Mandžukić', correct: true },
            { text: 'Luka Modrić', correct: false },
            { text: 'Ivan Rakitić', correct: false },
            { text: 'Alen Bokšić', correct: false },
        ]
    },
    {
        question: 'He plays as a left winger for Chelsea, they signed him from Borussia Dortmund, but he is from the USA. Who is he?',
        answers: [
            { text: 'Giovanni Reyna', correct: false },
            { text: 'Christian Pulisic', correct: true },
            { text: 'Sergiño Dest', correct: false },
            { text: 'Weston McKennie', correct: false },
        ]
    },
];