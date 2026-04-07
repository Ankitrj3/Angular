import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ReactiveForms');
  name = new FormControl(''); // binding the form control to the input field
  email = new FormControl(''); // binding the form control to the input field
  password = new FormControl(''); // binding the form control to the input field
  
  submit() {
    console.log('Name:', this.name.value);
    console.log('Email:', this.email.value);
    console.log('Password:', this.password.value);
  }
  AutoFill() {
    this.name.setValue('John Doe');
    this.email.setValue('john.doe@example.com');
    this.password.setValue('password123');
  }
}
