var quoteText = document.getElementById("quote");
var quoteButton = document.getElementById("new-quote-btn");
var form = document.getElementById("quoteForm");
var message = document.getElementById("formMessage");
var userQuoteInput = document.getElementById("userQuote");

quoteButton.addEventListener("click", function () {
    fetch("https://api.quotable.io/random")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            quoteText.innerText = data.content + " — " + data.author;
        })
        .catch(function () {
            quoteText.innerText = "Oops! Couldn't load a quote.";
        });
});

form.addEventListener("submit", function (e) {
    e.preventDefault();
    var userQ = userQuoteInput.value.trim();
    
    if (userQ === "") {
        message.innerText = "Please type something!";
    } else {
        message.innerText = "Thanks for sharing!";
        userQuoteInput.value = "";
    }
});