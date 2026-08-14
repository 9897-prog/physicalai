/* =========================================================
   HTML 학습 문제 (객관식 5 + 주관식 3)
   ========================================================= */
const HTML_QUIZ = [
  {
    type: "mcq",
    question: "HTML의 정식 명칭은 무엇인가요?",
    options: [
      "Hyper Transfer Markup Language",
      "HyperText Markup Language",
      "HighText Machine Language",
      "Home Tool Markup Language",
    ],
    answerIndex: 1,
    hint: "Hyper + Text + Markup + Language의 약자입니다. '텍스트를 표시하는 마크업 언어'라는 뜻이에요.",
  },
  {
    type: "mcq",
    question: "웹 페이지의 제목을 설정하는 태그는 무엇인가요?",
    options: ["<header>", "<title>", "<h1>", "<head>"],
    answerIndex: 1,
    hint: "<title> 태그는 <head> 안에 위치하며, 브라우저 탭에 표시되는 페이지 제목을 설정합니다.",
  },
  {
    type: "mcq",
    question: "다음 중 자기 닫힘(self-closing) 태그는?",
    options: ["<p>", "<div>", "<img>", "<a>"],
    answerIndex: 2,
    hint: "이미지 태그 <img>는 내용이 없어서 </img> 없이 <img src=\"\" alt=\"\"> 형태로 사용합니다.",
  },
  {
    type: "mcq",
    question: "HTML 문서의 본문 내용이 들어가는 태그는?",
    options: ["<head>", "<body>", "<main>", "<section>"],
    answerIndex: 1,
    hint: "사용자에게 실제로 보이는 모든 콘텐츠는 <body> 태그 안에 작성합니다.",
  },
  {
    type: "mcq",
    question: "순서 없는 목록을 만드는 태그 조합은?",
    options: ["<ol> + <li>", "<ul> + <li>", "<list> + <item>", "<dl> + <dt>"],
    answerIndex: 1,
    hint: "ul은 Unordered List(순서 없는 목록), ol은 Ordered List(순서 있는 목록)입니다.",
  },
  {
    type: "fill",
    question: "HTML 문서의 최상위 루트 요소 태그 이름을 입력하세요. (꺾쇠 없이)",
    answer: "html",
    hint: "모든 HTML 문서는 이 태그로 시작하고 끝납니다. <!DOCTYPE html> 바로 다음에 옵니다.",
  },
  {
    type: "fill",
    question: "링크를 만들 때 사용하는 태그 이름을 입력하세요. (꺾쇠 없이)",
    answer: "a",
    hint: "Anchor(닻)의 줄임말로, href 속성에 이동할 URL을 지정합니다.",
  },
  {
    type: "fill",
    question: "가장 큰 제목을 나타내는 태그 이름을 입력하세요. (꺾쇠 없이, 숫자 포함)",
    answer: "h1",
    hint: "Heading 1의 약자로, h1~h6까지 있으며 숫자가 작을수록 제목이 큽니다.",
  },
];

/* =========================================================
   JavaScript 학습 문제 (객관식 5 + 주관식 3)
   ========================================================= */
const JS_QUIZ = [
  {
    type: "mcq",
    question: "var로 선언한 변수에 새로운 값을 다시 할당하면 어떻게 될까요?",
    options: [
      "에러가 발생하고 프로그램이 멈춘다",
      "기존 값은 사라지고 새로운 값으로 바뀐다",
      "기존 값과 새 값이 합쳐진다",
      "아무 변화도 일어나지 않는다",
    ],
    answerIndex: 1,
    hint: "var는 재할당이 가능한 변수입니다. name = '새값'처럼 덮어쓸 수 있어요.",
  },
  {
    type: "mcq",
    question: "변수 num의 값을 1 감소시키는 연산자는?",
    options: ["num++", "num--", "num += 1", "num - 1"],
    answerIndex: 1,
    hint: "--는 1 감소, ++는 1 증가 연산자입니다.",
  },
  {
    type: "mcq",
    question: "&&(AND) 연산자는 언제 true를 반환하나요?",
    options: [
      "둘 중 하나만 true여도 true",
      "양쪽 조건이 모두 true일 때만",
      "항상 true",
      "둘 다 false일 때",
    ],
    answerIndex: 1,
    hint: "&&는 '그리고'의 의미로, 모든 조건이 참일 때만 true입니다.",
  },
  {
    type: "mcq",
    question: "숫자 num이 짝수인지 확인하는 조건식은?",
    options: ["num % 2 === 1", "num % 2 === 0", "num / 2 === 0", "num === 2"],
    answerIndex: 1,
    hint: "%는 나머지 연산자입니다. 2로 나눈 나머지가 0이면 짝수입니다.",
  },
  {
    type: "mcq",
    question: "console.log()의 역할은?",
    options: [
      "변수를 선언한다",
      "조건문을 실행한다",
      "값을 콘솔(개발자 도구)에 출력한다",
      "함수를 정의한다",
    ],
    answerIndex: 2,
    hint: "디버깅할 때 변수 값이나 메시지를 브라우저 개발자 도구 콘솔에 출력합니다.",
  },
  {
    type: "fill",
    question: "변수를 선언할 때 사용하는 키워드를 입력하세요.",
    answer: "var",
    hint: "let, const도 있지만, 기본 학습에서는 var로 시작합니다.",
  },
  {
    type: "fill",
    question: "두 조건 중 하나만 true여도 true가 되는 논리 연산자를 입력하세요. (기호)",
    answer: "||",
    hint: "'또는'의 의미로, OR 연산자입니다. || 양쪽에 || 기호가 두 개씩 있습니다.",
  },
  {
    type: "fill",
    question: "조건이 참일 때와 거짓일 때 다른 코드를 실행하는 문장 이름을 입력하세요.",
    answer: "if",
    hint: "if (조건) { ... } else { ... } 형태로 사용합니다.",
  },
];

