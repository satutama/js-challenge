<div align="right">
  <a href="/README.md#this-is-a-collection-of-modern-interview-code-challenges-on-javascript-suitable-for" id="home">Home</a>
</div>

<h2 align="center">JavaScript challenges on Functions - challenges</h2>

<br>

### Q. Design a Calulator interface for 2 number inputs which can perform sum, difference, product and dividend whenever invoked on the same interface

- Simple revealing module pattern can be used which receives inputs and executes different operations exposed through functions

###### Notes

The solution provided is one of the way to achieve the interface. The design and solution can vary

###### References

- https://eloquentjavascript.net/10_modules.html

<br />

### Q. Design a private counter function which exposes increment and retrive functionalities

###### Notes

'increment' function takes an argument to increment if passed else which is set to 1 (increments by 1)

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

<br />

### Q. Write a polyfill for bind function

- The `bind` method creates a new function that, when called, has its this keyword set to the provided context

###### Notes

This is a simple polyfill for bind without handling corner cases. It does not work when using the new operator

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind

<br />

### Q. Write a function which will create a function bounded to the context like `bind`, but can be overridden when the context is set explicitly

- The functionality is similar to `bind` with exception that if there is a context set during the execution it will override

###### Notes

This functionality is also known as 'Soft Binding'

###### References

- https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20%26%20object%20prototypes/ch2.md#softening-binding
- https://gist.github.com/getify/9043478

<br />

### Q. Write a function which helps to achieve multiply(a)(b) and returns product of a and b

- The implementation of this can be achieved by calling a function which returns a function

###### References

- https://medium.com/javascript-scene/curry-and-function-composition-2c208d774983

<br />

### Q. Create a function which takes another function as an argument and makes it eligible for currying or partial application

- Function can take another function as argument and accept the arguments on the returned functions till the expected arguments are reached
- The arguments can be 1 or multiple, and the actual function will be called once the count of expected arguments are reached

###### References

- https://javascript.info/currying-partials#advanced-curry-implementation

<br />

### Q. Design a function which helps to do debouncing

- The `debounce` function forces a function to wait a certain amount of time before running again
- The function is built to limit the number of function calls to improve the performance
- Debounce function design can take function (to be debounced), delay and the optional context

###### Notes

Context is replaced while debounce function call in presence of a context. If not, context set during the `debounce` function call is used.

###### References

- https://www.youtube.com/watch?v=Zo-6_qx8uxg

<br />

### Q. Design a function which helps to do throttling

- The `throttling` function forces a function to run once in an amount of time for one or multiple calls
- The function is built to limit the number of function calls to improve the performance
- Throttling function design can take function (to be throttled), delay and the optional context

###### Notes

Last arguments to the throttled function is saved so that most recent arguments will be used for throttled function execution (unlike debouncing where it is taken care due to its way of execution)

###### References

- https://www.youtube.com/watch?v=81NGEXAaa3Y

<br />

### Q. Design an interface which limits the number of function calls by executing the function once for a given count of calls

- function forces a function run to for specific number of times in a given number of execution calls
- The function is built to limit the number of times a function is called
- Throttling function design can take function (to be throttled), delay and the optional context

###### Notes

Sampling is different from throttling in the way that sampling limits the execution by executing function once in a given number of calls where as throttling limits the execution by executing function once in a given amount of time

###### References

- https://rxjs.dev/api/operators/sample

<br />

### Q. Write a singleton function to create an object only once

- Singleton is a design pattern which restricts the creation of only one object from a given interface
- When requested multiple times, same object is returned

###### Notes

Here both 'instance1' and 'instace2' are referencing to the same object

###### References

- https://www.dofactory.com/javascript/design-patterns/singleton

<br />

### Q. Design a function with toggle functionality for given list of inputs where toggle function accepts list of values to be toggled upon

- Toggle functionality can be obtained by returning the next value cyclically on each call to the function
- The toggle function will return another function which maintains the closure over the values with which it was initialized

###### References

- https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/apB.md#closure-part-2

<br />

### Q. Create a range function which returns an array for the provided inputs as start and end

- Range functionality can be obtained by returning the an array from start to end both inclusive
- In case if 2nd argument is not passed, function will return another function which calls itself with once both the values are obtained

###### References

- https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/apB.md#appendix-b-practice-practice-practice

<br />

### Q. Write a function which takes a function as an argument to achieve memoization

- Memoization is an optimization technique used primarily to speed up the programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again
- Function can be designed to use a cache storage (using `map` or `object`) which stores the values of function output against the input

###### Notes

Stringification of arguments done in order for the function to work for multiple arguments

###### References

- https://codeburst.io/understanding-memoization-in-3-minutes-2e58daf33a19

<br />

### Q. Create a single function which can perform sum(a, b, c), sum(a, b)(c), sum(a)(b, c) and sum(a)(b)(c) and returns sum of a, b and c

- Sum functionality can be obtained by returning the sum when all the arguments are present
- The cases when only 1 or 2 arguments are passed need to be managed and handled

###### Notes

2nd approach is generic technique and can be used customized for any number of values

<br />

### Q. Design a function which can keep recieving the arguments on each function call and returns the sum when no argument is passed

- The function can be designed to return another function which maintains the closure over the previous sum value
- The check for breaking condition can be added using the argument check for `undefined`
- 3rd solution uses the property on function to store the total which will be updated on each call hence the same function can be returned

- Sum functionality can be obtained by returning the recursively calling till the 2nd parameter value is undefined

###### Notes

In the code value is checked if it is undefined reason being 0 is a falsy value and `b ? a : sum(a + b)` code fails when one of the argument is 0. Example: `sum(4)(3)(0)(2)()`

###### References

- https://www.youtube.com/watch?v=D5ENjfSkHY4

<br />

### Q. Create an interface for a function such that whenever a function is triggered the system should log the time. Do not modify the function code

- Function call can be handled using Proxy in JavaScript
- `apply` keyword in proxy can be used to achieve the functionality without modifying the existing function code

###### Notes

This technique is helpful in logging or managing the data being passed to & returned from function without modifying the actual function code especially when function is a part of library or framework

<br />

### Q. Create an interface exposing subscribe and publish functionality, which allows publishing data which in turn invokes all the subscribers with the data

- A simple module with publish and subscribe function can be exposed to achieve such functionality
- List of subscribers can be maintained in an array and can be invoked in loop on each publish

###### Notes

This is a well known JavaScript pattern called as **Publish/Subscribe Pattern**

###### References

- https://jsmanifest.com/the-publish-subscribe-pattern-in-javascript/

<br />

[[↑] Back to top](#home)
