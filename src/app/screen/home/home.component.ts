import { Component } from '@angular/core';
import { BookLibrary } from 'src/app/core/book-library.interface';
import { DataService } from 'src/app/data.service';
import { Status } from '../../core/book-library.const';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookDialogComponent } from 'src/app/core/book-dialog/book-dialog.component';
import { Book } from 'src/app/core/book.interface';
import { UserAction } from 'src/app/core/user-action.enum';
import { BookData } from 'src/app/core/book-data.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  bookLibrary!: BookLibrary;

  constructor(
    private dataService: DataService, private dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit() {
    // Fetch data from the API and populate the bookLibrary
    this.dataService.fetchData().subscribe((bookLibrary: BookLibrary) => {
      this.dataService.log("api response", bookLibrary);
      if (bookLibrary.status == Status.success) {
        this.bookLibrary = bookLibrary;
        this.toggleSort();
      }
    });
  }

  // Toggle sorting by title or PublishDate
  toggleSort() {
    this.sortByTitle = !this.sortByTitle;
    this.sortBook();
  }

  sortByTitle = true; // Default to sorting by title

  // Function to sort books based on the selected option
  sortBook() {
    if (this.sortByTitle) {
      this.bookLibrary.data.books = [...this.bookLibrary.data.books].sort((a, b) =>
        a.title.localeCompare(<string>b.title)
      );
    } else {
      this.bookLibrary.data.books = [...this.bookLibrary.data.books].sort(
        (a, b) => +a.PublishDate - +b.PublishDate
      );
    }
  }

  // Open the book dialog for adding or editing a book
  openBookDialog(bookIndex?: number) {
    let book!: Book;
    if (bookIndex !== undefined) {
      book = this.bookLibrary.data.books[bookIndex];
    }

    const dialogRef = this.dialog.open(BookDialogComponent, {
      width: '500px', // Set the dialog width as needed
      data: { book: book, bookIndex: bookIndex },
    });

    dialogRef.afterClosed().subscribe((bookData: BookData) => {
      if (bookData) {
        // Handle the form data received from the child component
        this.dataService.log("form response", bookData);
        switch (bookData.userAction) {
          case UserAction.Save:
            this.bookLibrary.data.books.push(bookData.book);
            this.displayToast("Book saved successfully");
            break;

          case UserAction.Update:
            this.bookLibrary.data.books[bookData.bookIndex] = bookData.book;
            this.displayToast("Book updated successfully");
            break;

          case UserAction.Delete:
            this.bookLibrary.data.books.splice(bookData.bookIndex, 1);
            this.displayToast("Book deleted successfully");
            break;
        }
        this.sortBook();
      }
    });
  }

  // Show message to user
  displayToast(message:string){
    this.snackBar.open(message, environment.toastButtonText, {
      duration: environment.toastTime
    });
  }
}
