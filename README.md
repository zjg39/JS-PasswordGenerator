# JS-PasswordGenerator

## An exercise in writing code that produces a randomized password, tailored to the specifications of the user, using JavaScript.


### The Function

#### The user is presented with a box inside of a box.  The outer box, underneath a title that reads "Password Generator", tells the user that they can generate a secure password, with a leading, large red button.  When the user clicks the button, they are presented with a series of prompts that compel them to decide what kind of characters they will have in their password: lower case letters, upper case letters, numbers, and special characters.  They can include, or exclude, whatever they want, as long as they choose at least one of the character types.  The user is also prompted to choose a password length: the smallest password available is 8 characters, while the largest is 128 characters.  Any length, including or between those numbers, is acceptable.  If the user types in an invalid number or a word, they are prompted to re-enter a valid number.  The secure password is generated after completing all of the prompts.  At this point, the user is able to copy the password and use it as they please.


### The Experience

#### The HTML provides concise, easy-to-understand text from the beginning, the CSS makes the page look simple and intuitive, and the Javascript functions perfectly, prompting the user with digestable questions and a random password that will always be different, every time the repeat the process.  A simple program with a simple task, performed in a straighforward manner.


### The Build

#### Of course the most difficult part was the Javascript, as this was the only section of the code that we were permitted to build and alter as we saw fit.  My version of a password generator is, under the hood, very simple and concise:

  - A function asking the user if they'd like to generate a password.
  - 4 arrays, stored as variables, that contain all of the possible characters the user can choose from.
  - Empty variables that will create a library of characters from which the program will generate a password.
  - A function that sets the parameters for the password length.
  - 4 variables that act as prompts, storing the responses of the user.
  - An if statement that alerts the user should they choose to include nothing in their password.
  - 4 if statements that, depending on the choices of the user, store the desired characters in the aforementioned empty array.
  - A for loop that draws possible characters, at random, from the previously-empty array, in accordance with the number of characters chosen by the user.  After choosing the characters, they are stored into an array that is then displayed on the screen, inside a convenient box, for the user to enjoy.


