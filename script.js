let questions = [
    {
        "question": "Wie heißt die Haupstadt von NRW?",
        "answer_1": "Hamburg",
        "answer_2": "Düsseldorf",
        "answer_3": "Dortmund",
        "answer_4": "Bielefeld",
        "solution": 2
    },
    {
        "question": "Wie viele ms ergeben eine Sekunde?",
        "answer_1": "3600",
        "answer_2": "100",
        "answer_3": "1000",
        "answer_4": "10000",
        "solution": 3
    },
    {
        "question": "Wie viele Bundesländer hat Deutschland?",
        "answer_1": "10",
        "answer_2": "12",
        "answer_3": "15",
        "answer_4": "16",
        "solution": 4
    },
    {
    "question": "Wer gewann in der Saison 19/20 die Champions League?",
        "answer_1": "FC Bayern München",
        "answer_2": "Manchester United",
        "answer_3": "AS Rom",
        "answer_4": "Real Madrid",
        "solution": 1
    },
    {
        "question": "Wo findet man den Arc de Triomphe?",
        "answer_1": "London",
        "answer_2": "Paris",
        "answer_3": "Lille",
        "answer_4": "Barcelona",
        "solution": 2
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