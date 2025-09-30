const quizData = [
    { 
        question: "1. 一條長100公尺的道路，從起點開始每隔10公尺種一棵樹，道路的終點也要種樹。請問總共種了幾棵樹？",
        image: "🌳 ... 🌳 ... 🌳 ... 🌳\n|起點|--10m--|--10m--|--...--|終點|\n<---- 總長 100m ---->",
        a: "9棵", b: "10棵", c: "11棵", d: "12棵", correct: "c", 
        hint: "先算出總共有幾個「間隔」，然後想一想「兩端都有」時，樹的數量和間隔數有什麼關係？",
        rationale: "非常棒！在兩端都種樹的情況下，樹的數量會比間隔數多1。 (100 ÷ 10) + 1 = 11。"
    },
    { 
        question: "2. 在一個周長為60公尺的圓形花圃周圍，每隔6公尺放一個盆栽，請問總共需要放幾個盆栽？",
        image: "︵ ︵\n🪴 🪴\n🪴 🔄 🪴 (周長60m, 間隔6m)\n🪴 🪴\n︶ ︶",
        a: "9個", b: "10個", c: "11個", d: "6個", correct: "b", 
        hint: "圓形是一個封閉的路線，想一想它的起點和終點是不是在同一個地方？",
        rationale: "答對了！在圓形這種封閉的路線上，盆栽的數量會和間隔數一樣多。 60 ÷ 6 = 10。"
    },
    { 
        question: "3. 工人沿著馬路的一邊，每隔8公尺立一根電線桿，從第1根到第15根電線桿的距離總共是幾公尺？",
        image: "🚦-8m-🚦-8m- ... -8m-🚦\n(第1根) (第2根) ... (第15根)",
        a: "120公尺", b: "128公尺", c: "112公尺", d: "104公尺", correct: "c", 
        hint: "15根電線桿，從第一根到最後一根，中間總共創造出幾個「間隔」？",
        rationale: "正確！15根電線桿之間會有 15 - 1 = 14 個間隔。所以總長度是 8 × 14 = 112 公尺。"
    },
    { 
        question: "4. 一條200公尺的走道，每隔20公尺插一支旗子。如果走道的起點不插，終點要插，總共要插幾支旗子？",
        image: "⚪️--20m--🚩--20m-- ... --20m--🚩\n|起點|                       |終點|\n<------ 總長 200m ------>",
        a: "9支", b: "10支", c: "11支", d: "20支", correct: "b", 
        hint: "這種「一端有一端沒有」的情況，物件的數量和間隔數有什麼特別的關係呢？",
        rationale: "你做到了！在「只有一端」插旗的情況下，旗子的數量會和間隔數一樣多。 200 ÷ 20 = 10。"
    },
    { 
        question: "5. 木匠要將一根長長的木頭鋸成12段，每鋸斷一次需要5分鐘，請問全部鋸完需要多少時間？",
        image: "🪵|鋸1次|鋸2次|...|鋸11次|\n[段1][段2][段3]...[段12]",
        a: "60分鐘", b: "55分鐘", c: "50分鐘", d: "65分鐘", correct: "b", 
        hint: "想一想，要把一根木頭變成「兩段」，需要鋸幾次？那變成「三段」呢？",
        rationale: "完全正確！要得到12段木頭，只需要在中間鋸 12 - 1 = 11 次。所以總時間是 5 × 11 = 55 分鐘。"
    },
    { 
        question: "6. 在牆壁上掛畫，每幅畫寬1公尺，畫和畫之間相隔2公尺。如果牆壁的起點和終點都不掛畫，總共掛了5幅畫，請問從第一幅畫到最後一幅畫的總長度是多少？",
        image: "牆壁: ...[畫1]-2m-[畫2]-2m-[畫3]-2m-[畫4]-2m-[畫5]...",
        a: "13公尺", b: "15公尺", c: "11公尺", d: "10公尺", correct: "a",
        hint: "總長度包含了「所有畫的寬度」和「所有間隔的長度」。先想一想5幅畫之間有幾個間隔？",
        rationale: "這個算法是5幅畫的寬度(5x1=5m)加上4個間隔的長度(4x2=8m)，5+8=13公尺，計算正確！"
    },
    { 
        question: "7. 遊樂園的摩天輪有20個車廂，從第3個車廂順時針到第12個車廂，總共經過了幾個間隔？",
        image: "🎡 (第3車廂) ... (第12車廂)",
        a: "8個", b: "9個", c: "10個", d: "11個", correct: "b", 
        hint: "這就像在尺上，從刻度3到刻度12，總共有多長？",
        rationale: "答對了！從編號A到編號B，中間的間隔數就是 B - A。所以是 12 - 3 = 9 個間隔。"
    },
    { 
        question: "8. 一條長36公尺的繩子，兩端都不綁東西，要在上面每隔4公尺做一個記號，請問總共可以做幾個記號？",
        image: "繩頭 --4m--📍--4m--📍--...--📍--4m-- 繩尾\n<---------- 總長 36m ---------->",
        a: "8個", b: "9個", c: "10個", d: "7個", correct: "a", 
        hint: "先算出總共有幾個間隔，然後思考「兩端都沒有」時，記號的數量和間隔數的關係。",
        rationale: "太棒了！在兩端都沒有物件的情況下，物件的數量會比間隔數少1。 (36 ÷ 4) - 1 = 8。"
    },
    { 
        question: "9. 學生排隊，從第一個學生到最後一個學生總長20公尺，每個學生之間都相隔2公尺。請問總共有幾個學生？",
        image: "🧍-2m-🧍-2m- ... -2m-🧍\n<---- 總長 20m ---->",
        a: "9個", b: "10個", c: "11個", d: "12個", correct: "c", 
        hint: "學生排隊就像在線段的「兩端」和「中間」都站了人。",
        rationale: "完全正確！排隊是一個兩端都有人的情況，所以學生數 = 間隔數 + 1。 (20 ÷ 2) + 1 = 11。"
    },
    { 
        question: "10. 時鐘在整點的時候會敲鐘，從早上8點敲鐘，到中午12點敲鐘，總共經過了幾個「時間間隔」？",
        image: "🕗 → 🕘 → 🕙 → 🕚 → 🕛",
        a: "3個", b: "4個", c: "5個", d: "6個", correct: "b", 
        hint: "這個問題就像問，從8點到9點是1個間隔，那從8點到12點呢？",
        rationale: "答對了！從8點到12點，總共經過了 12 - 8 = 4 個小時，也就是4個間隔。"
    }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const imageEl = document.getElementById('image-container');
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
    
    if (currentQuizData.image) {
        imageEl.innerText = currentQuizData.image;
        imageEl.style.display = 'block';
    } else {
        imageEl.style.display = 'none';
    }
    
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

            submitBtn.innerText = '下一題';
            submitBtn.classList.add('next');
        }
    }
});
