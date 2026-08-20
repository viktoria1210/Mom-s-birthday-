/* =========================================================
   35 РОКІВ — ПОДАРУНОК ДЛЯ МАМИ
========================================================= */


/* ================= LOADER ================= */

window.addEventListener("load", () => {

    setTimeout(() => {
        document.getElementById("loader").classList.add("hide");
    }, 1200);

});


/* ================= MUSIC ================= */

const music = document.getElementById("birthdayMusic");
const musicBtn = document.getElementById("musicBtn");
const musicHint = document.getElementById("musicHint");

let musicPlaying = false;

function startMusic() {

    music.play()
        .then(() => {

            musicPlaying = true;

            musicBtn.classList.add("playing");
            musicBtn.textContent = "❚❚";

            musicHint.classList.remove("show");

        })
        .catch(() => {

            showToast("Натисни на ♫ ще раз 🎵");

        });
}

function stopMusic() {

    music.pause();

    musicPlaying = false;

    musicBtn.classList.remove("playing");
    musicBtn.textContent = "♫";
}

musicBtn.addEventListener("click", () => {

    if (musicPlaying) {
        stopMusic();
    } else {
        startMusic();
    }

});


/* показати підказку */

setTimeout(() => {

    if (!musicPlaying) {
        musicHint.classList.add("show");

        setTimeout(() => {
            musicHint.classList.remove("show");
        }, 5000);
    }

}, 1800);


/* ================= HERO BUTTON ================= */

document.getElementById("startBtn").addEventListener("click", () => {

    startMusic();

    document.querySelector(".intro").scrollIntoView({
        behavior: "smooth"
    });

});


/* ================= REVEAL ================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }

        });

    },
    {
        threshold: 0.12
    }
);

revealElements.forEach(element => {
    revealObserver.observe(element);
});


/* ================= 35 REASONS ================= */

const reasons = [

    "Ти завжди поруч.",
    "Ти вмієш підтримати.",
    "Ти даруєш тепло.",
    "Ти вмієш розсмішити.",
    "Твої обійми — найкращі.",
    "Ти віриш у нас.",
    "Ти терпиш наші витівки 😅",
    "Ти створюєш затишок.",
    "Ти дуже добра.",
    "Ти сильна.",
    "Ти турботлива.",
    "Ти красива.",
    "Ти надихаєш.",
    "Ти вмієш слухати.",
    "Ти завжди знайдеш рішення.",
    "Ти робиш дім домом.",
    "Ти пам'ятаєш важливі дрібниці.",
    "Ти вмієш любити без умов.",
    "Ти смієшся від душі.",
    "Ти наша опора.",
    "Ти вмієш пробачати.",
    "Ти завжди думаєш про сім'ю.",
    "Ти неймовірно щира.",
    "Ти особлива.",
    "Ти наша супергероїня.",
    "Ти вмієш робити свята.",
    "Ти завжди переживаєш за нас.",
    "Ти даруєш віру.",
    "Ти вмієш бути другом.",
    "Ти робиш світ добрішим.",
    "Ти наша гордість.",
    "Ти наше натхнення.",
    "Ти наша радість.",
    "Ти просто наша мама.",
    "Бо ми тебе безмежно любимо ❤️"

];

const reasonsGrid = document.getElementById("reasonsGrid");

reasons.forEach((reason, index) => {

    const card = document.createElement("div");

    card.className = "reason";

    card.innerHTML = `
        <span class="reason-number">
            ${String(index + 1).padStart(2, "0")}
        </span>

        <p>${reason}</p>
    `;

    card.addEventListener("click", () => {

        showToast(
            index === 34
                ? "І це найголовніша причина ❤️"
                : `Причина №${index + 1} знайдена ♡`
        );

    });

    reasonsGrid.appendChild(card);

});


/* ================= FUN GAME ================= */

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const gameMessage = document.getElementById("gameMessage");

let noAttempts = 0;

