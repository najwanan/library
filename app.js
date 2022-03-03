

//Constructor for Book objects 
//should contain: title, author, pages, read/not read status
// put a function into the constructor that can report the book:

//Global variables 

let myLibraryArr = []


const BookButton = document.querySelector("#bookBtn"); 
const bookCard = document.createElement('div')
const userForm = document.createElement('form')

userForm.setAttribute('id', "myForm");
bookCard.setAttribute('id', "bookCard")

const formTitleLabel = document.createElement('label')
const formTitleField = document.createElement('input')

const formAuthField = document.createElement('input')
const formAuthLabel = document.createElement('label')

const formPagesLabel = document.createElement('label')
const formPagesField = document.createElement('input')

const userFormReadStatus = document.createElement('input')
const submitButton = document.createElement('button')


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

    userForm.appendChild(formPagesLabel)
    userForm.appendChild(formPagesField); 

    //submit button 
    submitButton.setAttribute('class', 'subBtn')
    submitButton.innerText = "submit"
    userForm.appendChild(submitButton)

}


const bookObj = {
    key: 01, 
    title: 'Harry Potter and the Sorcerers Stone',
    author: 'J.K. Rowling',
    pages: 300,
    readStatus: true
};


//event listener triggers form display with inputs for title, author, pages and checkbox for read
BookButton.addEventListener( "click", createInputForm)
submitButton.addEventListener("click", addBookToLibrary )

function addBookToLibrary(){
//once the user hits submit, append the information to card
console.log('this function is running')


myLibraryArr.push({
    title: formTitleField.value,
    author: formAuthField.value,
    pages: formPagesField.value
})

}

function makeBookCard(){
    document.body.appendChild(bookCard)
    bookCard.innerHTML = bookObj.title + " " + bookObj.author + " " + bookObj.pages
    //write logic in here to loop through my library array and display each object on it's own card 
    //for (i=0, i<myLibraryArr.lenght, i++){ bookCardinnerhtml = myLibraryArr[i]}
  

}

makeBookCard();

