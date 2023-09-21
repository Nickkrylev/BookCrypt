let textVal = document.getElementsByClassName("text")[0];
let result = document.getElementsByClassName("result")[0];
let verseClass = document.getElementsByClassName("text")[1];

function generateMatrix(verse) {
  verse = verse.replace(/[^\p{L}'!, ]/gu, "");
  const rows = [];
  for (let i = 0; i < verse.length; i += 10) {
    rows.push(verse.slice(i, i + 10));
  }
  console.log(rows)
  const matrix = rows.map((row) => row.split(""));
  console.log(matrix)
  return matrix;
}

function getCode(matrix, char) {
  const arrSymbol = [];
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    if (row.includes(char)) {
      const column = row.indexOf(char);
      arrSymbol.push(`${i + 1} /${column + 1}`);
    }
  }
  if (arrSymbol.length > 0) {
    const indexFromArray = Math.floor(Math.random() * arrSymbol.length);
    return arrSymbol[indexFromArray];
  }
  return "";
}

function Button(state) {
  result.innerHTML = "";
  console.log(verseClass.value, textVal.value);
  let resultButton = state ? encrypt(verseClass.value, textVal.value) : decrypt(verseClass.value, textVal.value);
  result.innerHTML = resultButton;
}

function checkSymbols(text1, text2) {
  let arrText2 = text1.split('');
  let noSymbol = null;
  for (const char of text2) {
    console.log(char);
    if (!arrText2.includes(char)) {
      noSymbol += char;
    }
  }
  textAlert.textContent = "";
  console.log(noSymbol);
  textAlert.textContent = "Missing char:"+noSymbol;
  alertV.style.display = "flex";


 
}

function DisAlert(){
  alertV.style.display = "none";
}


function encrypt(verse, message) {
  checkSymbols(verse, message);
  const matrix = generateMatrix(verse);
  const codes = [];
  for (const char of message) {
    const code = getCode(matrix, char);
    codes.push(code);
  }
  return codes.join(",");
}

function getChar(matrix, code) {
  if (code === "") {
    return "";
  } 
  const [row, column] = code.split("/");
  return matrix[row - 1][column - 1];
}

function decrypt(verse, ciphertext) {
  const matrix = generateMatrix(verse);
  const codes = ciphertext.split(",");
  const chars = [];
  for (const code of codes) {
    const char = getChar(matrix, code);
    chars.push(char);
  }
  return chars.join("");
}


