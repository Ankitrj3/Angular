import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ReactiveFormRevision');

  val:string[]= ['ankit','ranjan','robin','likhitha','sri','sumit','sahin'];
  search: string = '';
  filterData: string[] = [];
  onFilterData(){
      //  this.val.filter(item => item.toLowerCase().includes(this.search));
      this.filterData = this.val.filter(item =>
            item.toLowerCase().includes(this.search.toLowerCase())
  );
  }
  UniversityForm = new FormGroup({
    name : new FormControl(' '),
    age: new FormControl(' '),
    Reg: new FormControl(' '),
  });
  onSubmit(){
    console.log(this.UniversityForm.value);
  }
}
