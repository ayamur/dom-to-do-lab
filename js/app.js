console.dir("padded room time WOOO!")
//// Add these elements to your HTML, in the order they are listed:
//// 1. Add an `h1` element to the HTML. Give the h1 text of **To-do List:**
//// 2. Add an `input` element to the HTML. Give it an `id` of your choice. Give it an attribute of `type` with a value of `text`

const inputEl = document.getElementById("task")
const subBtnEl = document.getElementById("submit-button")
const ulEl = document.getElementById("todo-list")

// console.log(inputEl)
//console.log(subBtnEl)
// console.log(ulEl)


////cached element reference id task
////cached element reference id submit-button
////cached element reference id todo-list
////(one for the input, button and ul)

subBtnEl.addEventListener('click', function(event) {
  const li = document.createElement("li")
  li.textContent = inputEl.value
  document.querySelector('ul').appendChild(li)
  inputEl.value = "";
})

//add an event listener to the button that listen to click events. When the button is clicked, we need to:
    //create a new li element
    //set the text of the newly created li element to the text that the user has entered into the input element
    //reset the text in the input field to an empty string
    //add the new li element to the page, inside the ul element



//Level-Ups
  //Don’t Allow Empty Items to be Added to the To-do List
  //Right now, if a user clicks the `button` element without any text in the `input` field, an empty bullet point is created. Prevent this from happening.

  //Reset Button
  //Add a Reset button. After the Reset button is clicked all items in the to-do list should be removed. The input field should also be cleared so that it doesn’t hold any text.

  //Delete an Item on Click
  //We’ll learn a better way to manage the state in our applications tomorrow, but for now, add an event listener to an existing cached element reference and manipulate the DOM to remove individual items from the to-do list when we click on them.

  //Center All the Items on the Page
  //This will take some research! Make a `css` directory in your project and a `style.css` file in that directory. Link this new file in your HTML. In this file, add styling that centers everything we’ve built on the page, both horizontally and vertically. Also, add a `div` element to your HTML so that the `input` element and `button(s)` are on the same line.

  //Research
  //Do some research into the `form` element and the `submit` event tied to the `form` element. Then, optionally integrate it into this app (this is not shown in the solution code).