// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  let promptedLength;
  let validLength = false;
  while (!validLength) {
    promptedLength = prompt("How many characters would you like in your password? You may have between 8 and 128 characters.");
    if (promptedLength >= 8 && promptedLength <= 128) {
      validLength = true;
    } else if (promptLength === null) {
      break;
    }
  }

  if (validLength == true) {
    let useLowercase = confirm("Use lowercase characters? 'Ok' for yes, 'Cancel' for no.");
    let useUppercase = confirm("Use uppercase characters? 'Ok' for yes, 'Cancel' for no.");
    let useNumerals = confirm("Use numerals characters? 'Ok' for yes, 'Cancel' for no.");
    let useSpecial = confirm("Use special characters? 'Ok' for yes, 'Cancel' for no.");
    var password = generatePassword(promptLength, useLowercase, useUppercase, useNumerals, useSpecial);
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}

// Available password criteria
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numerals = "0123456789";
let special = "!\"#$%&'()*+,-./:;<=>?@[\]\\^_`{|}~";