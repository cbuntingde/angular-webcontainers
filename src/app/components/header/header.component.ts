import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  currentTime = new Date();
  
  constructor() {
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }
}