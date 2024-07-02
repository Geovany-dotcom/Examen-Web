const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");
const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

let selectedQuestions = [];
let currentQuestionIndex = 0;
let userScore = 0;
let counter;
let counterLine;
let timeValue = 15;

// Elementos del modal para el nombre del usuario
const userModal = document.getElementById("userModal");
const closeModal = document.querySelector(".modal .close");
const submitName = document.getElementById("submitName");
let user;

window.onload = function() {
    userModal.style.display = "flex";  // Muestra el modal al cargar la página
}

closeModal.onclick = function() {
    userModal.style.display = "none";
}

submitName.onclick = function() {
    const userNameInput = document.getElementById("userName");
    user = userNameInput.value;
    if (user) {
        userModal.style.display = "none";
        info_box.classList.add("activeInfo");  // Muestra la caja de información después de ingresar el nombre
    } else {
        alert("Por favor, introduce tu nombre.");
    }
}

// Deshabilita el botón de inicio hasta que se ingrese el nombre
start_btn.onclick = () => {
    if (user) {
        info_box.classList.add("activeInfo");
    } else {
        userModal.style.display = "flex";
    }
};

exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo");
};

continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    startExam();
};

function startExam() {
    selectedQuestions = getRandomQuestions(questions, 10);
    currentQuestionIndex = 0;
    userScore = 0;
    showQuestion(currentQuestionIndex);
    queCounter(1);
    startTimer(timeValue);
    startTimerLine(0);
    next_btn.classList.remove("show");
}

function getRandomQuestions(questions, count) {
    let shuffled = questions.sort(() => 0.5 - Math.random());
    let selected = shuffled.slice(0, count);
    return selected;
}

function showQuestion(index) {
    const que_text = document.querySelector(".que_text");
    let question = selectedQuestions[index];
    let que_tag = `<span>${index + 1}. ${question.question}</span>`;
    let option_tag = question.options.map(option => 
        `<div class="option"><span>${option}</span></div>`
    ).join("");
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    const options = option_list.querySelectorAll(".option");
    options.forEach(option => {
        option.setAttribute("onclick", "optionSelected(this)");
    });
    next_btn.classList.remove("show");
    startTimer(timeValue);
    startTimerLine(0);
}

function optionSelected(answer) {
    clearInterval(counter);
    clearInterval(counterLine);
    let userAns = answer.textContent;
    let correctAns = selectedQuestions[currentQuestionIndex].answer;
    const allOptions = option_list.children.length;
    
    if (userAns == correctAns) {
        userScore++;
        answer.classList.add("correct");
        answer.insertAdjacentHTML("beforeend", tickIconTag);
    } else {
        answer.classList.add("incorrect");
        answer.insertAdjacentHTML("beforeend", crossIconTag);
        for (let i = 0; i < allOptions; i++) {
            if (option_list.children[i].textContent == correctAns) {
                option_list.children[i].classList.add("correct");
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
            }
        }
    }
    
    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");
    }
    next_btn.classList.add("show");
}

next_btn.onclick = () => {
    if (currentQuestionIndex < selectedQuestions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
        queCounter(currentQuestionIndex + 1);
        clearInterval(counter);
        clearInterval(counterLine);
        startTimer(timeValue);
        startTimerLine(0);
        next_btn.classList.remove("show");
    } else {
        clearInterval(counter);
        clearInterval(counterLine);
        showResult();
    }
};

function showResult() {
    info_box.classList.remove("activeInfo");
    quiz_box.classList.remove("activeQuiz");
    result_box.classList.add("activeResult");
    const scoreText = result_box.querySelector(".score_text");
    
    // Guarda el resultado del examen en el backend
    fetch('http://localhost:3000/save-result', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user, score: userScore })
    })
    .then(response => response.json())
    .then(data => {
        scoreText.innerHTML = `<span>${user}, has conseguido <p>${userScore}</p> de <p>${selectedQuestions.length}</p> preguntas.</span>`;
    });
}

function startTimer(time) {
    clearInterval(counter);
    counter = setInterval(timer, 1000);
    function timer() {
        timeCount.textContent = time;
        time--;
        if (time < 10) {
            timeCount.textContent = "0" + time;
        }
        if (time < 0) {
            clearInterval(counter);
            timeText.textContent = "Se acabó el tiempo";
            markUnanswered();
            next_btn.classList.add("show");
        }
    }
}

function startTimerLine(time) {
    clearInterval(counterLine);
    counterLine = setInterval(timer, 29);
    function timer() {
        time += 1;
        time_line.style.width = time + "px";
        if (time > 549) {
            clearInterval(counterLine);
        }
    }
}

function markUnanswered() {
    const allOptions = option_list.children.length;
    let correctAns = selectedQuestions[currentQuestionIndex].answer;
    for (let i = 0; i < allOptions; i++) {
        if (option_list.children[i].textContent == correctAns) {
            option_list.children[i].classList.add("correct");
            option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
        } else {
            option_list.children[i].classList.add("incorrect");
            option_list.children[i].insertAdjacentHTML("beforeend", crossIconTag);
        }
        option_list.children[i].classList.add("disabled");
    }
    document.querySelector(".que_text").classList.add("unanswered");
}

function queCounter(index) {
    let totalQueCounTag = `<span><p>${index}</p> de <p>${selectedQuestions.length}</p> Preguntas</span>`;
    bottom_ques_counter.innerHTML = totalQueCounTag;
}

const restart_quiz = result_box.querySelector(".buttons .restart");
restart_quiz.onclick = () => {
    quiz_box.classList.add("activeQuiz");
    result_box.classList.remove("activeResult");
    clearInterval(counter);
    clearInterval(counterLine);
    startExam();
};

const quit_quiz = result_box.querySelector(".buttons .quit");
quit_quiz.onclick = () => {
    window.location.reload();
};

let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';
