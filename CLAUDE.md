# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## CURRENT STATUS (Updated by Sonnet 4)
- Site is functional at localhost:5173 after fixing lucide-react vite config issue
- Main work is in `src/App.tsx` - single component architecture
- 17 specific tasks documented in `EXECUTION_TODOS.md` 
- Implementation details in `implementation_prompts/prompts.md`
- Updated copy requirements in `meetings/site-review6.05.md`
- Updated content available in `meetings/initial_site_copy.md`

## NEXT STEPS FOR CLAUDE OPUS 4
1. Review `EXECUTION_TODOS.md` for prioritized task list
2. Start with HIGH PRIORITY tasks (1-5, 7-8) - all safe for execution
3. Cross-reference `meetings/site-review6.05.md` for specific requirements
4. Use content from `meetings/initial_site_copy.md` for text updates

## Commands

- **Development server**: `npm run dev` - Start the Vite development server
- **Build**: `npm run build` - Build the application for production
- **Lint**: `npm run lint` - Run ESLint to check code quality
- **Preview**: `npm run preview` - Preview the production build locally

## Architecture

This is a React + TypeScript + Vite application with Tailwind CSS for styling. The app is a single-page application (SPA) for an event website called "Becoming Students Again" - a conference in Boston/Cambridge focused on AI and human learning.

### Tech Stack
- **React 18** with TypeScript for the UI
- **Vite** as the build tool and development server
- **Tailwind CSS** for styling
- **Radix UI Tabs** for accessible tab components
- **Lucide React** for icons

### Project Structure
- `src/App.tsx` - Main application component containing all sections of the landing page
- `src/main.tsx` - Application entry point
- `src/index.css` - Global styles and Tailwind CSS imports
- Single-component architecture with all content in App.tsx

### Key Features
- Responsive design with desktop tabs and mobile accordion for venue selection
- Parallax scrolling effects on the hero section
- Interactive elements with hover states and animations
- Accessibility features including ARIA labels and semantic HTML

### Mobile/Desktop Handling
The app uses `window.innerWidth < 992` as the breakpoint to switch between desktop tabs (using Radix UI) and mobile accordion for the venues section.