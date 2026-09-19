# Dev Insights Mini Blog

An internal mini blog for **Dev Insights**, built with **React**, **TypeScript**, and **Vite**. Employees can scan short posts about web development tips, insights, and updates.

This project was set up from scratch with Vite and TypeScript. It was not generated from a third-party React blog template.

## How to install, run, and test

This application uses **Vite** as the development server and build tool.

### Requirements

- Node.js 18 or newer
- npm

### Install

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Vite will start a local server, usually at `http://localhost:5173`. Open that URL in your browser.

### Production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

### What to check while testing

- The header shows the **Dev Insights** logo and a **New Post** link.
- The home page lists three sample posts with a title, author, short preview, and date.
- Posts by **Jordan Lee** have a highlighted background.
- Posts published in the last 24 hours show a green **New!** badge.
- Open the browser console to confirm `withLogger` prints `Header mounted`.

## Project structure

```text
src/
  App.tsx
  main.tsx
  components/
    Header.tsx
    Post.tsx
    PostList.tsx
  hoc/
    withLogger.tsx
  styles/
    index.css
    App.css
    Header.css
  types/
    post.ts
  utils/
    posts.ts
```

## Component type choices

**Header**, **PostList**, **Post**, and **App** are all functional components.

I chose a functional component for `Post` instead of a class component because the card only receives props and does not need lifecycle methods or local state. Week 1 and Week 3 materials also treat functional components as the default React approach, and they work cleanly with TypeScript props, `React.memo`, and higher-order components.

A class component or `PureComponent` would have been reasonable if I needed older lifecycle methods. For this list card, a memoized function component is simpler and still covers the optimization requirement.

## Styling methods

I used **two styling methods**:

1. **External CSS files** for layout, header styles, and post cards (`src/styles/index.css`, `App.css`, and `Header.css`).
2. **Inline styles** for the **New Post** button and for author/badge details in `Post`.

Conditional styling is used in two places:

- Posts by `Jordan Lee` receive the `post-card--featured` class, which changes the card background.
- Posts from the last 24 hours render a **New!** badge with inline styles.

## Optimization strategies

- Each post in `PostList` uses `key={post.id}` so React can track list items efficiently.
- `Post` is wrapped in `React.memo` so a card does not re-render unless its `post` prop changes.
- `withLogger` is a higher-order component that logs when a wrapped component mounts and unmounts. It is applied to `Header`.

## Challenges and what I learned

The most useful challenge was keeping TypeScript types in one place. At first it was tempting to describe the post object separately in each component. Moving the `Post` interface into `src/types/post.ts` made `PostList`, `Post`, and the helper functions stay in sync.

I also had to think about what "new" means. Hardcoding every date would have made the badge either always visible or never visible. Using today's date for one sample post and older dates for the others let me demonstrate conditional styling without extra libraries.

## External libraries and packages

**Runtime**

- `react`
- `react-dom`

**Development**

- `vite`
- `@vitejs/plugin-react`
- `typescript`
- `@types/react`
- `@types/react-dom`
