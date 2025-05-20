const questions = [
    {
        question: "Apa arti cinta menurutmu?",
        answers: [
            {text: "Perasaan suka", correct: false},
            {text: "Pengorbanan dan ketulusan", correct: true},
            {text: "Hanya kata-kata", correct: false},
            {text: "Sekedar perhatian", correct: false},
        ]
    },
    {
        question: "Bagaimana kamu membuktikan cinta pada pasangan?",
        answers: [
            {text: "Dengan kata-kata manis", correct: false},
            {text: "Dengan setia dan perhatian", correct: true},
            {text: "Dengan hadiah mahal", correct: false},
            {text: "Dengan cemburu", correct: false},
        ]
    },
    {
        question: "Apa yang kamu lakukan saat pasangan sedang sedih?",
        answers: [
            {text: "Meninggalkannya", correct: false},
            {text: "Menghibur dan mendukungnya", correct: true},
            {text: "Membiarkannya sendiri", correct: false},
            {text: "Memarahinya", correct: false},
        ]
    },
    {
        question: "Cinta sejati itu...",
        answers: [
            {text: "Tidak pernah marah", correct: false},
            {text: "Selalu menerima kekurangan", correct: true},
            {text: "Selalu bahagia", correct: false},
            {text: "Tidak pernah bertengkar", correct: false},
        ]
    },
    {
        question: "Apa yang kamu lakukan jika pasanganmu melakukan kesalahan?",
        answers: [
            {text: "Langsung memutuskan hubungan", correct: false},
            {text: "Memaafkan dan memberi kesempatan", correct: true},
            {text: "Membalas dendam", correct: false},
            {text: "Membiarkannya", correct: false},
        ]
    },
    {
        question: "Bagaimana kamu menunjukkan cinta setiap hari?",
        answers: [
            {text: "Dengan perhatian kecil", correct: true},
            {text: "Dengan hadiah mahal", correct: false},
            {text: "Dengan mengabaikan", correct: false},
            {text: "Dengan marah-marah", correct: false},
        ]
    },
    {
        question: "Apa yang paling penting dalam hubungan cinta?",
        answers: [
            {text: "Kepercayaan dan komunikasi", correct: true},
            {text: "Uang", correct: false},
            {text: "Penampilan", correct: false},
            {text: "Popularitas", correct: false},
        ]
    },
    {
        question: "Jika pasanganmu jauh, apa yang kamu lakukan?",
        answers: [
            {text: "Tetap setia dan menjaga komunikasi", correct: true},
            {text: "Mencari yang lain", correct: false},
            {text: "Melupakan", correct: false},
            {text: "Tidak peduli", correct: false},
        ]
    },
    {
        question: "Cinta yang tulus itu...",
        answers: [
            {text: "Mengharapkan balasan", correct: false},
            {text: "Memberi tanpa pamrih", correct: true},
            {text: "Selalu menuntut", correct: false},
            {text: "Bersyarat", correct: false},
        ]
    },
    {
        question: "Apa yang kamu lakukan jika pasanganmu sukses?",
        answers: [
            {text: "Cemburu", correct: false},
            {text: "Mendukung dan bangga", correct: true},
            {text: "Meremehkan", correct: false},
            {text: "Acuh tak acuh", correct: false},
        ]
    },
    {
        question: "Bagaimana kamu menghadapi perbedaan dengan pasangan?",
        answers: [
            {text: "Bertengkar", correct: false},
            {text: "Mencari solusi bersama", correct: true},
            {text: "Menghindar", correct: false},
            {text: "Memaksakan kehendak", correct: false},
        ]
    },
    {
        question: "Apa yang kamu lakukan saat pasanganmu sakit?",
        answers: [
            {text: "Merawat dan menemani", correct: true},
            {text: "Meninggalkannya", correct: false},
            {text: "Mengabaikan", correct: false},
            {text: "Memarahinya", correct: false},
        ]
    },
    {
        question: "Cinta itu harus...",
        answers: [
            {text: "Dipaksakan", correct: false},
            {text: "Dijaga dan dirawat", correct: true},
            {text: "Dibiarkan saja", correct: false},
            {text: "Dituntut terus", correct: false},
        ]
    },
    {
        question: "Apa yang kamu lakukan jika pasanganmu marah?",
        answers: [
            {text: "Menenangkan dan mendengarkan", correct: true},
            {text: "Membalas marah", correct: false},
            {text: "Pergi begitu saja", correct: false},
            {text: "Mengabaikan", correct: false},
        ]
    },
    {
        question: "Bagaimana kamu menjaga hubungan tetap harmonis?",
        answers: [
            {text: "Saling terbuka dan jujur", correct: true},
            {text: "Menyimpan rahasia", correct: false},
            {text: "Berbohong", correct: false},
            {text: "Tidak peduli", correct: false},
        ]
    },
    {
        question: "Apa bukti cinta yang paling sederhana?",
        answers: [
            {text: "Selalu ada di saat dibutuhkan", correct: true},
            {text: "Memberi barang mahal", correct: false},
            {text: "Mengabaikan", correct: false},
            {text: "Cemburu berlebihan", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo +". " + currentQuestion.question


    currentQuestion.answers.forEach(answers =>{
        const button = document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answers.correct){
            button.dataset.correct = answers.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct ==="true"){
            button.classList.add("correct");
        }
        button.disabled = true;
        });
        nextButton.style.display = "block";
}

function showScore(){
    resetState();
    const percent = Math.round((score / questions.length) * 100);
    questionElement.innerHTML = `Nilai kekuatan cintau adalah: ${percent}%`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block"
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore()
    }
}

nextButton.addEventListener("click", () =>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})



startQuiz();
