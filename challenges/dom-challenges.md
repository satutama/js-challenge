<div align="right">
  <a href="/README.md#collection-of-modern-interview-code-challenges-on-javascript-suitable-for" id="home">Home</a>
</div>

<h2 align="center">JavaScript challenges on Document Object Model</h2>

<br>

### Q. Show the different ways of selecting an element from DOM

- The element can be selected using its tagname, id, attribute, value etc

###### Notes

Above selectors are used to select a first matching element reference even if mutliple matches be there

###### References

- https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
- https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById

<br />

### Q. Show the ways to loop over the Nodelist obtained after querying for the elements

- The Nodelist can be obtained by queryng for multiple elements
- As list of elements are array like object (not pure JS array), all the array methods can't be directly used

###### References

- https://developer.mozilla.org/en-US/docs/Web/API/NodeList

<br />

### Q. Design and Implement a Node Store, which supports DOM element as key

- Implement it without using inbuilt Map
- Can you do it in O(1) Time complexity?

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

<br />

### Q. Implement a function to find the closest ancestor with the provided selector (Element.closest() method)

- The closest() method traverses the Element and its parents (heading toward the document root) until it finds a node that matches the provided selector string. Will return itself or the matching ancestor. If no such element exists, it returns null.

###### References

- https://developer.mozilla.org/en-US/docs/Web/API/Element/closest

<br />

### Q. Write a function to find the corresponding node in two identical DOM trees

- Given two same DOM tree A, B, and an Element a in A, find the corresponding Element b in B. By corresponding, we mean a and b have the same relative position to their DOM tree root.

###### References

- https://bigfrontend.dev/problem/find-corresponding-node-in-two-identical-DOM-tree

<br />

### Q. Write a function to get depth of a given DOM tree

- A depth of a given DOM tree is the max depth till which DOM nodes are nested

<br>

### Q. Implement a function to get the root node of a given DOM fragment (document.getRootNode() method)

- Root node is the topmost parent node of any given DOM fragment

###### References

- https://javascript.info/dom-navigation

<br>

### Q. Implement a function to get unique tag names in a given DOM tree

###### References

- https://bigfrontend.dev/problem/get-DOM-tags

<br>

### Q. Implement a function to get elements by tag name (document.getElementsByTagName() method)

- The getElementsByTagName method of Document interface returns an HTMLCollection of elements with the given tag name.
- For example, document.getElementsByTagName('div') returns a collection of all div elements in the document.

###### References

- https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByTagName

<br>

### Q. Implement a function to check if a given DOM tree has duplicate IDs

- In a given DOM tree, the id on each node has be unique
- Although HTML is very forgiving, but we should avoid duplicate identifiers

<br>

[[↑] Back to top](#home)
