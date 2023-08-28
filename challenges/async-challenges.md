<div align="right">
  <a href="/README.md#this-is-a-collection-of-modern-interview-code-challenges-on-javascript-suitable-for" id="home">Home</a>
</div>

<h2 align="center">JavaScript challenges on Asynchronous programming - challenges</h2>

<br>

### Q. Print "Hello, world" with a delay of 3 seconds

- setTimeout takes a function as the 1st argument and optional timeout delay & list of values as the function parameters
- setTimeout returns an id (number) which can be used to stop the setTimeout using clearTimeout function

###### Notes

Zero or more values that represent any parameters you want to pass to the function when it is run.

###### References

- https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals

<br />

### Q. Create a function which receives a function as argument and executes it after 2 seconds

<br />

### Q. Print numbers from 1 to 10 with delay of 1 second between each value being printed

###### Notes

In the 2nd solution, recursive setTimeout is used.

###### References

- https://javascript.info/settimeout-setinterval

<br />

### Q. Print numbers from 1 to 10 with delay of 1 second between each value being printed using setInterval

- `setInterval` function repeats a block of code at every given timing event
- `clearInterval` is used to stop the setInterval execution

<br />

### Q. Print numbers from 10 to 1 with delay of 1 second between each value being printed using setTimeout using pre ES6 features only

- We can use 3rd parameter of setTimeout to pass the value of iteration which creates a new scope each time loop iterates
- We can also use an inner function scope (IIFE) within the for loop for each iteration

###### References

- https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/scope%20%26%20closures/ch5.md

<br />

### Q. Write a utility which prints numbers starting from an initial value and increment in steps which can be started and stopped by the user, any number of times

- The functionality to start and stop can be exposed from a function which internally takes care of incrementing and displaying data
- `setInterval` can be used to achieve the task and handle the start & stop of data display

###### Notes

The function can also be modified to have completion after which timer can not be started

<br />

### Q. Execute an array of asynchronous functions one after the other in sequence using callbacks

- The asynchronous function can be simulated using setTimeout which executes the callback
- The array of functions execution can be managed by having a function which takes care of execution of all the async functions
- Asynchronous functions need not be aware of the function to be executed and will take a callback as argument and execute it after completion

###### Notes

3 asynchrounous functions are considered here, but the program should work for any number

<br />

### Q. Execute the given list of asynchronous functions in parallel and return the results as an array to the callback

- The async functions can be executed in parallel using the loop and can be tracked for completion with a counter
- The callback function can be sent to the async functions and the results will be stored in the array which will be returned after the completion of all

###### References

- https://jsvault.com/async-parallel

<br />

### Q. Execute 3 asynchronous functions one after the other in sequence using promise chaining

- The implementation of chaining is that the result is passed through the chain of `then` handlers for all the promises
- `then` method on Promise also returns a promise which can be used to perform `then` on the returned promise
- The errors in promise / promise chaining can be handled with the error callback for each promise when it settles or with a generic catch block

###### Notes

If `then` method has a return statement which is a promise then it will be considered for the next promise chain until it settles

###### References

- https://javascript.info/promise-chaining

<br />

### Q. Execute 3 asynchronous functions one after the other in sequence using async await

- Async function with `await` for each promise can be used to execute in sequence

<br />

### Q. Execute 3 asynchronous functions one after the other in sequence using promise chaining and do not terminate on failure

- The promise which gets rejected will invoke the 2nd function argument to `then` handler
- The failure handler will receive the error and continue with next execution which will not propagate failures

<br />

### Q. Execute 3 asynchronous functions one after the other in sequence using async await and do not terminate on failure

- Unlike promises, `try-catch` block can be used on async functions
- `catch` block for each asynchronous function can be used to catch errors and continue with next execution which will not propagate failures

<br />

### Q. Execute an array of asynchronous functions which returns a promise, one after the other in sequence

- Asynchronous functions can be executed and promises can be captured in an array
- Array method `reduce` can be used to make the sequential execution on promise settlement

###### Notes

`Promise.resolve()` is used as the initial value to `reduce`, which resolves the promise immediately,

<br />

### Q. Execute an array of asynchronous functions simultaneously but print the output in the ordered sequence. Do not wait for printing the data if it already available after promise is settled

- Array method `reduce` can be used to make the simultaneously execution on promise settlement
- Unlike sequential execution, the parallel execution of asynchronous functions happen but the output will executed in order of sequence

<br />

### Q. Design a utility which takes array of asynchronous functions and returns the 1st successful or non successful result with max waiting time set by the user

- `Promise.race` is an in built JavaScript method which helps us to return the first resolved or rejected promise data from promises array
- Timeout feature can be set by adding a function returning a promise which rejects after specified amount of time
- If any promise resolves before timeout the promise which settles first will be the output else timeout will cause rejection

<br />

### Q. Design a utility which takes URL and a value for attempts which will attempt to make a fetch request. If on failure it tries again with increasing delay for number of times which user has requested

- Utility can designed which returns a promise which attempts to make requests and return the data on success
- The `fetch` request attempts to make calls after increasing time delay on failure
- If all the attempts by to get response fails, promise gets rejected

###### Notes

`1000 + 1000 * i` is used for delay after 1st unsuccessful attempt to fetch, which increases the delay on every iteration

###### References

- https://dev.to/ycmjason/javascript-fetch-retry-upon-failure-3p6g

<br />

### Q. Create a generator to return a random number on every request

- The generation of random number can be implemented in the normal way in the function but will returned and function yields
- The function will again continue to execute in loop to return a new random number

###### Notes

Genertor function need not complete its execution

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*

<br />

### Q. Search for the presence of a given value in the nested object using generator

- With the help of generator Inversion of control is possible
- Instead of function seaching for the key by passing the callback or key, the logic can be implemented in the controlling code
- For..of loop calling the recursive generator function on object can be used to achieve this

<br />

[[↑] Back to top](#home)
