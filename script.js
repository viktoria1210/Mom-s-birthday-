/* =========================================
   LOADER
========================================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        document
            .getElementById("loader")
            .classList
            .add("hide");

    }, 1200);

});


/* =========================================
   START BUTTON
========================================= */

document
    .getElementById("startBtn")
    .addEventListener("click", () => {

        document
            .querySelector(".intro")
            .scrollIntoView({
                behavior: "smooth"
            });

        createHearts(15);

    });


/* =========================================
   SCROLL ANIMATIONS
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target
                        .classList
                        .add("visible");

                }

            });

        },
        {
            threshold: .15
        }
    );


revealElements.forEach(element => {

    observer.observe(element);

});


/* =========================================
   35 REASONS
========================================= */

const reasons = [

    ["01", "♡", "За твоє серце", "У ньому завжди вистачає місця для всіх."],

    ["02", "✦", "За твою турботу", "Ти помічаєш навіть те, що ми намагаємося приховати."],

    ["03", "☼", "За твою усмішку", "Вона здатна зробити звичайний день кращим."],

    ["04", "♡", "За обійми", "Найкраще місце у світі — поруч із тобою."],

    ["05", "✧", "За підтримку", "Ти завжди знаходиш правильні слова."],

    ["06", "♥", "За любов", "Безумовну, справжню і величезну."],

    ["07", "☕", "За затишок", "Ти вмієш перетворити дім на місце, куди хочеться повертатися."],

    ["08", "✦", "За силу", "Ти сильніша, ніж сама думаєш."],

    ["09", "♡", "За терпіння", "Особливо з нами 😅"],

    ["10", "☼", "За сміх", "Наш сімейний саундтрек."],

    ["11", "✧", "За мудрість", "Твої поради іноді працюють краще за Google."],

    ["12", "♥", "За доброту", "Ти робиш світ навколо себе теплішим."],

    ["13", "♡", "За віру в нас", "Навіть тоді, коли ми самі в себе не дуже віримо."],

    ["14", "✦", "За пригоди", "З тобою навіть похід у магазин може стати історією."],

    ["15", "☼", "За красу", "Внутрішню. І зовнішню теж, куди ж без цього."],

    ["16", "♡", "За чесність", "Ти завжди скажеш правду. Навіть якщо ми її не просили 😂"],

    ["17", "✧", "За атмосферу", "Поруч із тобою якось спокійніше."],

    ["18", "♥", "За ніжність", "Вона відчувається навіть у маленьких речах."],

    ["19", "☕", "За наші розмови", "Від серйозних до абсолютно безглуздих."],

    ["20", "✦", "За пам'ять", "Ти пам'ятаєш те, що ми вже давно забули."],

    ["21", "♡", "За твою енергію", "Її вистачає на всіх."],

    ["22", "☼", "За сім'ю", "Ти — її серце."],

    ["23", "✧", "За мрії", "Ти вчиш нас не боятися мріяти."],

    ["24", "♥", "За захист", "Наш особистий супергерой без плаща."],

    ["25", "♡", "За красу моментів", "Ти вмієш їх помічати."],

    ["26", "✦", "За підтримку", "У будь-якій ситуації."],

    ["27", "☼", "За гумор", "Без нього ми б точно не вижили."],

    ["28", "♡", "За твою душу", "Вона неймовірна."],

    ["29", "✧", "За тепло", "Його відчуваєш навіть здалеку."],

    ["30", "♥", "За натхнення", "Ти надихаєш бути кращими."],

    ["31", "☕", "За домашні моменти", "Найцінніші речі часто найпростіші."],

    ["32", "✦", "За твою сміливість", "Ти не здаєшся."],

    ["33", "♡", "За кожен спогад", "Ми збираємо їх разом."],

    ["34", "✧", "За те, що ти — це ти", "Іншої такої мами просто немає."],

    ["35", "♥", "За все", "Цю причину неможливо вмістити в одну картку."]
];


