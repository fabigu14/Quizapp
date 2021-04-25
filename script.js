let questions = [
    {
        "question": "Wie heißt die Haupstadt von NRW?",
        "answer_1": "Hamburg",
        "answer_2": "Düsseldorf",
        "answer_3": "Dortmund",
        "answer_4": "Bielefeld",
        "solution": "answer_2"
    },
    {
        "question": "Wie viele ms ergeben eine Sekunde?",
        "answer_1": "3600",
        "answer_2": "100",
        "answer_3": "1000",
        "answer_4": "10000",
        "solution": "answer_3"
    },
    {
        "question": "Wie viele Bundesländer hat Deutschland?",
        "answer_1": "10",
        "answer_2": "12",
        "answer_3": "15",
        "answer_4": "16",
        "solution": "answer_4"
    },
    {
        "question": "Wer gewann in der Saison 19/20 die Champions League?",
        "answer_1": "FC Bayern München",
        "answer_2": "Manchester United",
        "answer_3": "AS Rom",
        "answer_4": "Real Madrid",
        "solution": "answer_1"
    },
    {
        "question": "Wo findet man den Arc de Triomphe?",
        "answer_1": "London",
        "answer_2": "Paris",
        "answer_3": "Lille",
        "answer_4": "Barcelona",
        "solution": "answer_2"
    }
];

let currentQuestionIndex = 0;
let rightAnswers = 0;
let AUDIO_SUCCED = new Audio('audio/success.mp3');
let AUDIO_WRONG = new Audio('audio/wrong.mp3');

function init() {
    document.getElementById('totalQuestions').innerHTML = questions.length;

    showQuestion();
}

//sets and shows Question and answers
function showQuestion() {

    document.getElementById('currentQuestion').innerHTML = currentQuestionIndex + 1;

    let currentQuestion = questions[currentQuestionIndex];

    document.getElementById('question').innerHTML = currentQuestion['question'];
    document.getElementById('answer_1').innerHTML = currentQuestion['answer_1'];
    document.getElementById('answer_2').innerHTML = currentQuestion['answer_2'];
    document.getElementById('answer_3').innerHTML = currentQuestion['answer_3'];
    document.getElementById('answer_4').innerHTML = currentQuestion['answer_4'];
}

//moves on to next question through onClick()
function nextQuestion() {

    currentQuestionIndex++;

    if (currentQuestionIndex + 1 <= questions.length) {
        showQuestion();
        removeHighlight();
        showProgress();
    }
}

//checks wether the answer oof user is correct
function checkAnswer(answer) {

    let currentQuestion = questions[currentQuestionIndex];
    let rightAnswer = currentQuestion['solution'];

    if (rightAnswer === answer) {
        playSucced();
    }

    else {
       playWrong();
    }
    checkEndOfGame();
    lockAnwers();
}

function checkEndOfGame(){
    if (currentQuestionIndex + 1 === questions.length) {
        currentQuestionIndex++;
        showProgress();
        showResult();
    }
    else {
        document.getElementById('btn-continue').disabled = false;
    }
}

function playSucced() {
    AUDIO_SUCCED.play();
    document.getElementById(answer).classList.add('right-answer');
    rightAnswers++;
}

function playWrong(){
    AUDIO_WRONG.play();
    document.getElementById(answer).classList.add('wrong-answer');
    document.getElementById(rightAnswer).classList.add('right-answer');
}


//removes the red and green background
function removeHighlight() {
    document.getElementById('answer_1').classList.remove('right-answer');
    document.getElementById('answer_1').classList.remove('wrong-answer');
    document.getElementById('answer_2').classList.remove('right-answer');
    document.getElementById('answer_2').classList.remove('wrong-answer');
    document.getElementById('answer_3').classList.remove('right-answer');
    document.getElementById('answer_3').classList.remove('wrong-answer');
    document.getElementById('answer_4').classList.remove('right-answer');
    document.getElementById('answer_4').classList.remove('wrong-answer');
    document.getElementById('overlay').classList.add('hide-element');
    document.getElementById('btn-continue').disabled = true;
}

//overlay is set and makes sure that you can't click on the answers anymore
function lockAnwers() {

    document.getElementById('overlay').classList.remove('hide-element');
}

//removes the overlay for the next Question
function unlockAnwers() {

    document.getElementById('overlay').classList.add('hide-element');
}

//shows a new element with the result of the game
function showResult() {
    setTimeout(function () {
        document.getElementById('result').classList.remove('hide-element');
        document.getElementById('card').classList.add('hide-element');
        document.getElementById('rightAnswers').innerHTML = rightAnswers;
        document.getElementById('total').innerHTML = questions.length;
    }, 2000
    )
}


//resets all stats and restarts the game
function restart() {
    currentQuestionIndex = 0;
    rightAnswers = 0;
    document.getElementById('result').classList.add('hide-element');
    document.getElementById('card').classList.remove('hide-element');
    removeHighlight();
    unlockAnwers();
    init();
}

function showProgress() {
    let progressInPercent = Math.round((currentQuestionIndex) / questions.length * 100);
    document.getElementById('progress').innerHTML = `${progressInPercent}%`
    document.getElementById('progress').style = `width: ${progressInPercent}%`

}