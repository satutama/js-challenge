<div align="right">
  <a href="/README.md#this-is-a-collection-of-modern-interview-code-challenges-on-javascript-suitable-for" id="home">Home</a>
</div>

<h2 align="center">JavaScript challenges on Objects - concepts</h2>

<br>

### Q. Show the different ways of creating an object

- Object can be created using Object constuctor
- Object can also be created using Object literal form
- Object can be created using `new` keyword to constructor function
- Object can be created using Class

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects

<br />

### Q. Display all the keys of an object

- The keys of an object can be obtained using `Object.keys`

###### Notes

`obj.hasOwnProperty(key)` is used to only display the properties present on the object and not inherited ones.

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in

<br />

### Q. Display all the values of an object

- The values of an object can be obtained using `Object.values` which returns an array of values

###### Notes

`Object.values` will only fetch the values of the object and not inherited ones

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

<br />

### Q. Write a function which can check if a given object is empty or not

- Object is empty if it has no keys
- Few objects such as `Date` object does not have any keys but still are not empty. Hence additional check can be implemented to verify the stringification of the object is also empty

###### Notes

`obj.constructor === Object` is also used to verify along with the length of keys to check if object is empty which works for objects created with literal form

###### References

- https://www.samanthaming.com/tidbits/94-how-to-check-if-object-is-empty/

<br />

### Q. Create an empty object which has no prototype attached to it

- Objects created in JavaScript will have a prototype object on it connected to other object or `Object`
- Object constructor can be used to create such an empty object

###### References

- https://davidwalsh.name/object-create-null

<br />

### Q. Show the usage of 'Object.entries' to create an object from key value pairs

- The key value pairs can be directly converted to object using `entries` method of Object

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries

<br />

### Q. Connect 2 objects so that one object is prototypically connected to the other

- Objects in JavaScript are connected its prototype and is accessible for objects getPrototypeOf or `__proto__`
- `setPrototypeOf` is used to set the prototype of the object

###### Notes

The lookup happens at the object level initially and if the key is not found, prototype chain lookup happens

###### References

- https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes

<br />

### Q. Create an object with getter and setter for property

- `getter` and `setter` on the properties of object can be used to control the read and write behavior

###### Notes

If the `this.data` is accessed directly, the function will call itself infinitely. Hence, we would require one more variable to store the data

###### References

- https://javascript.info/property-accessors

<br />

### Q. Show the different types of accessor properties available for object property and write a code defining them

- `value` accessor is used to set the value of the property
- `writable` accessor is used to set if the property can be modified or not
- `configurable` accessor is used to set the property to be configurable or not
- `enumerable` accessor is to set the property to be considered in enumeration

###### Notes

Except `value`, other accessort mentioned accept true or false

###### References

- https://javascript.info/property-accessors

<br />

### Q. Show the different options available to prevent the modifications to the object

- `preventExtensions` is an Object method which prevents addition of any new property to an object
- `seal` is an Object method which prevents addition and deletion of any property in an object
- `freeze` is an Object method which prevents addition, deletion and update of any property of an object
- There are also methods `isExtensible`, `isSealed` and `isFrozen` on Object to check

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze

<br />

### Q. Modify the given object so that it can be used inside a for...of loop

- Symbol iterator can be used to define the iterator on the object
- The values of the object can accessed with `for..of` the way we can do it for array

###### References

- https://javascript.info/generators#using-generators-for-iterables

<br />

### Q. Show the creation of Regular Expression in JavaScript

- Regular expressions are patterns used to match character combinations in strings
- Regular expressions can be created using literal form or constructor form
- Constructor form accepts regular expression as the first argument and flags as the 2nd argument
- Literal form is simple which takes regular expression and flags in a single expression

###### Notes

In JavaScript, regular expressions are objects

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

<br />

### Q. Write a polyfill for Object.create

- The creating of object can happen by making constructor call to the function

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create

<br />

### Q. Write a code show Optional chaining for objects and functions

- The optional chaining operator (?.) permits reading the value of a property located deep within a chain of connected objects
- The expression short-circuits with a return value of undefined in the absence of property

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining

<br />

### Q. Show the usage of static variable & function in a class and accessing it from the code

- Static members of the class are class level variables and not created for each instances of the class
- Static members can be accessed directly using class name

###### References

- https://javascript.info/static-properties-methods

<br />

### Q. Write a class which uses private variable and function

- Private members of the class are only accessible within the class and instances of the class do not have access to it
- Private members can be created with the prefix '#' before the name of the class member

<br />

### Q. Show how inheritance works in Class and the use of super keyword with working example

- Class level inheritance can happen when a class inherits from another class using the keyword `extends`
- The child class can access parent class members using the keyword `super`
- The non private members of parent class become available to child class when inherited

###### Notes

`super` call to constructor within constructor of child class must be the first statement

###### References

- https://javascript.info/class-inheritance

<br />

### Q. Show the way of using Proxy for object

- The Proxy object enables create a proxy for another object, which can intercept and redefine fundamental operations for that object
- Proxy can be set for objects (including functions and arrays) to intercept the values which gives us the control on access and modification of the real object
- Proxy takes 1st argument as an object / function and 2nd argument as a object with different function traps

###### Notes

There are lot of other traps used in Proxy apart from `get`, `set`, `apply`

###### References

- https://javascript.info/proxy
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy

<br />

### Q. Show how can we use for..of loop to iterate on a range with given start and end values in an object

- For..of loop uses iterator of an object to fetch the values one at a time
- Defining an iterator Symbol on the object to iterate from start to end will fetch the values of the range

<br />

### Q. Prove that private looking variable in a function is not really private specific to that object

- Private looking variables can be created in a function and can given access by providing function interfaces
- The functions maintain a closure over function variables and hence the function variables persist inside the function interfaces
- Though the variable is private within the function and cannot be accessed, these variables are not private to the created object

<br />

[[↑] Back to top](#home)
