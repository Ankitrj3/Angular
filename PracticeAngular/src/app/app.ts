import { NgFor, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './contact/contact';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule, NgFor, NgIf, NgSwitch, NgSwitchCase, RouterLink, Home,Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('PracticeAngular');
  onClick(){
    console.log("Button is clicked");
  }
  name: string ="";
  age: number =0;
  address: string= '';
  onSubmit(){
    console.log("submitted");
    console.log(this.name);
    console.log(this.age);
    console.log(this.address);
  }
  list = ['ankit','Tilak','Vishwajeet'];
  even = 10;
  ti = "sfkdgs";

  data = 'user';

  gopi = '';

  odd = 11;

  pankaj = 45;

  mari = 60;
}
