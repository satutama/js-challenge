<div align="right">
  <a href="/README.md#this-is-a-collection-of-modern-interview-code-challenges-on-javascript-suitable-for" id="home">Home</a>
</div>

<h2 align="center">JavaScript challenges on Objects - challenges</h2>

<br>

### Q. Display all the keys and values of a nested object

- `typeof` operator on value gives the type of value
- Recursive solution can be used to iterate over all the nested objects

<br />

### Q. Write a program which can empty a given object

- Object can be emptied by removing all the keys present on it
- Alternatively, a new object can be created and the prototype of the new object can be set as prototype of old object

###### Notes

'obj' is considered to be the object to be emptied

<br />

### Q. Show how a deep copy of an object can be done

- Deep copy is done by copying all the properties of the object to another object

###### Notes

3rd solution provided does deep copy of a nested object also but this technique results in loss of data

###### References

- https://www.digitalocean.com/community/tutorials/copying-objects-in-javascript

<br />

### Q. Create an array of pair of values (key, value) from an object and store it in a map. Consider the object is not nested

- As the object is not nested, the key-value pairs can be obtained directly by using Object.entries
- Map can be initialized with key-value pairs

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

<br />

### Q. Create an object with a property 'marks' which cannot be set to a value less than 0

- `getter` and `setter` on the properties of object can be used to control the read and write behavior

###### Notes

2nd solution shown directly defines `getter` and `setter` for property marks, hence uses another variable to store the data

###### References

- https://javascript.info/property-accessors

<br />

### Q. Create an object which has a property 'userid' which can only be set once and will be a read only property

- Property accessor `writable` to `false` sets the property to be read only

###### Notes

`obj.id` is a read only property and does not allow overwriting

<br />

### Q. Stringify an object by excluding the 'password' property

- `JSON.stringify` is the method which can be used for stringification of an object or any other value
- It accepts 2nd argument which can be a function or array

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

<br />

### Q. Design a function which takes an array as input and returns a function 'next', calling which fetches a value one by one

- The function returned `next` will return an object which contains value and done properties

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator

<br />

### Q. Create an object 'obj' with functions assigned to keys. Show how can we achieve 'obj.func1().func2().func3()' considering func1, func2, func3 are object keys

- For achieving chaining functionality, each function can return the calling context itself so that context is retained

###### Notes

Order of calling the functions does not matter as all the functions are returning object itself

###### References

- https://medium.com/technofunnel/javascript-function-chaining-8b2fbef76f7f

<br />

### Q. Create an object with property counter which keeps incrementing on every access

- The access to the property of the object can be configured through property `getter`
- A separate private variable can be maintained track the value and getter on each access to increment and return the value

###### Notes

Symbol is used to maintain the private variable in the object. Using the private variable to store the data such as `_counter` is also a well known pattern before symbols

<br />

### Q. Create an object and make it behave like an array which allows push and pop operations on items

- Object does not have by default a property named 'length' and hence we can define it on object which helps to track the length
- 'push' and 'pop' functions can be added to the object which internally calls the Array methods `push` and `pop` by passing the object context

###### Notes

As the context for array methods is set object, length of the object changes whenever `push` and `pop` operations take place

<br />

### Q. Write a function which can be used to deeply compare 2 nested objects

- The objects can be deeply compared by checking the key value pairs recursively

###### Notes

Stringification of both objects and comparision will also work, but fails on keys order mismatch

###### References

- https://dmitripavlutin.com/how-to-compare-objects-in-javascript/

<br />

### Q. Design a class for employee which takes id and name in during construction of object and has a salary property

- Classes are a template for creating objects. They encapsulate data with code to work on that data
- The constructor method is a special method for creating and initializing an object created with a class
- Objects of the class can be created using `new` keyword followed by classname

###### Notes

Class in JavaScript is functionality to achieve class based model on top of prototype based programming model of JavaScript

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

<br />

### Q. Write a program to make all the properties of an object read only but allow the addition of new properties

- The exisiting properties of the object can be made read only with `set` keyword using Proxy

###### Notes

If condition takes care whether the property is new or existing to handle the read only scenario

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

<br />

### Q. Write a program which can return a boolean if value is present in the range with given start and end values in an object

- The object `in` can be trapped using Proxy trap `has`, to check if the value is in the range or not

<br />

### Q. Write a function which accepts a topic and a list of related tags to store the information. The same function should return all the topics when requested with a tagname

- The tags can be stored as keys and array of topics as values in a map
- Function module can be desgined to expose 'addTags' and 'getTopics' by tagname

<br />

### Q. Write a function which accepts a collection of values & an iteratee as arguments and returns a grouped object

- As the 2nd argument is either a functin or property, the iteratee can be perfrom accordingly on the value of arrays
- An empty object can be created and used to push the values of array to respective property of the iteratee output

###### References

- https://lodash.com/docs/4.17.15#groupBy

<br />

### Q. Create a constructor function which allows its functions present on prototype to be accessed only by the objects created by calling it

- The list of objects created by the function can be kept in track using a collection object inside function
- `Weakset` can be a prefered way to use as collection for objects created through it as the dereferencing the object helps in garbage collection
- A context validation within prototype method can be set if the object is created by the function itself or not

<br />

### Q. Design a utility on an array of objects where the access can be made to the object using index (as usual) and also from primary key of the object

- The access to the index happens for arrays by default and the Proxy can be setup to enable the fetching of object using primary key (any other key can also be coded)

<br />

### Q. Write a function which receives an object and returns a true if the object has circular reference

- Stringification of an object having circular references will throw error

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cyclic_object_value

<br />

### Q. Write a code which can eliminate circular references in an object (Cyclic reference in an object)

- Circular / cyclic reference exists when the object property value forms a cycle
- The circular references can be eliminated by passing a function to take care of circular references during stringification
- The circular references can be also be eliminated by setting the such property value to null on the object itself

###### Notes

`circularReferenceObj` is assumed to be an object with cyclic reference

<br />

### Q. Provide an object on which a value can be set to nested property even if it does not exist.

- The nested object can be accessed only if all the nested properties are defined on the object
- A proxy can designed to create such nested object properties on demand whenever such non existent property is requested and attempted to set with value
- `get` trap of proxy can be used to create the objects dynamically and set the value

<br />

[[↑] Back to top](#home)
