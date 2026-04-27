import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { email } from '@angular/forms/signals';
import { RouterOutlet } from '@angular/router';
import { single } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule,ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('DropDown');
  // DropDown
  // protected selectedOption: string = '';

  // Search
    // search = signal('');
    // employee = signal([
    //   'Ankit',
    //   'ranjan',
    //   'Asad',
    //   'Rockey',
    //   'Amit',
    //   'Sam',
    //   'Deep',
    //   'Neha'
    // ])
    // filterEmp = computed(()=>this.employee().filter(e=>e.toLowerCase().includes(this.search().toLowerCase())));
    // updateSearch(event: any){
    //   this.search.set(event.target.value)
    // }

    // DropDown with Signal

    course = signal('');
    updateVal(event: any){
      this.course.set(event.target.value);
    }

    count = signal(0);
    onClickIncre(){
      this.count.update(x=>x+1);
    }
    onClickDecre(){
      this.count.update(x=>x-1);
    }
    computedCount = computed(()=> this.count() * 2);

    loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    })
    onSubmit(){
      alert(`Email: ${this.loginForm.value.email}, Password: ${this.loginForm.value.password}`);
    }
}
