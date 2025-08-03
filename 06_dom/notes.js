import { Children } from "react"

DOM(Document object model):
document: webpage we  see in browser
object: elements like image, headers, paragraphs etc
model: document as heirarchal Tree

how to select dom element:

1)getElementById:
->to select Element with id attribute
->slects only one element

eg)<h1 id="page-title">Phonebook</h1>

  <p class="family">Marie</p>
  <p class="family">Jose</p>
  <p class="work">Anne</p>
  <p class="work">Joan</p>

const titleElement = document.getElementById("page-title")
console.log(titleElement)

output: <h1 id="page-title">Phonebook</h1>

2)getElementsByClassName:
->selects all elements by class name
->can select more than one object

eg)
const famContacts = document.getElementsByClassName("family")
console.log(famContacts)

output in console:
HTML HTMLAllCollection(2) [p.family , p.family]
->0: p.family
->1: p.family
length: 2
[[prototype]]: HTMLCollection

->this method returns an HTML HTMLcollection
Note: The HTML collection looks like an array, but it is not. 
You can access the elements using bracket notation just as you would
 with an array – but you cannot apply array methods like map, filter,
and forEach on it.

eg)
console.log(famContacts[0])
output:
<p class ="family">Marrie</p>
prints the first element of the same class

-> If we want to loop through all elements in HTML collection we need to first convert it into 
array for that we can use two methods

method 1)
const convertedArray = Array.from(famContacts)
now we can use array method on converted array
convertedArray.forEach(function(item){
    console.log(element)
})
output:
<p class="family">Marrie</p>
<p class="family">jose</p>

method 2) we can use spread operator
let famContactsArray = [...famContacts]

famContactsArray.forEach(element => console.log(element))
ouput: 
<p class="family">Marrie</p>
<p class="family">jose</p>


3)getElementByTagName:
->selects all elements with same tag
tag-> p,h1,h2,h3,ul,ol,li,etc
->this method also returns HTML collection 

eg)
const allContacts = document.getElementsByTagName('p')
console.log(allContacts)

4)querySelector:
->it returns only one element
-> it selects elements similary as we select elements in css like using "." , "#" , "nth child" etc. 
eg)
const firstWorkContact = document.querySelector('.work')
console.log(firstWorkContact)

output:
<p class="work">Anne</p>
returns only the first element with a class of work and ignores the rest.


Let's see another example to show how querySelector works like CSS selectors. 
The following is a div element with four buttons:

<div>
    <button>First button</button>
    <button>Second button</button>
    <button>Third button</button>
    <button>Fourth button</button>
</div>
if we want to select the third button we will use nth Child 
const thirdButton= document.querySelector('div button:nth child(3)')
console.log(thirdButton);

output:
<button>Third button</button>

5)querySelectorAll:
To select all the elements using css selector we use this
The difference is that it returns all elements that match the selector 
instead of returning only the first one.

eg)
const allBtns = document.querySelectorAll('button')
console.log(allBtns)

Note: querySelectorAll returns a NodeList. A NodeList is slightly different 
from an HTML collection. You don't need to convert it to an array to apply a
 method like forEach on it.

allBtns.forEach(btn => console.log(btn))
output:
<buttons>First button</buttons>
<buttons>Second button</buttons>
<buttons>third button</buttons>
<buttons>Fourth button</buttons>

But you still cannot apply array methods like map, filter, and others on a NodeList.
 You will need to first create an array from it.

which one we should use html collection or nodelist
->The question of whether you should use an HTMLCollection or a NodeList depends on the use case or specific context.

If you want a live collection that automatically updates when there's a change in the document, then you should use 
an HTMLCollection. But if you prefer a static collection that doesn't update with a change in the document, then you 
should use a NodeList.

Most modern JavaScript frameworks and libraries provide higher-level abstractions, simplifying many DOM manipulation
 tasks. And you don't need to worry about them.

But having a solid understanding of native DOM collections like HTMLCollection and NodeList remains valuable, 
especially in scenarios where fine-grained control or compatibility with legacy code is essential



How to Change the Content of DOM Elements:

First we have to select the DOM elements by using any above method.
after selecting there are several methods

1)the innerHTML property 
->This is a method that allows you to read or update both the structure and content and structure of elements

eg)
<p id="topic">JS array methods</p>
<p id="first-method">map</p>
<p id="second-method">filter</p>
