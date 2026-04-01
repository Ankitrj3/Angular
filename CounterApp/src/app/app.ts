import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('CounterApp');
  count: number = 0;

  onClickIncrement() {
    this.count = this.count + 1;
  }

  onClickDecrement() {
    this.count = this.count - 1;
  }

  onClickReset() {
    this.count = 0;
  }
  
  onClickEvent(val:string){
    if(val === 'decrement' && this.count === 0){
      return;
    }
    if(val === 'increment'){
      this.onClickIncrement();
    } else if(val === 'decrement'){
      this.onClickDecrement();
    } else if(val === 'reset'){
      this.onClickReset();
    }
  }
}
