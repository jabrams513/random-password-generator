// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generate password function
function generatePassword(){
  let characterNums = prompt("How many characters would you like in your password?");
  let text;
  if (characterNums == null || CharacterNums == "") {
    text = "Invalid number of characters!";
  } else {
    text = "I will generate a " + characterNums + "character password!";
  }
  console.log(text)
}