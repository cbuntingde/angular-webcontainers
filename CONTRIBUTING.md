# Contributing to Angular WebContainers Demo

Thank you for your interest in contributing to the Angular WebContainers Demo! This guide will help you get started with contributing to this project.

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm
- Basic knowledge of Angular and TypeScript
- Familiarity with WebContainers technology (helpful but not required)
- Git and GitHub account

### Setup

1. **Fork the Repository**
   ```bash
   # Fork the repository on GitHub, then clone your fork
   git clone https://github.com/your-username/angular-webcontainers.git
   cd angular-webcontainers
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm start
   ```

4. **Verify Setup**
   - Open `http://localhost:3000` in your browser
   - Ensure all interactive components work correctly

## 📋 How to Contribute

### 🐛 Reporting Bugs

1. **Check Existing Issues** - Search for existing bug reports
2. **Create New Issue** - Use the bug report template
3. **Provide Details**:
   - Clear description of the issue
   - Steps to reproduce
   - Expected vs actual behavior
   - Browser and OS information
   - Screenshots if applicable

### 💡 Suggesting Features

1. **Check Existing Issues** - Look for similar feature requests
2. **Create New Issue** - Use the feature request template
3. **Provide Details**:
   - Clear description of the feature
   - Use case and benefits
   - Implementation suggestions (optional)
   - Mockups or examples (optional)

### 🔧 Code Contributions

1. **Choose an Issue** - Pick an issue from the "good first issue" or "help wanted" labels
2. **Create Branch** - Use descriptive branch names
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```
3. **Make Changes** - Follow the coding standards below
4. **Test Changes** - Ensure all tests pass and functionality works
5. **Submit PR** - Create a pull request with clear description

## 📝 Coding Standards

### **Angular Guidelines**

Follow the [Angular Style Guide](https://angular.io/guide/styleguide):

```typescript
// ✅ Good: Use proper naming conventions
export class UserProfileComponent implements OnInit {
  private userService: UserService;
  public user$: Observable<User>;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  ngOnInit(): void {
    this.user$ = this.userService.getCurrentUser();
  }
}

// ❌ Bad: Inconsistent naming and missing types
export class userprofile {
  userserv;
  user;

  constructor(s) {
    this.userserv = s;
  }
}
```

### **TypeScript Standards**

- Use strict TypeScript configuration
- Prefer interfaces over types for object shapes
- Use explicit return types for public methods
- Avoid `any` type - use `unknown` or proper typing

```typescript
// ✅ Good: Proper typing
interface CodeExample {
  title: string;
  language: string;
  code: string;
}

function executeCode(example: CodeExample): Promise<string> {
  // Implementation
}

// ❌ Bad: Using any
function executeCode(example: any): Promise<any> {
  // Implementation
}
```

### **CSS/SCSS Guidelines**

- Use BEM methodology for class names
- Prefer CSS custom properties for theming
- Mobile-first responsive design
- Use logical properties for layout

```css
/* ✅ Good: BEM methodology */
.live-preview__code-block {
  padding: 1rem;
  border: 1px solid var(--border-color);
}

.live-preview__code-block--highlighted {
  background-color: var(--highlight-bg);
}

/* ❌ Bad: Non-semantic classes */
.code-block {
  padding: 1rem;
  border: 1px solid #ccc;
}

