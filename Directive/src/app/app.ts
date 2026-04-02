import { NgFor, NgIf } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgFor, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Directive');
  

  names: string[] = ['Ankit', 'Ranjan', 'Angular', 'Typescript', 'Javascript', 'HTML', 'CSS', 'React', 'Vue', 'Svelte'];
  condition: boolean = true;

  onclick(){
    this.condition = !this.condition;
  }
  details: { name: string, profession: string, company: string, location: string }[] = [
    {
      name: 'Ankit Ranjan',
      profession: 'Software Engineer',
      company: 'Google',
      location: 'Mountain View, CA'
    },
    {
      name: 'Jane Doe',
      profession: 'Product Manager',
      company: 'Facebook',
      location: 'Menlo Park, CA'
    },
    {
      name: 'John Smith',
      profession: 'Data Scientist',
      company: 'Amazon',
      location: 'Seattle, WA'
    },
    {
      name: 'Emily Davis',
      profession: 'UX Designer',
      company: 'Apple',
      location: 'Cupertino, CA'
    }
  ]

}
