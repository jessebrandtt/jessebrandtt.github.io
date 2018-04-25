var quizForm = document.getElementById("quiz-form");
quizForm.addEventListener("submit", function(event) {
    event.preventDefault();

    var resultsDiv = document.getElementById("results");
    var answer1 = document.querySelector('[name="question1"]:checked');
    var answer2 = document.querySelector('[name="question2"]:checked');
    var answer3 = document.querySelector('[name="question3"]:checked');

    if (!answer1 && !answer2 && !answer3) {
        resultsDiv.innerHTML = "You didn't check anything!";
    } else if (answer1 && answer2 && !answer3) {
        resultsDiv.innerHTML = "You didn't check question 3!";
    } else if (answer1 && !answer2 && answer3) {
        resultsDiv.innerHTML = "You didn't check question 2!";
    } else if (!answer1 && answer2 && answer3) {
        resultsDiv.innerHTML = "You didn't check question 1!";
    } else if (!answer1 && !answer2 && answer3) {
        resultsDiv.innerHTML = "You didn't check question 1 and 2!";
    } else if (!answer1 && answer2 && !answer3) {
        resultsDiv.innerHTML = "You didn't check question 1 and 3!";
    } else if (answer1 && !answer2 && !answer3) {
        resultsDiv.innerHTML = "You didn't check question 2 and 3!";
    } else {

        if (answer1.value === "javascript" && answer2.value === "jesse" && answer3.value === "dog" ) {
            resultsDiv.innerHTML = "You got all the questions right. Great job!";
        } else if (answer1.value === "javascript" && answer2.value !== "jesse" && answer3.value !== "dog" ) {
            resultsDiv.innerHTML = "You got one question right. Keep thinking!";
        } else if (answer1.value !== "javascript" && answer2.value === "jesse" && answer3.value !== "dog" ) {
            resultsDiv.innerHTML = "You got one question right. Keep thinking!";
        } else if (answer1.value !== "javascript" && answer2.value !== "jesse" && answer3.value === "dog" ) {
            resultsDiv.innerHTML = "You got one question right. Keep thinking!";
        } else if (answer1.value === "javascript" && answer2.value === "jesse" && answer3.value !== "dog" ) {
            resultsDiv.innerHTML = "You got two question right. Your almost there!";
        } else if (answer1.value === "javascript" && answer2.value !== "jesse" && answer3.value === "dog" ) {
            resultsDiv.innerHTML = "You got two question right. Your almost there!";
        } else if (answer1.value !== "javascript" && answer2.value === "jesse" && answer3.value === "dog" ) {
            resultsDiv.innerHTML = "You got two question right. Your almost there!";
        } else {
            resultsDiv.innerHTML = "You got none of the questions right. Not much of a thinker are we?";
        }
    }


});
