import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookThumbnailComponent } from './book-thumbnail/book-thumbnail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { BookDialogComponent } from './book-dialog/book-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    BookThumbnailComponent,
    HeaderComponent,
    FooterComponent,
    AuthorDetailsComponent,
    BookDialogComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule, // Import ReactiveFormsModule for working with forms
    MatIconModule, // Import MatIconModule for using material icons
    MatSlideToggleModule, // Import MatSlideToggleModule for slide toggle component
    MatDialogModule, // Import MatDialogModule for dialogs
    BrowserAnimationsModule, // Import BrowserAnimationsModule for animations (required by some material components)
    MatCardModule, // Import MatCardModule for toast
    MatButtonModule, // Import MatCardModule for toast
    MatSnackBarModule, // Import MatCardModule for toast
  ],
  exports: [
    BookThumbnailComponent,
    HeaderComponent,
    FooterComponent,
    AuthorDetailsComponent,
  ]
})
export class CoreModule { }