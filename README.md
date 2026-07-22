# Storybook POC

A Proof of Concept for a reusable component library using Storybook.js, hosted on GitHub Pages.

## 🎯 Overview

This project demonstrates how to:
- Create a Storybook-based component library
- Publish reusable packages to npm
- Host the Storybook on GitHub Pages
- Allow other projects to import and extend these components

## 🚀 Quick Start

### View the Storybook
The Storybook is hosted at: https://bv-ArulkumarK.github.io/Storybook-POC/

### Local Development

```bash
# Install dependencies
npm install

# Start Storybook dev server
npm run dev

# Open http://localhost:6006
```

### Build

```bash
# Build packages and Storybook
npm run build

# Build only packages
npm run build:packages

# Build only Storybook
npm run build-storybook
```

## 📦 Project Structure

```
.
├── .storybook/              # Storybook configuration
├── packages/
│   └── ui-components/       # Reusable component package
│       ├── src/
│       │   ├── Button.tsx
│       │   ├── Card.tsx
│       │   ├── Button.stories.tsx
│       │   └── Card.stories.tsx
│       ├── dist/            # Built package (generated)
│       ├── tsconfig.json
│       └── package.json
├── docs/                    # Documentation (MDX files)
└── public/                  # Static assets
```

## 💡 Using Components in Your Project

### 1. Install from npm (after publishing)

```bash
npm install @storybook-poc/ui-components
```

### 2. Import and Use

```tsx
import { Button, Card } from '@storybook-poc/ui-components';

export function MyComponent() {
  return (
    <Card 
      title="My Card"
      description="Card description"
    >
      <Button 
        label="Click me"
        variant="primary"
        onClick={() => console.log('clicked')}
      />
    </Card>
  );
}
```

### 3. Extend the Components

Create your own components that wrap or extend these base components:

```tsx
import { Button } from '@storybook-poc/ui-components';

export function CustomButton({ ... }) {
  return (
    <Button 
      {...props}
      className="my-custom-class"
    />
  );
}
```

## 📝 Adding New Components

### 1. Create Component

```tsx
// packages/ui-components/src/MyComponent.tsx
import React from 'react';

export interface MyComponentProps {
  title: string;
}

export const MyComponent: React.FC<MyComponentProps> = ({ title }) => {
  return <div>{title}</div>;
};
```

### 2. Create Stories

```tsx
// packages/ui-components/src/MyComponent.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { MyComponent } from './MyComponent';

const meta = {
  title: 'Components/MyComponent',
  component: MyComponent,
  tags: ['autodocs'],
} satisfies Meta<typeof MyComponent>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    title: 'My Title'
  }
};
```

### 3. Export from index.ts

```tsx
// packages/ui-components/src/index.ts
export { MyComponent } from './MyComponent';
export type { MyComponentProps } from './MyComponent';
```

## 🔧 Configuration

### Storybook Config
- **Main**: `.storybook/main.js` - Story paths and add-ons
- **Preview**: `.storybook/preview.js` - Global settings and decorators

### Package Config
- **tsconfig.json** - TypeScript configuration for components
- **package.json** - Package metadata and build scripts

## 🚢 Deployment

### GitHub Pages Setup

1. Update `package.json` with your repo:
```json
{
  "homepage": "https://bv-ArulkumarK.github.io/Storybook-POC/"
}
```

2. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Add deploy scripts to `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build/storybook"
  }
}
```

4. Deploy:
```bash
npm run deploy
```

### GitHub Actions (CI/CD)

Create `.github/workflows/deploy.yml` to auto-deploy on push to main.

## 📚 Publishing to npm

1. Create npm account: https://www.npmjs.com/signup
2. Login: `npm login`
3. Update package version in `packages/ui-components/package.json`
4. Publish: `npm publish --workspace=packages/ui-components --access public`

## 🎨 Styling

This POC uses Tailwind CSS for styling. Components accept className props for customization.

To customize styling:
- Modify component classes
- Create theme variants
- Add CSS modules
- Integrate with your design system

## 📖 Resources

- [Storybook Docs](https://storybook.js.org/docs)
- [React Best Practices](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

## 🤝 Contributing

1. Create a feature branch
2. Add/modify components
3. Write stories and tests
4. Submit a pull request

## 📄 License

MIT
