

//Constructor for Book objects 
//should contain: title, author, pages, read/not read status
// put a function into the constructor that can report the book:
//theHobbit.info() "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"

const bookObj = {
    title: 'Harry Potter and the Sorceres Stone',
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

BookButton.addEventListener( "click", addBookToLibrary)
function addBookToLibrary(){
/*bring up form to ask for user input details for new book*/
//event listener triggers form display with inputs for title, author, pages and checkbox for read
//once the user hits submit, append the information to 
bookCard.innerHTML = bookObj.title 
document.body.appendChild(bookCard)
console.log(bookObj.title)

}

/* other requirements */
//Add button to each book to remove book from library
//Associate dom elements with actual book objects, give them data-attribute, corresponds to index of library array

//toggle books read instance on book prototype instance