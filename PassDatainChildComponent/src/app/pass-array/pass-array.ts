import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pass-array',
  imports: [NgFor],
  templateUrl: './pass-array.html',
  styleUrl: './pass-array.css',
})
export class PassArray {
  @Input() list:any[] = [];
}
