<div align="center"><h1>💰Stock Up💰</h1></div>

The purpose of this website is to give users basic stock data, company info, and related companies based on their search.

### Technologies Used

- HTML5
- CSS3
  - Font Awesome Icons
- JavaScript

### Getting Started

[Deployed Website](https://priceless-jang-fde219.netlify.app/)

- To use this website, you have to search by `stock ticker` - **not company**

### Wireframe

![wireframe](https://i.imgur.com/vC0WEug.png)

### Website Images

**Homepage**

![homepage](https://i.imgur.com/btnzRJW.png)

**Homepage with a search**

![searchresults](https://i.imgur.com/bOQADVt.png)

**Chart widget and footer**

![chart](https://i.imgur.com/PSIKvUg.png)

## Takeaways 🧠

- To get data on the form element, you don't have to grab the individual text - but you can grab the entire form element
- text input type can use placeholders
- submit input type, can change button text with value
- usage of `constants` - declaring without assigning to use with things like the API call. Then you can use that as the first part of your object chaining
- Easy to read layout

  - Set constants, API strings
  - Cache element references (grab DOM elements)
  - Event listeners
  - Functions

- scroll events
- Lookup functions: The object that was provided from the API didn't get me descriptive enough keys for end-users to understand. Therefore, I needed to use a lookup function, `Object.entries()`, and `.map()` to provide the right information.

### Functions

Problem I encountered:

- My generate UI function was not out putting html

Solution:

- `generateUI` is within the `render` function. When calling `handleGetData` on submit it has access to `cardData` but `cardData` didn't have access to `render` within it where `generateUI` resides

### Future Enhancements

- Mobile Friendly
- Dark Mode
- CSS Variables
- Update Chat With Search
- Modal or some click event on the cards
- Additional Data
