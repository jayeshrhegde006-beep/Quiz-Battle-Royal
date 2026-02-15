# Quiz Game

A modern quiz application built with **Next.js**, **React**, and **Tailwind CSS**.  
The project follows a clean and scalable structure, focusing on performance, maintainability, and framework-native features.

This repository contains the complete source code along with UI preview assets.

---

## Tech Stack

- **Next.js**<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" width="40" height="40"/>
- **React** <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width="40" height="40"/>
- **Tailwind CSS**  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="Tailwind CSS" width="40" height="40"/>
- **PostCSS**<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postcss/postcss-original.svg" alt="PostCSS" width="40" height="40"/>
- **Zustand (State Management)**  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postcss/postcss-original.svg" alt="PostCSS" width="40" height="40"/>
- **ESLint** <img src="https://raw.githubusercontent.com/pmndrs/zustand/main/examples/demo/public/favicon.ico" alt="Zustand" width="40" height="40"/>
- **SWC Compiler** <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg" alt="ESLint" width="40" height="40"/>
- **Webpack (via Next.js)**  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" alt="Webpack" width="40" height="40"/>

---

## Architecture Overview

The application uses the standard Next.js project structure with routing handled through the file system.

Key architectural characteristics:

- File-based routing via `src/`
- Static assets served from `public/`
- Automatic code splitting
- Optimized production builds
- Utility-first styling
- Lightweight global state management

---

## Key Technical Features

### 1. File-System Routing

Routing is handled natively by Next.js based on the directory structure inside:

```
source_code/src
```

No manual router configuration required.

Documentation:  
https://nextjs.org/docs/routing/introduction

---

### 2. Automatic Code Splitting

Next.js automatically splits bundles per page and per route.

Generated build artifacts can be found in:

```
source_code/.next/server/chunks
```

Related:
https://developer.mozilla.org/en-US/docs/Glossary/Code_splitting

---

### 3. Middleware Support

The presence of `middleware-manifest.json` indicates usage of Next.js middleware capabilities for request handling and routing logic.

Documentation:
https://nextjs.org/docs/app/building-your-application/routing/middleware

---

### 4. Tailwind CSS Integration

Configured via:

- `tailwind.config.js`
- `postcss.config.js`

Tailwind enables utility-first styling with minimal CSS overhead.

Documentation:
https://tailwindcss.com/docs

---

### 5. Zustand for Global State

Zustand provides a minimal and scalable state management solution without reducers or heavy boilerplate.

Repository:
https://github.com/pmndrs/zustand

---

### 6. SWC Compiler

Next.js uses SWC (Rust-based compiler) for faster builds and development performance.

https://swc.rs/

---

## Project Structure

```bash
quiz-game-main/
├── readme/
│   └── (UI preview images in .webp format)
├── source_code/
│   ├── .next/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   ├── eslint.config.mjs
│   ├── jsconfig.json
│   ├── next.config.js
│   ├── package.json
│   ├── package-lock.json
│   ├── postcss.config.js
│   └── tailwind.config.js
├── .gitignore
├── LICENSE
├── README.md
└── Run Quiz Game.bat
```

### Directory Notes

**`readme/`**  
Contains preview images used for documentation.

**`source_code/`**  
Primary Next.js application.

**`source_code/src/`**  
Application components, pages, and logic.

**`source_code/public/`**  
Static assets served directly by Next.js.

**`source_code/.next/`**  
Auto-generated build output (should not be committed).

---

## Design Approach

- Native Next.js architecture
- Minimal abstraction layers
- Clean separation of concerns
- Performance-focused builds
- Scalable state management

---

## License

This project is licensed under the terms specified in the `LICENSE` file.

---
