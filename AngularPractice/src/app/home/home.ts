import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  count = signal(0);
  onClickIncre(){
      this.count.update(e => e+1);
  }
  onClickDecre(){
    this.count.update(e => e-1);
  }
}
