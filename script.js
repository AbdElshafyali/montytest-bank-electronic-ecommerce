// Load all question parts
// Note: Make sure to include the separate question files in HTML before this script

// ==================== COMBINED QUIZ DATA (80 Questions Total) ====================
// This will be populated once all question files are loaded
let quizData = [];

// Function to load and combine all questions
function loadAllQuestions() {
    quizData = [];

    // Check if question parts are loaded
    if (typeof quizDataPart1 !== 'undefined') {
        quizData = quizData.concat(quizDataPart1);
    }
    if (typeof quizDataPart2 !== 'undefined') {
        quizData = quizData.concat(quizDataPart2);
    }
    if (typeof quizDataMCQ1 !== 'undefined') {
        quizData = quizData.concat(quizDataMCQ1);
    }
    if (typeof quizDataMCQ2 !== 'undefined') {
        quizData = quizData.concat(quizDataMCQ2);
    }

    // Shuffle questions for variety (optional)
    // quizData = shuffleArray(quizData);

    console.log(`✅ تم تحميل ${quizData.length} سؤال بنجاح!`);
}

// Optional: Shuffle function
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Encouraging messages for wrong answers (Egyptian Arabic - heavy slang)
const encouragementMessages = [
    "ولا يهمك يا مونتي، فداكي يا قلبي! 🌸",
    "عادي يا بت، بتحصل في أحسن العائلات! 😅",
    "يا خراشي على الزعل! لا جربي تاني يا قمر ✋",
    "معلش يا روحي، المرة الجاية هتيجي معاكي 🎯",
    "انتي قدها يا كتكوتة، متيأسيش! 💪",
    "يا ستي ولا تزعلي نفسك، ادخلي عليها تاني! ❤️",
    "حصل خير يا ست البنات، ركزي سيكا بس! ✨",
    "مش مشكلة يا حبي، كلنا بنعك عادي! 😂",
    "قومي يا بت وانفضي التراب، انتي جامدة! 🦁",
    "يا خبر! بسيطة يا حبي، ولا تشغلي بالك! 🤷‍♀️",
    "انتي أشطر من كدا يا مونتي، ورينا العظمة! 🔥",
    "عادي يا قلبي، محدش بيتعلم ببلاش! 💸",
    "يا واد يا جامد انت، ولا يهمك كملي! 😎",
    "المرة دي فلتت، المرة الجاية في الجون! ⚽",
    "انتي برنسيسة أصلاً حتى لو غلطتي! 👑"
];

// Success messages (Egyptian Arabic - celebrations)
const successMessages = [
    "شطورة يا مونتي! ايوة كدة! 😍",
    "برافو يا حياتي.. هو ده الكلام! 👏",
    "ايه الشطارة دي؟ اللهم صلي على النبي على الحلاوة! 💖",
    "أشطر كتكوتة في المجرة والله 🐥",
    "ايه يا بت الجمدان ده؟ خدي بوسة 😘",
    "الله عليكي يا جامدة.. دماغ ألماظ! 💎",
    "يا خرابي على العسل.. مفيش منك اتنين! 🍯",
    "زغروطة للجميل بقا! لولولولولي 💃",
    "ايه الحلاوة دي يا مونتي! اللهم بارك! 🧿",
    "تسلم ايدك يا ست البنات، إجابة مسطرة! 👌",
    "يا وعدي على الشطارة! خدي قلبي اهو ❤️",
    "عظمة على عظمة يا ست الكل! 🏛️",
    "يا ناس يا عسل، مونتي وصلت! 🐝",
    "إيه السرعة والذكاء ده؟ كمبيوتر يا خواتي! 💻",
    "خمسة وخميسة عليكي من الحسد يا قمر! 🖐️",
    "يا ولا يا ولا! جبتيها منين دي يا سكر؟ 😉"
];

// ==================== STATE VARIABLES ====================
let currentQuestionIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let selectedAnswer = null;
let isAnswered = false;

