import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookThumbnailComponent } from './book-thumbnail/book-thumbnail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { BookDialogComponent } from './book-dialog/book-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMomentDateModule } from '@angular/material-moment-adapter';


@NgModule({
  declarations: [
    BookThumbnailComponent,
    HeaderComponent,
    FooterComponent,
    AuthorDetailsComponent,
    BookDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatIconModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatIconModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    MatMomentDateModule,
  ],
  exports:[
    BookThumbnailComponent,
    HeaderComponent,
    FooterComponent,
    AuthorDetailsComponent
  ]
})
export class CoreModule { }