/* =========================================================
   해커 타이핑 애니메이션 코드 목록
   ========================================================= */
const HACKER_CODES = [
  `// Accessing mainframe...
const target = "secure_server";
let password = "";

function bruteForce() {
  for (let i = 0; i < 9999; i++) {
    password = String(i).padStart(4, "0");
    if (tryLogin(password)) {
      console.log("ACCESS GRANTED:", password);
      break;
    }
  }
}`,
  `<!DOCTYPE html>
<html lang="ko">
<head>
  <title>Hidden Portal</title>
</head>
<body>
  <h1>Welcome, Hacker</h1>
  <script>
    document.title = "System Breached";
  </script>
</body>
</html>`,
  `var firewall = false;
var accessLevel = 0;

if (firewall === false) {
  accessLevel = 99;
  console.log("Firewall bypassed!");
  injectPayload();
} else {
  console.log("Retrying...");
}`,
  `function decrypt(data, key) {
  var result = "";
  for (var i = 0; i < data.length; i++) {
    result += String.fromCharCode(
      data.charCodeAt(i) ^ key
    );
  }
  return result;
}

var secret = decrypt("KHOOR", 3);
console.log(secret); // HELLO`,
];

/* =========================================================
   전역 상태
   ========================================================= */
const quizResults = {
  html: {},
  js: {},
};

let typingIndex = 0;
let charIndex = 0;
let typingTimer = null;

/* =========================================================
   화면 전환
   ========================================================= */
function showScreen(screenId) {
  document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
  const target = document.getElementById("screen-" + screenId);
  if (target) target.classList.add("active");

  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.screen === screenId);
  });

  if (screenId === "home") {
    document.querySelector('.nav-btn[data-screen="home"]').classList.add("active");
  } else if (screenId.startsWith("html")) {
    document.querySelector('.nav-btn[data-screen="html-info"]').classList.add("active");
  } else if (screenId.startsWith("js")) {
    document.querySelector('.nav-btn[data-screen="js-info"]').classList.add("active");
  }

  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
}

/* =========================================================
   해커 타이핑 애니메이션
   ========================================================= */
function startTypingAnimation() {
  const codeEl = document.getElementById("typing-code");
  if (!codeEl) return;

  function typeNextChar() {
    const currentCode = HACKER_CODES[typingIndex];

    if (charIndex < currentCode.length) {
      const visible = currentCode.substring(0, charIndex + 1);
      codeEl.innerHTML = escapeHtml(visible) + '<span class="cursor-inline">|</span>';
      charIndex++;
      typingTimer = setTimeout(typeNextChar, 30 + Math.random() * 40);
    } else {
      typingTimer = setTimeout(() => {
        typingIndex = (typingIndex + 1) % HACKER_CODES.length;
        charIndex = 0;
        codeEl.innerHTML = "";
        typeNextChar();
      }, 2500);
    }
  }

  typeNextChar();
}

/* =========================================================
   퀴즈 렌더링
   ========================================================= */
