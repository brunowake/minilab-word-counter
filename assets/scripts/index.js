function countWords() {
  const text = document.getElementById("inputText").value;
  const stringToArray = text.split(" ").filter((element) => element !== "");
  const display = document.getElementById("displayNumberOfWords");
  display.textContent = `Você digitou ${stringToArray.length} palavras`;
}
const button = document.getElementById("countBtn");
button.addEventListener("click", () => countWords());
