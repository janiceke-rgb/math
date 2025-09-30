// 每一題的資料都包含了 question, a, b, c, d, correct, hint, 和 rationale
const quizData = [
    { question: "1. 文具店裡有5種顏色的鉛筆和3種樣式的橡皮擦。如果你只想買「一樣」文具，請問你總共有幾種選擇？", a: "15種", b: "2種", c: "8種", d: "5種", correct: "c", hint: "想一想，你是要買鉛筆「或」橡皮擦，還是鉛筆「和」橡皮擦都要？", rationale: "正確！因為是「擇一選擇」，所以用加法：5 + 3 = 8 種。" },
    { question: "2. 早餐店有3種三明治和4種飲料。如果你想點一份「套餐」，總共可以搭配出幾種不同的套餐？", a: "7種", b: "12種", c: "3種", d: "4種", correct: "b", hint: "每一個三明治，都可以配幾種飲料呢？", rationale: "答對了！因為是「組合搭配」，所以用乘法：3 × 4 = 12 種。" },
    { question: "3. 衣櫃裡有4件不同顏色的上衣和2條不同款式的褲子。出門時，你需要選一件上衣「和」一條褲子來穿，總共有幾種穿搭方式？", a: "8種", b: "6種", c: "4種", d: "2種", correct: "a", hint: "想一想，第一件上衣可以配幾條褲子？第二件上衣又可以配幾條褲子？", rationale: "太棒了！每件上衣都能和所有褲子搭配，所以用乘法：4 × 2 = 8 種。" },
    { question: "4. 寵物店裡有2隻小貓和4隻小狗。如果你只想領養「一隻」寵物，你有幾種選擇？", a: "8種", b: "6種", c: "4種", d: "2種", correct: "b", hint: "這個問題是問所有寵物中，你總共有幾個「單一」的選擇。", rationale: "沒錯！因為只能選一隻，所以要把所有選項加起來：2 + 4 = 6 種。" },
    { question: "5. 冰淇淋店的配料區有3種水果和2種醬料。如果你的冰淇淋可以選「一種水果」和「一種醬料」，總共有幾種組合？", a: "5種", b: "3種", c: "2種", d: "6種", correct: "d", hint: "草莓可以搭配幾種醬料？香蕉可以搭配幾種醬料？把所有可能加起來看看。", rationale: "答對了！「各選一種」來組合，所以用乘法：3 × 2 = 6 種。" },
    { question: "6. 書架上有6本不同的漫畫書和4本不同的故事書。如果你只想借「一本書」回家看，總共有幾種選擇？", a: "24種", b: "10種", c: "6種", d: "2種", correct: "b", hint: "你是要選漫畫書「或」故事書，只需要挑一本就好。", rationale: "正確！從所有書中「任選一本」，所以用加法：6 + 4 = 10 種。" },
    { question: "7. 美術課上，老師有5種顏色的圖畫紙和3種顏色的彩帶，要做一張卡片，需要選「一張圖畫紙」和「一條彩帶」，可以做出幾種不同的卡片組合？", a: "8種", b: "5種", c: "15種", d: "3種", correct: "c", hint: "想一想，紅色的圖畫紙可以搭配幾種彩帶？藍色的圖畫紙又可以搭配幾種？", rationale: "非常棒！每種圖畫紙都可以跟所有彩帶搭配，所以用乘法：5 × 3 = 15 種。" },
    { question: "8. 今天的體育課可以選「一種」球類運動來玩，選項有：籃球、足球、躲避球。請問總共有幾種選擇？", a: "1種", b: "3種", c: "6種", d: "0種", correct: "b", hint: "這個問題很直接，只要數一數老師提供了幾個選項就可以了。", rationale: "對的！就是把所有可以選的項目數出來，總共有3個選項。" },
    { question: "9. 製作一個客製化便當，可以選1種主菜和1種配菜。主菜有雞腿和排骨（2種），配菜有燙青菜、玉米、花椰菜（3種）。總共可以變出幾種不同的便當？", a: "6種", b: "5種", c: "3種", d: "2種", correct: "a", hint: "雞腿便當可以有幾種配菜？排骨便當又可以有幾種配菜？", rationale: "答對了！2種主菜乘以3種配菜，總共可以組合出6種不同的便當。" },
    { question: "10. 你想買一杯飲料，店家有6種果汁和5種奶茶。你身上錢只夠買「一杯」，請問你有幾種選擇？", a: "30種", b: "11種", c: "5種", d: "6種", correct: "b", hint: "題目說只能買「一杯」，所以是果汁「或」奶茶選一種。", rationale: "沒錯！因為只能買一杯，所以把所有能選的果汁和奶茶加起來就是總選擇數：6 + 5 = 11 種。" }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const hint_text = document.getElementById('hint_text');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const a_label = document.getElementById('a_label');
const b_label = document.getElementById('b_label');
const c_label = document.getElementById('c_label');
const d_label = document.getElementById('d_label');
const feedbackEl = document.getElementById('feedback-container');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;
let answered = false;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    hint_text.innerText = currentQuizData.hint;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    feedbackEl.innerHTML = '';
    submitBtn.innerText = '送出答案';
    submitBtn.classList.remove('next');
    answered = false;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
    [a_label, b_label, c_label, d_label].forEach(label => {
        label.classList.remove('correct', 'incorrect');
        label.querySelector('input').disabled = false;
    });
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    if (answered) {
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>你答對了 ${score} / ${quizData.length} 題</h2>
                <button onclick="location.reload()">再玩一次</button>
            `;
        }
    } else {
        const answer = getSelected();
        if (answer) {
            answered = true;
            const currentQuizData = quizData[currentQuiz];
            const correct = answer === currentQuizData.correct;
            
            // 判斷答案並顯示回饋
            if (correct) {
                score++;
                feedbackEl.innerText = currentQuizData.rationale;
                feedbackEl.className = 'feedback-container correct-text';
            } else {
                feedbackEl.innerText = "答錯了！正確答案是：" + document.getElementById(currentQuizData.correct + '_text').innerText + "。 " + currentQuizData.rationale;
                feedbackEl.className = 'feedback-container incorrect-text';
            }

            document.getElementById(answer + '_label').classList.add(correct ? 'correct' : 'incorrect');
            if (!correct) {
                 document.getElementById(currentQuizData.correct + '_label').classList.add('correct');
            }
            
            answerEls.forEach(el => el.disabled = true);

            // 將按鈕文字改成「下一題」
            submitBtn.innerText = '下一題';
            submitBtn.classList.add('next');
        }
    }
});
