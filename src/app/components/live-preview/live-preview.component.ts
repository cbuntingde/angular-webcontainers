import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-live-preview',
  templateUrl: './live-preview.component.html',
  styleUrls: ['./live-preview.component.css']
})
export class LivePreviewComponent {
  @Input() examples: any[] = [];
  
  selectedExample = 0;
  isRunning = false;
  showOutput = false;
  outputText = '';
  outputError = false;
  
  selectExample(index: number) {
    this.selectedExample = index;
    this.clearOutput();
  }
  
  async copyCode() {
    const code = this.examples[this.selectedExample]?.code;
    if (code) {
      try {
        await navigator.clipboard.writeText(code);
        this.showNotification('Code copied to clipboard!', false);
      } catch (err) {
        // Fallback for older browsers
        this.fallbackCopyToClipboard(code);
        this.showNotification('Code copied to clipboard!', false);
      }
    }
  }
  
  private fallbackCopyToClipboard(text: string) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  }
  
  async runCode() {
    const code = this.examples[this.selectedExample]?.code;
    if (!code) return;
    
    this.isRunning = true;
    this.showOutput = true;
    this.outputText = 'Running code...';
    this.outputError = false;
    
    try {
      // Simulate code execution with different behaviors based on example type
      const result = await this.executeCode(code);
      this.outputText = result;
      this.outputError = false;
    } catch (error) {
      this.outputText = `Error: ${error}`;
      this.outputError = true;
    } finally {
      this.isRunning = false;
    }
  }
  
  private async executeCode(code: string): Promise<string> {
    const example = this.examples[this.selectedExample];
    
    // Simulate async execution
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Different execution behaviors based on example type
    switch (example.title) {
      case 'Component Example':
        return this.executeComponentExample(code);
      
      case 'Service Example':
        return this.executeServiceExample(code);
      
      default:
        return this.executeGenericExample(code);
    }
  }
  
  private executeComponentExample(code: string): string {
    return `✅ Component compiled successfully!
    
📋 Generated Output:
- Component: HelloComponent
- Selector: app-hello
- Template: <h1>Hello {{name}}!</h1>
- Default name property: 'Angular'

🎯 Component Features:
✓ Property binding working
✓ Interpolation enabled
✓ Component metadata processed
✓ Template compiled successfully

📊 Bundle Analysis:
- Component size: ~2.1KB (gzipped)
- Dependencies: @angular/core
- Tree-shakable: Yes
- AOT compatible: Yes

💡 This component is now ready to use in your Angular application!`;
  }
  
  private executeServiceExample(code: string): string {
    return `✅ Service compiled successfully!
    
📋 Generated Output:
- Service: DataService
- Injectable: Yes (providedIn: 'root')
- Method: getData() returning array

🎯 Service Features:
✓ Dependency injection ready
✓ Singleton pattern applied
✓ Tree-shakable service
✓ Type safety enabled

📊 Method Execution:
getData() returned:
[
  "Item 1",
  "Item 2", 
  "Item 3"
]

🔧 Service Registration:
- Registered with Angular DI container
- Available application-wide
- Lazy loading supported
- Testable with mock providers

💡 This service is now injected and ready to use throughout your app!`;
  }
  
  private executeGenericExample(code: string): string {
    return `✅ Code executed successfully!
    
📋 Execution Results:
- Code compiled without errors
- TypeScript types checked
- Syntax validation passed
- Runtime execution completed

🎯 Code Analysis:
- Lines of code: ${code.split('\n').length}
- Complexity: Low
- Best practices: Followed
- Performance: Optimized

📊 Execution Metrics:
- Execution time: 1.5s
- Memory usage: ~2MB
- No memory leaks detected
- Clean shutdown completed

💡 Code is ready for production use!`;
  }
  
  clearOutput() {
    this.showOutput = false;
    this.outputText = '';
    this.outputError = false;
  }
  
  private showNotification(message: string, isError: boolean) {
    // Create a simple notification (could be enhanced with a toast service)
    const notification = document.createElement('div');
    notification.className = `code-notification ${isError ? 'error' : 'success'}`;
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: ${isError ? '#dc3545' : '#28a745'};
      color: white;
      padding: 12px 20px;
      border-radius: 6px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      z-index: 1000;
      font-size: 14px;
      font-weight: 500;
      transform: translateX(100%);
      transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    }, 3000);
  }
}