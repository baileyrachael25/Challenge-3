// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var chosenPrompts = usePrompts();
  var passwordText = document.querySelector("#password");

  if (chosenPrompts) {
    var password = generatePassword();
    passwordText.value = password;
  }
  else {
    passwordText.value = "password not created";
  }
};

//generate password
function generatePassword(){
  //create password based on the prompt responses
  var generatedPassword = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomChar = Math.floor(Math.random() * optionsCart.length);
    generatedPassword += optionsCart[randomChar];
  };
  return generatedPassword;
};

function usePrompts() {
  optionsCart = [];

  passwordLength = parseInt(window.prompt('Choose a password length between 8 and 128 characters.'));

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    window.alert('Please enter a password length as a number between 8 and 128.');
    return false;
  };

  if (window.confirm("Would you like to include numbers in your password?")) {
    optionsCart = optionsCart.concat(numberList);
  };

  if (window.confirm("Would you like to include symbols in your password?")) {
    optionsCart = optionsCart.concat(symbolList);
  };

  if (window.confirm("Would you like to include lowercase letters in your password?")) {
    optionsCart = optionsCart.concat(lowercaseList);
  };

  if (window.confirm("Would you like to include uppercase letters in your password?")) {
    optionsCart = optionsCart.concat(uppercaseList);
  };

  return true;
  };

//arrays of characters that can be used in generated password
var numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbolList = ["!", "@", "#", "$", "%", "&", "^", "*", "+", "/", "-", ">", "<", "~", "_", "|", "?"];
var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var optionsCart = [];
var passwordLength = '';
