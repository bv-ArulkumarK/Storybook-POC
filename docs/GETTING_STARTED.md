# Getting Started

This guide will help you get the Storybook POC running on your local machine.

## Prerequisites

- Node.js 18+ installed
- npm or yarn
- Git

## Installation

1. **Clone the repository**
```bash
git clone https://github.com/bv-ArulkumarK/Storybook-POC.git
cd Storybook-POC
```

2. **Install dependencies**
```bash
npm install --legacy-peer-deps
```

3. **Start the development server**
```bash
npm run dev
```

The Storybook will be available at `http://localhost:6006`

## Project Layout

- **`.storybook/`** - Storybook configuration files
- **`packages/ui-components/`** - The main component library package
  - **`src/`** - Component source files (`.tsx` files)
  - **`dist/`** - Built/compiled output (generated)
- **`build/storybook/`** - Built Storybook site (generated)
- **`docs/`** - Documentation pages
- **`public/`** - Static assets

## Common Commands

```bash
# Development
npm run dev              # Start Storybook dev server

# Building
npm run build            # Build packages and Storybook
npm run build:packages   # Build only component packages
npm run build-storybook  # Build only Storybook site

# Type checking
npm run type-check       # Run TypeScript type checker

# Deployment
npm run deploy           # Deploy to GitHub Pages (requires gh-pages setup)
```

## Next Steps

- Read the [README](../README.md) for more details
- Explore the components in Storybook (`http://localhost:6006`)
- Create your own components in `packages/ui-components/src/`
- Add stories for new components
- Customize styling and theming
