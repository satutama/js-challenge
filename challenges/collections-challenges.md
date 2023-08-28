<div align="right">
  <a href="/README.md#this-is-a-collection-of-modern-interview-code-challenges-on-javascript-suitable-for" id="home">Home</a>
</div>

<h2 align="center">JavaScript challenges on Collections - challenges</h2>

<br>

### Q. Write a function which can concatenate 2 arrays. If only one array is passed it will duplicate it

- Function can take 2 arguments which concatenates arrays
- 2nd array parameter can be defaulted to 1st array if the value is not passed

###### Notes

When 2nd argument is not passed, the case is same as duplicating the array

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

<br />

### Q. Write a program to replace 3 center elements of the 1st array by center 3 elements of the 2nd array

- `slice` method on array can be used to fetch the values of range in the array
- `splice` method on array can be used to replace the value of range in the array

###### Notes

The center most 3 values of array 'a' is replaced by 'b'

<br />

### Q. Sort the given array of integers in ascending or descending order

- `sort` method sorts the elements of an array in place and returns the sorted array
- It receives a function as an argument, which is used for comparision

###### Notes

If function is not passed an argument, default sorting will happen

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

<br />

### Q. Sort the given array of objects in ascending order according the authors lastname

- `sort` takes a function and expects the return value to be an integer for sorting
- The last names of the author can be compared and the result can be returned for sorting

###### Notes

Returning a true or false will not work as the algorithm expects an integer value

<br />

### Q. Square all the positive numbers of the array and return the output array

- `filter` is the method on Array which can be used to filter. It receives a function which can return boolean to filter the elements
- `map` is the method on Array which can be used to map the values to new values. It receives a function which can return the modified value

###### Notes

2nd solution uses method chaining where the return value from `filter` fuction is an array on which `map` method is being called

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

<br />

### Q. Write a code to generate an array with range of numbers and shuffle them

- An array of numbers in the range can be generated from a function which can take start and end value of the range
- The shuffling can be achieved simply by sorting the array using a function which randomly returns positive or negative numbers
- The shuffling of the values can be also done by picking a value from a random index from the current array and moving it in to a new array

###### Notes

2nd solution uses generator function to generate the range of values which can be converted to an array by spreading.

<br />

### Q. Check if the user with the name "John" exists in the array of objects

<br />

### Q. Generate an array of objects with properties id and full name from an array of objects where each object will have id, firstname and lastname

- To manipulate array of objects `map` method can be used

<br />

### Q. Write a program to calculate the sum of all the values of an array

- Sum of the values of an array can calculated by iterating and adding all the values of the array
- `reduce` method of array can be used efficiently to calculate the sum with or without initial value

###### Notes

`reduce` method takes a function as 1st argument and initial value as 2nd argument. The return value of current iteration will be 1st argument for the next iteration along with the next element of the array

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

<br />

### Q. Get the maximum value from a numbers array along with its index

- `Math.max` is a method which returns maximum value from a given list of values
- `reduce` can also be designed to return the maximum value of each comparision

###### Notes

Though 1st solution is verbose compared to 2nd, but has good performance

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min

<br />

### Q. Find the number of occurences of minimum value in the numbers list

- `filter` method can be used to fetch all the minimum values and we can get the count of those valuses

<br />

### Q. Create an array of length n with all the values of it set to 10

- `fill` is a method on Array prototype which fills all the slots of array with the value given passed as the argument

###### Notes

If an object is passed the object reference is copied to all the slots and not the different objects

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill

<br />

### Q. Write the code to remove the duplicates from the array

- Set is a data structure which does not allow duplicate elements

<br />

### Q. Design a flat function which flattens an array to any depth

- Flat function can be used to flatten the array by recursive call

<br />

### Q. Check if all the students of have passed or not (40 is the pass marks)

- `every` is a method on Array prototype which returns true only if all the elements condition satisfies the condition

<br />

### Q. Get the average of all the salaries which is greater than 10000 from the department of "IT" from the array of objects)

<br />

### Q. Extract the list of all the elements from the list of numbers given in 2 arrays

- The union array will be the result if all the elements from the 2 arrays are picked

<br />

### Q. Get the list of all distinct elements which are present in both list of numbers

- The intersection array will be the result if the common elements from the 2 arrays are picked

<br />

### Q. Extract list of elements present only in the first list given.

- The only present elements of 1st list will be the result when all the elements of 1st list not present in the 2nd are chosen

###### Notes

Elements of 2nd list only can be obtained by checking for all the elements of lis 2 which are not present in list1

<br />

### Q. Create a function named "average" which can calculate the average of an array and should be available to be called from any Array object.

- The function added to Array prototype are accessible to all the objects of Array

<br />

### Q. Write a code to eliminate duplicate objects in an array where each object has an 'id' property which can be used to identify the object and the duplicate object with lower rank to be removed

- The duplicate objects cannot be removed using `Set` as the 2 objects with same structure and data have different references
- `Map` can be used to have 'id' as the key and object as value
- If 'id' is already present in the array, object with the higher rank can be retained

<br />

### Q. Create an array which will only accept string values. (Homogeneous array of strings)

- Array in JavaScript a collection of values of any type by default
- Proxy can be used to validate and insert to the array only if the value satisfies the condition using `set` trap

###### Notes

The functionality of the code can be modified to make the array accept any one or more kind of values only

<br />

### Q. Create a Proxy object through which the array can be accessed as usual but also allow to access the values through negative indices

- `get` trap of proxy can be used to map the negative index to the valid array position

<br />

[[↑] Back to top](#home)