function moveNoButton() {

    noAttempts++;

    const padding = 10;

    const maxX = window.innerWidth - noBtn.offsetWidth - padding * 2;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding * 2;

    const x = Math.max(
        padding,
        Math.random() * maxX
    );

    const y = Math.max(
        padding,
        Math.random() * maxY
    );

    noBtn.style.position = "fixed";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
    noBtn.style.zIndex = "4000";

    const messages = [
        "Ой-ой 😌",
        "Не втечеш!",
        "Ця кнопка знає правду 😂",
        "Спробуй ще раз!",
        "НІ — не приймається!",
        "Мамо, ну серйозно? 😭",
        "Це неможлива відповідь ❤️"
    ];

    gameMessage.textContent =
        messages[Math.min(noAttempts - 1, messages.length - 1)];

}


/* Комп'ютер */

noBtn.addEventListener("mouseenter", moveNoButton);


/* Телефон */

noBtn.addEventListener("touchstart", (event) => {

    event.preventDefault();

    moveNoButton();

});


/* Якщо все-таки натиснула */

noBtn.addEventListener("click", (event) => {

    event.preventDefault();

    moveNoButton();

});


/* YES */

yesBtn.addEventListener("click", () => {

    gameMessage.textContent =
        "ОТ І ПРАВИЛЬНА ВІДПОВІДЬ! 👑❤️";

    yesBtn.textContent = "МАМА №1 У СВІТІ ♡";

    createConfetti();

});


/* ================= QUIZ ================= */

const quizQuestions = [

    {
        question: "Що мама любить найбільше?",
        answers: [
            "Свою сім'ю ❤️",
            "Понеділки",
            "Робити домашку",
            "Стояти в черзі"
        ],
        correct: 0
    },

    {
        question: "Що мама робить краще за всіх?",
        answers: [
            "Підтримує",
            "Літає",
            "Читає думки",
            "Все одно правильна відповідь — мама"
        ],
        correct: 0
    },

    {
        question: "Що завжди можна отримати від мами?",
        answers: [
            "Обійми",
            "Любов",
            "Пораду",
            "Усе перелічене ❤️"
        ],
        correct: 3
    },

    {
        question: "Скільки мамі виповнюється?",
        answers: [
            "25",
            "30",
            "35 👑",
            "99"
        ],
        correct: 2
    },

    {
        question: "Хто найкраща мама?",
        answers: [
            "Моя мама ❤️",
            "Моя мама ❤️",
            "Моя мама ❤️",
            "УСІ ВІДПОВІДІ ПРАВИЛЬНІ"
        ],
        correct: 3
    }

];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const quizResult = document.getElementById("quizResult");
const quizProgress = document.getElementById("quizProgress");
const progressLine = document.getElementById("progressLine");

function loadQuestion() {

    const q = quizQuestions[currentQuestion];

    quizProgress.textContent =
        String(currentQuestion + 1).padStart(2, "0");

    progressLine.style.width =
        `${((currentQuestion + 1) / quizQuestions.length) * 100}%`;

    questionElement.textContent = q.question;

    answersElement.innerHTML = "";

    quizResult.textContent = "";

    q.answers.forEach((answer, index) => {

        const button = document.createElement("button");

        button.className = "answer";

        button.textContent = answer;

        button.addEventListener("click", () => {

            const buttons =
                answersElement.querySelectorAll(".answer");

            buttons.forEach(btn => {
                btn.disabled = true;
            });

            if (index === q.correct) {

                button.classList.add("correct");

                score++;

                quizResult.textContent =
                    "Правильно! ♡";

            } else {

                button.classList.add("wrong");

                buttons[q.correct].classList.add("correct");

                quizResult.textContent =
                    "Майже! Але мама все одно молодець ♡";

            }

            setTimeout(() => {

                currentQuestion++;

                if (currentQuestion < quizQuestions.length) {

                    loadQuestion();

                } else {

                    finishQuiz();

                }

            }, 1100);

        });

        answersElement.appendChild(button);

    });

}

function finishQuiz() {

    questionElement.textContent =
        "Тест завершено!";

    answersElement.innerHTML = "";

    progressLine.style.width = "100%";

    quizResult.textContent =
        `Результат: ${score}/5 ❤️`;

    const final = document.createElement("p");

    final.style.marginTop = "15px";
    final.style.color = "#80626e";
    final.textContent =
        "Але ми точно знаємо: ти найкраща мама незалежно від результату.";

    answersElement.appendChild(final);

}

loadQuestion();


/* ================= LETTER ================= */

const envelope = document.getElementById("envelope");

