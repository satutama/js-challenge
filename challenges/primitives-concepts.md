<div align="right">
  <a href="/README.md#this-is-a-collection-of-modern-interview-code-challenges-on-javascript-suitable-for" id="home">Home</a>
</div>

<h2 align="center">JavaScript challenges on Primitives - concepts</h2>

<br>

### Q. Show the usage of `typeof` operator on different types of values

- The `typeof` operator returns a string indicating the type of the operand

###### Notes

Arrays and functions are sub type of objects

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

<br />

### Q. Show the different ways of concatenating numbers and strings

- Concatenation of strings and numbers is a common practical use case

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators

<br />

### Q. Show the conversion from number to string and vice versa

- Conversion between numbers and strings is a common practical use case

###### Notes

If the number is floating, `parseFloat` can be used. `parseInt` and `parseFloat` are the methods present on the `Number` object also

###### References

- https://javascript.info/type-conversions

<br />

### Q. Write a code to operate on integer numbers outside the range of numbers in JavaScript

- `BigInt` is a datatype in JavaScript which facilitates the mathematical opertions on huge value of integer number
- It is represented by a suffix 'n' for number value

###### Notes

The big integers cannot be operated directly with normal number datatype. `10n + 20` is not allowed

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt

<br />

### Q. Show the usage of `||`, `&&`, `??` and `!!` with code examples

- The **logical OR** (||) operator for a set of operands is true if and only if one or more of its operands is true
- The **logical AND** (&&) operator for a set of operands is true if and only if all of its operands are true
- The **nullish coalescing operator** (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand
- The **double NOT** (!!) operator used to explicitly force the conversion of any value to the corresponding boolean primitive

###### Notes

It is not possible to combine both the AND (&&) and OR operators (||) directly with ??

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
- https://developer.cdn.mozilla.net/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT

<br />

### Q. Show the frequently and commonly used methods available on `Number` object with coding examples

- `isInteger` is used to check if the given number is integer or not
- `parseInt` is used to convert a given value in to integer
- `parseFloat` is used to convert a given value in to floating number
- `isNaN` is used to check if the given value is NaN or no
- `toFixed` is used to limit the number of digits after the decimal place
- `toPrecision` is used to limit the total number of digits to represent the number

###### Notes

`NaN` is special type of number and this value is results by the invalid mathematical operations such as substraction of number and text

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

<br />

### Q. Write the polyfill for `Number.isNaN`

- A polyfill is a piece of code used to provide modern functionality on older browsers that do not natively support it
- `NaN` is the only value which is not equal to itself and hence comparision operator cannot be used directly to check if a value is `NaN`

###### Notes

Even though the name says _Not a Number_, it is of type "number"

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN

<br />

### Q. Show the frequently and commonly used methods available on `Math` object with coding examples

- `abs` is used to get the absolute value of the given number
- `floor` is used to get the greatest integer smaller than or equal to the given number
- `ceil` is used to get the smallest integer greater than or equal to the given number
- `round` is used to round the given number to the nearest integer.
- `max` is used to get the largest of zero or more numbers
- `min` is used to get the smallest of zero or more numbers
- `sqrt` is used to calculate the square root of the given number
- `pow` is used to calculate the power base on inputs
- `trunc` is used to limit the total number of digits to represent the number (method is present on prototype of `Number`)

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

<br />

### Q. How can we solve the problem of comparision of 0.1 + 0.2 with 0.3 where `===` operator fails

- The addition of 0.1 and 0.2 will result in to 0.30000000000000004 and the comparision with 0.3 fails
- `Number.epsilon` is 2<sup>-52</sup>, which can be used to verify if this decimal values are matching

###### References

- https://www.programiz.com/javascript/library/number/epsilon

<br />

### Q. Write a code to iterate over a string

- String can be traversed using its string index or value as string can act like an iterable

###### References

- https://medium.com/better-programming/how-to-iterate-through-strings-in-javascript-65c51bb3ace5

<br />

### Q. Show the usage of template literals with expression interpolation and tagged templates

- Template literals are string literals allowing embedded expressions and support multi lines
- Template literals are enclosed by the backtick \`
- Tagged templates allow to parse template literals with a function which gets array of strings and expressions as arguments

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

<br />

### Q. Write a code to show the working of `try...catch...finally`

- The `try` statement consists of a try-block, which contains one or more statements. At least one catch-block, or a finally-block, must be present
- The exceptions and errors from try block are caught in catch block

###### Notes

- `try` can be chained with `catch` block or `finally` block
- `try..catch` only works synchronously and for runtime errors

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch

<br />

### Q. Show the creation and usage of `symbol` with code

- A "symbol" represents a unique identifier
- `Symbol.for` method searches for existing symbols in a runtime-wide symbol registry returns the same. If not found, creates a new Symbol
- `Symbol.keyFor` method retrieves the name of the symbol

###### Notes

Symbols are skipped by for…in

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
- https://javascript.info/symbol

<br />

[[↑] Back to top](#home)
