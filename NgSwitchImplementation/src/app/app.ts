import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgSwitch, NgSwitchCase, NgSwitchDefault, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('NgSwitchImplementation');
  Profession: any [] = [
  { "name": "Ankit", "Doj": "08-09-2022", "Salary": 23445, "Profession": "Developer" },
  { "name": "Rahul", "Doj": "12-03-2021", "Salary": 45000, "Profession": "Tester" },
  { "name": "Priya", "Doj": "25-07-2020", "Salary": 52000, "Profession": "Developer" },
  { "name": "Amit", "Doj": "14-01-2023", "Salary": 30000, "Profession": "Support Engineer" },
  { "name": "Neha", "Doj": "19-11-2019", "Salary": 60000, "Profession": "Manager" },
  { "name": "Karan", "Doj": "05-06-2022", "Salary": 28000, "Profession": "Developer" },
  { "name": "Sneha", "Doj": "30-09-2021", "Salary": 41000, "Profession": "HR" },
  { "name": "Vikas", "Doj": "17-02-2020", "Salary": 47000, "Profession": "DevOps Engineer" },
  { "name": "Pooja", "Doj": "22-08-2023", "Salary": 26000, "Profession": "Intern" },
  { "name": "Rohit", "Doj": "10-12-2018", "Salary": 70000, "Profession": "Team Lead" }
]
}
