1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   Ans : In JavaScript, getElementById, getElementsByClassName, and querySelector / querySelectorAll are used for element selection. However, there is a difference in their element selection and work. 
  * getElementById: An element is selected using a specific ID.
  * getElementsByClassName: Several elements are selected using a single class. 
  * querySelector: Any ID, class, tag name, etc. is selected through this, but it uses the first element of the same css selector. And if there is any such selector, it returns null. 
  * querySelectorAll: It can select all the elements of the same selector. However, it displays the elements in the form of a node list.

