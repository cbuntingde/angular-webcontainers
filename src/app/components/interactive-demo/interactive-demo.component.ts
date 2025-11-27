import { Component } from '@angular/core';

@Component({
  selector: 'app-interactive-demo',
  templateUrl: './interactive-demo.component.html',
  styleUrls: ['./interactive-demo.component.css']
})
export class InteractiveDemoComponent {
  userInput = '';
  todoItems: string[] = [];
  newItem = '';
  
  counter = 0;
  
  colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD'];
  selectedColor = this.colors[0];
  
  addItem() {
    if (this.newItem.trim()) {
      this.todoItems.push(this.newItem.trim());
      this.newItem = '';
    }
  }
  
  removeItem(index: number) {
    this.todoItems.splice(index, 1);
  }
  
  increment() {
    this.counter++;
  }
  
  decrement() {
    if (this.counter > 0) {
      this.counter--;
    }
  }
  
  reset() {
    this.counter = 0;
  }
  
  onColorChange(color: string) {
    this.selectedColor = color;
  }
}