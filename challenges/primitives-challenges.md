<div align="right">
  <a href="/README.md#this-is-a-collection-of-modern-interview-code-challenges-on-javascript-suitable-for" id="home">Home</a>
</div>

<h2 align="center">JavaScript challenges on Primitives - challenges</h2>

<br>

### Q. Swap 2 integers present in variables num1 and num2 without using temporary variable

- The swapping of 2 variables is possible with simple Destructuring assignment using array
- Traditional approach of swapping by using the given variables is also achievable

###### Notes

2nd solution can fail due to overflow of number range if the numbers are very big

<br />

### Q. Write a function which returns true if given value of number is an integer without using any inbuilt functions

- Modulo operator can be used to check if there is a remainder left when divided by 1

<br />

### Q. Create a function which returns a random number in the given range of values both inclusive

- `Math.random` function returns a floating-point, pseudo-random number between 0 (inclusive) and 1 (exclusive)

###### Notes

Usage of `Math.round` depends on the logic used to accomplish the requirement

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

<br />

### Q. Write a program to reverse a string

- String can be reversed by iterating it and storing it in reverse order
- String can also be reversed by converting it to array, then joining it after reversing

###### Notes

The string can be tested if it is **palindrome**, by comparing the actual string with the reversed string

###### References

- https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/

<br />

### Q. Write a program to reverse a string by words. Also show the reverse of each words in place

- The string can be reversed by words, by splitting the string with spaces and joining them back after reverse
- If the the letters in each word have to be reversed, the string reversal procedure has to be followed after breaking the string with spaces

<br />

### Q. Write a program to reverse a given integer number

- The remainder of the number can be fetched and the number can be divided by 10 to remvoe the the digit in loop till number becomes 0
- A simple approach to reverse a number could also be to convert it in to a string and then reverse it

<br />

### Q. Write a code to replace all the spaces of the string with underscores

- The string can be split using the space character and can be joined back with underscore to replace all the spaces with strings
- `replaceAll` is the inbuilt String function on prototype which can be used to replace a string with another string

###### Notes

`replace` is also an inbuilt String function on prototype which can be used to replace the 1st occurence of the string with another string

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll

<br />

### Q. Write a function which can convert the time input given in 12 hours format to 24 hours format

- The check for 'AM' and 'PM' can be verified using `endsWith` String method
- An extra 0 would be needed if the hours have single digit

###### Notes

Conversion of string to lowerCase helps in case insensitive comparision

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

<br />

### Q. Write a function which accepts a string argument and returns the count of characters between the first and last character 'X'

- `indexOf` and `lastIndexOf` are the methods on String which returns the position of the given string in the input string from start and end respectively
- If the match is not found, these methods return -1

<br />

### Q. Write a function to truncate a string to a certain number of letters

- Text can be truncated by fetching the substring from start till the count of characters
- `substr` methods of String can be used to fetch the part of the string

<br />

### Q. Write a code to truncate a string to a certain number of words

- The string can be broken in to words array and then `slice` method of array can be used to get the number of words which will then be joined back

<br />

### Q. Create a regular expression to validate if the given input is valid Indian mobile number or not

- Regular expression check has to have an optional +91 or 0 in the beginning, then an optional space and 10 digits
- `test` method of regular expression can be used to validate if the mobile number pattern matches or not

###### Notes

String has method `match` which returns array of matches or null

<br />

### Q. Write a function which returns a list of elements which contains at least one character as digit

- A test for digit after looping through the array would give the list of values having at least one digit string

<br />

### Q. Write a function which checks if a given search text is present either in the beginning of the first name or the second name

- The function can be designed to accept the name and the search text
- Regular expression can be designed to validate if the name has search text the beginning of first or second name

###### Notes

Case insensitive match is happening for the search text in the string represented by the argument "i" for the regular expression

<br />

### Q. Write a function to chop a string into chunks of a given length and return it as array

- String can be chopped using `slice` method of String
- Regular expression can also be used effectively to this operation

###### References

- https://www.tutorialspoint.com/how-to-split-large-string-in-to-n-size-chunks-in-javascript

<br />

### Q. Write a code to remove all the vowels from a given string

- `replace` method on String accepts a string or regex as the argument

###### References

- https://medium.com/better-programming/how-to-remove-vowels-from-a-string-in-javascript-fbed6e3a438e

<br />

### Q. Create a function which returns random hex color code

- The color code is popularly represented in hexadecimal format for RGB colors
- The minimum value for the color is '#000000' and maximum is '#FFFFFF'

###### Notes

`toString` method on String takes optional parameter which converts converts to the specified base before converting to string

###### References

- https://css-tricks.com/snippets/javascript/random-hex-color/

<br />

### Q. Write a function which accepts two valid dates and returns the difference between them as number of days

- The difference between 2 dates in JavaScript will give the time difference in milliseconds
- Time difference can be converted in to days by dividing the 24Hrs time in milliseconds

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

<br />

[[↑] Back to top](#home)
