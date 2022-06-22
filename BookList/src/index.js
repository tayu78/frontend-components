
class Book{
    constructor(title,author,isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI{
    static displayBookList(key) {
        console.log("type: ",typeof key);

        if (localStorage.getItem(key)) {
            UI.addBookList(JSON.parse(localStorage.getItem(key)))
        }
    }

    static addBookList(books) {
        const bookList = document.getElementById("bookList")
        books.forEach(book => {
            const row = document.createElement('tr');
            row.className = "border-y-2";
            row.innerHTML = `
            <td class="py-3">${book.title}</td>
            <td >${book.author}</td>
            <td>${book.isbn}</td>
            <td><button class="delete-btn">delete</button><td>
            `
            // <td class="w-32">delete<td>

            bookList.appendChild(row);
        })
    }

    static removeInput() {
        const ids = ["title","author","isbn"]
        ids.forEach((id) => {
            document.getElementById(id).value = ""
        })
        
    }

    static showAlert(message,caseOfAlert) {
        const div = document.createElement("div");
        div.className = `alert-${caseOfAlert}`
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector(".container")
        const form = document.getElementById("bookForm")
        container.insertBefore(div, form)
        setTimeout(()=>container.removeChild(div),3000)
    }

}


class Storage{
    static getDataFromLocalStorage(key) {
        return localStorage.getItem(key)? JSON.parse(localStorage.getItem(key)) : []
    }
    static addToLocalStorage(books) {
        const booksInStorage = Storage.getDataFromLocalStorage("books");
        const newBooks = [...booksInStorage,...books]
        localStorage.setItem("books", JSON.stringify(newBooks));
        console.log(localStorage)
        
    }

    
    static removeFromLocalStorage() {
        
    }
}

// // Event display book
document.addEventListener('DOMContentLoaded', UI.displayBookList("books"))

// // Event add a book
document.getElementById("bookForm").addEventListener("submit", (e) => {
    e.preventDefault()
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const isbn = document.getElementById("isbn").value;
    if (title && author && isbn) {
        const book = new Book(title, author, isbn);
        const books = [book]
        UI.addBookList(books)
        Storage.addToLocalStorage(books);
        UI.removeInput()
        UI.showAlert("successfully added!","success")
    } else { 
        UI.showAlert("plese fill in  all input field", "danger")
    }
})

// // event remove a book
