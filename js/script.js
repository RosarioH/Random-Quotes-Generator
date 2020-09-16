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
    citation: '',
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
    citation: '',
    year: ''  
  },
  { 
    quote: "Our greatest glory is not in never falling, but in rising every time we fall." ,
    source: 'Confusius',
    citation: '',
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
  //Find random number  
  const randomNumber = Math.floor(Math.random() * quotes.length);
  //Add random number to quotes array
  const randomQuote = quotes[randomNumber];

  return randomQuote;
  //
  //End of getRandomFunction
}

/***
 * `printQuote` function
***/

function printQuote() {
  //Get getRandomQuote function to apply random quotes 
  const quote = getRandomQuote();
  
  let html = '<p class = "quote">' + quote.quote + '</p>';
  html += '<p class="source" >' + quote.source;
  
  const div = document.getElementById("quote-box");
  div.innerHTML = html;
  //Checks if citation and year from quote is empty then closes html string
  if (quote.citation === '' && quote.year === ''){
    div.innerHTML = html.concat('</p>')
    
  }
  //check if both citation and year not empty and then adds string
  else  if (quote.citation !== '' && quote.year !== ''){

      const citationHtml = '<span class= "citation">' + quote.citation + '</span>';
      const yearHtml = '<span class= "year">' + quote.year + '</span>' + '</p>';
      div.innerHTML =html.concat(citationHtml, yearHtml)

  }
  // If year not empty add year 
  else if (quote.year !== ''){
    const yearHtml = '<span class= "year">' + quote.year + '</span>' + '</p>';
    div.innerHTML =html.concat(yearHtml)

  }
  // If citation not empty add citation
  else if (quote.citation !== ''){
    const citationHtml = '<span class= "citation">' + quote.citation + '</span>'+ '</p>';
    div.innerHTML =html.concat(citationHtml)
  }
  
  let randcol= "";
  const allchar="0123456789ABCDEF";

  for(var i=0; i<6; i++){
    randcol += allchar[Math.floor(Math.random()*16)];
 }
 document.body.style.backgroundColor= "#"+randcol;
 

}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);