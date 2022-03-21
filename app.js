

//Constructor for Book objects 
//should contain: title, author, pages, read/not read status
// put a function into the constructor that can report the book:

//Global variables 

let myLibrary = []

const BookButton = document.querySelector("#bookBtn"); 

const userForm = document.createElement('form')

const libraryBody = document.querySelector(".libraryContainer");

userForm.setAttribute('id', "myForm");

//Book Title 
const formTitleLabel = document.createElement('label')
const formTitleField = document.createElement('input')
//Author
const formAuthField = document.createElement('input')
const formAuthLabel = document.createElement('label')
//Num of Pages
const formPagesLabel = document.createElement('label')
const formPagesField = document.createElement('input')
//Read Status toggle
const userFormReadStatus = document.createElement('input')
const submitButton = document.createElement('button')

const formReadBox = document.createElement('label')
const formReadStatus = document.createElement('input')

const deleteButton = document.querySelector('#deleteBtn')



function createInputForm(){

  
    document.body.appendChild(userForm)

    //append title field in form 
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

    userForm.appendChild(userFormReadStatus);
    userForm.appendChild(formReadBox);

    //submit button 
    submitButton.setAttribute('class', 'subBtn')
    submitButton.innerText = "submit"
    userForm.appendChild(submitButton)
 
}


//event listener triggers form display with inputs for title, author, pages and checkbox for read
BookButton.addEventListener( "click", createInputForm)
submitButton.addEventListener("click", addBookToLibrary)


function addBookToLibrary(e){
//once the user hits submit, append the information to card
    e.preventDefault();


    const bookObj = {
      title: formTitleField.value,
      author: formAuthField.value,
      pages: formPagesField.value,
      read: userFormReadStatus.value
    };


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
                     <li> Read: ${book.read}</li>
                     <button id= "deleteBtn">Delete</button>
                     `;
        //let booktitle = document.createTextNode("Title:" + " " + book.title);
        bookCard.innerHTML = content;
        //bookCard.appendChild(card);
        libraryBody.appendChild(bookCard)
        console.log(book.title, book.author, book.pages, book.read)
    })
}

deleteButton.addEventListener("click", clearBookCard);
//function to delete book card 

function clearBookCard() {
  console.log("you selected the delete button")
  
}