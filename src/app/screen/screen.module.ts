import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CoreModule } from '../core/core.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    CoreModule, // Import the CoreModule which contains shared components and services
    ReactiveFormsModule, // Import ReactiveFormsModule for working with forms
    MatIconModule, // Import MatIconModule for using material icons
    MatSlideToggleModule, // Import MatSlideToggleModule for slide toggle component
    MatDialogModule // Import MatDialogModule for dialogs
  ],
  exports: [
    HomeComponent // Export HomeComponent for use in other modules
  ]
})
export class ScreenModule { }