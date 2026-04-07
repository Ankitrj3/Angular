import { NgIf } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { email } from '@angular/forms/signals';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ReactiveFormsModule, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ReactiveFormValidation');

  profileForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$")]),
    street: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    zip: new FormControl('', [Validators.required])
  });

  firstName = this.profileForm.get('firstName');
  lastName = this.profileForm.get('lastName');
  email = this.profileForm.get('email');
  street = this.profileForm.get('street');
  city = this.profileForm.get('city');
  state = this.profileForm.get('state');
  zip = this.profileForm.get('zip');

  onSubmit() {
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
