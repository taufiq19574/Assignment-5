1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   
   Ans : In JavaScript, getElementById, getElementsByClassName, and querySelector / querySelectorAll are used for element selection. However, there is a difference in their element                   selection and work. 
  * getElementById: An element is selected using a specific ID.
  * getElementsByClassName: Several elements are selected using a single class. 
  * querySelector: Any ID, class, tag name, etc. is selected through this, but it uses the first element of the same css selector. And if there is any such selector, it returns null. 
  * querySelectorAll: It can select all the elements of the same selector. However, it displays the elements in the form of a node list.

2. How do you create and insert a new element into the DOM?
   
   Ans : Create the element using "const newElement = document.createElement(tagName)" and insert the element using "parent element .appendChild(newElement )" or "parent element.innerHTML           = code will insert the element."

4. What is Event Bubbling and how does it work?
   
   Ans : Event Bubbling is an Event Propagation Mechanism in JavaScript where when a child element is triggered, it first acts on that element, then its parent, then its grandparent, and so          on up to the topmost document.

6. What is Event Delegation in JavaScript? Why is it useful?
   
   Ans : Event Delegation is a JavaScript technique where instead of having separate event listeners for multiple child elements, we place a single event listener on their common parent              element. Then, through event bubbling, we can understand which child element the event actually occurred on.
   
         why it is useful ? =>> 
            * 1. No need to provide multiple different event listeners
            * 2. It can be done with less code.
            * 3. Better Performance.
            * 4. Dynamic elements can be handled.

8. What is the difference between preventDefault() and stopPropagation() methods?
   
   Ans : The difference between preventDefault() and stopPropagation() methods are =>> 
         preventDefault() disables the default behavior of an element, but does not stop bubbling.
         stopPropagation() stops event bubbling and prevents the event from going to the parent element.
