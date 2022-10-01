// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomNumber() {
  return Math.floor(Math.random()*(max - min) + min)
}

function randomItem(list) {
return list[randomNumber(0, list.length - 1)]

}
// User Selection

function generatePassword() {

  let length = prompt("How many characters should your password contain? Must be between 8 and 128 characters");
  let pwlength = parseInt(length);
  if (isNaN(pwlength)) {
    window.alert("Not a number");
    return;
  }
  if (pwlength < 8 || pwlength > 128) {
    window.alert("Invalid length");
    return;
  }
  console.log(pwlength);

  let upper = window.confirm("Do you want to use upper case letters? OK for YES or Cancel for NO");
  console.log(upper);

  let lower = window.confirm("Do you want to use lower case letters? OK for YES or Cancel for NO");
  console.log(lower);

  let number = window.confirm("Do you want to use numbers? OK for YES or Cancel for NO");
  console.log(number);

  let symbol = window.confirm("Do you want to use symbols? OK for YES or Cancel for NO");
  console.log(symbol);

  // Variables

  let numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  let symbolList = ["!", "@", "#", "%", "^", "&", "*", "(", ")"]
  let lowerList = ["a", "b", "c", "d", "e","f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  let upperList = ["A", "B", "C", "D", "E","F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

  // Generation

  let characterSet = []


  if (upper === true) {
    characterSet.push(upperList)
  }

  if (lower === true) {
    characterSet.push(lowerList)
  }

  if (number === true) {
    characterSet.push(numberList)
  }

  if (symbol === true) {
    characterSet.push(symbolList)
  }

  let generatePassword = "";

  for (var i = 0; i < pwlength; i++) {
    let randomItem = randomItem(characterSet)
    let randomThing = randomItem(randomItem)

    console.log(randomThing)
  }
  
  


  }



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// for (var i = 0; i <pwlength; i++) {
//   upperList[i]




  // let pwupper = upper.String;
  // if (pwupper != "Y" || pwupper != "N") {
  // window.alert("Invalid");
  // return;
  // }

  // if (symbol != "Y" || "N") {
  //   window.alert("Invalid");
  //   return;
  // }

    // if (number != "Y" || "N") {
  //   window.alert("Invalid");
  //   return;
  //   }

    // if (lower != "Y" || "N") {
  //   window.alert("Invalid");
  //   return;
  //   }

  // // Generate Uppper

  // let upperList = function genUpper() {
  //   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  // }

  // // Generate Lower

  // let lowerList = function genLower() {
  //   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  // }

  // // Generate Number

  // let numberList = function genNumber() {
  //   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  // }

  // // Generate Symbol

  // let symbolList = function genSymbol() {
  //   const symbols = '!@#$%^&*()_-+=`~<>? ';
  //   return symbols[Math.floor(Math.random() * symbols.length)]
  // }

