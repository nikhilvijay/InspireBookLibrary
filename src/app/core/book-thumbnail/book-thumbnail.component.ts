import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../book.interface';

@Component({
  selector: 'app-book-thumbnail',
  templateUrl: './book-thumbnail.component.html',
  styleUrls: ['./book-thumbnail.component.scss']
})
export class BookThumbnailComponent {
  @Input() book!: Book; // Input property to receive book data
  @Output() edit = new EventEmitter<any>(); // Output event to trigger book edit

  constructor() { }

  // Function to trigger the edit event when the edit button is clicked
  editBook() {
    this.edit.emit();
  }
}
