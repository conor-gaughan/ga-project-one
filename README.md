# Stock App

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

### Functions

Problem I encountered:

- My generate UI function was not getting data to appear on screen, however it was console logging the data

Solution:

- `generateUI` is within the `render` function. When calling `handleGetData` on submit it has access to `cardData` but `cardData` didn't have access to `render` within it where `generateUI` resides
