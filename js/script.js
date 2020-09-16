/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
  { 
    quote: "Float like a butterfly sting like a bee – his hands can’t hit what his eyes can’t see." ,
    source: 'Muhammad Ali ' ,
    citation: 'The Rumble in the Jungle Event' ,
    year: '1974' 
  },
  { 
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts." ,
    source: 'Winston Churchill',
    citation: ' ',
    year: ''
  },
  { 
    quote: "If you change the way you look at things, the things you look at change." ,
    source: 'Dr. Wayne W. Dyer' ,
    citation: 'FaceBook Post' ,
    year: '2015' 
  },
  { 
    quote: "Sometimes people don't want to hear the truth because they dont want their illusions destroyed." ,
    source: 'Fredrich Nietzsche',
    citation: ' ',
    year: ''  
  },
  { 
    quote: "Our greatest glory is not in never falling, but in rising every time we fall." ,
    source: 'Confusius',
    citation: ' ',
    year: '' 
  },
  { 
    quote: "The Future Belongs To Those Who Prepare For It Today" ,
    source: 'Malcolm X' ,
    citation: '',
    year: '1962' 
  }
  
];


/***
 * `getRandomQuote` function
***/

function getRandomQuote(){

  let randomNumber = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[randomNumber];

  return randomQuote;
  //
  //End of getRandomFunction
}

/***
 * `printQuote` function
***/

function printQuote() {
  let quote = getRandomQuote();

  
  let html = '<p class = "quote">'
  html += quote.quote;
  html += '</p>';
  html += '<p class="source" >';
  html += quote.source;
  html += '<span class= "citation">';
  html += quote.citation;
  html += '</span>';
  html += '<span class= "year">';
  html += quote.year;
  html += '</span>' +'</p>';

  var div = document.getElementById("quote-box");
  div.innerHTML = html
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);