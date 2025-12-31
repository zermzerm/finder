let selected = [];
let lastClicked = null;

const btn = document.getElementById("testBtn");

const btnSection = document.querySelector(".btnSection");

btnSection.addEventListener("click", (e) => {
  if (!e.target.classList.contains("btn")) return;
  const buttons = Array.from(document.querySelectorAll(".btn"));
  const id = e.target.id;

  if (!e.shiftKey) {
    // 마지막으로 클릭한 버튼 업데이트
    lastClicked = id;
  }

  if (e.ctrlKey || e.metaKey) {
    // 컨트롤 눌렀을 때의 동작
    if (selected.includes(id)) {
      selected.splice(selected.indexOf(id), 1);
    } else {
      selected.push(id);
    }
  } else if (e.shiftKey && lastClicked !== null) {
    // 쉬프트 눌렀을 때의 동작
    const currentIdx = buttons.findIndex((btn) => btn.id === id);
    const lastIdx = buttons.findIndex((btn) => btn.id === lastClicked);

    const start = Math.min(currentIdx, lastIdx);
    const end = Math.max(currentIdx, lastIdx);

    // 이전 선택 비우고 범위로 채우기
    selected = [];
    for (let i = start; i <= end; i++) {
      selected.push(buttons[i].id);
    }
  } else {
    // 단일 선택 동작
    selected = [];
    selected.push(id);
  }

  document.querySelectorAll(".btn").forEach((btn) => {
    const btnId = btn.id;
    if (selected.includes(btnId)) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
});
