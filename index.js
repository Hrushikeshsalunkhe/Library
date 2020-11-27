console.log("This is a index.js");

// prototypes

// 1 make a constructor  and book is a object 

function Book(name, author, type) {
    //2 write type
    this.name = name;
    this.author = author;
    this.type = type;

}

// 3 after  making the con then display the constructor in table 
function Display() {
    // this is display the book name in table


}


 //15 add methods to display prototype we have toadd the book name in table so make a uistring  give id to u r table body
 // `` this is a templete string
Display.prototype.add=function(book){
    console.log("Adding to UI");
    tableBody = document.getElementById('tableBody');
    let uistring = `
                    <tr>
                        <!-- <th scope="row">-</th> -->
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr> `
    tableBody.innerHTML += uistring;

}

//17 implement the clear fuction
Display.prototype.clear=function(){
    
let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

//18 implement the validate fuction
Display.prototype.validate=function(book){
 if(book.name.lenght<2 || book.author.lenght<2){
     return false
 }
 else{
     return true;
 }
    
}

//19 show the error prototype  make a div#id message before nav bar for show
Display.prototype.show=function(type,displayMessage){
    let message = document.getElementById('message');
    message.innerHTML= `
                        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                        <strong>Message:</strong>${displayMessage}
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                     </div>`; 

                     setTimeout(function () {
                        message.innerHTML = ''
                    }, 2000);
    
   
    }


// 4 add submit event listener to libraryForm

let libraryForm = document.getElementById('libraryForm');
//5 make a function libraryFormSubmit
libraryForm.addEventListener('submit', libraryFormSubmit);

//6 then make a functio of libraryFormSubmit 
function libraryFormSubmit(e) {
    console.log("You have submitted the library form");

    //9 what is name author type
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    // 11 check box 
    let type;


    // 10 grap all the types friction , programming, thrilor
    let friction = document.getElementById('friction');
    let programming = document.getElementById('programming');
    let thrilor = document.getElementById('thrilor');


    if (friction.checked) {
        type = friction.value;
    }
    else if (programming.checked) {
        type = programming.value;

    }

    else if (thrilor.checked) {
        type = thrilor.value;
    }

    //   8 when we sumbit add the book it should go in one object so call book
    let book = new Book(name, author, type);
    //12 
    console.log(book);

   //13 to display in chrome  table make display method
   let display=new Display();

//    16 make a validate for a form
       if(display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success',' Your book has successfully added ')
       }
       else{
           //show error to user
           display.show('danger','Sorry You cannot add this book    ');
       }


    //14 to clear screen when we add the name used clear the go to protype
 
    //7 the preventDefault is used bcoz when we run code the console.log statement is display for a second in chrome console so to hold
    //statement use the preventDefault so that it will not reload the page while click on add button
    e.preventDefault();
}





