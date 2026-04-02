import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  userName = '';

  constructor(private route: ActivatedRoute) {}
// way 1: Using query parameters
  // ngOnInit() {
  //   this.userName = this.route.snapshot.paramMap.get('name') || 'Guest';
  // }
  // way 2: Using route parameters
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.userName = params['name'] || 'Guest';
    });
  }
}