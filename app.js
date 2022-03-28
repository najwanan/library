

//Constructor for Book objects 
//should contain: title, author, pages, read/not read status
// put a function into the constructor that can report the book:

//Global variables 

let myLibrary = []

const BookButton = document.querySelector("#bookBtn"); 
const deleteButton = document.querySelector("#deleteBtn");
const userForm = document.createElement('form')

const libraryBody = document.querySelector(".libraryContainer");

userForm.setAttribute('id', "myForm");

//Book Title 
/*const formTitleLabel = document.createElement('label')
const formTitleField = document.createElement('input')
//Author
const formAuthField = document.createElement('input')
const formAuthLabel = document.createElement('label')
//Num of Pages
const formPagesLabel = document.createElement('label')
const formPagesField = document.createElement('input')
//Read Status toggle
const userFormReadStatus = document.createElement('input')
const submitButton = document.createElement('button')*/

const formReadBox = document.createElement('label')
const formReadStatus = document.createElement('input')

 const formTitleField = document.querySelector('#titleField')
  const formAuthField = document.querySelector("#authorField");
  const formPagesField = document.querySelector("#pagesField");
  const userFormReadStatus = document.querySelector('#readStatus')
  const submitButton = document.querySelector("#subBtnID");


function createInputForm(){

  
  document.body.appendChild(userForm)

  const formContent = `
    <label>Book Title</label>
    <input type = "text" id="titleField">
    <label>Author</label>
    <input type = "text" id="authorField">
    <label>Pages</label>
    <input type = "text" id="pagesField">
    <input type = "checkbox" value = "no" id="readStatus">
    <label>Read</label>
    <button class = 'subBtn' id= 'subBtnID'>submit</button>

  `;

  userForm.innerHTML = formContent
  
    /*//append title field in form 
    formTitleLabel.innerHTML = 'Book Title';
    formTitleField.setAttribute('type', 'text');
    userForm.appendChild(formTitleLabel);
    userForm.appendChild(formTitleField);


    //append title field in form 
    formAuthField.setAttribute('type', 'text');
    formAuthLabel.innerHTML = 'Author';

    userForm.appendChild(formAuthLabel);
    userForm.appendChild(formAuthField); 

    //append pages field in form 
    formPagesLabel.innerHTML = 'Pages';
    formPagesField.setAttribute('type', 'text');

    userForm.appendChild(formPagesLabel);
    userForm.appendChild(formPagesField); 

    formReadBox.innerHTML = "Read";
    userFormReadStatus.setAttribute('type', 'checkbox')
    userFormReadStatus.setAttribute('value', 'No')
    userFormReadStatus.setAttribute('id', 'readStatus')


    userForm.appendChild(userFormReadStatus);
    userForm.appendChild(formReadBox);

    //submit button 
    submitButton.setAttribute('class', 'subBtn')
    submitButton.innerText = "submit"
    userForm.appendChild(submitButton)*/
 
}


//event listener triggers form display with inputs for title, author, pages and checkbox for read
BookButton.addEventListener( "click", createInputForm)
//submitButton.addEventListener("click", addBookToLibrary)
formReadStatus.addEventListener("click", changeReadStatus)


document.addEventListener("click", function (e) {
  if (e.target && e.target.id == "subBtn") {
    console.log("submit button was clicked")
       addBookToLibrary()
  }
});

function changeReadStatus() {
  Book.toggleRead('Yes')
  console.log("readstatus function activated")
}

class Book{
  constructor(
    title, 
    author, 
    pages, 
    read
  ) {
    this.title = title;
    this.author = author;
    this.pages = pages; 
    this.read = read;

  }

  //add method to toggle read status
  toggleRead(readStatus) {
   
    this.read = readStatus;
  }
};

function addBookToLibrary(e){
//once the user hits submit, append the information to card
    e.preventDefault();


  const bookObj = new Book(
      formTitleField.value,
      formAuthField.value,
      formPagesField.value,
      userFormReadStatus.value
      
    )
     

    myLibrary.push(bookObj)
    makeBookCard(myLibrary);
    console.log(myLibrary)
    userForm.reset();
   
    //use forEach or map
}

//function format({ title, author, pages, read }) {
  //  return `<li> ${title} ${author}</li>`;} 

function makeBookCard(myLibrary) {
  libraryBody.innerHTML = "";
  
  //write line to clear contents of document then reappend for each book 
  myLibrary.forEach((book, i) => {
    const bookCard = document.createElement("div");
    bookCard.setAttribute("id", "bookCard");
        //const card = document.createElement("div");
    const content = `
                    <li> Author: ${book.author}</li> 
                     <li> Title: ${book.title}</li> 
                     <li> Pages: ${book.pages}</li>
                     <input type = "checkbox"> Read: ${book.read}</input>
                     <button id= "deleteBtn">Delete</button>
                     `;
        //let booktitle = document.createTextNode("Title:" + " " + book.title);
        bookCard.innerHTML = content;
        //bookCard.appendChild(card);
        libraryBody.appendChild(bookCard)
        console.log(book.title, book.author, book.pages, book.read)
    })
};


if (deleteButton) {
    console.log("this button is here")
    deleteButton.addEventListener("click", clearBookCard);
  }
  


//function to delete book card 
//use set Interval to check for mutations every x seconds or write a mutation callback function

function clearBookCard() {
  console.log("you selected the delete button")
  
}

//adding event delegation for delete button and for read checkbox 

document.addEventListener('click', function (e) {
  if (e.target && e.target.id == 'deleteBtn') {
    console.log('this is event delegation');
    const BookCard = document.querySelector('#bookCard')
    BookCard.remove();
  }
});


//Tasks 1. use event delegation to toggle read checkbox status within object. 2. Implement ID for each bookcard so that correct bookCards get deleted

document.addEventListener('input', function (e) {
  if (e.target && e.target.id == 'readStatus') {
    console.log("the read status has been changed")
  }
})