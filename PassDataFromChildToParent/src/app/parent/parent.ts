import { Component, signal } from '@angular/core';
import { Child } from '../child/child';

@Component({
  selector: 'app-parent',
  imports: [Child],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
    receivedData = signal<string>('');

    receive(data: string){
        this.receivedData.set(data);
    }
}
