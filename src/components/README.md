# Component folder structure

- `ComponentName\ComponentName.tsx` (visual component)
- `ComponentName\ComponentName.test.tsx` (unit test)
- `ComponentName\ComponentName.stories.tsx` (Storybook)
- `ComponentName\index.tsx` (default export)
- (optional) `ComponentName\container.tsx` (smart Component)

## Suggested workflow

1. Create basic folder structure, minimal component

```tsx
// Icon.tsx

export default function Icon({src, alt}) {
  return <img className="bg-gray-400 rounded-full" src={src} alt={alt} />
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
