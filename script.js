const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");
const clearBtn = document.getElementById("clearBtn");
const copyBtn = document.getElementById("copyBtn");

function removeLineBreaks(text) {
  return text.replace(/\r?\n/g, "");
}

inputText.addEventListener("input", () => {
  outputText.value = removeLineBreaks(inputText.value);
});

clearBtn.addEventListener("click", () => {
  inputText.value = "";
  outputText.value = "";
  inputText.focus();
});

copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(outputText.value);

    // 버튼 상태 변경 (체크 표시)
    copyBtn.classList.add("copied");
    copyBtn.textContent = "✔ Copied";

    // 2초 후 원래 상태로 복귀
    setTimeout(() => {
      copyBtn.classList.remove("copied");
      copyBtn.textContent = "Copy Result";
    }, 2000);

  } catch (error) {
    console.error("Copy failed:", error);
  }
});