// Import the 'BookCatalogue' interface from the 'book-catalogue.interface.ts'.
import { BookCatalogue } from "./book-catalogue.interface";
import { Status } from "./book-library.const";

// Define the 'BookLibraryInterface' interface.
// This interface represents a data structure that includes a 'BookCatalogue' object
// and a 'status' string to describe the status of server response.
export interface BookLibrary {
    data: BookCatalogue; // Contains information about books and the author.
    status: String;      // Represents the status of the api response (e.g., 'success', 'error').
}