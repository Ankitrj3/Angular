import { Component } from '@angular/core';
import { Child } from './child/child';

@Component({
  selector: 'app-helloworld',
  imports: [Child],
  templateUrl: './helloworld.html',
  styleUrl: './helloworld.css',
})
export class Helloworld {
  message: string = "Hello from parent";
}
