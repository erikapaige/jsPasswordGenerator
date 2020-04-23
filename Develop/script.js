// Assignment Code
let generateBtn = document.querySelector("#generate");
function generatePassword() {
  let password = []

  let userChoice = ["yes", "no"]

  let lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  let uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

  let numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

  let symbol = ["!", "#", "$", `"`, "%", "&", "'", "(", ")", "*", "+", ",", "-", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]

  let lowerPrompt = prompt('Would you like to include lowercase characters in your password?');
  if (lowerPrompt === "yes") {
    password = lowercase
  } else {
    alert("You will not have a lowercase in your password.")
  }

  let upPrompt = prompt('Would you like to include uppercase characters in your password?')
  if (upPrompt === "yes") {
    password = password.concat(uppercase)
  } else {
    alert("You will not have an uppercase in your password.")
  }

  let numPrompt = prompt('Would you like to include numbers in your password?')
  if (numPrompt === "yes") {
    password = password.concat(numeric)
  } else {
    alert("You will not have numbers in your password.")
  }

  let specialChar = prompt('Would you like to include special characters in your password?')
  if (specialChar === "yes") {
    password = password.concat(symbol)
    console.log(password)
  } else {
    alert("You will not have symbols in your password.")
  }

  let numChar = prompt('How long do you want your password to be? It must be between 8 and 128 characters.')

  // /.length tells how many characters are in password based on choices

  let passLength = password.length
  let finalPassword = []


  for (let i = 0; i < numChar; i++) {
    x = (password[Math.floor(Math.random() * passLength)])
    finalPassword = finalPassword.concat(x)
  }

  console.log(finalPassword)
      //output answer
  
  return finalPassword.join ("")

}

function writePassword() {
  let masterPassword = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = masterPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
