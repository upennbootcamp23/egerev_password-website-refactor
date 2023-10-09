//adding everything for the website to function properly
var gsPassStringLowerLetters = "qwertyuiopasdfghjklzxcvbnm";
var gsPassStringUpperLetters = "QWERTYUIOPASDFGHJKLZXCVBNM";
var gsPassNumbers = "0123456789";
var gsSpecialChars = "~`!@#$%^&*()_-+={[}]|\<,>.?/"

//Getting references to the #generate element
var generateBtn = document.querySelector("#generate");

//-------------------------------------------the writePassword() function
function writePassword(){


//writing password to password input
    //variables required for the code to work
    var bAccepted = false;
    var passLowercaseInclusion = false;
    var passUppercaseInclusion = false;
    var passNumbersInclusion = false;
    var passSymbolsInclusion = false;
    var neededPassLength = 0;
    var numOfAttempts = 5;
    var lsGeneratedPassword = "";

    //checking password length (cannot be less than 8 characters, cannot be more than 128 characters)
    for(var i = 0; i < numOfAttempts; i++) {
        neededPassLength = prompt("Please provide a password length. Minimum: 8; Maximum: 128");
        //if not a number, tell user that input has to be a number.
        if(isNaN(neededPassLength)) {
            alert("Your entry has to be a number.");
            //if greater than 128 or less than 8, tell user that password length has to be between
            //8 and 128 characters.
        } else if(neededPassLength > 128 || neededPassLength < 8) {
            alert("The password length should be no less than 8 chracters and no more than 128 characters.");
        } else {
            bAccepted = true;
            break;
        }
    }

        // no inclusions after 'x' number of times
    if(!bAccepted) {
        alert("Cannot proceed further.");
        //return;
    }

    //get and check inclusion (at least 1 criteria should be included)
    bAccepted = false;
    //asking user to include at least something!
    for(var ptv = 0; ptv < numOfAttempts; ptv++) {
        //asking user to include at least something!
        passLowercaseInclusion = confirm("Include Lowercase?");
        passUppercaseInclusion = confirm("Include Uppercase?");
        passNumbersInclusion  = confirm("Include Numbers?");
        passSymbolsInclusion  = confirm("Include Symbols?");

        //if the user says "no" to all, the alert should tell the user to include at least some criteria
        if(!passLowercaseInclusion && !passUppercaseInclusion && !passNumbersInclusion && 
           !passSymbolsInclusion) {
            alert("Please include at least some criteria.");
           } else {
            bAccepted = true;
            break;
        }
    }

    // no inclusions after 'x' number of times
    if(!bAccepted) {
        alert("Cannot proceed further.");
        return;
    }


    //generate the pasword
    lsGeneratedPassword = generatePassword(neededPassLength, passLowercaseInclusion, 
                                               passUppercaseInclusion, passNumbersInclusion,
                                               passSymbolsInclusion);
    //display password                              
    var passwordText = document.querySelector("#password");
    passwordText.value = lsGeneratedPassword;
}
    //----------------------------------------------the generatePassword() function
    function generatePassword(neededPassLength, passLowercaseInclusion, passUppercaseInclusion,
                              passNumbersInclusion, passSymbolsInclusion) {

                             
        var wholeStringLength = 0;
        var randomInt = 0;
        var allLetters = " ";
        var lsGeneratedPassword = "";
        var randomNumAtPosition = "";

        //add lowercase letters to every letter if included
        if(passLowercaseInclusion){
            allLetters += gsPassStringLowerLetters;
        } 

         //add uppercase letters to every letter if included
         if(passUppercaseInclusion){
            allLetters += gsPassStringUpperLetters;
        } 

         //add numbers to every letter if included
         if(passNumbersInclusion){
            allLetters += gsPassNumbers;
        } 

         //add lowercase letters to every letter if included
         if(passSymbolsInclusion){
            allLetters += gsSpecialChars;
        } 
   

        //getting the character length in the entire string
        wholeStringLength = allLetters.length;

        /*for each character to be added to generated password:
            1. Generate random number for position
            2. Get letter from the position of allLetters
            3. Adding a letter from the generated position directly to the generated password 
            */
            
            for(var luffy = 0; luffy < neededPassLength; luffy++) {
                
                randomInt = getRandomNumber(wholeStringLength);
                 
                randomNumAtPosition = allLetters.charAt(randomInt);
                
                lsGeneratedPassword += randomNumAtPosition;
                
            }

        return lsGeneratedPassword;    
    }

    //--------------------------------------getRandomNumber() function
    function getRandomNumber(iLength) {
        return Math.floor(Math.random() * iLength);
    }

    
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);