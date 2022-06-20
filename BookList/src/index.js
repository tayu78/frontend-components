
class Book{
    constructor(title,author,isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI{
    static displayBookList() {
        const books = [
            {
                title: "Naruto",
                author: "Masashi Kishimoto",
                isbn: 1234
            },
            {
                title: "Space Brothors",
                author: "Chuya Koyama",
                isbn: 5678
            }
        ]
        UI.addBookList(books)
    }

    static addBookList(books) {
        const bookList = document.getElementById("bookList")
        books.forEach(book => {
            const row = document.createElement('tr');
            row.className = "border-y-2";
            row.innerHTML = `
            <td class="py-3">${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            `
            bookList.appendChild(row)
        })
    }

}


// class Storage{

// }

// // Event display book
document.addEventListener('DOMContentLoaded', UI.displayBookList())
// // Event add a book
document.getElementById("bookForm").addEventListener("submit", (e) => {
    e.preventDefault()
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const isbn = document.getElementById("isbn").value;
    const book = new Book(title, author, isbn);
    const books = [book]
    UI.addBookList(books);
})

// // event remove a book
