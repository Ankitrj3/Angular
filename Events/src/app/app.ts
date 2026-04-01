import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Events');
  val: string = ""
  displayName: string = ""
  email: string = ""
  
  onInput(event : Event){
     this.val = (event.target as HTMLInputElement).value;
  }
  onEnterDisplay(){
    this.displayName = this.val;
  }
  setName(){
    this.val = 'ankit ranjan';
  }
  getEmail(val: string){
    this.email = val
  }
  setEmail(){
    this.email = "Default@test.com"
  }
}
