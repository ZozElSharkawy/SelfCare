# AGENT.md - Self Care Web Application

## Build/Test Commands
- **Testing**: No automated tests - manual testing by opening HTML files in browser
- **Linting**: No build tools configured - static HTML/CSS/JS project
- **Development**: Open `index.html` in browser or use Live Server extension
- **Files**: Use browser dev tools for debugging JavaScript

## Architecture
- **Type**: Static web application with client-side JavaScript
- **Structure**: Multi-page SPA with navigation between HTML files
- **Storage**: sessionStorage for mood history persistence
- **Pages**: index.html (main), mood_history.html, breathing.html, resources.html
- **Assets**: Separate CSS/JS files per page + shared style.css

## Code Style Guidelines
- **HTML**: Semantic markup, kebab-case classes, proper indentation
- **CSS**: CSS custom properties (--variables), mobile-first design, BEM-like naming
- **JavaScript**: ES6+ features, camelCase variables, DOM manipulation
- **Files**: Descriptive filenames, separate concerns (HTML/CSS/JS files)
- **Comments**: Minimal commenting, self-documenting code preferred
- **Quotes**: Double quotes for HTML attributes, no strict JS quote preference
- **Indentation**: 2-4 spaces consistently across files
