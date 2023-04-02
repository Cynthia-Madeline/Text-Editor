const textInput = document.getElementById("textInput");
const saveButton = document.getElementById("save");
const textContent = document.getElementById("text");

const changeWord = document.getElementById("changeWord");
const newWord = document.getElementById("newWord");
const editButton = document.getElementById("edit");
const clearButton = document.getElementById("clear")

let newData;
let Changes;
let Wordnew;
let currentData

textInput.addEventListener("input", handleChange);
saveButton.addEventListener("click", saveData);
changeWord.addEventListener("input", handleChangeWord);
newWord.addEventListener("input", handleNewWord);
editButton.addEventListener("click", editing);
clearButton.addEventListener("click", clearing);

function handleChange(event) {
  newData = event.target.value;
  console.log(newData);
}

function saveData() {
  //No need event coz click has no value to record down
  textContent.innerHTML = newData;
}

function handleChangeWord(event) {
  Changes = event.target.value;
  console.log(Changes);
}

function handleNewWord(event) {
  Wordnew = event.target.value;
  console.log(Wordnew);
}

function editing() {
  currentData = textContent.innerHTML;
  const editedData = currentData.replaceAll(`${Changes}`,`${Wordnew}`);
  textContent.innerHTML = editedData
}

function clearing(){
    textContent.innerHTML = ""
}