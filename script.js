// Assignment Code
var generateBtn = document.querySelector("#generate");

//generate password
function generatePassword(){
  var userInput = window.prompt("How long do you want your password to be?")
  var passwordLength = parseInt(userInput)

  if (isNaN(passwordLength)) {
    window.alert("Please enter a number length.")
    return
  };

  if (passwordLength <8 || passwordLength > 128){
    window.alert("Password Length must be betweeen 8 and 128 characters.")
    return
  };

  var userWantsNumbers = window.confirm("Would you like to include numbers in your password?");
  var userWantsSymbols = window.confirm("Would you like to include symbols in your password?");
  var userWantsLowercase = window.confirm("Would you like to include lowercase letters in your password");
  var userWantsUppercase = window.confirm("Would you like to include uppercase letters in your password");

  var numberList = []
  var symbolList = []
  var lowercaseList = []
  var uppercaseList = []

  var optionsCart = []

  for (var i = 0; i < lowercaseList.length; i++) {
    uppercaseList[i] = lowercaseList[i].toUpperCase()
  };

  if (userWantsNumbers === true){
    optionsCart.push(numberList)
  };
  
  if (userWantsSymbols === true){
    optionsCart.push(symbolList)
  };

  if (userWantsLowercase === true){
    optionsCart.push(lowercaseList)
  };

  if (userWantsUppercase === true){
    optionsCart.push(uppercaseList)
  };

  if (optionasCart.length === 0){
    optionsCart.push(lowercaseList)
  };

  var generatedPassword = ""

  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(optionsCart)
    var randomChar = getRandomItem(randomList)
    generatedPassword += randomChar
  };

  return generatedPassword
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


