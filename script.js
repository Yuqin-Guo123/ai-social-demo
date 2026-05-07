const openAI = document.getElementById("openAI");
const closeAI = document.getElementById("closeAI");
const aiPanel = document.getElementById("aiPanel");
const voiceBtn = document.getElementById("voiceBtn");
const aiResult = document.getElementById("aiResult");
const confirmBtn = document.getElementById("confirmBtn");
const successResult = document.getElementById("successResult");

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
});