const reasonsGrid =
    document.getElementById("reasonsGrid");


reasons.forEach(reason => {

    const card =
        document.createElement("div");

    card.className =
        "reason-card";

    card.innerHTML = `

        <div class="reason-number">
            ${reason[0]}
        </div>

        <div class="reason-icon">
            ${reason[1]}
        </div>

        <h3>
            ${reason[2]}
        </h3>

        <p>
            ${reason[3]}
        </p>

    `;

    card.addEventListener(
        "click",
        () => {

            createHearts(4);

            showToast(
                reason[2]
            );

        }
    );

    reasonsGrid.appendChild(card);

});


/* =========================================
   RUNAWAY "NO" BUTTON
========================================= */

const noBtn =
    document.getElementById("noBtn");

const noZone =
    document.getElementById("noZone");

let noEscapes = 0;


function moveNoButton() {

    const zoneRect =
        noZone.getBoundingClientRect();

    const buttonRect =
        noBtn.getBoundingClientRect();


    const maxX =
        zoneRect.width -
        buttonRect.width;

    const maxY =
        zoneRect.height -
        buttonRect.height;


    const x =
        Math.random() *
        Math.max(1, maxX);

    const y =
        Math.random() *
        Math.max(1, maxY);


    noBtn.style.left =
        `${x}px`;

    noBtn.style.top =
        `${y}px`;

    noBtn.style.transform =
        "none";


    noEscapes++;


    const messages = [

        "Ой! Не встигла 😭",

        "Вона втекла!",

        "Мамо, кнопка тебе боїться 😂",

        "Ще одна спроба? 👀",

        "Система: відповідь «НІ» заблокована.",

        "35 років тренування ухиляння від кнопок 😭"

    ];


    document
        .getElementById("gameMessage")
        .textContent =
        messages[
            Math.min(
                noEscapes - 1,
                messages.length - 1
            )
        ];

}


noBtn.addEventListener(
    "mouseenter",
    moveNoButton
);


noBtn.addEventListener(
    "touchstart",
    event => {

        event.preventDefault();

        moveNoButton();

    }
);


noBtn.addEventListener(
    "click",
    event => {

        event.preventDefault();

        moveNoButton();

    }
);


/* =========================================
   CORRECT GAME ANSWER
========================================= */

function correctAnswer() {

    document
        .getElementById("gameMessage")
        .textContent =
        "Правильно! Інших варіантів система не передбачала 😂❤️";

    createHearts(25);

    showToast(
        "МАМА = ЛЕГЕНДА ♡"
    );

}


/* =========================================
   QUIZ
========================================= */

const questions = [

    {
        question:
            "Що мама найчастіше каже перед виходом?",

        answers: [
            "Ти взяла куртку?",
            "Вимкни світло.",
            "Де мій телефон?",
            "Усе перелічене."
        ],

        correct: 3
    },

    {
        question:
            "Що найважливіше сьогодні?",

        answers: [
            "Торт",
            "Подарунок",
            "Гарний настрій",
            "Мамине щастя"
        ],

        correct: 3
    },

    {
        question:
            "Хто головна людина в сім'ї?",

        answers: [
            "Кіт",
            "Мама",
            "Телевізор",
            "Той, хто знає пароль від Wi-Fi"
        ],

        correct: 1
    },

    {
        question:
            "Скільки років сьогодні виповнилося мамі?",

        answers: [
            "25",
            "30",
            "35",
            "18 назавжди"
        ],

        correct: 2
    },

    {
        question:
            "Що мама заслуговує отримувати щодня?",

        answers: [
            "Любов",
            "Обійми",
            "Щастя",
            "Усе одразу ❤️"
        ],

        correct: 3
    }

];


let currentQuestion = 0;
let quizScore = 0;