function renderQuiz(containerId, quizData, category) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = "";

  quizData.forEach((q, idx) => {
    const key = `${category}-${idx}`;
    const card = document.createElement("div");
    card.className = "quiz-card";

    const badgeClass = q.type === "mcq" ? "badge-mcq" : "badge-fill";
    const badgeText = q.type === "mcq" ? `문제 ${idx + 1} · 객관식` : `문제 ${idx + 1} · 주관식`;

    let bodyHtml = "";

    if (q.type === "mcq") {
      bodyHtml = `
        <div class="quiz-options">
          ${q.options
            .map(
              (opt, oIdx) => `
            <label class="quiz-option" data-opt="${oIdx}">
              <input type="radio" name="mcq-${key}" value="${oIdx}" />
              <span>${opt}</span>
            </label>`
            )
            .join("")}
        </div>`;
    } else {
      bodyHtml = `
        <input type="text" class="quiz-input" id="input-${key}" placeholder="정답을 입력하세요" />`;
    }

    card.innerHTML = `
      <span class="quiz-badge ${badgeClass}">${badgeText}</span>
      <p class="quiz-question">${q.question}</p>
      ${bodyHtml}
      <div class="quiz-actions">
        <button class="btn-hint" data-hint="${key}">💡 힌트 보기</button>
        <button class="btn-check" data-check="${key}">✓ 즉시 답 확인</button>
      </div>
      <div class="quiz-hint" id="hint-${key}">${q.hint}</div>
      <div class="quiz-result" id="result-${key}"></div>
    `;

    container.appendChild(card);
  });

  container.querySelectorAll(".quiz-option").forEach((label) => {
    label.addEventListener("click", () => {
      const group = label.closest(".quiz-options");
      group.querySelectorAll(".quiz-option").forEach((l) => l.classList.remove("selected"));
      label.classList.add("selected");
    });
  });

  container.querySelectorAll(".btn-hint").forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.hint;
      const hintEl = document.getElementById(`hint-${key}`);
      hintEl.classList.toggle("show");
      btn.textContent = hintEl.classList.contains("show") ? "💡 힌트 숨기기" : "💡 힌트 보기";
    });
  });

  container.querySelectorAll(".btn-check").forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.check;
      const qIdx = Number(key.split("-")[1]);
      checkAnswer(category, qIdx, key, quizData);
    });
  });
}

function checkAnswer(category, qIdx, key, quizData) {
  const q = quizData[qIdx];
  const resultEl = document.getElementById(`result-${key}`);
  let isCorrect = false;

  if (q.type === "mcq") {
    const selected = document.querySelector(`input[name="mcq-${key}"]:checked`);
    if (!selected) {
      resultEl.textContent = "⚠ 보기를 하나 선택해주세요.";
      resultEl.className = "quiz-result show wrong";
      return;
    }
    isCorrect = Number(selected.value) === q.answerIndex;
  } else {
    const input = document.getElementById(`input-${key}`);
    const userAnswer = input.value.trim().toLowerCase();
    const correctAnswer = q.answer.trim().toLowerCase();
    if (!userAnswer) {
      resultEl.textContent = "⚠ 정답을 입력해주세요.";
      resultEl.className = "quiz-result show wrong";
      return;
    }
    isCorrect = userAnswer === correctAnswer;
  }

  quizResults[category][key] = isCorrect;

  if (isCorrect) {
    resultEl.textContent = "✓ 정답입니다!";
    resultEl.className = "quiz-result show correct";
  } else {
    const correctText = q.type === "mcq" ? q.options[q.answerIndex] : q.answer;
    resultEl.textContent = `✗ 오답입니다. 정답: ${correctText}`;
    resultEl.className = "quiz-result show wrong";
  }

  updateScore(category);
}

function updateScore(category) {
  const total = category === "html" ? HTML_QUIZ.length : JS_QUIZ.length;
  const correct = Object.values(quizResults[category]).filter(Boolean).length;
  const scoreEl = document.getElementById(`${category}-score`);
  if (scoreEl) scoreEl.textContent = `${correct} / ${total} 문제 정답`;
}

/* =========================================================
   이벤트 바인딩
   ========================================================= */
document.querySelectorAll(".nav-btn").forEach((btn) => {
  btn.addEventListener("click", () => showScreen(btn.dataset.screen));
});

document.querySelectorAll("[data-screen]").forEach((el) => {
  if (el.classList.contains("nav-btn")) return;
  el.addEventListener("click", () => showScreen(el.dataset.screen));
});

document.querySelectorAll(".crumb").forEach((btn) => {
  btn.addEventListener("click", () => showScreen(btn.dataset.screen));
});

/* =========================================================
   초기화
   ========================================================= */
renderQuiz("html-quiz-container", HTML_QUIZ, "html");
renderQuiz("js-quiz-container", JS_QUIZ, "js");
startTypingAnimation();
showScreen("home");
