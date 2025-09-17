# Contributing to We Park

Thank you for your interest in contributing to We Park! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### 1. Fork the Repository
- Fork the We Park repository to your GitHub account
- Clone your fork locally: `git clone <your-fork-url>`

### 2. Set Up Development Environment
```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local
# Edit .env.local with your values

# Run development server
npm run dev
```

### 3. Create a Feature Branch
```bash
# Create and switch to a new branch
git checkout -b feature/your-feature-name

# Or for bug fixes
git checkout -b fix/issue-description
```

## 📝 Commit Guidelines

### Commit Message Format
Use conventional commits format:
```
type(scope): description

[optional body]

[optional footer]
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only changes
- `style`: Changes that don't affect code meaning (white-space, formatting, etc)
- `refactor`: Code change that neither fixes a bug nor adds a feature
- `perf`: Performance improvements
- `test`: Adding missing tests
- `chore`: Changes to build process or auxiliary tools

### Examples
```bash
feat(auth): add Google OAuth integration
fix(dashboard): resolve loading state hydration issue
docs(readme): update installation instructions
style(navbar): improve responsive spacing
```

## 🎨 Code Style

### TypeScript
- Use TypeScript for all new files
- Avoid `any` type, use proper typing
- Use interfaces for object shapes
- Use enums for constants

### React Components
- Use functional components with hooks
- Follow naming conventions: PascalCase for components
- Use proper prop typing with TypeScript
- Implement proper error boundaries

### Styling
- Use Tailwind CSS classes
- Follow mobile-first responsive design
- Use consistent spacing and color variables
- Implement dark mode support where applicable

## 🧪 Testing

### Before Submitting
- Run linting: `npm run lint`
- Test build: `npm run build`
- Test in different browsers
- Test responsive design

### Writing Tests
- Add unit tests for utility functions
- Add integration tests for components
- Test edge cases and error states
- Maintain good test coverage

## 📋 Pull Request Process

### 1. Before Creating PR
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Tests pass locally
- [ ] Documentation updated if needed

### 2. PR Description
Include:
- **What**: Brief description of changes
- **Why**: Reason for the change
- **How**: How the change was implemented
- **Screenshots**: For UI changes
- **Breaking Changes**: If any

### 3. PR Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tests pass locally
- [ ] Manual testing completed
- [ ] Cross-browser testing

## Screenshots (if applicable)
Add screenshots here

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
```

## 🚀 Development Workflow

### 1. Feature Development
```bash
# Start from main branch
git checkout main
git pull origin main

# Create feature branch
git checkout -b feature/parking-map-integration

# Make changes and commit
git add .
git commit -m "feat(map): add interactive parking spot markers"

# Push to your fork
git push origin feature/parking-map-integration

# Create pull request on GitHub
```

### 2. Code Review
- Address feedback promptly
- Make requested changes in new commits
- Keep PR focused and small
- Respond to comments courteously

## 🐛 Bug Reports

### Before Reporting
- Check if issue already exists
- Try latest version
- Gather reproduction steps

### Issue Template
```markdown
**Describe the bug**
Clear description of the bug

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. See error

**Expected behavior**
What you expected to happen

**Screenshots**
If applicable, add screenshots

**Environment:**
- OS: [e.g. iOS]
- Browser: [e.g. chrome, safari]
- Version: [e.g. 22]
```

## 💡 Feature Requests

### Feature Request Template
```markdown
**Is your feature request related to a problem?**
Clear description of the problem

**Describe the solution you'd like**
Clear description of desired feature

**Describe alternatives considered**
Alternative solutions considered

**Additional context**
Any other context or screenshots
```

## 📞 Getting Help

- **Documentation**: Check README and setup guides
- **Issues**: Search existing issues first
- **Discussions**: Use GitHub Discussions for questions
- **Discord**: Join our community Discord (if available)

## 🏆 Recognition

Contributors will be:
- Listed in CONTRIBUTORS.md
- Mentioned in release notes
- Given appropriate GitHub badges

Thank you for contributing to We Park! 🚗✨
