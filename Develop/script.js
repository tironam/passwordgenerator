// Assignment Code
var generateBtn = document.querySelector("#generate");

// generate the vars we'll need

function generatePassword() {
const passLength = parseInt(prompt('How many characters do you want?'))

const lowerChar = 'abc'
const upperChar = 'ABC'
const numberChar = '123'
const specialChar = '!@^'
const lowC = confirm('do you want lower case?')
const upC = confirm('do you want upper case?')
const numC = confirm('do you want number case?')
const specC = confirm('do you want special case?')
let passHolder = ' '
let newPass = ' '

  if (passLength < 8 || passLength > 128) {
    alert('Please pick a length between 8-128')
    return
  }

  if (!lowC && !upC && !numC && !specC) {
    alert(`You didn't pick anything!`)
  }

  if (lowC) {
    passHolder += lowerChar;
  }
  if (upC) {
    passHolder += upperChar;
  }
  if (numC) {
    passHolder += numberChar;
  }
  if (specC) {
    passHolder += specialChar;
  }

  for (let i = 0; i < passLength; i++) {
    let randomIndex = Math.floor(Math.random() * passHolder.length)
    newPass += passHolder[randomIndex]
  }
  return newPass
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
