# Stock App

The purpose of this app is to give users basic stock data, company info, and related companies based on their search.

### Technologies Used

- HTML5
- CSS3
  - Font Awesome Icons CDN
- JavaScript

### Getting Started

[Deployed Website](https://priceless-jang-fde219.netlify.app/)

- To use website, you have to search by `stock ticker` - not company

### Wireframe

![wireframe](https://i.imgur.com/vC0WEug.png)

### Website Images

Homepage
![homepage](https://i.imgur.com/btnzRJW.png)

Homepage with a search
![searchresults](https://i.imgur.com/bOQADVt.png)

Chart widget and footer
![chart](https://i.imgur.com/PSIKvUg.png)

## Takeaways 🧠

- To get data on the form element, you don't have to grab the individual text - but you can grab the entire form
- text input type can use placeholders
- submit input type, can change button text with value
- usage of `constants` - declaring without assigning to use with things like the API call. Then you can use that as the first part of your object chaining
- Easy to read layout

  - Set constants, API strings
  - Cache element references (grab DOM elements)
  - Event listeners
  - Functions

- scroll events
- Lookup functions: When looping over an object with `Object.entries()` I needed to dynamically update the HTML with that information. Once you use `Object.entries()` you can then use map since it turns it into an array.

- ## `Lookup Functions`

### Functions

Problem I encountered:

- My generate UI function was not getting data to appear on screen, however it was console logging the data

Solution:

- `generateUI` is within the `render` function. When calling `handleGetData` on submit it has access to `cardData` but `cardData` didn't have access to `render` within it where `generateUI` resides

### Future Enhancements

- Dark Mode
- Update Chat With Search
- Modal or some click event on the cards
- Additional Information
