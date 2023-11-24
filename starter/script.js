//Array with special characters
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

//Array with numeric characters
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//Array of Lowercase or Uppercase characters
var lowerCaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var upperCaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// We declare the function getPasswordOptions here:
function getPasswordOptions() {
   // 'prompt' will show a dialog box on the screen with the message we set. parseInt will convert the user's input (which is initially a string) into an integer.
  var length = parseInt(prompt("Enter the length of the password (between 8 and 128 characters)")); 

  // if the answer is not a number, the user will receeive a message
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a valid number between 8 and 128.");
    return null;
}
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
