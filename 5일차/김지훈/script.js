/* =========================================================
   HTML 학습 문제 (객관식 5 + 주관식 3)
   ========================================================= */
const HTML_QUIZ = [
  {
    type: "mcq",
    question: "웹 페이지에 이미지를 삽입할 때 사용하는 태그는?",
    options: ["<image>", "<img>", "<pic>", "<src>"],
    answerIndex: 1,
    hint: "<img src=\"경로\" alt=\"설명\"> 형태로 사용하며, 닫는 태그가 없습니다.",
  },
  {
    type: "mcq",
    question: "다음 중 HTML 문서에서 가장 큰 제목을 나타내는 태그는?",
    options: ["<h6>", "<h1>", "<title>", "<header>"],
    answerIndex: 1,
    hint: "h 뒤의 숫자가 작을수록 더 크고 중요한 제목입니다. h1이 가장 큽니다.",
  },
  {
    type: "mcq",
    question: "링크가 이동할 주소를 지정하는 속성은?",
    options: ["src", "href", "link", "url"],
    answerIndex: 1,
    hint: "<a href=\"이동할 주소\">글자</a> 형태로 사용합니다.",
  },
  {
    type: "mcq",
    question: "번호가 매겨진(순서가 있는) 목록을 만드는 태그는?",
    options: ["<ul>", "<ol>", "<li>", "<dl>"],
    answerIndex: 1,
    hint: "ol은 Ordered List(순서 있는 목록), ul은 Unordered List(순서 없는 목록)입니다.",
  },
  {
    type: "mcq",
    question: "이미지가 안 보일 때 대신 표시할 설명 글을 지정하는 속성은?",
    options: ["title", "href", "alt", "src"],
    answerIndex: 2,
    hint: "alt는 alternative(대체)의 줄임말로, 이미지에 대한 설명을 적어둡니다.",
  },
  {
    type: "fill",
    question: "문단을 나타내는 태그 이름을 입력하세요. (꺾쇠 없이)",
    answer: "p",
    hint: "Paragraph(문단)의 줄임말로, 긴 글을 나눌 때 사용합니다.",
  },
  {
    type: "fill",
    question: "문서 제목, 문자 인코딩 등 '문서에 대한 정보'를 담는 태그 이름을 입력하세요. (꺾쇠 없이)",
    answer: "head",
    hint: "화면에는 보이지 않으며, <title>이나 스타일시트 연결 등이 이 태그 안에 들어갑니다.",
  },
  {
    type: "fill",
    question: "특별한 의미 없이 여러 내용을 묶는 대표적인 블록 상자 태그 이름을 입력하세요. (꺾쇠 없이)",
    answer: "div",
    hint: "레이아웃을 나누거나 CSS 스타일을 적용할 때 자주 사용하는 만능 상자 태그입니다.",
  },
  {
    type: "fill",
    question: "클릭할 수 있는 버튼을 만드는 태그 이름을 입력하세요. (꺾쇠 없이)",
    answer: "button",
    hint: "사용자가 누르는 버튼을 만들며, 실제 동작은 JavaScript로 연결합니다.",
  },
  {
    type: "fill",
    question: "사용자가 글자를 입력할 수 있는 입력창을 만드는 태그 이름을 입력하세요. (꺾쇠 없이)",
    answer: "input",
    hint: "type 속성으로 텍스트, 숫자, 비밀번호 등 입력 종류를 정할 수 있습니다.",
  },
];

/* =========================================================
   JavaScript 학습 문제 (객관식 5 + 주관식 3)
   ========================================================= */
