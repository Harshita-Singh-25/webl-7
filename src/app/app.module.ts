import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReactiveFormsModule ,CommonModule], // Add ReactiveFormsModule here
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
