const openAI = document.getElementById("openAI");
const closeAI = document.getElementById("closeAI");
const aiPanel = document.getElementById("aiPanel");
const aiResult = document.getElementById("aiResult");
const aiContent = document.getElementById("aiContent");
const confirmBtn = document.getElementById("confirmBtn");
const successResult = document.getElementById("successResult");
const toast = document.getElementById("toast");

let currentAction = "";

openAI.addEventListener("click", () => {
  aiPanel.classList.add("show");
});

closeAI.addEventListener("click", () => {
  aiPanel.classList.remove("show");
});

document.querySelectorAll(".voice-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    currentAction = btn.dataset.action;
    successResult.classList.add("hidden");
    aiResult.classList.remove("hidden");

    if (currentAction === "gift") {
      aiContent.innerHTML = `
        <p><b>玩家语音：</b>给他送十朵鲜花</p>
        <p><b>识别对象：</b>夏日畅想家</p>
        <p><b>识别行为：</b>赠送礼物</p>
        <p><b>礼物内容：</b>鲜花 × 10</p>
        <p><b>AI建议：</b>该玩家与当前玩家互动积极，适合进行轻量送礼互动。</p>
      `;
      confirmBtn.textContent = "确认送礼";
    }

    if (currentAction === "hello") {
      aiContent.innerHTML = `
        <p><b>玩家语音：</b>跟他打个招呼</p>
        <p><b>识别对象：</b>夏日畅想家</p>
        <p><b>识别行为：</b>生成破冰话术</p>
        <p><b>AI生成：</b>“刚刚看你操作挺稳的，要不要一起打一把？”</p>
      `;
      confirmBtn.textContent = "发送招呼";
    }

    if (currentAction === "match") {
      aiContent.innerHTML = `
        <p><b>玩家语音：</b>邀请他一起匹配</p>
        <p><b>识别对象：</b>夏日畅想家</p>
        <p><b>识别行为：</b>发起匹配邀请</p>
        <p><b>AI建议：</b>该玩家与你配合度较高，适合邀请进入下一局匹配。</p>
      `;
      confirmBtn.textContent = "发送邀请";
    }
  });
});

confirmBtn.addEventListener("click", () => {
  let message = "";

  if (currentAction === "gift") {
    message = "✅ 已向「夏日畅想家」赠送鲜花 × 10，好感度 +15";
  }

  if (currentAction === "hello") {
    message = "💬 已发送：刚刚看你操作挺稳的，要不要一起打一把？";
  }

  if (currentAction === "match") {
    message = "🤝 已向「夏日畅想家」发送匹配邀请";
  }

  successResult.textContent = message;
  successResult.classList.remove("hidden");

  toast.textContent = message;
  toast.classList.remove("hidden");
  toast.style.animation = "none";

  setTimeout(() => {
    toast.style.animation = "pop 1.2s ease forwards";
  }, 20);

  setTimeout(() => {
    toast.classList.add("hidden");
  }, 1200);
});
