import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-binding',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './two-way-binding.html',
  styleUrl: './two-way-binding.css',
})
export class TwoWayBinding {
  name: string = '';
  stream1 = "DOTNET WITH C#";
  stream2 = "SPRINGBOOT WITH JAVA";
  studentForm = new FormGroup({
    name : new FormControl(''),
    regno : new FormControl(''),
    stream: new FormControl('')
  });
  onFormSubmit(){
    console.log(this.studentForm.value);
  }
  
  list:any [] = [
    'ankit','likhitha','ranjan','rockey','saurabh'
  ]
  value = 21;
}
