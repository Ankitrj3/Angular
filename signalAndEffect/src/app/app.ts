import { Component, effect, signal , computed} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('signalAndEffect');
  x = signal(0);

  onClickIncre(){
    this.x.update(x=>x+1);
  }

  a = signal(23);
  b = signal(34);
  z = computed(()=> this.a()+this.b());// whenever a or b changes, z will be recalculated but z can not be updated directly as it is a computed signal

  constructor(){
    effect(()=>{;
      console.log('this is x value '+this.x());
      console.log('this is z value '+this.z());
    })
  }
}