function showQuestion() {

    const data =
        questions[currentQuestion];


    document
        .getElementById("question")
        .textContent =
        data.question;


    document
        .getElementById("quizProgress")
        .textContent =
        String(
            currentQuestion + 1
        ).padStart(2, "0");


    document
        .getElementById("progressLine")
        .style.width =
        `${((currentQuestion + 1) / questions.length) * 100}%`;


    const answers =
        document.getElementById("answers");

    answers.innerHTML = "";


    data.answers.forEach(
        (answer, index) => {

            const button =
                document.createElement("button");

            button.className =
                "answer";

            button.textContent =
                answer;


            button.addEventListener(
                "click",
                () => {

                    chooseAnswer(
                        index
                    );

                }
            );


            answers.appendChild(button);

        }
    );

}


function chooseAnswer(index) {

    const data =
        questions[currentQuestion];

    const result =
        document.getElementById("quizResult");


    if (
        index ===
        data.correct
    ) {

        quizScore++;

        result.textContent =
            "✓ Правильно! ❤️";

    } else {

        result.textContent =
            "Майже 😄 Але мама все одно молодець.";

    }


    const buttons =
        document.querySelectorAll(
            ".answer"
        );


    buttons.forEach(button => {

        button.disabled = true;

    });


    setTimeout(() => {

        currentQuestion++;


        if (
            currentQuestion <
            questions.length
        ) {

            result.textContent = "";

            showQuestion();

        } else {

            document
                .getElementById("question")
                .textContent =
                `Результат: ${quizScore}/5 🎉`;


            document
                .getElementById("answers")
                .innerHTML = `

                    <div
                        style="
                            grid-column:1/-1;
                            text-align:center;
                            padding:25px;
                        "
                    >

                        <strong>
                            ${quizScore >= 4
                                ? "МАМА ОФІЦІЙНО ЛЕГЕНДА 🏆"
                                : "МАМА ВСЕ ОДНО ЛЕГЕНДА 🏆"
                            }
                        </strong>

                        <br><br>

                        А тепер головне —
                        святкувати! ❤️

                    </div>

                `;


            createHearts(30);

        }

    }, 900);

}


showQuestion();


/* =========================================
   ENVELOPE
========================================= */

const envelope =
    document.getElementById("envelope");


envelope.addEventListener(
    "click",
    () => {

        envelope
            .classList
            .toggle("open");

        if (
            envelope
                .classList
                .contains("open")
        ) {

            createHearts(15);

            showToast(
                "Тут заховані найважливіші слова 💌"
            );

        }

    }
);


/* =========================================
   CAKE
========================================= */

const candles =
    document.querySelectorAll(
        ".candle"
    );

let candlesLeft =
    candles.length;


const candleText =
    document.getElementById(
        "candleText"
    );


candles.forEach(
    candle => {

        candle.addEventListener(
            "click",
            event => {

                event.stopPropagation();


                if (
                    candle.classList
                        .contains("off")
                ) {
                    return;
                }


                candle.classList
                    .add("off");


                candlesLeft--;


                if (
                    candlesLeft > 0
                ) {

                    candleText.textContent =
                        `${candlesLeft} свічки ще горять ✨`;

                    createHearts(5);

                } else {

                    candleText.textContent =
                        "Бажання загадано. ✨";


                    createHearts(80);

                    unlockFinale();

                }

            }
        );

    }
);


/* =========================================
   FINALE
========================================= */

function unlockFinale() {

    const finale =
        document.getElementById(
            "finale"
        );


    finale.classList.add(
        "unlocked"
    );


    setTimeout(() => {

        finale.scrollIntoView({
            behavior: "smooth"
        });

    }, 700);

}


function finalCelebration() {

    createHearts(100);

    showToast(
        "Ще багато щасливих років попереду! ✨"
    );

}


/* =========================================
   SECRET 35
========================================= */

const secretButton =
    document.getElementById(
        "secretButton"
    );


let secretClicks = 0;