const JS_QUIZ = [
  {
    type: "mcq",
    question: "재할당이 불가능한(한 번 정하면 값을 바꿀 수 없는) 변수를 선언할 때 사용하는 키워드는?",
    options: ["var", "let", "const", "function"],
    answerIndex: 2,
    hint: "const는 constant(상수)의 줄임말로, 절대 변하지 않는 값을 저장할 때 사용합니다.",
  },
  {
    type: "mcq",
    question: "두 값이 완전히 같은지(타입까지) 비교하는 연산자는?",
    options: ["==", "===", "=", "!="],
    answerIndex: 1,
    hint: "=== 은 값과 타입이 모두 같아야 true를 반환하는 엄격한 비교 연산자입니다.",
  },
  {
    type: "mcq",
    question: "정해진 횟수만큼 코드를 반복 실행할 때 사용하는 문장은?",
    options: ["if", "for", "function", "switch"],
    answerIndex: 1,
    hint: "for (let i = 0; i < 5; i++) { ... } 형태로 반복 횟수를 조절합니다.",
  },
  {
    type: "mcq",
    question: "여러 개의 값을 순서대로 담아두는 자료구조는?",
    options: ["객체 { }", "배열 [ ]", "문자열 \"\"", "숫자"],
    answerIndex: 1,
    hint: "대괄호 [ ] 로 만들며, 각 값을 콤마(,)로 구분해서 순서대로 저장합니다.",
  },
  {
    type: "mcq",
    question: "재사용 가능한 코드 블록을 만들 때 사용하는 키워드는?",
    options: ["let", "function", "if", "return"],
    answerIndex: 1,
    hint: "function 이름(매개변수) { ... } 형태로 코드를 이름 붙여 묶어둡니다.",
  },
  {
    type: "fill",
    question: "브라우저 콘솔(개발자 도구)에 값을 출력할 때 사용하는 함수 이름을 입력하세요. (console. 은 제외)",
    answer: "log",
    hint: "console.log(\"메시지\") 형태로 사용하며, 디버깅할 때 자주 씁니다.",
  },
  {
    type: "fill",
    question: "숫자를 1 증가시키는 연산자를 입력하세요. (기호)",
    answer: "++",
    hint: "num++ 처럼 변수 뒤에 붙여서 값을 1씩 늘립니다. 반대로 1 감소는 --입니다.",
  },
  {
    type: "fill",
    question: "함수가 결과값을 호출한 곳으로 돌려줄 때 사용하는 키워드를 입력하세요.",
    answer: "return",
    hint: "function 안에서 return 값; 을 만나면 그 값을 함수 밖으로 돌려주고 함수가 끝납니다.",
  },
  {
    type: "fill",
    question: "대괄호 [ ] 로 여러 값을 순서대로 저장하는 자료구조의 이름을 한글로 입력하세요.",
    answer: "배열",
    hint: "영어로는 Array라고 부르며, let list = [1, 2, 3]; 처럼 만듭니다.",
  },
  {
    type: "fill",
    question: "두 값이 서로 다른지 비교할 때 사용하는 연산자를 입력하세요. (기호, 3글자)",
    answer: "!==",
    hint: "=== 의 반대 의미로, 값이나 타입이 다르면 true를 반환합니다.",
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
   HTML 기초 코드 모음 (상단바 "HTML 코드")
   ========================================================= */
const HTML_BASICS = [
  {
    title: "<!DOCTYPE html>",
    code: `<!DOCTYPE html>`,
    desc: "이 문서가 최신 방식(HTML5)으로 작성되었다는 것을 브라우저에게 알려주는 선언입니다. 항상 문서의 맨 첫 줄에 한 번만 적어줍니다.",
  },
  {
    title: "<html> 태그",
    code: `<html lang="ko">\n  ...\n</html>`,
    desc: "HTML 문서 전체를 감싸는 가장 바깥쪽 상자입니다. lang=\"ko\"는 '이 페이지는 한국어로 되어 있다'는 뜻이에요.",
  },
  {
    title: "<head> 태그",
    code: `<head>\n  <title>내 페이지</title>\n</head>`,
    desc: "화면에는 보이지 않지만 문서 제목, 문자 인코딩, 연결할 CSS 파일처럼 '문서에 대한 정보'를 적어두는 곳입니다.",
  },
  {
    title: "<title> 태그",
    code: `<title>페이지 제목</title>`,
    desc: "브라우저 탭에 표시되는 제목을 정합니다. <head> 태그 안에 넣습니다.",
  },
  {
    title: "<body> 태그",
    code: `<body>\n  <h1>안녕하세요!</h1>\n</body>`,
    desc: "사용자 화면에 실제로 보이는 모든 내용(글, 이미지, 버튼 등)은 이 태그 안에 작성합니다.",
  },
  {
    title: "<h1> ~ <h6> 제목 태그",
    code: `<h1>가장 큰 제목</h1>\n<h2>그 다음 크기 제목</h2>`,
    desc: "글의 제목을 나타냅니다. 숫자가 작을수록(h1) 더 크고 중요한 제목이고, 숫자가 클수록(h6) 작은 소제목이에요.",
  },
  {
    title: "<p> 태그",
    code: `<p>이것은 문단입니다.</p>`,
    desc: "긴 글을 문단 단위로 나눌 때 사용합니다. 워드프로세서에서 엔터로 문단을 나누는 것과 비슷해요.",
  },
  {
    title: "<a> 링크 태그",
    code: `<a href="https://naver.com">네이버로 이동</a>`,
    desc: "클릭하면 다른 페이지로 이동하는 링크를 만듭니다. href 속성에 이동할 주소를 적어줍니다.",
  },
  {
    title: "<img> 이미지 태그",
    code: `<img src="cat.jpg" alt="고양이 사진">`,
    desc: "이미지를 화면에 보여줍니다. src는 이미지 파일 경로, alt는 이미지가 안 보일 때 대신 표시할 설명 글이에요.",
  },
  {
    title: "<div> 태그",
    code: `<div>\n  여기에 여러 내용을 담아요\n</div>`,
    desc: "특별한 의미 없이 여러 내용을 하나로 묶는 상자입니다. 레이아웃을 나누거나 스타일을 적용할 때 자주 사용해요.",
  },
  {
    title: "<ul>과 <li> 목록 태그",
    code: `<ul>\n  <li>사과</li>\n  <li>바나나</li>\n</ul>`,
    desc: "점(•) 목록을 만듭니다. <ul>은 목록 전체를 감싸고, 그 안의 각 항목은 <li>로 하나씩 적어줍니다.",
  },
  {
    title: "<button> 버튼 태그",
    code: `<button>클릭하세요</button>`,
    desc: "사용자가 누를 수 있는 버튼을 만듭니다. 실제 동작(무엇을 할지)은 JavaScript로 연결해줍니다.",
  },
  {
    title: "<input> 입력창 태그",
    code: `<input type="text" placeholder="이름을 입력하세요">`,
    desc: "사용자가 글자를 입력할 수 있는 칸을 만듭니다. type 속성으로 텍스트, 숫자, 비밀번호 등 입력 종류를 정할 수 있어요.",
  },
  {
    title: "class와 id 속성",
    code: `<div class="box" id="main-box"></div>`,
    desc: "태그를 구분하기 위한 이름표예요. class는 여러 태그에 반복해서 붙일 수 있고, id는 문서 안에서 딱 하나뿐인 이름이어야 해요. CSS나 JavaScript에서 이 이름으로 태그를 찾아 스타일을 주거나 조작합니다.",
  },
];

/* =========================================================
   JavaScript 기초 코드 모음 (상단바 "JS 코드")
   ========================================================= */
const JS_BASICS = [
  {
    title: "var / let 변수 선언",
    code: `var name = "철수";\nlet age = 20;`,
    desc: "값을 저장해두는 '상자'를 만드는 것을 변수 선언이라고 해요. var나 let 뒤에 이름을 적고 = 로 값을 넣어줍니다.",
  },
  {
    title: "const 상수 선언",
    code: `const PI = 3.14;`,
    desc: "한 번 값을 정하면 다시 바꿀 수 없는 변수예요. 절대 변하지 않는 값을 저장할 때 사용합니다.",
  },
  {
    title: "문자열 (String)",
    code: `let msg = "안녕하세요";`,
    desc: "따옴표(\" \" 또는 ' ')로 감싼 글자 데이터를 문자열이라고 합니다.",
  },
  {
    title: "숫자 계산 (연산자)",
    code: `let sum = 3 + 5;\nlet result = 10 % 3;`,
    desc: "+, -, *, / 는 더하기·빼기·곱하기·나누기이고, %는 나눈 나머지를 구하는 연산자예요.",
  },
  {
    title: "비교 연산자",
    code: `10 === 10   // true\n10 !== 5    // true`,
    desc: "===는 '두 값이 완전히 같다', !==는 '두 값이 다르다'를 확인할 때 사용합니다. 결과는 true(참) 또는 false(거짓)로 나와요.",
  },
  {
    title: "if / else 조건문",
    code: `if (age >= 18) {\n  console.log("성인");\n} else {\n  console.log("미성년자");\n}`,
    desc: "조건이 참(true)이면 if 블록을, 거짓(false)이면 else 블록을 실행합니다. '만약 ~라면'이라는 뜻이에요.",
  },
  {
    title: "for 반복문",
    code: `for (let i = 0; i < 5; i++) {\n  console.log(i);\n}`,
    desc: "정해진 횟수만큼 같은 코드를 반복 실행합니다. i는 0부터 시작해서 5보다 작은 동안 1씩 증가하며 반복돼요.",
  },
  {
    title: "함수 (function)",
    code: `function greet(name) {\n  return "안녕, " + name;\n}`,
    desc: "자주 쓰는 코드를 이름 붙여 묶어두고, 필요할 때 이름만 불러서(호출해서) 재사용하는 것이 함수입니다.",
  },
  {
    title: "배열 (Array)",
    code: `let fruits = ["사과", "바나나", "포도"];`,
    desc: "여러 개의 값을 순서대로 담아두는 상자입니다. 대괄호 [ ]로 만들고, 각 값은 콤마(,)로 구분해요.",
  },
  {
    title: "논리 연산자 &&, ||",
    code: `true && false   // false\ntrue || false   // true`,
    desc: "&&(AND)는 양쪽이 모두 참일 때만 true, ||(OR)는 둘 중 하나만 참이어도 true가 됩니다.",
  },
  {
    title: "console.log()",
    code: `console.log("디버깅 메시지");`,
    desc: "값이나 메시지를 브라우저 개발자 도구의 콘솔 창에 출력합니다. 코드가 잘 작동하는지 확인할 때 자주 사용해요.",
  },
  {
    title: "document.getElementById()",
    code: `const box = document.getElementById("main-box");`,
    desc: "HTML 문서에서 특정 id를 가진 태그를 찾아옵니다. 찾아온 태그의 내용이나 스타일을 JavaScript로 바꿀 수 있어요.",
  },
  {
    title: "addEventListener()",
    code: `button.addEventListener("click", () => {\n  alert("클릭됨!");\n});`,
    desc: "버튼 등의 요소에 '클릭했을 때 실행할 동작'을 연결합니다. 사용자와 상호작용하는 기능의 핵심이에요.",
  },
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
let isLiveMode = false;

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
    document.querySelector('.nav-btn[data-screen="html-codes"]').classList.add("active");
  } else if (screenId.startsWith("js")) {
    document.querySelector('.nav-btn[data-screen="js-codes"]').classList.add("active");
  }

  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
}

/* =========================================================
   HTML 이스케이프
   ========================================================= */
function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/* =========================================================
   해커 타이핑 애니메이션
   ========================================================= */
function startTypingAnimation() {
  const codeEl = document.getElementById("typing-code");
  if (!codeEl) return;

  function typeNextChar() {
    if (isLiveMode) return;
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
   방문자 실시간 코드 입력
   ========================================================= */
function setupVisitorInput() {
  const terminalBody = document.getElementById("terminal-body");
  const terminalWindow = document.querySelector(".terminal-window");
  const codeEl = document.getElementById("typing-code");
  const input = document.getElementById("visitor-input");
  const hint = document.getElementById("type-hint");
  if (!terminalBody || !codeEl || !input || !hint) return;

  function render() {
    const value = input.value;
    const caret = input.selectionEnd;
    const before = value.substring(0, caret);
    const after = value.substring(caret);
    codeEl.innerHTML =
      escapeHtml(before) + '<span class="cursor-inline">|</span>' + escapeHtml(after);
    codeEl.scrollTop = codeEl.scrollHeight;
  }

  function goLive() {
    if (isLiveMode) return;
    isLiveMode = true;
    clearTimeout(typingTimer);
    input.value = "";
    codeEl.innerHTML = '<span class="cursor-inline">|</span>';
    terminalWindow.classList.add("is-live");
  }

  terminalBody.addEventListener("click", () => {
    goLive();
    input.focus();
  });

  input.addEventListener("focus", () => {
    goLive();
    hint.classList.add("hidden");
  });

  input.addEventListener("blur", () => {
    if (!input.value) hint.classList.remove("hidden");
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const caret = input.selectionStart;
      input.value = input.value.substring(0, caret) + "  " + input.value.substring(input.selectionEnd);
      input.selectionStart = input.selectionEnd = caret + 2;
      render();
    }
  });

  input.addEventListener("input", () => {
    hint.classList.add("hidden");
    render();
  });

  input.addEventListener("keyup", render);
  input.addEventListener("click", render);
}

/* =========================================================
   코드 모음 렌더링 (상단바 HTML 코드 / JS 코드)
   ========================================================= */
function renderCodeList(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = items
    .map(
      (item, idx) => `
    <article class="code-ref-item">
      <div class="code-ref-head">
        <span class="code-ref-num">${idx + 1}</span>
        <span class="code-ref-title">${escapeHtml(item.title)}</span>
      </div>
      <pre class="code-block"><code>${escapeHtml(item.code)}</code></pre>
      <p class="code-ref-desc">${escapeHtml(item.desc)}</p>
    </article>`
    )
    .join("");
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
renderCodeList("html-codes-container", HTML_BASICS);
renderCodeList("js-codes-container", JS_BASICS);
startTypingAnimation();
setupVisitorInput();
showScreen("home");
