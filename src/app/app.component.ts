import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  itemForm: FormGroup; // FormGroup for the item form
  items: any[] = []; // Array to store items

  constructor(private fb: FormBuilder) {
    // Initialize the form with form controls and validators
    this.itemForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  // Method to add a new item
  addItem() {
    if (this.itemForm.valid) {
      const newItem = this.itemForm.value; // Get form values
      this.items.push(newItem); // Add the new item to the list
      this.itemForm.reset(); // Reset the form
    }
  }
}
