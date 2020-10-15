// CONSTANTS AND VARIABLES

const API_KEY = 'bu3p71v48v6up0bi1v20'
const BASE_URL = 'https://finnhub.io/api/v1/'

// Price Data https://finnhub.io/api/v1/quote?symbol=AAPL&token=bu3p71v48v6up0bi1v20

let companyInfo, userInput;


// CACHED ELEMENT REFERENCES
const input = document.querySelector('input[type="text"]')
const formEl = document.querySelector('form')

// COMPANY INFO

const title = document.querySelector('.name')
const ticker = document.querySelector('.ticker')
const exchange = document.querySelector('.exchange')
const url = document.querySelector('.company-url')
const image = document.querySelector('.logo')
const industry = document.querySelector('.industry')
const widget = document.querySelector('script[type="text/javascript"]')
console.log(widget)

 




// EVENT LISTENERS

formEl.addEventListener('submit', handleGetData)



// FUNCTIONS







function handleGetData(e) {
    e.preventDefault()
    userInput = input.value
    fetch(`https://finnhub.io/api/v1/stock/profile2?symbol=${userInput}&token=bu3p71v48v6up0bi1v20`)
    .then((resp) => resp.json())
    .then(function(data) {
        companyInfo = data
        render()
  
    })
    .catch(function() {
        console.log('error message')
    })
}

function render() {
    title.textContent = `Company Name: ${companyInfo.name}`;
    ticker.textContent = companyInfo.ticker;
    exchange.textContent = companyInfo.exchange;
    url.setAttribute('href', `${companyInfo.weburl}`);
    industry.textContent = companyInfo.finnhubIndustry;
    image.setAttribute('src', companyInfo.logo)
}




// Have the entire table in a map function to display on page. do in index html first and style

/*

Things to potentially add:
Navigation bar to include news and other links
- Peers - similar stocks to the company
- Pricing in Table 
- See if there's a way to add a widget https://finnhub.io/docs/api#crypto-candles
- Light mode and dark mode

*/