// ==================== RETRY SYSTEM FOR WRONG ANSWERS ====================
let wrongAnswers = []; // أسئلة تمت الإجابة عليها بشكل خاطئ
let wrongAnswerRetryCount = {}; // عدد مرات إعادة السؤال لكل سؤال
let questionsAsked = 0; // عدد الأسئلة المطروحة (للتحكم في التوقيت)
const RETRY_INTERVAL = 5; // إعادة سؤال خاطئ كل 5 أسئلة
const MAX_RETRIES = 2; // أقصى عدد لإعادة نفس السؤال
// ==================== NEXT QUESTION ====================
function nextQuestion() {
    const currentQuestion = document.querySelector('.question-container');

    // إذا كان السؤال الحالي سؤال مراجعة، لا تتقدم في الفهرس
    const question = quizData[currentQuestionIndex];
    if (!question.isRetry) {
        currentQuestionIndex++;
    }

    document.getElementById('feedback-container').classList.remove('show');
    displayQuestion();
}
// ==================== DOM ELEMENTS ====================
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const feedbackContainer = document.getElementById('feedback-container');
const nextButton = document.getElementById('next-button');
const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const correctCountEl = document.getElementById('correct-count');
const wrongCountEl = document.getElementById('wrong-count');
const quizCard = document.getElementById('quiz-card');
const resultsCard = document.getElementById('results-card');
const restartButton = document.getElementById('restart-button');
const celebrationCanvas = document.getElementById('celebration-canvas');
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('.theme-icon');

// ==================== CELEBRATION CANVAS SETUP ====================
const ctx = celebrationCanvas.getContext('2d');
celebrationCanvas.width = window.innerWidth;
celebrationCanvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    celebrationCanvas.width = window.innerWidth;
    celebrationCanvas.height = window.innerHeight;
});

// ==================== CONFETTI CLASS ====================
class Confetti {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * celebrationCanvas.width;
        this.y = -10;
        this.size = Math.random() * 8 + 4;
        this.speedY = Math.random() * 3 + 2;
        this.speedX = Math.random() * 2 - 1;
        this.color = `hsl(${Math.random() * 360}, 100%, 60%)`;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = Math.random() * 10 - 5;
    }

    update() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.rotation += this.rotationSpeed;

        if (this.y > celebrationCanvas.height) {
            this.reset();
        }
    }

    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation * Math.PI / 180);
        ctx.fillStyle = this.color;
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        ctx.restore();
    }
}

let confettiParticles = [];
let isConfettiActive = false;

function startConfetti() {
    confettiParticles = [];
    for (let i = 0; i < 150; i++) {
        confettiParticles.push(new Confetti());
    }
    isConfettiActive = true;
    animateConfetti();
}

function stopConfetti() {
    isConfettiActive = false;
    confettiParticles = [];
    ctx.clearRect(0, 0, celebrationCanvas.width, celebrationCanvas.height);
}

function animateConfetti() {
    if (!isConfettiActive) return;

    ctx.clearRect(0, 0, celebrationCanvas.width, celebrationCanvas.height);

    confettiParticles.forEach(particle => {
        particle.update();
        particle.draw();
    });

    requestAnimationFrame(animateConfetti);
}

// ==================== DISPLAY QUESTION ====================
function displayQuestion() {
    // التحقق من نهاية الأسئلة الأساسية
    if (currentQuestionIndex >= quizData.length) {
        // إذا كان هناك أسئلة خاطئة متبقية، أعد عرضها للمراجعة النهائية
        if (wrongAnswers.length > 0) {
            const retryQuestion = wrongAnswers.shift();
            displayRetryQuestion(retryQuestion);
            return;
        }
        // إذا انتهت جميع الأسئلة بما فيها المراجعة، اعرض النتائج
        showResults();
        return;
    }

    // التحقق مما إذا كان يجب إدراج سؤال للمراجعة
    questionsAsked++;
    if (questionsAsked % RETRY_INTERVAL === 0 && wrongAnswers.length > 0) {
        const retryQuestion = wrongAnswers.shift();
        displayRetryQuestion(retryQuestion);
        return;
    }

    // عرض السؤال العادي
    const question = quizData[currentQuestionIndex];
    displayCurrentQuestion(question);
}

