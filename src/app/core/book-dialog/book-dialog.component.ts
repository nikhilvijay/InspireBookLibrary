import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserAction } from '../user-action.enum';

@Component({
  selector: 'app-book-dialog',
  templateUrl: './book-dialog.component.html',
  styleUrls: ['./book-dialog.component.scss'],
})
export class BookDialogComponent {
  form!: FormGroup;
  userAction = UserAction;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<BookDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit() {
    // Initialize the form with data from the dialog if available
    this.form = this.formBuilder.group({
      imageUrl: [this.data.book ? this.data.book.imageUrl : null, [Validators.required, Validators.pattern(/^(https?:\/\/)?[\w\-.]+\.\w+/)]],
      title: [this.data.book ? this.data.book.title : null, [Validators.required]],
      purchaseLink: [this.data.book ? this.data.book.purchaseLink : null, [Validators.required, Validators.pattern(/^(https?:\/\/)?[\w\-.]+\.\w+/)]],
      PublishDate: [this.data.book ? this.data.book.PublishDate : null, [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
    });
  }

  onFormSubmit(userAction: UserAction) {
    if (userAction === UserAction.Cancel) {
      // Close the dialog if the Cancel button is clicked
      this.dialogRef.close();
    } else if (this.form.valid) {
      // Form is valid, proceed with submission and close the dialog
      this.dialogRef.close({ book: this.form.value, bookIndex: this.data.bookIndex, userAction: userAction });
    } else {
      // Form has validation errors, handle as needed
      console.log('Form is invalid');
    }
  }
}