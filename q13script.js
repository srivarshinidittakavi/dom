const colorInput = document.getElementById("color-input");
const textInput = document.getElementById("text-input");
const bgBtn = document.getElementById("bg-btn");
const textBtn = document.getElementById("text-btn");
const contentBox = document.getElementById("content-box");

bgBtn.addEventListener("click", () => {
  const color = colorInput.value.trim();
  contentBox.style.backgroundColor = "";
  contentBox.style.backgroundColor = color;

  if (contentBox.style.backgroundColor === "") {
    alert("Invalid color name!");
  }
});

textBtn.addEventListener("click", () => {
  const text = textInput.value.trim();
  if (text === "") {
    alert("Please enter some text!");
  } else {
    contentBox.textContent = text;
  }
});