// عرض سؤال للمراجعة (من الأسئلة الخاطئة السابقة)
function displayRetryQuestion(questionData) {
    const question = questionData.question;
    question.isRetry = true; // علامة أن هذا سؤال للمراجعة
    question.originalData = questionData; // حفظ البيانات الأصلية

    displayCurrentQuestion(question);

    // إضافة مؤشر بصري أن هذا سؤال للمراجعة
    const questionContainer = document.querySelector('.question-container');
    const retryBadge = document.createElement('div');
    retryBadge.className = 'retry-badge';
    retryBadge.innerHTML = '🔄 مراجعة - دي فرصة تانية!';
    questionContainer.insertBefore(retryBadge, questionContainer.firstChild);
}

// عرض السؤال الحالي (للاستخدام المشترك)
function displayCurrentQuestion(question) {
    // إعادة تعيين الحالة
    isAnswered = false;
    selectedAnswer = null;
    document.getElementById('next-button').style.display = 'none';
    document.getElementById('feedback-container').innerHTML = '';

    // عرض السؤال
    document.getElementById('question-text').textContent = question.question;

    // عرض الإجابات
    const answersContainer = document.getElementById('answers-container');
    answersContainer.innerHTML = '';

    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'answer-button';
        button.textContent = answer;
        button.onclick = () => selectAnswer(index, button);
        answersContainer.appendChild(button);
    });

    // تحديث شريط التقدم
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    const actualIndex = question.isRetry ? '(مراجعة)' : currentQuestionIndex + 1;
    const progress = ((currentQuestionIndex) / quizData.length) * 100;

    progressFill.style.width = progress + '%';
    progressText.textContent = question.isRetry
        ? `مراجعة سؤال سابق`
        : `سؤال ${currentQuestionIndex + 1} من ${quizData.length}`;
}

function selectAnswer(answerIndex) {
    if (selectedAnswer !== null) return; // Prevent multiple selections

    selectedAnswer = answerIndex;
    const question = quizData[currentQuestionIndex];
    const answerButtons = document.querySelectorAll('.answer-option');

    // Disable all buttons
    answerButtons.forEach(btn => btn.classList.add('disabled'));

    // Mark selected answer
    answerButtons[answerIndex].classList.add('selected');

    // Check if correct
    const isCorrect = answerIndex === question.correctAnswer;

    setTimeout(() => {
        if (isCorrect) {
            handleCorrectAnswer(answerButtons[answerIndex]);
        } else {
            handleWrongAnswer(answerButtons[answerIndex], answerButtons[question.correctAnswer]);
        }
    }, 300);
}

function handleCorrectAnswer(selectedButton) {
    correctCount++;
    correctCountEl.textContent = correctCount;

    selectedButton.classList.remove('selected');
    selectedButton.classList.add('correct');

    // Show success feedback
    const randomSuccess = successMessages[Math.floor(Math.random() * successMessages.length)];
    feedbackContainer.innerHTML = `
        <div class="feedback-message">
            <span class="feedback-icon">✅</span>
            ${randomSuccess}
        </div>
    `;
    feedbackContainer.classList.add('show', 'correct-feedback');

    // Start confetti celebration
    startConfetti();

    // Show next button
    nextButton.style.display = 'flex';

    // Stop confetti after 3 seconds
    setTimeout(() => {
        stopConfetti();
    }, 3000);
}

