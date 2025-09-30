// 存放所有測驗題目
const quizData = [
    {
        question: "1. 文具店裡有5種顏色的鉛筆和3種樣式的橡皮擦。如果你只想買「一樣」文具，請問你總共有幾種選擇？",
        a: "15種",
        b: "2種",
        c: "8種",
        d: "5種",
        correct: "c",
    },
    {
        question: "2. 早餐店有3種三明治和4種飲料。如果你想點一份「套餐」（包含一個三明治和一杯飲料），總共可以搭配出幾種不同的套餐？",
        a: "7種",
        b: "12種",
        c: "3種",
        d: "4種",
        correct: "b",
    },
    {
        question: "3. 衣櫃裡有4件不同顏色的上衣和2條不同款式的褲子。出門時，你需要選一件上衣「和」一條褲子來穿，總共有幾種穿搭方式？",
        a: "8種",
        b: "6種",
        c: "4種",
        d: "2種",
        correct: "a",
    },
    {
        question: "4. 寵物店裡有2隻小貓和4隻小狗。如果你只想領養「一隻」寵物，你有幾種選擇？",
        a: "8種",
        b: "6種",
        c: "4種",
        d: "2種",
        correct: "b",
    },
    {
        question: "5. 冰淇淋店的配料區有3種水果和2種醬料。如果你的冰淇淋可以選「一種水果」和「一種醬料」，總共有幾種組合？",
        a: "5種",
        b: "3種",
        c: "2種",
        d: "6種",
        correct: "d",
    },
    {
        question: "6. 書架上有6本不同的漫畫書和4本不同的故事書。如果你只想借「一本書」回家看，總共有幾種選擇？",
        a: "24種",
        b: "10種",
        c: "6種",
        d: "2種",
        correct: "b",
    },
    {
        question: "7. 美術課上，老師有5種顏色的圖畫紙和3種顏色的彩帶，要做一張卡片，需要選「一張圖畫紙」和「一條彩帶」，可以做出幾種不同的卡片組合？",
        a: "8種",
        b: "5種",
        c: "15種",
        d: "3種",
        correct: "c",
    },
    {
        question: "8. 今天的體育課可以選「一種」球類運動來玩，選項有：籃球、足球、躲避球。請問總共有幾種選擇？",
        a: "1種",
        b: "3種",
        c: "6種",
        d: "0種",
        correct: "b",
    },
    {
        question: "9. 製作一個客製化便當，可以選1種主菜和1種配菜。主菜有雞腿和排骨（2種），配菜有燙青菜、玉米、花椰菜（3種）。總共可以變出幾種不同的便當？",
        a: "6種",
        b: "5種",
        c: "3種",
        d: "2種",
        correct: "a",
    },
    {
        question: "10. 你想買一杯飲料，店家有6種果汁和5種奶茶。你身上錢只夠買「一杯」，請問你有幾種選擇？",
        a: "30種",
        b: "6種",
        c: "5種",
        d: "11種",
        correct: "d",
    },
];

// 取得HTML中的元件
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

// 載入測驗題目與選項
function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

// 清除之前選擇的答案
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

// 獲取選擇的答案
function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

// 監聽送出按鈕的點擊事件
submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            // 測驗結束，顯示結果
            quiz.innerHTML = `
                <h2>你答對了 ${score} / ${quizData.length} 題</h2>
                <button onclick="location.reload()">再玩一次</button>
            `;
        }
    }
});
