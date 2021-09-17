// Assignment Code: this variable, using the .querySelector method, is targeting the 'generate' tag in the 'document'.  The 'document' is our HTML document.  When we look inside the document, we find 
// that the 'generate' id is attached to a button mechanism.  So, in other words, this variable is targeting the button! 
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log('Button clicked!');
    var userDecision = window.confirm("Would you like to generate a password?");
    console.log(userDecision);
    if (!userDecision){
        return alert("See you later!");
    } 


// The different arrays that we will draw random characters from.

    var lowerCaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var specialCharactersArray = ['!', '@', '#', '$', '%', '^', '&', '*', '=', '+'];
    var numbersArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];


// The 'randomArray' that we will store the randomized values in and the 'password result'.

    var randomArray = [];
    var passwordResult = "";


// First, we prompt the user to enter a number with certain parameters. 

    var passwordLength = window.prompt('Choose a number between 8 and 128');

    if (passwordLength > 128 || passwordLength < 8){
        return alert("Please choose a number between 8 and 128.");
    } else if (passwordLength > 7 && passwordLength< 129) {

    } else {
        alert("Please choose a valid number");
        return;
    }

// Then we prompt the user to decide the complexity of their password by picking upper case letters, lower case letters, numbers, and special characters.  The more they say 'yes",
// the more complex the password becomes.

    var ifLowerCase = window.confirm("Would you like to include lower case letters in your password?");

    var ifUpperCase = window.confirm("Would you like to include upper case letters in your password?");

    var ifNumbers = window.confirm("Would you like to include numbers in your password?");

    var ifSpecialCharacters = window.confirm("Would you like to include special characters in your password?");


// We need to have a condition that prompts the user to pick at least one of the above conditions.  If they don't, then they won't get a password.

    if (!ifLowerCase && !ifUpperCase && !ifNumbers && !ifSpecialCharacters){
        alert("You must make at least one selection.");
        return;
    }


// Here is the meat and potatoes of the function: adding the arrays from which we will draw randomized values into a single array, based on the responses of the user.

    if (ifSpecialCharacters){
        randomArray = randomArray.concat(specialCharactersArray);
        console.log(randomArray);
    }
    if (ifNumbers){
        randomArray = randomArray.concat(numbersArray);
        console.log(randomArray);
    }
    if (ifUpperCase){
        randomArray = randomArray.concat(upperCaseArray);
        console.log(randomArray);
    }
    if (ifLowerCase){
        randomArray = randomArray.concat(lowerCaseArray);
        console.log(randomArray);
    }

    


// The workhorse of the function: a for loop that parses the compiled randomArray and selects, at random, a password.

    for (var i = 0; i < passwordLength; i++){
        passwordResult = passwordResult.concat(randomArray[Math.floor(Math.random() * randomArray.length)]);
        console.log(passwordResult);
    }

    return passwordResult;
}


// Write password to the #password input.  The writePassword function uses a variable (generatePassword) to store the password generated by the function.  Our goal is to write that function so that
// it generates a random password, tailored to the user's preferences, every time the button is pushed.  The variable passwordText targets the 'password' id in the document, which is the part of the
// document that displays the text...a text box, if you will.  That text is then stored inside the variable 'password'.  We see this below the two variables, where the 'value' of the passwordText variable
// is the equated to the variable 'password'.


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button: when the button is clicked, the 'writePassword' function will be called.
generateBtn.addEventListener("click", writePassword);