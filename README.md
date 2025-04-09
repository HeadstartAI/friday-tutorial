# Friday Tutorial - Virtual Guestbook

A virtual guestbook application that allows engineers to contribute SVG icons as components through PRs. The guestbook displays these icons along with personal messages, creating a collaborative wall of memories and contributions.

## Friday Fun

Why did Friday become an AI assistant? Because it heard Monday through Thursday were already "working" days! 😄

## Project Structure

- `/client` - React TypeScript frontend
- `/server` - Node.js/Express TypeScript backend

## Getting Started

### Backend Setup

```bash
cd server
npm install
npm run build # Compile TypeScript
npm run dev   # Run with hot-reload
```

The server will run on http://localhost:3001

### Frontend Setup

```bash
cd client
npm install
npm start
```

The React app will run on http://localhost:3000

## How to Sign the Guestbook

To add your entry to the virtual guestbook, follow these steps:

1. Create a new branch from the main branch
2. Create a new SVG icon component in the `/client/src/icons` directory
3. Add your icon to the icons index file
4. Submit a PR with your changes

### Step 1: Create an SVG Icon Component

Create a new file in `/client/src/icons` named after your icon (e.g., `MyIcon.tsx`):

```tsx
import React from 'react';

const MyIcon: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      {/* Your SVG path data here */}
      <path d="..." />
    </svg>
  );
};

export default MyIcon;
```

### Step 2: Add Your Icon to the Index File

Add your icon component to the `/client/src/icons/index.ts` file:

```typescript
import SmileyIcon from './SmileyIcon';
import StarIcon from './StarIcon';
import MyIcon from './MyIcon'; // Import your new icon

const iconComponents: { [key: string]: React.FC } = {
  SmileyIcon,
  StarIcon,
  MyIcon, // Add your icon here
};

export default iconComponents;
```

### Step 3: Create a Guestbook Entry

The server will automatically create an entry for your icon when you submit your PR. Make sure to include the following information in your PR description:

- **ID**: A unique identifier for your icon (e.g., "my-icon")
- **Component Name**: The name of your icon component (e.g., "MyIcon")
- **Contributor**: Your name or username
- **Message**: A personal message about your experience with Friday
- **GitHub Username** (optional): Your GitHub username

### Step 4: Submit a PR

Commit your changes and submit a PR with a title like "Sign guestbook: [Your Name]".

## Guestbook Display

Your entry will be displayed on the guestbook wall with:
- Your personal message
- Your custom icon in four different sizes
- Your name as a signature
- The date you signed

Make sure your SVG looks good at all sizes (small: 24x24, medium: 48x48, large: 96x96, xlarge: 144x144)!

## Example Entry

Here's an example of what your guestbook entry might look like:

```json
{
  "id": "star-icon",
  "componentName": "StarIcon",
  "contributor": "Friday Team",
  "message": "First one to sign the guestbook! I created this star icon to light up your day. Hope you like it!",
  "date": "2025-04-09T12:00:00.000Z",
  "githubUsername": "HeadstartAI"
}
```
