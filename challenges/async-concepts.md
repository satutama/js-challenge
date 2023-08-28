<div align="right">
  <a href="/README.md#this-is-a-collection-of-modern-interview-code-challenges-on-javascript-suitable-for" id="home">Home</a>
</div>

<h2 align="center">JavaScript challenges on Asynchronous programming - concepts</h2>

<br>

### Q. Show the execution of 3 asynchronous block of code, one after the other in sequence

- The asynchronous block of code can be a function which executes asynchronously
- The execution of such function can be simulated using setTimeout to with delay and execute different blocks of code inside each

###### Notes

The nested blocks of statements shown in the comments which get executed one after the other in sequence

<br />

### Q. Write a code to make xmlHTTPRequest to get data from the server asynchronously

- XMLHttpRequest (XHR) objects are used to interact with server to retrieve data from a URL without having to do a full page refresh
- XHR requests can be initiated by creating the object and providing the arguments such as 'method', url etc
- The success and failure of the request can be managed by callbacks

###### Notes

XHR is used mainly in AJAX programming

###### References

- https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest

<br />

### Q. Show the working of promise along with resolve & reject code

- The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value
- Promise returns an object which ramains in pending state until it is resolved or rejected
- Promise takes a function as an argument called as 'resolver' which can have resolve and reject as parameters
- Resolve call will resolve the promise and reject will reject the promise (passing data is optional)
- `then` method on promise object is used to execute the user code after promise settles, which takes functions where 1st one is for success and 2nd for failure
- Functions with success and failure of the promises are used to illustrate the basics of promise code

###### Notes

Once the promise is resolved or rejected, status will not change

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

<br />

### Q. Wrap the setTimeout function to convert to a promise

- Promise can be used to wrap the `setTimeout` to make the code more readable
- Function can take delay as argument and return a promise which gets resolved after timeout is complete

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises

<br />

### Q. Convert the xmlHTTPRequest to promise based function to get the data from the server asynchronously (fetch)

- The Promise can be used to wrap the XHR request and provide cleaner interface to user for AJAX requests
- Success and failure of the XHR request can be handled to resolve or reject the promise respectively

###### Notes

XHR reuqest is no more in use and all the modern browsers use `fetch` API which is based on promise

###### References

- https://medium.com/@RistaSB/create-ajax-function-with-xmlhttprequest-and-promise-fe7422e38b50

<br />

### Q. Make a fetch request to retrieve and store JSON data from server

- Fetch API is provided by the browser which returns a promise
- Fetch takes url as the 1st argument and an object with request details as 2nd optional argument
- Response is a streamable object and hence we will have to invoke JSON / text method on it which returns promise which settles to the data

###### References

- https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

<br />

### Q. Cancel a fetch request

- `AbortController` is an interface which can be used to abort a fetch request
- `signal` object of the AbortController object can be used as the part of the argument to `fetch` and abort on controller object can be used to stop the request

###### References

- https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort
- https://davidwalsh.name/cancel-fetch

<br />

### Q. Show the working of async await work with promises

- `async` functions are asynchronous functions in which the asynchrous code can be executed in synchronous looking manner using `await`
- `await` expects a promise and the execution will stop until the promise is resolved
- If promise gets rejected, error is thrown with failure reason which can be handled using simple try-catch block

###### Notes

`await` keyword can only be used in a `async` function

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
- https://javascript.info/async-await

<br />

### Q. Write a code to resolve all the list of asynchronous executions of promises and stop if any of them is rejected. Print the output accordingly

- `Promise.all` is the method which helps to achieve the functionality which settles if all the promises are resolved or any of them are rejected
- It receives array of promises as an argument to it
- Array of results will be the success data if all the promises resolves or the error data on failure of the first one

###### Notes

On failure of one of the promise, rest of the pending promises will be cancelled

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all

<br />

### Q. Write a code to resolve all the list of asynchronous executions of promises no matter if each execution succeeds or fails. Print the output of each

- `Promise.allSettled` is the method which helps to achieve the functionality which completes after all promises settle no matter of failures
- It receives array of promises as an argument to it
- Array of results will be the output after completion of all promises with status as 'fulfilled' or 'rejected'

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled
- https://davidwalsh.name/promise-allsettled

<br />

### Q. Explain the working of Promise.race with few asynchronous function example

- The `Promise.race` method returns a promise that fulfills or rejects as soon as one of the promises fulfills or rejects, with the success or failure

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race

<br />

### Q. Show me the working of a generator function

- Generators are functions that can be exited and later re-entered
- Generator function will have `*` after the keyword `function`
- Generator when called returns an `iterator` which can be used to call `next` on it
- `yield` keyword can be used inside such a function and stops the execution

###### Notes

Data between generator and iterator can be passed in both direction

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*

<br />

### Q. Write a generator function which uses another generator function internally to fetch the values. Use for..of loop to consume the values

- Generator with the generator can be used to fetch the values using `yield*`
- The code consuming the parent generator need to be aware of it and can be used directly
- As the generator return iterator, for..of loop can be used on generator

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators

<br />

### Q. Write an interface to mock Promise in JavaScript which can be called to create a promise with resolve and reject. Also implement then functionality

- Basic promise interface will allow creation of promise by passing resolver as the argument
- `resolve` and `reject` methods will have to be passed to the resolver which the user code will ivoke with data once settled
- `setTimeout` with zero delay can be used to not immediately execute the resolver
- List of callbacks to `then` to be invoked can be stores in the array of success and failure list
- Once resolved or rejected, promise cannot change the state

###### Notes

ES6 Promise is much more complex and sophesticated than the above shown implementation.

<br />

### Q. Write a function which helps to achieve the `Promise.all` functionality using promises

- `Promise.all` method is fail fast procedure to return all the promise resolved data in array or failed reason

<br />

### Q. Show the working generator function with promises

- Generator can be used with promises where yield will return a promise and promise resolution can trigger continuation
- Helper function is used to manage this flow which takes generator function as an argument and executes it

###### Notes

The generator and the helper function 'executeGeneratorWithPromise' executes hand in hand, where the generator pauses returning a promise and the helper function starts generator on that promise resolution

###### References

- https://www.promisejs.org/generators/

<br />

[[↑] Back to top](#home)
