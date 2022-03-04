

//Constructor for Book objects 
//should contain: title, author, pages, read/not read status
// put a function into the constructor that can report the book:

//Global variables 

let myLibrary = []


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

const formReadBox = document.createElement('label')
const formReadStatus = document.createElement('input')


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




//event listener triggers form display with inputs for title, author, pages and checkbox for read
BookButton.addEventListener( "click", createInputForm)
submitButton.addEventListener("click", addBookToLibrary )

function addBookToLibrary(e){
//once the user hits submit, append the information to card
console.log('this function is running')

    e.preventDefault();

    const bookObj = {
      title: formTitleField.value,
      author: formAuthField.value,
      pages: formPagesField.value,
    };

    myLibrary.push(bookObj)
    
    console.log(myLibrary)
    userForm.reset();
    makeBookCard();

}

function makeBookCard(){
    document.body.appendChild(bookCard)
    bookCard.textContent = JSON.stringify(myLibrary);

    formReadStatus.innerHTML = "Read";
    formReadBox.setAttribute("type", "checkbox");
    document.body.appendChild(formReadStatus);
    document.body.appendChild(formReadBox)
    //myLibrary.title + " " + myLibrary.author + " " + myLibrary.pages
    //write logic in here to loop through my library array and display each object on it's own card 
    //for (i=0, i<myLibraryArr.lenght, i++){ bookCardinnerhtml = myLibraryArr[i]}
  
}



