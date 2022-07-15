// function to get a new quote
const getNewQuote = async () => {
    
  //api for quote
  var url = "https://type.fit/api/quotes";

  //fetch data from api
  const response = await fetch(url);

  //converts the response to JSON format
  const allQuotes = await response.json();

  // Generates a random number between 0 and the length of the quotes array
  const indx = Math.floor(Math.random() * allQuotes.length);
  console.log(indx);

  //Store the quote present at the randomly generated index

  const quote = allQuotes[indx].text;

  //Store the author of the respective quote

  const auth = allQuotes[indx].author;

  if (auth == null) {
    author = "Anonymous";
  }

  const text = document.getElementById("quote");
  const author = document.getElementById("author");

  //function to dynamically display the quote and the author

  text.innerHTML = quote;
  author.innerHTML = "~ " + auth;

  const tweetButton = document.getElementById("tweet");

  //tweet the quote

  tweetButton.href =
    "https://twitter.com/intent/tweet?text=" + quote + " ~ " + auth;
};

getNewQuote();
