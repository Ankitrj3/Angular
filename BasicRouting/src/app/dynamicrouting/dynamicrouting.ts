import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dynamicrouting',
  imports: [],
  templateUrl: './dynamicrouting.html',
  styleUrl: './dynamicrouting.css',
})
export class Dynamicrouting {
  name = '';
  id = 0;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      const name = params.get('name');
      this.id = id ? parseInt(id, 10) : 0;
      this.name = name || `User ID: ${id}`;
    });
  }
}
