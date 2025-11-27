import { Component } from '@angular/core';

@Component({
  selector: 'app-feature-cards',
  templateUrl: './feature-cards.component.html',
  styleUrls: ['./feature-cards.component.css']
})
export class FeatureCardsComponent {
  webcontainerFeatures = [
    {
      title: 'Node.js Runtime',
      description: 'Full Node.js environment running in your browser',
      icon: '🟢',
      details: ['npm package management', 'File system access', 'Process management']
    },
    {
      title: 'Hot Module Replacement',
      description: 'Instant updates without page refresh',
      icon: '🔥',
      details: ['Live reloading', 'State preservation', 'Fast refresh']
    },
    {
      title: 'TypeScript Support',
      description: 'Full TypeScript compilation and type checking',
      icon: '📘',
      details: ['Type checking', 'IntelliSense', 'Error highlighting']
    },
    {
      title: 'Angular CLI',
      description: 'Complete Angular development toolchain',
      icon: '🅰️',
      details: ['Component generation', 'Building', 'Testing']
    }
  ];
}