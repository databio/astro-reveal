# Astro + Reveal.js

A template for combining [Astro](https://astro.build/) and [Reveal.js](https://revealjs.com/) to build and deploy beautiful presentation websites.

## What is this?

This template lets you:
- Write presentations in Markdown
- Deploy them as a static website using Astro
- Get all the power of Reveal.js for presentations
- Host multiple presentations in one site

## Quick Start

1. Clone this repository
2. Install dependencies: `npm install`
3. Add your presentations to `/public/slides` (see below)
4. Run locally: `npm run dev`
5. Deploy to any static hosting service

## Adding Presentations

Create a folder for each presentation under `/public/slides` with:
- A markdown file (e.g., `presentation.md`)
- Any images or assets you want to include

Example structure:
```
/public/slides/
├── my-talk/
│   ├── my-talk.md
│   └── diagram.png
└── workshop/
    ├── workshop.md
    ├── screenshot1.png
    └── screenshot2.png
```

Use relative links in your markdown to reference images: `![diagram](diagram.png)`
This way you can work on them locally, preview them in vscode, etc.

## Features

- **Self-contained presentations**: Each presentation is portable, in its own folder, with its own assets
- **Automatic presentation listing**: Homepage automatically shows all available presentations
- **Combine presentations**: Create combined views of multiple presentations (special feature using custom [image path rebasing](image_path_rebasing.md))
- **Standard Reveal.js features**: Fragments, speaker notes, themes, and more
- **Astro benefits**: Fast builds, component-based architecture, MDX support

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro -- --help` | Get help using the Astro CLI                     |




