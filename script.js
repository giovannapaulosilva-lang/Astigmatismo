// JavaScript Code for Quiz Functionality
const quizData = [
    {
        question: "1. O que é o astigmatismo?",
        options: [
            "Um erro de refração que causa visão borrada devido à curvatura irregular da córnea ou cristalino",
            "Uma infecção ocular causada por bactérias nas lentes de contato",
            "A perda total da visão de cores em ambientes escuros",
            "Um aumento da pressão interna do olho"
        ],
        correct: 0
    },
    {
        question: "2. Quem foi o primeiro a descrever o astigmatismo em 1801?",
        options: [
            "George Biddell Airy",
            "William Whewell",
            "Thomas Young",
            "Isaac Newton"
        ],
        correct: 2
    },
    {
        question: "3. Qual a origem e o significado da palavra 'astigmatismo'?",
        options: [
            "Do latim, significa 'olho grande'",
            "Do grego a- (sem) e stigma (ponto), significando 'sem ponto focal'",
            "Do francês, significa 'visão dupla'",
            "Do inglês, significa 'curvatura irregular'"
        ],
        correct: 1
    },
    {
        question: "4. Quais são as opções de tratamento para o astigmatismo?",
        options: [
            "Apenas colírios e repouso",
            "Óculos de grau, lentes de contato tóricas e cirurgia refrativa a laser",
            "Apenas uso de tampão ocular",
            "Transplante total de retina"
        ],
        correct: 1
    },
    {
        question: "5. Quais são os sintomas clássicos do astigmatismo?",
        options: [
            "Visão borrada de perto/longe, dores de cabeça e fadiga ocular",
            "Febre alta e olhos vermelhos",
            "Perda imediata da audição",
            "Incapacidade de piscar"
        ],
        correct: 0
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const quizContainer = document.getElementById("quiz-container");
    const q = quizData[currentQuestion];
    
    let html = `<div class="question-box">
        <h3>${q.question}</h3>
        <div class="options">`;
        
    q.options.forEach((opt, idx) => {
        html += `<button class="quiz-option" onclick="selectOption(${idx})">${opt}</button>`;
    });
    
    html += `</div></div>`;
    quizContainer.innerHTML = html;
}

function selectOption(index) {
    if (index === quizData[currentQuestion].correct) {
        score++;
    }
    currentQuestion++;
    
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = `
        <div class="result-box">
            <h3>Quiz Concluído! 🎉</h3>
            <p class="score-text">Você acertou ${score} de ${quizData.length} perguntas.</p>
            <p>${score >= 3 ? "Parabéns! Você aprendeu bastante sobre o astigmatismo." : "Que tal revisar o conteúdo da página e tentar novamente?"}</p>
            <button class="quiz-btn" onclick="restartQuiz()">Refazer Quiz</button>
        </div>
    `;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    loadQuestion();
}

// Inicializar Quiz
document.addEventListener("DOMContentLoaded", () => {
    loadQuestion();
});
