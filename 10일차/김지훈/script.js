const TOTAL_DAYS = 10;

// ---- 패널 하단 실시간 시계 ----
(() => {
  const el = document.getElementById("live-clock");
  if (!el) return;
  function tick() {
    const now = new Date();
    const hh = String(now.getHours()).padStart(2, "0");
    const mm = String(now.getMinutes()).padStart(2, "0");
    const ss = String(now.getSeconds()).padStart(2, "0");
    el.textContent = `${hh}:${mm}:${ss}`;
  }
  tick();
  setInterval(tick, 1000);
})();

// ---- 왼쪽 하단 빈 공간: 파티클이 모여 코드로 작성되는 애니메이션 ----
(() => {
  const canvas = document.getElementById("network-anim");
  const ctx = canvas.getContext("2d");
  const LINK_DIST = 130;
  const FONT_SIZE = 18;
  const LINE_H = FONT_SIZE * 1.7;
  const SCATTER_SPEED = 1.4;
  const BURST_SPEED = 1.2;

  const CODE_LINES = [
    'const name = "김지훈";',
    'const about = "피지컬AI를 배우면서',
    ' 기록한 웹페이지입니다.";',
    "",
    "console.log(name);",
    "console.log(about);",
    "",
    "// 결과값",
    "김지훈",
    "피지컬AI를 배우면서 기록한 웹페이지입니다.",
  ];

  let width = 0, height = 0;
  let nodes = [];

  function buildTargets() {
    ctx.font = `${FONT_SIZE}px "JetBrains Mono", monospace`;
    const lineWidths = CODE_LINES.map((l) => ctx.measureText(l).width);
    const blockW = Math.max(...lineWidths);
    const blockH = CODE_LINES.length * LINE_H;
    const startX = Math.max(16, (width - blockW) / 2);
    const startY = Math.max(16, (height - blockH) / 2);

    const targets = [];
    CODE_LINES.forEach((line, row) => {
      let x = startX;
      for (let col = 0; col < line.length; col++) {
        const ch = line[col];
        const chWidth = ctx.measureText(ch).width;
        if (ch !== " ") {
          targets.push({ x, y: startY + row * LINE_H, char: ch });
        }
        x += chWidth;
      }
    });
    return targets;
  }

  function resize() {
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    width = canvas.width;
    height = canvas.height;

    const targets = buildTargets();
    nodes = targets.map((t) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * SCATTER_SPEED,
      vy: (Math.random() - 0.5) * SCATTER_SPEED,
      drawX: 0,
      drawY: 0,
      tx: t.x,
      ty: t.y,
      char: t.char,
    }));
  }

  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  const DURATIONS = { scatter: 3200, converge: 1600, reveal: 1300, hold: 2200, burst: 800 };
  const NEXT_PHASE = { scatter: "converge", converge: "reveal", reveal: "hold", hold: "burst", burst: "scatter" };
  let phase = "scatter";
  let phaseStart = null;

  function drawLinks(useDraw, alphaScale) {
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const ax = useDraw ? a.drawX : a.x, ay = useDraw ? a.drawY : a.y;
        const bx = useDraw ? b.drawX : b.x, by = useDraw ? b.drawY : b.y;
        const dist = Math.hypot(ax - bx, ay - by);
        if (dist < LINK_DIST) {
          ctx.strokeStyle = `rgba(0, 255, 136, ${0.22 * (1 - dist / LINK_DIST) * alphaScale})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(ax, ay);
          ctx.lineTo(bx, by);
          ctx.stroke();
        }
      }
    }
  }

  function drawDots(useDraw) {
    for (const n of nodes) {
      const x = useDraw ? n.drawX : n.x, y = useDraw ? n.drawY : n.y;
      ctx.beginPath();
      ctx.arc(x, y, 1.8, 0, Math.PI * 2);
      ctx.fillStyle = "#00ff88";
      ctx.shadowColor = "#00ff88";
      ctx.shadowBlur = 6;
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  function drawCode(revealCount) {
    ctx.font = `${FONT_SIZE}px "JetBrains Mono", monospace`;
    ctx.textBaseline = "top";
    ctx.shadowColor = "#00ff88";
    ctx.shadowBlur = 6;
    ctx.fillStyle = "#00ff88";
    nodes.forEach((n, i) => {
      if (i < revealCount) {
        ctx.fillText(n.char, n.tx, n.ty);
      } else {
        ctx.beginPath();
        ctx.arc(n.tx, n.ty, 1.8, 0, Math.PI * 2);
        ctx.fill();
      }
    });
    ctx.shadowBlur = 0;
  }

  function step(ts) {
    if (phaseStart === null) phaseStart = ts;
    const elapsed = ts - phaseStart;
    const dur = DURATIONS[phase];
    const t = Math.min(elapsed / dur, 1);

    ctx.clearRect(0, 0, width, height);

    if (phase === "scatter") {
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      }
      drawLinks(false, 1);
      drawDots(false);
    } else if (phase === "converge") {
      const e = easeInOutCubic(t);
      for (const n of nodes) {
        n.drawX = n.x + (n.tx - n.x) * e;
        n.drawY = n.y + (n.ty - n.y) * e;
      }
      drawLinks(true, 1 - e);
      drawDots(true);
    } else if (phase === "reveal") {
      drawCode(Math.floor(t * nodes.length));
    } else if (phase === "hold") {
      drawCode(nodes.length);
    } else if (phase === "burst") {
      const e = easeInOutCubic(t);
      ctx.globalAlpha = 1 - e;
      drawCode(nodes.length);
      ctx.globalAlpha = 1;
      for (const n of nodes) {
        n.x = n.tx + n.vx * elapsed * BURST_SPEED;
        n.y = n.ty + n.vy * elapsed * BURST_SPEED;
      }
    }

    if (t >= 1) {
      phase = NEXT_PHASE[phase];
      phaseStart = ts;
      if (phase === "scatter") {
        for (const n of nodes) {
          n.vx = (Math.random() - 0.5) * SCATTER_SPEED;
          n.vy = (Math.random() - 0.5) * SCATTER_SPEED;
        }
      }
    }

    requestAnimationFrame(step);
  }

  resize();
  window.addEventListener("resize", resize);
  requestAnimationFrame(step);
})();

// ---- "피지컬AI" 타이핑 애니메이션 ----
(() => {
  const el = document.getElementById("brand-text");
  const text = "피지컬AI";
  let i = 0;
  (function typeNext() {
    if (i <= text.length) {
      el.textContent = text.slice(0, i);
      i++;
      setTimeout(typeNext, 160);
    }
  })();
})();

// ---- 왼쪽 상단 "=" 메뉴: 호버 시 1일차~n일차 목록 표시 ----
(() => {
  const dropdown = document.getElementById("hamburger-dropdown");
  dropdown.innerHTML = Array.from(
    { length: TOTAL_DAYS },
    (_, i) => `<a href="${i + 1}일차.html">${i + 1}일차</a>`
  ).join("");
})();

// ---- 왼쪽 터미널 배경: 매트릭스 스타일 코드비 애니메이션 ----
(() => {
  const canvas = document.getElementById("matrix-rain");
  const ctx = canvas.getContext("2d");
  const terminalEl = document.getElementById("terminal-body");
  const chars = "アイウエオカキクケコサシスセソ01234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const fontSize = 15;
  let columns = 0;
  let drops = [];

  function resize() {
    const rect = terminalEl.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    columns = Math.floor(canvas.width / fontSize);
    drops = new Array(columns).fill(0).map(() => Math.floor(Math.random() * -40));
  }

  let boostUntil = 0;
  window.__matrixBoost = (ms) => { boostUntil = Date.now() + ms; };

  function draw() {
    const boosted = Date.now() < boostUntil;
    canvas.classList.toggle("boost", boosted);

    ctx.fillStyle = boosted ? "rgba(0, 0, 0, 0.04)" : "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
      const text = chars[Math.floor(Math.random() * chars.length)];
      const x = i * fontSize;
      const y = drops[i] * fontSize;

      ctx.fillStyle = "#c8ffdc";
      ctx.fillText(text, x, y - fontSize);
      ctx.fillStyle = "#00ff88";
      ctx.fillText(text, x, y);

      if (y > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i] += boosted ? 2 : 1;
    }
  }

  resize();
  window.addEventListener("resize", resize);
  setInterval(draw, 50);
})();

// ---- 해커 아바타 클릭 이스터에그 ----
(() => {
  const FLED_KEY = "physicalai_hacker_fled";
  const avatar = document.getElementById("hacker-avatar");
  const speech = document.getElementById("avatar-speech");

  // 이전에 1일차로 도망친 상태라면, 돌아올 때까지 메인 페이지에는 나타나지 않음
  if (localStorage.getItem(FLED_KEY) === "1") {
    avatar.style.display = "none";
    return;
  }

  const messages = [
    "왜 찌르세요?! 😳",
    "저 코딩 중이에요...",
    "그만 눌러요, 해킹 방해돼요 🙄",
    "김지훈님이 만든 포트폴리오입니다!",
    "터미널이나 한번 써보세요 →",
    "System.exit(0) 하고 싶다...",
    "저는 그냥 배경 캐릭터예요",
  ];
  let hideTimer = null;
  let clickCount = 0;
  let enraged = false;

  avatar.addEventListener("click", () => {
    if (enraged) return;
    clickCount++;

    if (clickCount > 30) {
      enraged = true;
      clearTimeout(hideTimer);
      speech.textContent = "그만 좀 누르라고요!!! 저 갑니다 😡";
      speech.classList.add("show");
      avatar.classList.add("alert");

      setTimeout(() => avatar.classList.add("rage-exit"), 700);
      avatar.addEventListener(
        "animationend",
        () => {
          avatar.style.display = "none";
          localStorage.setItem(FLED_KEY, "1");
        },
        { once: true }
      );
      return;
    }

    const msg = messages[Math.floor(Math.random() * messages.length)];
    speech.textContent = msg;
    speech.classList.add("show");
    avatar.classList.add("alert");

    clearTimeout(hideTimer);
    hideTimer = setTimeout(() => {
      speech.classList.remove("show");
      avatar.classList.remove("alert");
    }, 2200);
  });
})();

// ---- 터미널 ----
const output = document.getElementById("terminal-output");
const input = document.getElementById("terminal-input");

const history = [];
let historyPos = -1;

function print(text, className = "") {
  const line = document.createElement("div");
  line.className = "line" + (className ? ` ${className}` : "");
  line.textContent = text;
  output.appendChild(line);
  output.scrollTop = output.scrollHeight;
}

function dayFileFromArg(arg) {
  const match = arg.match(/(\d{1,2})/);
  if (!match) return null;
  const n = parseInt(match[1], 10);
  if (n < 1 || n > TOTAL_DAYS) return null;
  return `${n}일차.html`;
}

function runCommand(raw) {
  const cmd = raw.trim();
  if (!cmd) return;

  print(`guest@physical-ai:~$ ${cmd}`, "echo");

  const [name, ...rest] = cmd.split(/\s+/);
  const arg = rest.join(" ");

  switch (name) {
    case "help":
      print("사용 가능한 명령어:", "info");
      print("  ls                 전체 일차 목록 보기", "info");
      print("  cd <n일차>          해당 일차 페이지로 이동 (예: cd 1일차)", "info");
      print("  <n일차>             cd 없이 바로 이동 (예: 3일차)", "info");
      print("  clear              화면 지우기", "info");
      break;

    case "ls": {
      const list = Array.from({ length: TOTAL_DAYS }, (_, i) => `${i + 1}일차`).join("  ");
      print(list, "info");
      break;
    }

    case "clear":
      output.innerHTML = "";
      break;

    case "cd": {
      const file = dayFileFromArg(arg);
      if (!file) {
        print(`이동할 수 없습니다: ${arg}`, "error");
        break;
      }
      print(`${file}(으)로 이동합니다...`, "info");
      window.location.href = file;
      break;
    }

    case "whoami":
      print("김지훈", "echo");
      break;

    case "sudo":
      print("Permission denied: 여기서는 root 권한이 없습니다.", "error");
      break;

    case "matrix":
      print("Wake up, 김지훈...", "info");
      print("The Matrix has you.", "info");
      if (window.__matrixBoost) window.__matrixBoost(4000);
      break;

    case "hack": {
      const steps = [
        "Initializing exploit... 완료",
        "방화벽 우회 중... 33%",
        "방화벽 우회 중... 67%",
        "방화벽 우회 중... 100%",
        "권한 상승 중...",
      ];
      if (window.__matrixBoost) window.__matrixBoost(steps.length * 350 + 1500);
      steps.forEach((s, i) => {
        setTimeout(() => print(s, "info"), i * 350);
      });
      setTimeout(() => {
        print("ACCESS GRANTED — 환영합니다, 김지훈님.", "echo");
      }, steps.length * 350 + 300);
      break;
    }

    default: {
      const file = dayFileFromArg(name);
      if (file) {
        print(`${file}(으)로 이동합니다...`, "info");
        window.location.href = file;
      } else {
        print(`명령어를 찾을 수 없습니다: ${name} (help 입력)`, "error");
      }
    }
  }
}

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const value = input.value;
    if (value.trim()) {
      history.push(value);
    }
    historyPos = history.length;
    runCommand(value);
    input.value = "";
  } else if (e.key === "ArrowUp") {
    if (historyPos > 0) {
      historyPos--;
      input.value = history[historyPos];
    }
    e.preventDefault();
  } else if (e.key === "ArrowDown") {
    if (historyPos < history.length - 1) {
      historyPos++;
      input.value = history[historyPos];
    } else {
      historyPos = history.length;
      input.value = "";
    }
    e.preventDefault();
  }
});

document.getElementById("terminal").addEventListener("click", () => input.focus());

print("피지컬AI 포트폴리오 터미널에 오신 것을 환영합니다.", "info");
print("'help'를 입력해 사용 가능한 명령어를 확인하세요.", "info");
