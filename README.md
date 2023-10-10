# Alex Egerev's Password Website Generator (Refactored) Webpage

## Description

This website was created in order to create a strong, secure, more reliable password. According to Keeper Security (https://www.keepersecurity.com/blog/2022/09/14/why-is-password-security-important/), "[c]reating a strong and secure password can reduce the risk of cybercriminals guessing your password accessing sensitive data."

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

No third-party applications were installed during the making of this website.

## Usage

When the user clicks on the "Generate Password" button, a message pops up, telling the user to provide a password length consisting of 8-128 characters. If the user provides anything more or less than the mentioned amount, the error message states that the password length should be no less than 8 chracters and no more than 128 characters.

After the user inputs the length value, the website will ask the user if he/she wants to add lowercase letters, uppercase letters, numbers, and symbols. If the user says no to all, the error message states that the user has to give at least some criteria. 

After the user inputs his/her criteria wishes, the website generates a strong, secure password.

## Credits

While I may have had some help from multiple sources (as listed below), I can assure you that the work provided is my own, original work. 

1. I had trouble with the JavaScript portion of the project. My colleague, Leo, helped me out a lot. His thoughts are on full display in the script.js file.

2. By doing the project, I have learned about the prompt() method. As a matter of fact, the Acceptance Criteria required the website to prompt a message. At first, I didn't know how to do it. However, after looking at the SheCodes website (https://www.cheatsheets.shecodes.io/athena/2473-how-to-prompt-a-question-with-javascript#:~:text=To%20prompt%20a%20question%20with%20JavaScript%2C%20you%20can,box%20with%20the%20question%20%22What%20is%20your%20name%3F%22), I have learned how the website can prompt the user. This is mentioned when the website prompts the user to enter the length for the password in the script.js file. 

3. While the project's variables are my own, I have had some help from a website... that helps you create a password generator website! Of course, I didn't even bother copying from the website, but I had some inspiration from the website. The website can be found here (https://w3collective.com/random-password-generator-javascript/), and the website-inspired (though ORIGINAL) variables are found in the script.js file.

4. By doing the project, I have found something that was NOT TAUGHT AT THE BOOTCAMP: Not a Number (NaN). Stack Overflow (https://stackoverflow.com/questions/175739/how-can-i-check-if-a-string-is-a-valid-number) taught me about NaN. This is put to use in the script.js file, where I needed to verify if the length of the password is a number or a string. 

5. I had to give criteria to the user, as stated in the Acceptance Criteria. Stack Overflow (https://stackoverflow.com/questions/9334636/how-to-create-a-dialog-with-ok-and-cancel-options) helped me with creating dialog with "Yes" and "No" buttons (in this case, "OK" and "Cancel".)

## License

Please refer to the LICENSE in the repo.
