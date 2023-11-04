import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookThumbnailComponent } from './book-thumbnail/book-thumbnail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    BookThumbnailComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
