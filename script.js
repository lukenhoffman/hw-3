var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passwordLength = prompt("Enter the desired length of the password (between 8 and 128):");
  
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Invalid password length! Password length should be between 8 and 128 characters.");
    return ""; 
  }

  var useLowerCase = confirm("Include lowercase letters?");
  var useUpperCase = confirm("Include uppercase letters?");
  var useNumbers = confirm("Include numbers?");
  var useSpecialChars = confirm("Include special characters?");

  var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberChars = "0123456789";
  var specialChars = "!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?`~";

  var finalChars = "";

  if (useLowerCase) {
    finalChars += lowerCaseChars;
  }
  
  if (useUpperCase) {
    finalChars += upperCaseChars;
  }
  
  if (useNumbers) {
    finalChars += numberChars;
  }
  
  if (useSpecialChars) {
    finalChars += specialChars;
  }

  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * finalChars.length);
    password += finalChars.charAt(randomIndex);
  }

  return password;
}
