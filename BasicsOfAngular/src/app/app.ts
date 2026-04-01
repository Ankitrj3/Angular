import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { customcomponent } from './customcomponent/customcomponent';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, Signup, customcomponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('BasicsOfAngular');
  name = 'ankit';
  stream = 'CSE';
  x = 10;
  y = 90;
  z = 100;
}
