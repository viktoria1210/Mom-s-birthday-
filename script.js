/* =====================================================
   35 ПРИЧИН — МАМА
   Повністю самостійний JS
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =================================================
       LOADER
    ================================================= */

    const loader = document.getElementById("loader");

    setTimeout(() => {
        if (loader) {
            loader.classList.add("loaded");
        }
    }, 1600);


    /* =================================================
       MUSIC
    ================================================= */

    const music = document.getElementById("birthdayMusic");
    const musicBtn = document.getElementById("musicBtn");
    const startBtn = document.getElementById("startBtn");

    let musicPlaying = false;

    function playMusic() {

        if (!music) return;

        music.volume = 0.45;

        const promise = music.play();

        if (promise !== undefined) {

            promise
                .then(() => {

                    musicPlaying = true;

                    if (musicBtn) {
                        musicBtn.classList.add("playing");
                        musicBtn.textContent = "♫";
                    }

                })
                .catch(() => {

                    musicPlaying = false;

                    if (musicBtn) {
                        musicBtn.classList.remove("playing");
                    }

                });
        }
    }

    function pauseMusic() {

        if (!music) return;

        music.pause();

        musicPlaying = false;

        if (musicBtn) {
            musicBtn.classList.remove("playing");
            musicBtn.textContent = "♫";
        }
    }

    if (musicBtn) {

        musicBtn.addEventListener("click", () => {

            if (musicPlaying) {
                pauseMusic();
            } else {
                playMusic();
            }

        });

    }

    /*
       На телефоні браузер не дозволяє автоматично
       запускати музику зі звуком.
       Тому перший клік "Відкрити подарунок"
       запускає її.
    */

    if (startBtn) {

        startBtn.addEventListener("click", () => {

            playMusic();

            document.querySelector(".intro")?.scrollIntoView({
                behavior: "smooth"
            });

        });

    }


    /* =================================================
       REVEAL ANIMATIONS
    ================================================= */

    const revealElements = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver(
        (entries) => {

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


    /* =================================================
       35 REASONS
    ================================================= */

    const reasons = [
        ["Твоя любов", "Ти любиш нас просто так, без умов."],
        ["Твоя турбота", "Ти завжди думаєш про нас першою."],
        ["Твої обійми", "У твоїх обіймах завжди стає спокійніше."],
        ["Твоя усмішка", "Вона може зробити звичайний день особливим."],
        ["Твоє терпіння", "Його іноді потрібно реально нагородити медаллю 😄."],
        ["Твій сміх", "Його неможливо не любити."],
        ["Твої поради", "Навіть коли ми робимо вигляд, що не слухаємо."],
        ["Твоє серце", "У ньому вистачає місця для всіх нас."],
        ["Твоя сила", "Ти сильніша, ніж сама думаєш."],
        ["Твоя доброта", "Ти завжди намагаєшся допомогти."],
        ["Твоя краса", "Вона не тільки зовнішня."],
        ["Твоя щирість", "З тобою можна бути собою."],
        ["Наш дім", "Ти робиш його справжнім домом."],
        ["Наші розмови", "Від серйозних до абсолютно безглуздих."],
        ["Наші пригоди", "Навіть звичайна поїздка з тобою стає пригодою."],
        ["Твоє «все буде добре»", "І я чомусь завжди тобі вірю."],
        ["Твоя підтримка", "Ти віриш у нас навіть тоді, коли ми самі сумніваємося."],
        ["Твоя сміливість", "Ти не боїшся починати спочатку."],
        ["Твоя енергія", "Її вистачає на цілу сім'ю."],
        ["Твоя мудрість", "Ти знаєш більше, ніж здається."],
        ["Твоє тепло", "Поруч із тобою просто добре."],
        ["Твої маленькі сюрпризи", "Ти вмієш робити щасливими дрібницями."],
        ["Твоя ніжність", "Вона відчувається навіть без слів."],
        ["Твоє почуття гумору", "Іноді воно рятує ситуацію 😂."],
        ["Твоя віра в нас", "Це одна з найцінніших речей."],
        ["Твої мрії", "Ми хочемо, щоб усі вони здійснилися."],
        ["Твоя справжність", "Ти ніколи не намагаєшся бути кимось іншим."],
        ["Твої очі", "У них завжди видно твою доброту."],
        ["Твоє «я поруч»", "Ці три слова означають дуже багато."],
        ["Наші спогади", "Їх уже стільки, що вистачить на цілий фільм."],
        ["Твоє материнське серце", "Це твоя суперсила."],
        ["Твоє щастя", "Нам дуже хочеться бачити тебе щасливою."],
        ["Твоя особливість", "Такої мами більше немає."],
        ["Твоє життя", "Ми неймовірно раді бути його частиною."],
        ["Просто ТИ", "І цього вже достатньо. ❤️"]
    ];

    const reasonsGrid = document.getElementById("reasonsGrid");

    if (reasonsGrid) {

        reasons.forEach((reason, index) => {

            const card = document.createElement("article");

            card.className = "reason-card";

            card.innerHTML = `
                <div class="reason-number">
                    ${String(index + 1).padStart(2, "0")}
                </div>

                <h3>${reason[0]}</h3>

                <p>${reason[1]}</p>
            `;

            reasonsGrid.appendChild(card);

        });

    }


    /* =================================================
       GAME — КНОПКА "НІ" ВТІКАЄ
    ================================================= */

    const noBtn = document.getElementById("noBtn");
    const noZone = document.getElementById("noZone");
    const yesBtn = document.getElementById("yesBtn");
    const gameMessage = document.getElementById("gameMessage");

    let noAttempts = 0;

    function moveNoButton() {

        if (!noBtn || !noZone) return;

        noAttempts++;

        const zoneWidth = noZone.clientWidth;
        const zoneHeight = noZone.clientHeight;

        const buttonWidth = noBtn.offsetWidth;
        const buttonHeight = noBtn.offsetHeight;

        const maxX = Math.max(0, zoneWidth - buttonWidth);
        const maxY = Math.max(0, zoneHeight - buttonHeight);

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;

        if (noAttempts === 3) {
            showToast("Хммм... кнопка «Ні» чомусь дуже сором'язлива 😂");
        }

        if (noAttempts === 6) {
            showToast("Мамо, вона вже зрозуміла, що ти хочеш натиснути «Ні» 😭");
        }

        if (noAttempts >= 10) {
            showToast("ВСЕ. Кнопка «Ні» звільнилася з роботи 😂");
        }
    }

    if (noBtn) {

        noBtn.addEventListener("mouseenter", moveNoButton);

        noBtn.addEventListener("pointerdown", (event) => {
            event.preventDefault();
            moveNoButton();
        });

        noBtn.addEventListener("click", (event) => {
            event.preventDefault();
            moveNoButton();
        });

    }

    if (yesBtn) {

        yesBtn.addEventListener("click", () => {

            gameMessage.innerHTML =
                "Я ТАК І ЗНАЛА! 👑❤️<br>Найкраща мама офіційно підтверджена.";

            createConfetti();

            yesBtn.textContent = "✓ ПРАВИЛЬНА ВІДПОВІДЬ";

        });

    }


    /* =================================================
       QUIZ
    ================================================= */

    const quizQuestions = [
        {
            question: "Що мама любить найбільше?",
            answers: [
                "Нашу сім'ю ❤️",
                "Спати до обіду",
                "Понеділки",
                "Контрольні"
            ],
            correct: 0
        },
        {
            question: "Що мама робить краще за всіх?",
            answers: [
                "Готувати",
                "Любити нас",
                "Бути мамою",
                "Усе перелічене ❤️"
            ],
            correct: 3
        },
        {
            question: "Скільки мамі виповнилося?",
            answers: [
                "25",
                "30",
                "35 ❤️",
                "105"
            ],
            correct: 2
        },
        {
            question: "Хто найкраща мама у світі?",
            answers: [
                "Моя мама ❤️",
                "Не знаю",
                "Мабуть сусідка",
                "Питання складне"
            ],
            correct: 0
        },
        {
            question: "Що їй найбільше потрібно сьогодні?",
            answers: [
                "Щастя ❤️",
                "Подарунки",
                "Квіти",
                "Усе разом!"
            ],
            correct: 3
        }
    ];

    let currentQuestion = 0;
    let quizScore = 0;

    const questionElement = document.getElementById("question");
    const answersElement = document.getElementById("answers");
    const quizResult = document.getElementById("quizResult");
    const quizProgress = document.getElementById("quizProgress");
    const progressLine = document.getElementById("progressLine");

    function loadQuestion() {

        if (!questionElement || !answersElement) return;

        const q = quizQuestions[currentQuestion];

        questionElement.textContent = q.question;

        answersElement.innerHTML = "";

        quizProgress.textContent =
            String(currentQuestion + 1).padStart(2, "0");

        progressLine.style.width =
            `${((currentQuestion + 1) / quizQuestions.length) * 100}%`;

        q.answers.forEach((answer, index) => {

            const button = document.createElement("button");

            button.className = "answer";
            button.textContent = answer;

            button.addEventListener("click", () => {

                const allButtons =
                    answersElement.querySelectorAll(".answer");

                allButtons.forEach(btn => {
                    btn.disabled = true;
                });

                if (index === q.correct) {

                    button.classList.add("correct");
                    quizScore++;

                    quizResult.textContent = "Правильно! ❤️";

                } else {

                    button.classList.add("wrong");
                    allButtons[q.correct].classList.add("correct");

                    quizResult.textContent =
                        "Майже! Але мама все одно молодець 😄";
                }

                setTimeout(() => {

                    currentQuestion++;

                    if (currentQuestion < quizQuestions.length) {

                        quizResult.textContent = "";
                        loadQuestion();

                    } else {

                        showQuizFinal();

                    }

                }, 1100);

            });

            answersElement.appendChild(button);

        });

    }

    function showQuizFinal() {

        questionElement.textContent =
            "Тест завершено! 🎉";

        answersElement.innerHTML = "";

        quizProgress.textContent = "✓";

        progressLine.style.width = "100%";

        let resultText;

        if (quizScore === 5) {
            resultText =
                "5/5! Мама знає свою сім'ю ІДЕАЛЬНО! 👑❤️";
        } else if (quizScore >= 3) {
            resultText =
                `${quizScore}/5! Дуже добре! ❤️`;
        } else {
            resultText =
                `${quizScore}/5! Терміново більше сімейних пригод 😂❤️`;
        }

        quizResult.innerHTML = resultText;
    }

    loadQuestion();


    /* =================================================
       ENVELOPE
    ================================================= */

    const envelope = document.getElementById("envelope");

    if (envelope) {

        envelope.addEventListener("click", () => {

            envelope.classList.toggle("open");

        });

    }


    /* =================================================
       PHOTOS MODAL
    ================================================= */

    const modal = document.getElementById("photoModal");
    const modalImage = document.getElementById("modalImage");
    const modalClose = document.getElementById("modalClose");

    const photoFrames =
        document.querySelectorAll(".film-frame img");

    photoFrames.forEach(image => {

        image.addEventListener("click", () => {

            modalImage.src = image.src;

            modal.classList.add("active");

            document.body.style.overflow = "hidden";

        });

    });

    function closeModal() {

        modal.classList.remove("active");

        document.body.style.overflow = "";

    }

    if (modalClose) {
        modalClose.addEventListener("click", closeModal);
    }

    if (modal) {

        modal.addEventListener("click", event => {

            if (event.target === modal) {
                closeModal();
            }

        });

    }


    /* =================================================
       CAKE
    ================================================= */

    const cake = document.getElementById("cake");
    const candleText = document.getElementById("candleText");

    const candles = [
        document.getElementById("c1"),
        document.getElementById("c2"),
        document.getElementById("c3"),
        document.getElementById("c4"),
        document.getElementById("c5")
    ];

    let candlesOut = 0;

    if (cake) {

        cake.addEventListener("click", () => {

            if (candlesOut >= candles.length) return;

            const candle = candles[candlesOut];

            candle.classList.add("off");

            candlesOut++;

            const remaining =
                candles.length - candlesOut;

            if (remaining > 0) {

                candleText.textContent =
                    `${remaining} свічк${remaining === 1 ? "а" : "и"} ще гор${remaining === 1 ? "ить" : "ять"} ✨`;

            } else {

                candleText.textContent =
                    "БАЖАННЯ ЗАГАДАНО! 🎂✨❤️";

                createConfetti();

                setTimeout(() => {

                    document.getElementById("finale")
                        ?.scrollIntoView({
                            behavior: "smooth"
                        });

                }, 1500);

            }

        });

    }


    /* =================================================
       SECRET 35
    ================================================= */

    const secretButton =
        document.getElementById("secretButton");

    if (secretButton) {

        secretButton.addEventListener("click", () => {

            showToast(
                "Ти знайшла секрет! 🎀 35 — це тільки початок ❤️"
            );

            createConfetti();

        });

    }


    /* =================================================
       FINAL BUTTON
    ================================================= */

    const finalBtn =
        document.getElementById("finalBtn");

    if (finalBtn) {

        finalBtn.addEventListener("click", () => {

            createConfetti(100);

            finalBtn.innerHTML =
                "<span>Ти неймовірна! ❤️</span><b>✦</b>";

            showToast(
                "Ще одне маленьке диво спеціально для тебе ✨"
            );

        });

    }


    /* =================================================
       TOAST
    ================================================= */

    window.showToast = function(message) {

        const toast = document.getElementById("toast");

        if (!toast) return;

        toast.textContent = message;

        toast.classList.add("show");

        clearTimeout(window.toastTimer);

        window.toastTimer = setTimeout(() => {

            toast.classList.remove("show");

        }, 2800);

    };


    /* =================================================
       CONFETTI
    ================================================= */

    window.createConfetti = function(amount = 55) {

        const symbols = ["♡", "✦", "✧", "♥", "✨"];

        for (let i = 0; i < amount; i++) {

            const item = document.createElement("div");

            item.textContent =
                symbols[Math.floor(Math.random() * symbols.length)];

            item.style.position = "fixed";
            item.style.left = Math.random() * 100 + "vw";
            item.style.top = "-30px";
            item.style.zIndex = "20000";
            item.style.pointerEvents = "none";

            item.style.fontSize =
                (12 + Math.random() * 22) + "px";

            item.style.color =
                Math.random() > .5
                    ? "#e89bb6"
                    : "#dfb96f";

            document.body.appendChild(item);

            const duration =
                1800 + Math.random() * 2200;

            const endX =
                (Math.random() - .5) * 300;

            item.animate(
                [
                    {
                        transform: "translate(0, 0) rotate(0deg)",
                        opacity: 1
                    },
                    {
                        transform:
                            `translate(${endX}px, 105vh) rotate(720deg)`,
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
            }, duration + 100);

        }

    }


    /* =================================================
       KEYBOARD ESC
    ================================================= */

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            if (modal?.classList.contains("active")) {
                closeModal();
            }

        }

    });

});