.highlight {
  background-color: yellow;
}
```

### **Component Structure**

Follow this structure for Angular components:

```
component-name/
├── component-name.component.ts
├── component-name.component.html
├── component-name.component.css
└── component-name.component.spec.ts
```

### **File Organization**

- Group related files together
- Use index barrels for clean imports
- Keep components focused and single-purpose
- Separate concerns (presentation vs business logic)

## 🧪 Testing Guidelines

### **Unit Tests**

- Write tests for all public methods
- Test both happy path and error cases
- Use meaningful test descriptions
- Mock external dependencies

```typescript
describe('LivePreviewComponent', () => {
  let component: LivePreviewComponent;
  let fixture: ComponentFixture<LivePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LivePreviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LivePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should copy code to clipboard', async () => {
    const spy = spyOn(navigator.clipboard, 'writeText');
    component.examples = [{ code: 'test code' }];
    component.selectedExample = 0;

    await component.copyCode();

    expect(spy).toHaveBeenCalledWith('test code');
  });
});
```

### **Integration Tests**

- Test component interactions
- Verify data flow between components
- Test user workflows

### **E2E Tests**

- Test critical user journeys
- Verify cross-browser compatibility
- Test responsive behavior

## 🎨 UI/UX Guidelines

### **Design Principles**

- **Consistency**: Use established patterns and components
- **Accessibility**: Follow WCAG 2.1 AA guidelines
- **Performance**: Optimize for mobile and slow connections
- **Progressive Enhancement**: Ensure functionality without JavaScript

### **Responsive Design**

- Mobile-first approach
- Test on multiple screen sizes
- Use CSS Grid and Flexbox
- Optimize touch interactions

### **Accessibility**

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation
- Color contrast compliance
- Screen reader compatibility

## 📦 Commit Guidelines

### **Commit Message Format**

```
type(scope): description

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Build process or dependency changes

**Examples:**
```
feat(live-preview): add code execution functionality

- Implement run button with loading states
- Add output display with error handling
- Include copy-to-clipboard feature

Closes #123
```

```
fix(counter): prevent negative values

Add validation to ensure counter cannot go below zero
Fixes #45
```

## 🔄 Pull Request Process

### **Before Submitting**

1. **Test Thoroughly**
   ```bash
   npm run test
   npm run build
   npm run lint
   ```

2. **Update Documentation**
   - Update README if needed
   - Add comments to complex code
   - Update API documentation

3. **Check Requirements**
   - All tests pass
   - Code follows style guidelines
   - No console errors or warnings
   - Responsive design works

### **PR Template**

```markdown
## Description
Brief description of changes made.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] Manual testing completed
- [ ] Cross-browser testing

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No breaking changes (or documented)
```

### **Review Process**

1. **Automated Checks** - CI/CD pipeline runs tests
2. **Code Review** - Maintainer reviews code quality
3. **Testing** - Changes tested in different environments
4. **Approval** - PR approved and merged

## 🏷️ Issue Labels

- `good first issue` - Suitable for newcomers
- `help wanted` - Community contributions welcome
- `bug` - Bug reports and fixes
- `enhancement` - Feature improvements
- `documentation` - Documentation updates
- `priority: high` - Urgent issues
- `priority: medium` - Normal priority
- `priority: low` - Nice to have

## 🎯 Areas for Contribution

### **High Priority**
- [ ] Add more interactive component examples
- [ ] Improve WebContainers integration
- [ ] Enhance accessibility features
- [ ] Add comprehensive test coverage

### **Medium Priority**
- [ ] Internationalization support
- [ ] Dark mode theme
- [ ] Performance optimizations
- [ ] Additional code examples

### **Low Priority**
- [ ] Advanced WebContainers features
- [ ] Custom themes
- [ ] Analytics integration
- [ ] Social sharing features

## 🤝 Community Guidelines

### **Code of Conduct**

- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on constructive feedback
- Maintain professional communication

### **Getting Help**

- **Discussions**: Use GitHub Discussions for questions
- **Issues**: Use issues for bugs and feature requests
- **Documentation**: Check existing docs first
- **Community**: Join our community channels

## 📚 Resources

### **Learning Materials**
- [Angular Documentation](https://angular.io/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [WebContainers Guide](https://webcontainers.io/guides/)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

### **Tools**
- [Angular CLI](https://angular.io/cli)
- [StackBlitz](https://stackblitz.com/)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
- [VS Code](https://code.visualstudio.com/)

## 🙏 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes for significant contributions
- Special contributor badges in issues/PRs

---

Thank you for contributing to the Angular WebContainers Demo! Your contributions help make this project better for everyone. 🚀