envelope.addEventListener("click", () => {

    envelope.classList.toggle("open");

    if (envelope.classList.contains("open")) {

        showToast("Лист відкрито ❤️");

    }

});


/* ================= PHOTOS MODAL ================= */

const photoModal = document.getElementById("photoModal");
const modalImage = document.getElementById("modalImage");
const modalClose = document.getElementById("modalClose");

document.querySelectorAll(".photo-card img").forEach(img => {

    img.addEventListener("click", () => {

        modalImage.src = img.src;

        photoModal.classList.add("show");

    });

});

modalClose.addEventListener("click", closeModal);

photoModal.addEventListener("click", event => {

    if (event.target === photoModal) {
        closeModal();
    }

});

function closeModal() {

    photoModal.classList.remove("show");

    setTimeout(() => {
        modalImage.src = "";
    }, 300);

}


/* ================= CAKE ================= */

const candles = document.querySelectorAll(".candle");
const candleText = document.getElementById("candleText");

let candlesLeft = candles.length;

candles.forEach(candle => {

    candle.addEventListener("click", () => {

        if (candle.classList.contains("off")) {
            return;
        }

        candle.classList.add("off");

        candlesLeft--;

        if (candlesLeft > 0) {

            candleText.textContent =
                `${candlesLeft} свічок ще горять ✨`;

        } else {

            candleText.textContent =
                "БАЖАННЯ ЗАГАДАНО! ✨❤️";

            createConfetti();

            setTimeout(() => {

                document.getElementById("finale")
                    .scrollIntoView({
                        behavior: "smooth"
                    });

            }, 1000);

        }

    });

});


/* ================= SECRET BUTTON ================= */

let secretClicks = 0;

document.getElementById("secretButton")
    .addEventListener("click", () => {

        secretClicks++;

        if (secretClicks === 1) {

            showToast("Ти знайшла секрет 👀");

        } else if (secretClicks === 2) {

            showToast("Тут щось є...");

        } else if (secretClicks === 3) {

            showToast("СЕКРЕТНИЙ РІВЕНЬ РОЗБЛОКОВАНО! ✨");

            createConfetti();

            document.body.style.transition = "filter .3s";
            document.body.style.filter = "brightness(1.08)";

            setTimeout(() => {
                document.body.style.filter = "";
            }, 500);

            secretClicks = 0;

        }

    });


/* ================= FINALE ================= */

document.getElementById("finalBtn")
    .addEventListener("click", () => {

        startMusic();

        createConfetti();

        showToast("Мамо, це все для тебе ❤️");

        setTimeout(() => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }, 1200);

    });


/* ================= TOAST ================= */

let toastTimer;

function showToast(message) {

    const toast = document.getElementById("toast");

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {

        toast.classList.remove("show");

    }, 2600);

}


/* ================= CONFETTI ================= */

function createConfetti() {

    const symbols = ["♡", "✦", "✧", "♥", "✨"];

    for (let i = 0; i < 35; i++) {

        const item = document.createElement("div");

        item.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        item.style.position = "fixed";
        item.style.left = `${Math.random() * 100}vw`;
        item.style.top = "-30px";
        item.style.zIndex = "8000";
        item.style.pointerEvents = "none";

        item.style.fontSize =
            `${12 + Math.random() * 18}px`;

        item.style.color =
            ["#e28baa", "#d5ad67", "#ffffff", "#f4c3d2"]
            [Math.floor(Math.random() * 4)];

        document.body.appendChild(item);

        const duration =
            1800 + Math.random() * 1800;

        item.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform:
                        `translateY(110vh) rotate(${Math.random() * 720 - 360}deg)`,
                    opacity: 0
                }
            ],
            {
                duration: duration,
                easing: "cubic-bezier(.2,.7,.3,1)"
            }
        );

        setTimeout(() => {
            item.remove();
        }, duration);

    }

}


/* ================= KEYBOARD SECRET ================= */

let secretCode = "";

document.addEventListener("keydown", event => {

    secretCode += event.key.toLowerCase();

    if (secretCode.length > 10) {
        secretCode = secretCode.slice(-10);
    }

    if (secretCode.includes("mama")) {

        showToast("Мама — це любов ❤️");

        createConfetti();

        secretCode = "";

    }

});
