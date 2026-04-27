import { Component, OnInit, signal} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('LifeCycleHooks');
  ngOnInit(): void {
    console.log('ngOnInit called');
  }
  
}
