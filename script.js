//Array with special characters
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

//Array with numeric characters
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//Array of Lowercase or Uppercase characters
var lowerCaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var upperCaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// We declare the function getPasswordOptions here:
function getPasswordOptions() {
   // 'prompt' will show a dialog box on the screen with the message we set. parseInt will convert the user's input into an integer.
  var length = parseInt(prompt("Enter the length of the password (between 8 and 128 characters)")); 

  // if the answer is not a number, the user will receeive a message
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a valid number between 8 and 128.");
    return null;
}

// Confirm use of special characters
var includeSpecial = confirm("Include Special characters?");

//Cofirm use of numeric characters
var includeNumeric = confirm("Include Numeric characters?")

//Confirm use of lowercase characters
var includeLowercase = confirm("Include Lowercase characters?")

//Confirm use of uppercase characters
var includeUppercase = confirm("Include Uppercase characters?")

//at least one character type must be selected
if (!includeSpecial && !includeNumeric && !includeLowercase && !includeUppercase) {
  alert("Please select at least one character type.");
  return null; // return null if none selected
}

// the function will return an object with user's input
return {
  length: length,
  special: includeSpecial,
  numeric: includeNumeric,
  lower: includeLowercase,
  upper: includeUppercase
};
}

// Declaring the function for getting a random element from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  return randElement;
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();

  if (!options) {
    return ""; // User canceled or entered invalid input
  }

  // Concatenate arrays based on user input
  var allCharacters = [];
  if (options.special) {
    allCharacters = allCharacters.concat(specialCharacters);
  }
  if (options.numeric) {
    allCharacters = allCharacters.concat(numericCharacters);
  }
  if (options.lower) {
    allCharacters = allCharacters.concat(lowerCaseCharacters);
  }
  if (options.upper) {
    allCharacters = allCharacters.concat(upperCaseCharacters);
  }

  // Initializing the password as an empty string
  var password = "";

  for (var i = 0; i < options.length; i++) {
    var randomChar = getRandom(allCharacters);
    password += randomChar;
  }
  return password;
}

// after this code is executed, the generateBtn variable can be used in the JavaScript code to interact with the HTML button element that has the id "generate."
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// We add the event listener to generate button
generateBtn.addEventListener('click', writePassword);

// Declaring a function to copy the generated password to the clipboard
function copyPassword() {
  // Select the text area containing the password
  var passwordText = document.querySelector('#password');
  passwordText.select();
  
  // code to copy the selected text to the clipboard
  document.execCommand('copy');
  
  // Deselecting the text area
  window.getSelection().removeAllRanges();

  // Alerting the user after copying successful:
  alert('Password copied to clipboard!');
}

var generateBtn = document.querySelector('#generate');
var copyBtn = document.querySelector('#copy');

// Adding the event listener for copying the code
copyBtn.addEventListener('click', copyPassword);
