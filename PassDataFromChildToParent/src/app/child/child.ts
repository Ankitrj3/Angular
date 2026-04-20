import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  @Output() sendData = new EventEmitter<string>();

  send(){
    this.sendData.emit("Hey Parent Class");
  }
}
