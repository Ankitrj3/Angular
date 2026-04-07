import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-grouping-form',
  imports: [ReactiveFormsModule],
  templateUrl: './grouping-form.html',
  styleUrl: './grouping-form.css',
})
export class GroupingForm {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    street: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zip: new FormControl('')

  });

  onSubmit() {
    console.log(this.profileForm.value);
  }
}
