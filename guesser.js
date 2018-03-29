var guessForm = document.getElementById("guess_form");
var guessDisplay = document.getElementById("guess_display");
var guessInput = document.getElementById("guess_input");
var guessStatus = document.getElementById("guess_status");
var letterCounter = document.getElementById("letter_counter");
var guessedLettersDisplay = document.getElementById("guessedLettersDisplay");
var secretWord;
var falseLetterCounter = 10;
var foundLetter = "f";

letterCounter.innerHTML = falseLetterCounter;


// Initialize game state variables

var guessedWord = [];
var guessedLetters = [];
function initialize (word) {
    secretWord = word;
    for (var i = 0; i < word.length; i++) {
        guessedWord[i] = "_";
    }
    console.log(secretWord);
    displayGuessedWord();
}


// Returns true if its a correct guess -
//  if the letter is anywhere in the word
// Also updates guessedWord and guessedLetters
var checkLetterGuess = function(letter) {
    guessedLetters.push(letter);
    for (var i = 0; i < secretWord.length; i++) {
        if(secretWord[i] == letter) {
            guessedWord[i] = letter;
            foundLetter = "t";
            console.log("whats up");
        }else if(foundLetter != "t"){
            foundLetter = "f";
            console.log("bad stuff");
        }
    }
    for(var i = 0; i < guessedLetters.length; i++){
        if(letter == guessedLetters[i-1] & guessedLetters.length > 1){
            console.log("guessed")
            foundLetter = "o";
            guessStatus.innerHTML = "You already guessed " + guessInput.value + ". Try another letter.";

        }
    }
    guessedLettersDisplay.innerHTML = guessedLetters.join(" ~ ");
    return foundLetter;
};

// Returns true if they guessed the whole word
var hasWon = function() {
    var finalWord = guessedWord.join("");
    if(finalWord == secretWord) {
        return true;
    }else{
        return false;
    }

};


var displayGuessedWord = function() {
    guessDisplay.innerHTML = guessedWord.join(" ");

};


guessForm.addEventListener("submit", function(event) {
    event.preventDefault();
    var letter = guessInput.value.toLowerCase();
    var foundLetter = checkLetterGuess(letter);
    console.log(foundLetter);
    if (letter.length == 1){
        console.log(letter);

        console.log(foundLetter);
    }else{
        guessStatus.innerHTML = "Please guess a single letter.";
    }
    console.log(foundLetter);
    if (foundLetter == "t") {
        guessStatus.innerHTML = "There is a " + letter + " in the word.";
        console.log(foundLetter);
    }else if(foundLetter == "f"){
        guessStatus.innerHTML = "There is no " + letter + " in the word. Keep guessing!";
        falseLetterCounter -= 1;
        console.log(falseLetterCounter);
        letterCounter.innerHTML = falseLetterCounter;
        console.log(falseLetterCounter);
    }
    if (hasWon()) {
        guessStatus.innerHTML = "WINNER WINNER CHICKEN DINNER!";
        letterCounter.innerHTML = "";
    }
    displayGuessedWord();
    letter = "";
    document.getElementById("guess_input").value = "";
    foundLetter = "f";
    console.log(foundLetter);
});
$(function (){
    $.get("package.json", function(data){
        var dictionary = data.words;
        var word = dictionary[Math.floor(dictionary.length * Math.random())].toLowerCase();
        for(var i = 0; i < word.length; i++){
            if(word[i] == " " || word[i] == "-"){
                word = dictionary[Math.floor(dictionary.length * Math.random())].toLowerCase();
            }
        }
        console.log(word);
        initialize(word);
    });
});
displayGuessedWord();
