# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Repository Overview

This is a React learning repository containing multiple independent projects and exercises organized as separate subdirectories. Each project demonstrates different React concepts and uses different tooling (Create React App vs Vite).

## Project Structure

The repository contains three main project families:

### 1. Material-ui/
Material UI tutorial project using Create React App and React Router v5.
- **Tech Stack**: React 17, Material UI, React Router DOM 5, Create React App
- **Entry Point**: `src/App.js`
- **Pages**: `src/pages/Notes.js`, `src/pages/Create.js`

### 2. pro-academy/
React fundamentals practice project with Bootstrap styling.
- **Tech Stack**: React 18, Bootstrap 5, Create React App
- **Entry Point**: `src/app.js`
- **Components**: Component-based structure in `src/Components/`
- **Key Concepts**: State management, useReducer demos, refs, portals

### 3. react-smilda/
Collection of progressive React tutorials and projects using Vite.

#### Key Subdirectories:
- **03-advanced-react/**: Comprehensive React hooks and patterns tutorial
  - Organized by topic: useState, useEffect, forms, useRef, custom hooks, Context API, useReducer, performance
  - Each topic has `starter/` and `final/` folders for learning progression
- **04-fundamental-projects/**: Practice projects
- **05-axios-tutorial/**: HTTP requests with Axios
- **my-react-app/**: Latest React 19 + Vite setup with ESLint
- **backroads-app/**: Project example
- Various other projects (06-react-query, 07-unsplash-images, etc.)

## Common Commands

### Create React App Projects (Material-ui, pro-academy)
```powershell
# Install dependencies
npm install

# Start development server (runs on http://localhost:3000)
npm start

# Run tests in watch mode
npm test

# Build for production
npm run build
```

### Vite Projects (react-smilda subdirectories)
```powershell
# Install dependencies
npm install

# Start development server (typically runs on http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint (where configured, e.g., my-react-app)
npm run lint
```

### Working with Specific Projects
Navigate to the project directory first:
```powershell
cd Material-ui
npm start

cd react-smilda\my-react-app
npm run dev

cd pro-academy
npm start
```

## Architecture Notes

### Material-ui Project
- Uses React Router v5 with component-based routing (not declarative routes)
- Page components are in `src/pages/`
- Simple two-page application structure (Notes and Create)

### pro-academy Project
- Demonstrates various React patterns including:
  - Product list management with filtering
  - useReducer for complex state management
  - React Portals and Modals
  - Refs and form handling
- Components organized by feature in `src/Components/`
- Most recent app.js imports `Demo.js` from reducerDemo showing useEffect patterns

### react-smilda/03-advanced-react
Tutorial-driven learning structure:
- Work in `starter/` folders for exercises
- Reference `final/` folders for solutions
- Import components in `src/App.jsx` to switch between topics
- Covers complete React hooks ecosystem from basics to performance optimization
- Each numbered folder (01-useState, 02-useEffect, etc.) represents a learning module

### react-smilda/my-react-app (Modern Setup)
- React 19 with latest Vite 7
- ESLint configured with flat config format (`eslint.config.js`)
- Uses `@vitejs/plugin-react` for Fast Refresh
- Entry point: `src/main.jsx`

## Development Workflow

### Working with Tutorial Projects (03-advanced-react)
1. Navigate to the specific tutorial folder
2. Open `src/App.jsx`
3. Import desired component from `starter/` or `final/` folders:
   ```js
   import Starter from './tutorial/01-useState/starter/01-error-example.jsx';
   ```
4. Replace component in App return statement

### Testing React Code
- CRA projects: `npm test` launches Jest in watch mode
- Check for project-specific test scripts in package.json
- Some projects may not have extensive test suites (learning focus)

### Material UI Setup (Material-ui project)
After initial clone, install Material UI:
```powershell
npm install @material-ui/core
```

## Key Concepts Demonstrated

### State Management Patterns
- useState with primitives, arrays, and objects
- useReducer for complex state (see pro-academy/src/Components/reducerDemo/)
- Context API for prop drilling solutions (03-advanced-react/09-context-api)

### Forms
- Controlled inputs
- Multiple inputs with single handler
- FormData API
- Form validation patterns

### Performance Optimization
- React.memo for component memoization
- useCallback for function memoization
- useMemo for expensive calculations
- useTransition for non-blocking UI updates
- Located in 03-advanced-react/11-performance/

### Custom Hooks
Examples in 03-advanced-react/08-custom-hooks/:
- useToggle for boolean state
- useFetch for data fetching
- Pattern: Extract reusable logic into hooks starting with "use"

## Important Notes

- **No Root Package.json**: Each project is independent; always cd into specific project directory before running npm commands
- **Multiple Node Versions**: Projects use different React versions (17, 18, 19); check compatibility if adding dependencies
- **Vite vs CRA**: Note build tool differences when troubleshooting or adding configuration
- **Tutorial Structure**: In 03-advanced-react, don't modify final/ folders; work only in starter/ folders for learning
- **Windows Environment**: Use PowerShell commands; adjust paths with backslashes when needed

## Git Ignored Items

Standard React project ignores (per .gitignore):
- node_modules
- build/
- .env files
- coverage/
- npm/yarn logs
