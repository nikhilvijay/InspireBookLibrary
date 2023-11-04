// Import the 'Book' interface from the 'book.interface.ts'.
import { Book } from "./book.interface";

// Define the 'BookCatalogue' interface.
// This interface represents information about an author and a list of their books.
export interface BookCatalogue {
    author: String;      // The name of the author.
    birthday: String;    // The author's date of birth.
    birthPlace: String;  // The place of birth of the author.
    books: Book[];       // An array of 'Book' objects representing the author's books.
}