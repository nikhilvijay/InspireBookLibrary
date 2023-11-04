import { Component, Input } from '@angular/core';
import { BookCatalogue } from '../book-catalogue.interface';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.scss']
})
export class AuthorDetailsComponent {
  @Input() writter!: BookCatalogue; // Input property to receive author details

  constructor() {}
}