

## Image Path Rebasing

This project includes utility functions to handle image paths when presentations are imported or combined from different locations. This ensures that self-contained presentations (with their own images in the same folder) can be rendered correctly from any page.

### The Problem

When you have self-contained presentations in folders like:
```
/public/slides/noodles/
  ├── noodles.md
  └── noodles.png
/public/slides/popcorn/
  ├── popcorn.md
  └── popcorn.png
```

And the markdown files use relative paths like `<img src="noodles.png">`, these images won't load correctly when the presentation is imported into a page at a different path (like `/src/pages/slides/combined.astro`).

### The Solution

We provide two helper functions that automatically rebase relative image paths to absolute paths:

#### 1. `getRebasedEntry()` - For Content Collections

Located in `/src/utils/getRebasedEntry.ts`, this function is a drop-in replacement for Astro's `getEntry()` that automatically fixes image paths:

```typescript
import { getRebasedEntry } from '../../utils/getRebasedEntry';

const noodles = await getRebasedEntry('slides', 'noodles');
const popcorn = await getRebasedEntry('slides', 'popcorn');
```

This transforms relative paths like `src="noodles.png"` to absolute paths like `src="/slides/noodles/noodles.png"`.

#### 2. `rebaseMarkdownImages()` - For Direct Markdown Imports

Located in `/src/utils/rebaseMarkdownImages.ts`, this function handles raw markdown imports:

```typescript
import { rebaseMarkdownImages } from '../../utils/rebaseMarkdownImages';
import * as slides from '../../../public/slides/noodles/noodles.md';

const rawMarkdown = await slides.rawContent();
const rebasedMarkdown = rebaseMarkdownImages(rawMarkdown, '/slides/noodles');
```

This handles both markdown image syntax (`![alt](image.png)`) and HTML img tags (`<img src="image.png">`).
