import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular WebContainers Demo';
  
  features = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Experience instant loading and hot module replacement with WebContainers'
    },
    {
      icon: '🔧',
      title: 'Full Development Environment',
      description: 'Complete Node.js runtime and package manager in your browser'
    },
    {
      icon: '🚀',
      title: 'Zero Configuration',
      description: 'Start coding immediately without any setup or installation'
    },
    {
      icon: '🔄',
      title: 'Live Preview',
      description: 'See your changes instantly as you type with live reloading'
    }
  ];

  codeExamples = [
    {
      title: 'Component Example',
      language: 'typescript',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: '<h1>Hello {{name}}!</h1>'
})
export class HelloComponent {
  name = 'Angular';
}`
    },
    {
      title: 'Service Example',
      language: 'typescript',
      code: `import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getData() {
    return ['Item 1', 'Item 2', 'Item 3'];
  }
}`
    }
  ];
}