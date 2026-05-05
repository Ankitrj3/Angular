import { Component } from '@angular/core';
import { FormControl,FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Child } from './child/child';

@Component({
  selector: 'app-dash-board',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, Child],
  templateUrl: './dash-board.html',
  styleUrl: './dash-board.css',
})
export class DashBoard {
  Value = "This is the message from parent component"
  SelectedModel = '';

  StudentForm = new FormGroup({
    name : new FormControl(''),
    section: new FormControl(''),
    rollno: new FormControl('')
  })

  onSubmit(){
    console.log(this.StudentForm.value);
  }
}
