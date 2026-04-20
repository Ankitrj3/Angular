import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Parent } from './parent/parent';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Parent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('PassDataFromChildToParent');
}
