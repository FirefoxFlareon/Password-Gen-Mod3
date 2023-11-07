var generateBtn = document.querySelector("#generate");

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var special = "!#$%&'()*+-./:<=>?@[]^,_`{|}";

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passwordLength = prompt("Enter desired length of password (between 8 and 128 characters)");

  if (
    passwordLength === null ||
    isNaN(passwordLength) ||
    passwordLength < 8 ||
    passwordLength > 128
  ) {
    alert("Please enter a valid length between 8 and 128 characters.");
    return "";
  }

  var password = "";
  var charPool = "";

  var includeLowerCase = confirm("Include lowercase characters?");
  var includeUpperCase = confirm("Include uppercase characters?");
  var includeNumbers = confirm("Include numbers?");
  var includeSpecial = confirm("Include special characters?");

  if (includeLowerCase) {
    charPool += lowerCase;
  }
  if (includeUpperCase) {
    charPool += upperCase;
  }
  if (includeNumbers) {
    charPool += numbers;
  }
  if (includeSpecial) {
    charPool += special;
  }


  if (charPool === "") {
    alert("Please select at least one character type for your password.");
    return "";
  }


  for (var i = 0; i < passwordLength; i++) {
    var randomBank = Math.floor(Math.random() * charPool.length);
    password += charPool.charAt(randomBank);
  }

  return password;
}

generateBtn.addEventListener("click", writePassword);
