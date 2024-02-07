class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}`;
    }
}

const myBook = new Book("გაერთიანებული");
console.log(myBook.getDetails()); 
