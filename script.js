const quizData = [
    {
        question: "1. O que causa o astigmatismo?",
        options: [
            "Aumento da pressão interna do olho",
            "Curvatura irregular da córnea ou cristalino (formato ovalado)",
            "Opacidade do cristalino pela idade",
            "Falta de exercícios oculares"
        ],
        correct: 1
    },
    {
        question: "2. Quem descreveu o astigmatismo pela primeira vez em 1801?",
        options: [
            "George Biddell Airy",
            "William Whewell",
            "Thomas Young",
            "Albert Einstein"
        ],
        correct: 2
    },
    {
        question: "3. Qual foi a criação de George Biddell Airy em 1825 para corrigir o astigmatismo?",
        options: [
            "Cirurgia a laser",
            "Lente cilíndrica",
            "Lente bifocal",
            "Colírios tóricos"
        ],
        correct: 1
    },
    {
        question: "4. Quais são sintomas comuns do astigmatismo?",
        options: [
            "Apenas dor nos olhos ao acordar",
            "Visão embaçada, fadiga ocular e dores de cabeça",
            "Visão dupla exclusivamente noturna",
            "Perda total de visão para cores"
        ],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;
let selectedOption = null;

const quizContainer = document.getElementById("quiz-container");

function loadQuiz() {
    selectedOption = null;
    const q = quizData[currentQuestion];
    
    let html = `<div class="quiz-question"><strong>${q.question}</strong></div><ul class="quiz-options" style="list-style:none; padding:0;">`;
    
    q.options.forEach((opt, index) => {
        html += `<li class="quiz-option" onclick="selectOption(${index})">${opt}</li>`;
    });
    
    html += `</ul><button class="quiz-btn" onclick="nextQuestion()" id="next-btn" disabled style="opacity:0.5;">Responder / Próxima</button>`;
    
    quizContainer.innerHTML = html;
}

function selectOption(index) {
    selectedOption = index;
    const options = document.querySelectorAll('.quiz-option');
    options.forEach((opt, i) => {
        if (i === index) opt.classList.add('selected');
        else opt.classList.remove('selected');
    });
    const btn = document.getElementById('next-btn');
    btn.disabled = false;
    btn.style.opacity = '1';
}

function nextQuestion() {
    if (selectedOption === quizData[currentQuestion].correct) score++;
    currentQuestion++;
    if (currentQuestion < quizData.length) loadQuiz();
    else showResults();
}

function showResults() {
    quizContainer.innerHTML = `
        <div style="text-align:center;">
            <h3>Resultado do Quiz</h3>
            <p>Você acertou <strong>${score}</strong> de <strong>${quizData.length}</strong> perguntas!</p>
            <button class="quiz-btn" onclick="restartQuiz()">Tentar Novamente</button>
        </div>
    `;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    loadQuiz();
}

document.addEventListener('DOMContentLoaded', loadQuiz);
