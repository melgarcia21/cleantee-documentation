# CleanTee Documentation

Official documentation website for the CleanTee Online Booking System.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation
```bash
# Clone the repository
git clone https://github.com/melgarcia21/cleantee-documentation.git
cd cleantee-docs

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:4321` to view the site.

## 📁 Project Structure
```
├── public/          # Static assets
├── src/
│   ├── components/  # Svelte components
│   ├── layouts/     # Astro layouts
│   ├── pages/       # Pages
│   ├── content/     # Markdown documentation
│   ├── styles/      # Global styles
│   └── utils/       # Helper functions
└── package.json
```

## 🛠️ Development
```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
npm run check    # Type checking
npm run lint     # Lint code
npm run format   # Format code
```

## 📝 Writing Documentation

1. Create a new `.md` file in the appropriate `src/content/` subdirectory
2. Add frontmatter:
```yaml
---
title: Your Page Title
description: Brief description
---
```

3. Write your content in Markdown
4. The page will be automatically generated at build time

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy dist/ folder
```

### Netlify
```bash
npm run build
# Deploy dist/ folder
```

### GitHub Pages
```bash
npm run build
# Push dist/ to gh-pages branch
```

## 📄 License

MIT License - See LICENSE file for details

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines first.

## 📧 Support

For support, email meloervy@gmail.com or open an issue on GitHub.
```

### 16. `LICENSE`
```
MIT License

Copyright (c) 2024 CleanTee Services

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
