const ul = document.querySelector("#item-list");
const button = document.querySelector("#add-btn");

button.addEventListener("click", () => {
  const newItem = document.createElement("li");
  newItem.textContent = "New Item";

  const count = ul.children.length + 1;

  if (count % 2 === 1) {
    newItem.style.fontWeight = "bold";
    newItem.style.color = "blue";
  } else {
    newItem.style.fontStyle = "italic";
    newItem.style.color = "red";
  }

  ul.appendChild(newItem);
});