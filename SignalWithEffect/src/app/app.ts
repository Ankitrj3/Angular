import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('SignalWithEffect');
  count = signal(0);
  constructor(){
    effect(()=>{
      console.log(`Count value: ${this.count()}`);
    })
  }
  onClickIncre(){
    this.count.update(x=>x+1);
  }
  onClickDecre(){
    if(this.count() > 0){
      this.count.update(x=>x-1);
    }
  }
}
