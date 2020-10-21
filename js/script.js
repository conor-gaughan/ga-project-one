// CONSTANTS AND VARIABLES

const API_KEY = 'bu3p71v48v6up0bi1v20'
const BASE_URL = 'https://finnhub.io/api/v1/'

let companyInfo, userInput, peers, table, price;


// CACHED ELEMENT REFERENCES
const input = document.querySelector('input[type="text"]')
const formEl = document.querySelector('form')
const title = document.querySelector('.name')
const ticker = document.querySelector('.ticker')
const exchange = document.querySelector('.exchange')
const url = document.querySelector('.company-url')
const image = document.querySelector('.logo')
const industry = document.querySelector('.industry')
const widget = document.querySelector('script[type="text/javascript"]')
const cards = document.querySelector('.related-cards div')
const card = document.querySelector('.card')
const relatedCards = document.querySelector('.tradingview-widget-copyright')
const pricing = document.querySelector('.pricing')

// TABLE

const scrollTop = document.getElementById('top')







// EVENT LISTENERS

formEl.addEventListener('submit', handleGetData)

scrollTop.addEventListener('click', backToTop)

window.onscroll = function() {scrolling()}


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
        .then(function (data) {
            companyInfo = data
            tableData()
        })
}

function pricingData() {
    fetch(`https://finnhub.io/api/v1/quote?symbol=${userInput}&token=bu3p71v48v6up0bi1v20`)
        .then((resp) => resp.json())
        .then(function (data) {
            price = data
        })

}

function cardData() {
    fetch(`https://finnhub.io/api/v1/stock/peers?symbol=${userInput}&token=bu3p71v48v6up0bi1v20`)
        .then((resp) => resp.json())
        .then(function (data) {
            peers = data
        })
}

function tableData() {
    fetch(`https://finnhub.io/api/v1/stock/metric?symbol=${userInput}&metric=all&token=bu3p71v48v6up0bi1v20`)
        .then((resp) => resp.json())
        .then(function (data) {
            table = data
            render()
        })
}

function generateUI() {
    return peers.map(function (company) {
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
    const html = innerUI.map(function (value) {
        return `<p class="pricing-value">${lookUp[value[0]]} $${value[1]}</p>`
    })
    return `
    <section class="pricing-main">
    <h3>Pricing Information</h2>
    ${html.join('')}
    </section>
    `
}

function scrolling() {
    if (document.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTop.style.display = "block";
    } else {
        scrollTop.style.display = "none"
    }
}

function backToTop() {
    document.documentElement.scrollTop = 0;
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