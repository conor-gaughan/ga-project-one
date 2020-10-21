// CONSTANTS AND VARIABLES

const API_KEY = 'bu3p71v48v6up0bi1v20'
const BASE_URL = 'https://finnhub.io/api/v1/'

// Price Data https://finnhub.io/api/v1/quote?symbol=AAPL&token=bu3p71v48v6up0bi1v20

let companyInfo, userInput, peers, table, price;


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
const cards = document.querySelector('.related-cards div')

const card = document.querySelector('.card')
const relatedCards = document.querySelector('.card-content')


// const current = document.querySelector('.current')
// const high = document.querySelector('.high')
// const low = document.querySelector('.low')
// const open = document.querySelector('.open')
// const previousClose = document.querySelector('.previous-close')

// toggler

const toggleEl = document.querySelector('.dark-mode-toggler')

// grabbing related card



// pricing

const pricing = document.querySelector('.pricing')


// EVENT LISTENERS

formEl.addEventListener('submit', handleGetData)
// formEl.addEventListener('submit', cardData)


// FUNCTIONS

function handleGetData(e) {
    e.preventDefault()
    userInput = input.value
    companyData()
    pricingData()
    cardData()
}

function companyData() {
    fetch(`https://finnhub.io/api/v1/stock/profile2?symbol=${userInput}&token=bu3p71v48v6up0bi1v20`)
    .then((resp) => resp.json())
    .then(function(data) {
        companyInfo = data
        tableData()
    })
}

function pricingData() {
    fetch(`https://finnhub.io/api/v1/quote?symbol=${userInput}&token=bu3p71v48v6up0bi1v20`)
    .then((resp) => resp.json())
    .then(function(data) {
        price = data
        console.log('PRICING', price)
    })

}

function cardData() {
    fetch(`https://finnhub.io/api/v1/stock/peers?symbol=${userInput}&token=bu3p71v48v6up0bi1v20`)
    .then((resp) => resp.json())
    .then(function(data) {
        peers = data
        })
}

function tableData() {
    fetch(`https://finnhub.io/api/v1/stock/metric?symbol=${userInput}&metric=all&token=bu3p71v48v6up0bi1v20`)
    .then((resp) => resp.json())
    .then(function(data) {
        table = data
        render()
        console.log('TABLE DATA', table)
    })
}

function generateUI() {
    return peers.map(function(company) {
        return `
        <article class="card">
        <p>${company}</p>
    </article>`
    })
}

function generatePricing() {
    let lookUp = {
            "c": 'Current Price:',
            "h": 'High:',
            "l": 'Low:',
            "o": 'Open:',
            "pc": 'Previous Close: ',
            "t": 'Timestamp: '
    }
    let innerUI = Object.entries(price)
    innerUI.pop()
    const html = innerUI.map(function(value) {
        return `<p class="pricing-value">${lookUp[value[0]]} $${value[1]}</p>`
    })
    return `
    <section class="pricing-main">
    <h3>Pricing Information</h2>
    ${html.join('')}
    </section>
    `
}


function render() {
    title.textContent = companyInfo.name;
    ticker.textContent = companyInfo.ticker;
    exchange.textContent = companyInfo.exchange;
    url.setAttribute('href', `${companyInfo.weburl}`);
    industry.textContent = companyInfo.finnhubIndustry;
    image.setAttribute('src', companyInfo.logo);
    cards.innerHTML = generateUI().join('');
    pricing.innerHTML = generatePricing();
}
