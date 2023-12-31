//GIVEN I need a new, secure password
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password


//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected


//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page

// Assignment code here

function generatePassword() {
    let passwordLength = prompt("How long would you like your password to be?")
    passwordLength = parseInt(passwordLength);

    let useLowercase = false;
    let useUppercase = false;
    let useNumbers = false;
    let useSpecialCharacters = false;

    if (passwordLength >= 8 && passwordLength <= 128) {

        useLowercase = confirm("Use lowercase letters?");
        useUppercase = confirm("Use uppercase letters?");
        useNumbers = confirm("Use numbers?");
        useSpecialCharacters = confirm("Use special characters?");

    } else { 
        alert("Please select a password between 8 & 128 characters.")
        return null;
    }

    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialCharacters = "!@#$%^&*()-_=+<>?/"

    let characters = "";
        if (useLowercase)characters += lowercaseLetters;
        if (useUppercase)characters += uppercaseLetters;
        if (useNumbers)characters += numbers;
        if (useSpecialCharacters)characters += specialCharacters;

    let password = ""; 
        for (let i = 0; i < passwordLength; i++) {
            const index = Math.floor(Math.random() * characters.length);
            password += characters.charAt(index);
        }
        return password;
    }
    

// Get references to the #generate element
var generateBtn = document.getElementById("generate");
var passwordText = document.getElementById("password");

// Add event listener to generate button
generateBtn.addEventListener("click", function () {
    var password = generatePassword();
    if (password !== null) {
        passwordText.value = password;
    }
});