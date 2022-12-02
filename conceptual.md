### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
   Answer: You can manage aynchronous code in JS by using Callbacks, you can use promise Chaining using .then() or you can use Async/Await keywords.

- What is a Promise?
  A promise in javascript is a placeholder for data not yet received, when a promise is resolved it will hold the data requested.

- What are the differences between an async function and a regular function?
  An async function will run code asyncronously, meaning that it will AWAIT (if fed the keyword await) for information to be retrieved, then once that is done it will continue to the next line of code. Regular functions will run code without waiting for previous lines of code to finish.

- What is the difference between Node.js and Express.js?
  NodeJS is a package to run javascript code in the back end. ExpressJS is a framework that uses Node.js and can be used to handle express routes (similar to the difference between python & flask)

- What is the error-first callback pattern?
  Error first callback patterns will put the error as the first parameter in the callback -> this is a "look before you leap" method that checks for errors prior to executing a command.

- What is middleware?
  Middleware is a line of code that can be plugged into our Express routes that will run in between our routes, they can be inputted into our Express routes as an additional parameter.

- What does the `next` function do?
  The next() function is similar to a return statement within a function, but the next will tell express to jump to the next matching route.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)
  There's three AWAIT keywords, so the function will take longer to complete. You should throw the URLs into an array, and use a for each loop to make calls to the URL, then push it to a Users array - then return that array.

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
