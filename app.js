

//Constructor for Book objects 
//should contain: title, author, pages, read/not read status
// put a function into the constructor that can report the book:
//theHobbit.info() "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"

const bookObj = {
    title: 'Harry Potter and the Sorcerers Stone',
    author: 'J.K. Rowling',
    pages: 300,
    readStatus: true
};



function Book(title, author, pages, readStatus){
    this.title = title; 
    this.author = author;
    this.pages = pages; 
    this.readStatus = read;

    function statement(){
        console.log("the" + Book.title + "by" + Book.author + Book.pages + Book.ReadStatus) 

    }
}

let myLibraryArr = []

const BookButton = document.querySelector("#bookBtn"); 
const bookCard = document.createElement('div')

const userForm = document.createElement('form')
userForm.setAttribute('id', "myForm")

//append title field in form 
const formTitleLabel = document.createElement('label')
formTitleLabel.innerHTML = 'Book Title';
userForm.appendChild(formTitleLabel)
const userFormTitle = document.createElement('input')
userFormTitle.setAttribute('type', 'text');


//append author field in form 
const userFormAuthor = document.createElement('input')
userFormAuthor.setAttribute('type', 'text');
const formAuthLabel = document.createElement('label')
formAuthLabel.innerHTML = 'Author';


//
const formPagesLabel = document.createElement('label')
formPagesLabel.innerHTML = 'Pages';

const userFormPages = document.createElement('input')
userFormPages.setAttribute('type', 'text');
//
const userFormReadStatus = document.createElement('input')

BookButton.addEventListener( "click", addBookToLibrary)
function addBookToLibrary(){
/*bring up form to ask for user input details for new book*/
//event listener triggers form display with inputs for title, author, pages and checkbox for read
//once the user hits submit, append the information to 
bookCard.innerHTML = bookObj.title 
document.body.appendChild(bookCard)
document.body.appendChild(userForm)
userForm.appendChild(userFormTitle); 
userForm.appendChild(formAuthLabel)
userForm.appendChild(userFormAuthor); 
userForm.appendChild(formPagesLabel)
userForm.appendChild(userFormPages); 
console.log(bookObj.title)

}

/* other requirements */
//Add button to each book to remove book from library
//Associate dom elements with actual book objects, give them data-attribute, corresponds to index of library array

//toggle books read instance on book prototype instance