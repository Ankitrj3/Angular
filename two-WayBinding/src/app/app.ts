import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('two-WayBinding');
  val: any = "";
  displayName: any = "";
  onEnterDisplay(){
    this.displayName = this.val;
  }
  task = "";
  taskList: {id:number, name:string}[] = [];
  addTask(){
    this.taskList.push({id: this.taskList.length + 1, name: this.task});
    this.task = " ";
    console.log(this.taskList);
  }
  DeleteTask(id: number){
    this.taskList = this.taskList.filter(task => task.id !== id);
  }
}
