import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserAction } from '../user-action.enum';
import { BookData } from '../book-data.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';
import { Book } from '../book.interface';

@Component({
  selector: 'app-book-dialog',
  templateUrl: './book-dialog.component.html',
  styleUrls: ['./book-dialog.component.scss'],
})
export class BookDialogComponent {
  form!: FormGroup;
  userAction = UserAction;
  formSubmitTriggered:boolean = false;
  orginalBook!:String;

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<BookDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BookData,
  ) {}

  ngOnInit() {
    // Initialize the form with data from the dialog if available
    this.form = this.formBuilder.group({
      imageUrl: [this.data.book ? this.data.book.imageUrl : null, [Validators.required, Validators.pattern(/^(https?:\/\/)?[\w\-.]+\.\w+/)]],
      title: [this.data.book ? this.data.book.title : null, [Validators.required]],
      purchaseLink: [this.data.book ? this.data.book.purchaseLink : null, [Validators.required, Validators.pattern(/^(https?:\/\/)?[\w\-.]+\.\w+/)]],
      PublishDate: [this.data.book ? this.data.book.PublishDate : null, [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
    });
    if(this.data.book){
      alert();
      this.orginalBook = JSON.stringify(this.data.book);
    }
  }

  onFormSubmit(userAction: UserAction) {
    this.formSubmitTriggered = true;
    if (userAction === UserAction.Cancel) {
      // Close the dialog if the Cancel button is clicked
      this.dialogRef.close();
    } else if (this.form.valid) {
      // Compare value for change
      if(userAction === UserAction.Update){
        if(JSON.stringify(this.form.value)===this.orginalBook){
          this.displayToast('There is no difference with orginal value!');
          return;
        }
      }
      // Form is valid, proceed with submission and close the dialog
      this.dialogRef.close({ book: this.form.value, bookIndex: this.data.bookIndex, userAction: userAction });
    } else {
      // Form has validation errors, handle as needed
      this.displayToast('Form is invalid!');
    }
  }

  // Show message to user
  displayToast(message:string){
    this.snackBar.open(message, environment.toastButtonText, {
      duration: environment.toastTime
    });
  }
}