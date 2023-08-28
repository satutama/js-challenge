<div align="right">
  <a href="/README.md#this-is-a-collection-of-modern-interview-code-challenges-on-javascript-suitable-for" id="home">Home</a>
</div>

<h2 align="center">JavaScript challenges on Functions - concepts</h2>

<br>

### Q. Write a function which returns another function and execute it after calling

- Functions can be declared, executed or returned inside another function

###### Notes

Functions can also be stored in variables like other values in JavaScript

###### References

- https://eloquentjavascript.net/05_higher_order.html
- https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function

<br />

### Q. Write a function which executes another function received as an argument

- Functions can be passed as arguments to another function
- Passing the function as an argument will pass its reference hence no parenthesis

###### References

- https://developer.mozilla.org/en-US/docs/Glossary/Callback_function

<br />

### Q. Create a function having no parameters declared and print all the arguments passed to it

- When a function is invoked the arguments passed to it are accessible using the default object called "arguments"
- Numbers starting from 0 are set as keys of the object "arguments" corresponding to each argument in the order
- The `arguments` object will have a length property as well which gives count of arguments passed

###### Notes

Though the keys of arguments object look like numbers, "arguments" is not an array. Arrow functions will not have arguments object

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments

<br />

### Q. Write a function which executes only if the number of arguments match the number of parameters the function is expecting

- The number of parameters declared in a function can be obtained by accessing the length property of the function

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length

<br />

### Q. Design a function which can receive a variable number of arguments in parameters and print them

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

<br />

### Q. Show the most common ways of creating functions in JavaScript

- Functions are most commonly created using function statements, function expressions and arrow functions
- Function statements get hoisted unlike function expressions

###### Notes

As the arrow functions are not verbose, majority of developers prefer to create arrow functions for quick coding

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions

<br />

### Q. Code the different forms of arrow functions for varying number of parameters

- Arrow functions provide simpler syntax over `function` keyword functions
- Arrow functions with single parameter, round brackets are optional
- Arrow functions with single statement with return, flower brackets and return keywords are optional

###### Notes

Arrow functions are also called fat arrow functions

###### References

- https://developer.mozilla.org/en-US/docs/web/JavaScript/Reference/Operators/function

<br />

### Q. Write a program where hoisting can be visualized

- The function statement and variable declared with `var` are accessible before they appear in the code
- Declarations are put into memory before it executes any code segment that allows us to use a function before you declare it in your code
- In hoisting the hoisted items are accessible in the scope they are declared in
- Function expressions do not get hoisted

###### Notes

Hoisting was thought up as a general way of thinking about how execution contexts work in JavaScript. In reality, the code does not get hoisted, but the effect is seen due to compilation and execution phases followed by JavaScript compiler

###### References

- https://developer.mozilla.org/en-US/docs/Glossary/Hoisting

<br />

### Q. Code an Immediately Invoked Function Expression (IIFE) and show the different ways of executing it

- IIFE is a JavaScript function that runs as soon as it is defined
- IIFE prevents polluting the global scope

###### References

- https://developer.mozilla.org/en-US/docs/Glossary/IIFE

<br />

### Q. Create an IIFE which receives arguments and executes

- Arguments can be passed in the same way as when calling a regular functions
- Multiple arguments can be passed similar to function invocation with arguments

###### Notes

A string and a function is passed as arguments to the IIFE

<br />

### Q. Show the usage of IIFE to set a value of a variable

- IIFE can be directly executed when it is used as an expression against assignment to a variable

<br />

### Q. Write a function which can return multiple values from a function

- In general functions are designed to return a single value.
- Generators are a special type of functions which return an iterator which in turn can be used to send & receive values.

###### Notes

Array and object are used in the programs to contain multiple values

<br />

### Q. Write a function which can set default values to the parameters of function when an argument is not passed. Also show how to use exisiting parameters to set the value of another parameter

- Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed

###### Notes

The default values are set only for missing or `undefined`. `null` and other falsy values are considered as valid arguments and default will not be set

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters

<br />

### Q. Show the usage of call, apply and bind with practical example

- 'call' is a method on function prototype and is used to set the context of the function by passing it as 1st argument followed by the arguments
- 'apply' is a method on function prototype and is used to set the context of the function by passing it as 1st argument followed by the array of arguments
- 'bind' is a method on function prototype and is used to create a new function with the context as the 1st argument followed by the arguments

###### Notes

The context inside the function can be accessed using `this` keyword

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
- https://javascript.info/bind

<br />

### Q. Show the usage of a function which can be used as a constructor

- A function can be used like a constructor by calling it with the `new` keyword
- A constructor function is a normal function but generally used to create an object and may also have functions in its prototype
- A constructor function is generally preferred to start with a Uppercase letter which is not mandatory
- The return from the constructor function is a new object created which is accessed with `this` inside the function
- Constructor function can return an explicit object as well

###### Notes

Constructor function can be called without new keyword as well, which executes the function normally which is of not much use in most of the cases.

###### References

- https://javascript.info/constructor-new

<br />

### Q. Show the procedure of creating an object using a factory function

- Any function which is not a class or constructor that returns an object without a new keyword is known as a factory function
- A normal function which can be modified to return an object which can be called by passing arguments

###### References

- https://medium.com/javascript-scene/javascript-factory-functions-with-es6-4d224591a8b1

<br />

### Q. Achieve prototypal inheritance using functions to create objects in JavaScript

- 2 functions can be used to create objects with constructor call to the functions
- The prototype of the child function is connected with the parent function to achieve the inheritance behavior

###### Notes

The solution is one of the known ways of achieving prototypal inheritance, but it is not the only way to achieve it.

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain

<br />

### Q. Write a code to show the differences between the techniques, currying and partial application

- A function returning another function that might return another function, but every returned function must take only one parameter at a time is **currying**
- A function returning another function that might return another function, but each returned function can take several parameters is **partial application**

###### References

- https://towardsdatascience.com/javascript-currying-vs-partial-application-4db5b2442be8
- https://medium.com/better-programming/functional-programming-currying-vs-partial-application-53b8b05c73e3

<br />

### Q. Write a function to copy functions of an object to another object (mixin)

- Mixins are a form of object composition, where component features get mixed into a composite object
- In JavaScript we can only inherit from a single object. Mixins allow copying properties of other function prototype or objects to the target object

###### Notes

'task1' and 'task2' from 'obj1' and 'obj2' are copied to 'mixinObj'

###### References

- https://javascript.info/mixins

<br />

### Q. Show the usage Proxy for function

- The Proxy object enables create a proxy for a function, which can intercept the function calls
- Proxy takes 1st argument as an function and 2nd argument as a object with different function traps

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy

<br />

[[↑] Back to top](#home)
