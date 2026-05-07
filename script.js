const openAI = document.getElementById("openAI");
const closeAI = document.getElementById("closeAI");
const aiPanel = document.getElementById("aiPanel");
const voiceBtn = document.getElementById("voiceBtn");
const aiResult = document.getElementById("aiResult");
const confirmBtn = document.getElementById("confirmBtn");
const successResult = document.getElementById("successResult");
const toast = document.getElementById("toast");

openAI.addEventListener("click", () => {
  aiPanel.classList.add("show");
});

closeAI.addEventListener("click", () => {
  aiPanel.classList.remove("show");
});

voiceBtn.addEventListener("click", () => {
  aiResult.classList.remove("hidden");
  successResult.classList.add("hidden");
});

confirmBtn.addEventListener("click", () => {
  successResult.classList.remove("hidden");

  toast.classList.remove("hidden");
  toast.style.animation = "none";

  setTimeout(() => {
    toast.style.animation = "pop 1.2s ease forwards";
  }, 20);

  setTimeout(() => {
    toast.classList.add("hidden");
  }, 1200);
});
