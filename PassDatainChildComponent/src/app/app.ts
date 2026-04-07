import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child-component/child-component';
import { PassArray } from './pass-array/pass-array';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChildComponent, PassArray],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('PassDatainChildComponent');
  name: string = 'ankit ranjan';
  age: number = 24;

  list: string[] = ['ankit', 'ranjan', 'robin', 'singh', 'kumar', 'Likhitha', 'sri'];
}
