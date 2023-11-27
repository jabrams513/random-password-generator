// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
// Ask for password length and validate if the length falls within the range of the prompt
function writePassword() {
  let promptedLength = parseInt(prompt("How many characters would you like in your password? You may have between 8 and 128 characters."));
  console.log(promptedLength)
  let validLength = false;
  if (promptedLength < 8 || promptedLength > 128 || isNaN(promptedLength)) {
    alert("Password length must be greater than 8 and less than 128.")
    return;
  }
  else {
    validLength = true
  }

  // If length is in valid range, ask a series of questions regarding which character types to include
  if (validLength == true) {
    let useLowercase = confirm("Use lowercase characters? 'Ok' for yes, 'Cancel' for no.");
    let useUppercase = confirm("Use uppercase characters? 'Ok' for yes, 'Cancel' for no.");
    let useNumerals = confirm("Use numerals characters? 'Ok' for yes, 'Cancel' for no.");
    let useSpecial = confirm("Use special characters? 'Ok' for yes, 'Cancel' for no.");
    var password = generatePassword(promptedLength, useLowercase, useUppercase, useNumerals, useSpecial);
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}

// Define strings available for use in character sets
const generatePassword = (promptedLength, lowercase, uppercase, numeric, special) => {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numericChars = "0123456789";
  const specialChars = "!\"#$%&'()*+,-./:;<=>?@[\]\\^_`{|}~";

  // Compile a list of selected character types
  let selectedCharTypes = "";

  if (lowercase) {
    selectedCharTypes += lowercaseChars
  }

  if (uppercase) {
    selectedCharTypes += uppercaseChars
  }

  if (numeric) {
    selectedCharTypes += numericChars
  }

  if (special) {
    selectedCharTypes += specialChars
  }

  // Alert if no types of characters are selected
  if (selectedCharTypes == "") {
    console.log()
    alert("You must select some type of characters to generate a password");
  }
  // Randomly select characters until reaching the prompted length
  else {
    let password = ""
    for (let i = 0; i < promptedLength; i++) {
      let randomIndex = Math.floor(Math.random() * selectedCharTypes.length);
      password += selectedCharTypes[randomIndex]
    }
    return password;
  }
}