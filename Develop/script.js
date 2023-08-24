var generateBtn = document.querySelector("#generate");

// generate lists of valid characters
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "0123456789";
var specialChars = "!@#$%^&*()-_=+[]{}|;:,.<>?";

// function to randomly select and returns a character from a string
function getRandomCharacter(characters) {
  var randomIndex = Math.floor(Math.random() * characters.length);
  return characters[randomIndex];
}

// function to generate the password
function generatePassword() {
  // initializes password and prompts user for the password length
  var password = "";
  var passwordLength = parseInt(prompt("Enter password length (between 8 and 128):"));
  
  // determines if password length is valid
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length.");
    return "";
  }

  // prompts user on confirmations for password criteria
  var useLowercase = confirm("Include lowercase characters?");
  var useUppercase = confirm("Include uppercase characters?");
  var useNumeric = confirm("Include numeric characters?");
  var useSpecial = confirm("Include special characters?");
  
  // return if no prompts are selected
  if (!useLowercase && !useUppercase && !useNumeric && !useSpecial) {
    alert("You must select at least one character type.");
    return "";
  }

  // concatenate all valid chars for random selection
  var allChars = "";
  if (useLowercase) allChars += lowercaseChars;
  if (useUppercase) allChars += uppercaseChars;
  if (useNumeric) allChars += numericChars;
  if (useSpecial) allChars += specialChars;


  // generates password and return
  for (var i = 0; i < passwordLength; i++) {
    password += getRandomCharacter(allChars);
  }

  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.textContent = password;
}

generateBtn.addEventListener("click", writePassword);
