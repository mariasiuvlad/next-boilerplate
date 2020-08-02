# Component folder structure

- `Component\index.tsx` | default export
- `Component\container.tsx` | smart Component (optional)
- `Component\Component.tsx` | visual Component
- `Component\Component.module.css` | Component specific CSS module [(read more)](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css)
- `Component\Component.test.tsx` | unit test
- `Component\Component.stories.tsx` | Storybook

# Workflow

1. Create basic folder structure, minimal component

Add CSS module

```css
/* Icon.module.css */
.icon {
  @apply bg-gray-400 rounded-full;
}
```

Add component

```tsx
// Icon.tsx
import style from './Icon.module.css'

export default function Icon({src, alt}) {
  return <img className={style.icon} src={src} alt={alt} />
}
```

2. Create .stories file for component

```tsx
// Icon.stories.tsx

import React from 'react'
import Icon from './Icon'

const iconURL = 'https://static.thenounproject.com/png/629576-200.png'

export default {
  title: 'Profile icon example',
}

export const Basic = () => <Icon src={iconURL} alt="Profile Icon" />
```

3. Develop the visual component (while consulting Storybook)
4. (optional) Write test
