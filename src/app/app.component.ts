import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  itemForm: FormGroup;
  items: { title: string; description: string; price: number }[] = [];
  totalPrice: number = 0; // Store the total price of added dishes

  constructor(private fb: FormBuilder) {
    this.itemForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(1)]]
    });
  }

  addItem() {
    if (this.itemForm.valid) {
      const newItem = this.itemForm.value;
      this.items.push(newItem);
      this.updateTotalPrice();
      this.itemForm.reset();
    }
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
    this.updateTotalPrice();
  }

  updateTotalPrice() {
    this.totalPrice = this.items.reduce((sum, item) => sum + item.price, 0);
  }
}


// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule],
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
// })
// export class AppComponent {
//   dishForm: FormGroup;
//   dishes: any[] = [];

//   constructor(private fb: FormBuilder) {
//     this.dishForm = this.fb.group({
//       name: ['', Validators.required],
//       description: ['', Validators.required],
//       price: ['', [Validators.required, Validators.min(1)]],
//     });
//   }

//   addDish() {
//     if (this.dishForm.valid) {
//       const newDish = this.dishForm.value;
//       this.dishes.push(newDish);
//       this.dishForm.reset();
//     }
//   }
// }