function handleWrongAnswer(selectedButton, correctButton) {
    wrongCount++;
    wrongCountEl.textContent = wrongCount;

    selectedButton.classList.remove('selected');
    selectedButton.classList.add('wrong');
    correctButton.classList.add('correct');

    // الحصول على رسالة تشجيع عشوائية
    const encouragement = encouragementMessages[Math.floor(Math.random() * encouragementMessages.length)];

    // الحصول على الإجابة الصحيحة
    const correctAnswerText = question.answers[question.correctAnswer];

    // بناء رسالة الشرح والمثال
    let explanationHTML = '';
    if (question.explanation && question.example) {
        explanationHTML = `
            <div class="explanation-box">
                <div class="explanation-title">📚 الشرح:</div>
                <div class="explanation-text">${question.explanation}</div>
                <div class="explanation-title">💡 مثال:</div>
                <div class="example-text">${question.example}</div>
            </div>
        `;
    }

    // عرض التغذية الراجعة
    const feedbackContainer = document.getElementById('feedback-container');
    feedbackContainer.innerHTML = `
        <div class="feedback wrong">
            <div class="feedback-icon">❌</div>
            <div class="feedback-text">${encouragement}</div>
            <div class="correct-answer">
                ✓ الإجابة الصحيحة: <strong>${correctAnswerText}</strong>
            </div>
            ${explanationHTML}
        </div>
    `;

    feedbackContainer.classList.add('show', 'wrong-feedback'); // Added 'wrong-feedback' class

    // إضافة السؤال لقائمة المراجعة (إذا لم يتم إعادته أكثر من الحد الأقصى)
    if (!question.isRetry) {
        // سؤال جديد، أضفه للمراجعة
        const questionId = currentQuestionIndex;
        // Assuming wrongAnswerRetryCount and MAX_RETRIES are defined elsewhere
        // wrongAnswerRetryCount[questionId] = 1; 
        wrongAnswers.push({
            question: question,
            questionId: questionId,
            retryCount: 1
        });
    } else {
        // سؤال للمراجعة تمت الإجابة عليه بشكل خاطئ مرة أخرى
        const originalData = question.originalData;
        originalData.retryCount++;

        // Assuming MAX_RETRIES is defined elsewhere
        if (originalData.retryCount < MAX_RETRIES) {
            // أضفه مرة أخرى للمراجعة
            wrongAnswers.push(originalData);
        }
        // إذا وصل للحد الأقصى، لا نعيده مرة أخرى
    }

    // Show next button
    nextButton.style.display = 'flex';
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        displayQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    quizCard.style.display = 'none';
    resultsCard.style.display = 'block';

    const totalQuestions = quizData.length;
    const percentage = Math.round((correctCount / totalQuestions) * 100);

    document.getElementById('final-correct').textContent = correctCount;
    document.getElementById('final-wrong').textContent = wrongCount;
    document.getElementById('final-percentage').textContent = `${percentage}%`;

    // Personalized final message (Egyptian Arabic)
    let finalMessage = '';
    if (percentage === 100) {
        finalMessage = '🎉 يا سلااام يا منتي! جبتي الدرجة كاملة! انتي نجمة بجد! 🌟';
        startConfetti();
    } else if (percentage >= 80) {
        finalMessage = '💖 ممتازة والله يا قمر! مستواكي تحفة! 👏';
        startConfetti();
        setTimeout(() => stopConfetti(), 4000);
    } else if (percentage >= 60) {
        finalMessage = '✨ جميل أوي يا شطورة! كملي تدريب وهتوصلي للقمة! 💪';
    } else if (percentage >= 40) {
        finalMessage = '🌸 لسه قدامك فرصة تتحسني يا جميل! انتي تقدري! 💝';
    } else {
        finalMessage = '💖 ماتقلقيش يا حبيبتي! جربي تاني وهتبقي أحسن بكتير! انا واثقة فيكي! 🌟';
    }

    document.getElementById('final-message').textContent = finalMessage;
}

function restartQuiz() {
    currentQuestion = 0;
    correctCount = 0;
    wrongCount = 0;
    selectedAnswer = null;

    correctCountEl.textContent = '0';
    wrongCountEl.textContent = '0';

    quizCard.style.display = 'block';
    resultsCard.style.display = 'none';

    stopConfetti();
    displayQuestion();
}

// ==================== THEME TOGGLE ====================
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');

    // Update icon
    themeIcon.textContent = isDark ? '☀️' : '🌙';

    // Save preference
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Load saved theme
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeIcon.textContent = '☀️';
    }
}

// ==================== EVENT LISTENERS ====================
nextButton.addEventListener('click', nextQuestion);
restartButton.addEventListener('click', restartQuiz);
themeToggle.addEventListener('click', toggleTheme);

// ==================== INITIALIZE ====================
loadTheme();
loadAllQuestions(); // Load all 80 questions
displayQuestion();
