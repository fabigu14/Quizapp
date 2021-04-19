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

function init(){
    document.getElementById('totalQuestions').innerHTML = questions.length;
    
    showQuestion();
}

function showQuestion(){

    document.getElementById('currentQuestion').innerHTML = currentQuestionIndex + 1;

    let currentQuestion = questions[currentQuestionIndex];

    document.getElementById('question').innerHTML = currentQuestion['question'];
    document.getElementById('answer_1').innerHTML = currentQuestion['answer_1'];
    document.getElementById('answer_2').innerHTML = currentQuestion['answer_2'];
    document.getElementById('answer_3').innerHTML = currentQuestion['answer_3'];
    document.getElementById('answer_4').innerHTML = currentQuestion['answer_4'];
}

function nextQuestion(){

    currentQuestionIndex++;

    if(currentQuestionIndex + 1 <= questions.length){
        showQuestion();
        removeHighlight();
    }
}

function checkAnswer(answer){

    console.log(answer);
    let currentQuestion = questions[currentQuestionIndex];
    let rightAnswer = currentQuestion['solution'];
    console.log(rightAnswer);
    if(rightAnswer === answer){
        console.log('right');
        document.getElementById(answer).classList.add('right-answer');
    }

    else{
        console.log('wrong');
        document.getElementById(answer).classList.add('wrong-answer');
        document.getElementById(rightAnswer).classList.add('right-answer');
    }

    lockAnwers();
}

function removeHighlight(){
    document.getElementById('answer_1').classList.remove('right-answer');
    document.getElementById('answer_1').classList.remove('wrong-answer');
    document.getElementById('answer_2').classList.remove('right-answer');
    document.getElementById('answer_2').classList.remove('wrong-answer');
    document.getElementById('answer_3').classList.remove('right-answer');
    document.getElementById('answer_3').classList.remove('wrong-answer');
    document.getElementById('answer_4').classList.remove('right-answer');
    document.getElementById('answer_4').classList.remove('wrong-answer');
    document.getElementById('overlay').classList.add('hide-element');
}

function lockAnwers(){

    document.getElementById('overlay').classList.remove('hide-element');
}