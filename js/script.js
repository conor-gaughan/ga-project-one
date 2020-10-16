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
const cards = document.querySelector('.related-cards')


 




// EVENT LISTENERS

formEl.addEventListener('submit', handleGetData)
formEl.addEventListener('submit', cardData)



// FUNCTIONS







function handleGetData(e) {
    e.preventDefault()
    userInput = input.value
    fetch(`https://finnhub.io/api/v1/stock/profile2?symbol=${userInput}&token=bu3p71v48v6up0bi1v20`)
    .then((resp) => resp.json())
    .then(function(data) {
        companyInfo = data
        console.log(data)
        cardData()
        render()
    })
    .catch(function() {
        console.log('error message')
    })
}



function cardData() {
    fetch(`https://finnhub.io/api/v1/stock/peers?symbol=${userInput}&token=bu3p71v48v6up0bi1v20`)
    .then((resp) => resp.json())
    .then(function(data) {
        peers = data
        // console.log(data)
        render()
        })
}

function generateUI() {
    return peers.map(function(company) {
        // console.log('COMPANY', company)
        return `<article class="card">
        <h3>${company}</h3>
    </article>`
    })

}

function render() {
    title.textContent = companyInfo.name;
    ticker.textContent = companyInfo.ticker;
    exchange.textContent = companyInfo.exchange;
    url.setAttribute('href', `${companyInfo.weburl}`);
    industry.textContent = companyInfo.finnhubIndustry;
    image.setAttribute('src', companyInfo.logo)
    cards.innerHTML = generateUI().join('')
}
// generateUI()




// Have the entire table in a map function to display on page. do in index html first and style
/*
Things to potentially add:
Navigation bar to include news and other links
- Peers - similar stocks to the company
- Pricing in Table 
- See if there's a way to add a widget https://finnhub.io/docs/api#crypto-candles
- Light mode and dark mode
*/