secretButton.addEventListener(
    "click",
    () => {

        secretClicks++;


        if (
            secretClicks === 1
        ) {

            showToast(
                "Ти знайшла секрет 👀"
            );

        }


        if (
            secretClicks === 3
        ) {

            showToast(
                "Окей... ти реально шукала 😂"
            );

            createHearts(20);

        }


        if (
            secretClicks >= 5
        ) {

            showToast(
                "LEVEL 35 ACTIVATED ✨"
            );

            createHearts(50);

            document.body
                .classList
                .toggle(
                    "secret-mode"
                );

        }

    }
);


/* =========================================
   KEYBOARD EASTER EGG
========================================= */

let typedCode = "";


document.addEventListener(
    "keydown",
    event => {

        typedCode +=
            event.key.toLowerCase();


        if (
            typedCode.length > 10
        ) {

            typedCode =
                typedCode.slice(-10);

        }


        if (
            typedCode.includes("mama")
        ) {

            createHearts(40);

            showToast(
                "МАМА ❤️"
            );

            typedCode = "";

        }

    }
);


/* =========================================
   PHOTO MODAL
========================================= */

const photoModal =
    document.getElementById(
        "photoModal"
    );

const modalImage =
    document.getElementById(
        "modalImage"
    );


document
    .querySelectorAll(
        ".film-frame img"
    )
    .forEach(image => {

        image.addEventListener(
            "click",
            event => {

                event.stopPropagation();

                modalImage.src =
                    image.src;

                photoModal
                    .classList
                    .add("open");

            }
        );

    });


document
    .getElementById("modalClose")
    .addEventListener(
        "click",
        () => {

            photoModal
                .classList
                .remove("open");

        }
    );


photoModal.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            photoModal
        ) {

            photoModal
                .classList
                .remove("open");

        }

    }
);


/* =========================================
   FLOATING HEARTS
========================================= */

function createHearts(amount) {

    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const heart =
            document.createElement("div");


        heart.className =
            "floating-heart";


        heart.textContent =
            [
                "♡",
                "♥",
                "✦",
                "✧",
                "⋆"
            ][
                Math.floor(
                    Math.random() * 5
                )
            ];


        heart.style.left =
            Math.random() * 100 +
            "vw";


        heart.style.bottom =
            "-30px";


        heart.style.fontSize =
            12 +
            Math.random() * 25 +
            "px";


        heart.style.animationDuration =
            3 +
            Math.random() * 3 +
            "s";


        document.body
            .appendChild(heart);


        setTimeout(
            () => heart.remove(),
            6500
        );

    }

}


/* =========================================
   TOAST
========================================= */

function showToast(message) {

    const toast =
        document.getElementById(
            "toast"
        );


    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        window.toastTimeout
    );


    window.toastTimeout =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2500
        );

}


/* =========================================
   MUSIC BUTTON
========================================= */

const musicButton =
    document.getElementById(
        "musicBtn"
    );


let musicOn = false;


musicButton.addEventListener(
    "click",
    () => {

        musicOn =
            !musicOn;


        musicButton
            .classList
            .toggle(
                "active",
                musicOn
            );


        if (musicOn) {

            showToast(
                "Музика увімкнена ♫"
            );

        } else {

            showToast(
                "Музика вимкнена"
            );

        }

    }
);


/* =========================================
   SECRET MODE
========================================= */

const secretStyle =
    document.createElement(
        "style"
    );


secretStyle.textContent = `

    .secret-mode {
        filter:
            saturate(1.15)
            contrast(1.02);
    }

    .secret-mode .number-35,
    .secret-mode .finale-number {
        animation:
            secret35Glow 1s infinite alternate;
    }

    @keyframes secret35Glow {

        from {
            filter:
                drop-shadow(
                    0 0 0
                    rgba(217,130,157,0)
                );
        }

        to {
            filter:
                drop-shadow(
                    0 0 25px
                    rgba(217,130,157,.7)
                );
        }

    }

`;

document.head.appendChild(
    secretStyle
);
