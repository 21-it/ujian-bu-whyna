/**
 * A school library wants to create a digital system for managing books.
 *
 * Each book has:
 * - ISBN
 * - Title
 * - Author
 * - Total pages
 * - Borrowing status
 *
 * The library wants to prevent users from directly changing the borrowing status.
 * Instead, the status can only change through:
 * - borrow()
 * - returnBook()
 *
 * Business Rules
 * - A book can only be borrowed when: status = available
 * - When a book is borrowed: available → borrowed
 * - A borrowed book cannot be borrowed again.
 * - When the book is returned: borrowed → available
 * - An available book cannot be returned.
 *
 * Tasks:
 * - create class Book that minimum has property and method below:
 *   - private status: string;
 *   - borrow()
 *   - returnBook()
 *   - showInfo()
 *   - isAvailable()
 * - implement class with at least 2 objects
 */

class Pustel {
  public isbn: string;
  public title: string;
  public author: string;
  public totalPages: number;
  private status: string;

  constructor(
    isbn: string,
    title: string,
    author: string,
    totalPages: number,
    status: string,
  ) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.totalPages = totalPages;
    this.status = status;
  }

  public borrow(): void {
    if (this.status === "available") {
      this.status = "borrowed";
      console.log(`"${this.title}" berhasil dipinjam.`);
    } else {
      console.log(
        `"${this.title}" tidak bisa dipinjam karena sedang dipinjam.`,
      );
    }
  }

  public returnBook(): void {
    if (this.status === "borrowed") {
      this.status = "available";
      console.log(`"${this.title}" berhasil dikembalikan.`);
    } else {
      console.log(
        `"${this.title}" tidak bisa dikembalikan karena masih tersedia.`,
      );
    }
  }

  public isAvailable(): boolean {
    return this.status === "available";
  }

  public showInfo(): void {
    console.log("===== Book Information =====");
    console.log(`ISBN: ${this.isbn}`);
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`Total Pages: ${this.totalPages}`);
    console.log(`Status: ${this.status}`);
  }
}

const books: Pustel[] = [
  new Pustel("ISBN001", "Clean Code", "Robert C. Martin", 464, "available"),

  new Pustel(
    "ISBN002",
    "The Pragmatic Programmer",
    "Andrew Hunt",
    352,
    "available",
  ),
];

for (const book of books) {
  book.showInfo();
}

books[0].borrow();
books[0].borrow();
console.log(`Is "${books[0].title}" available?: ${books[0].isAvailable()}`);
books[0].returnBook();
books[0].returnBook();
books[0].showInfo();
