import type { Post } from '../types/post'

export const FEATURED_AUTHOR = 'Jordan Lee'

export const samplePosts: Post[] = [
  {
    id: 1,
    title: 'Keep TypeScript types next to the data they describe',
    author: 'Jordan Lee',
    content:
      'When a blog post object grows, shared interfaces keep every component honest. Define the shape once, then reuse it in lists, cards, and helpers so title, author, preview, and date stay consistent.',
    datePosted: new Date().toISOString(),
  },
  {
    id: 2,
    title: 'A small Vite setup is enough to start shipping',
    author: 'Sam Okonkwo',
    content:
      'Vite gives React and TypeScript a fast local server and a simple production build. Start with a clear folder for components, styles, and utilities, then grow the app one piece at a time.',
    datePosted: '2026-09-12T09:30:00.000Z',
  },
  {
    id: 3,
    title: 'Preview text should stay short and useful',
    author: 'Amina Patel',
    content:
      'Readers scan internal blogs quickly. Show the first few words of a post on the list page so teammates can decide what to open without loading the full article.',
    datePosted: '2026-09-08T14:15:00.000Z',
  },
]

export function getContentPreview(content: string, wordCount = 12): string {
  const words = content.trim().split(/\s+/)
  if (words.length <= wordCount) {
    return content
  }

  return `${words.slice(0, wordCount).join(' ')}...`
}

export function isPostedWithinLastDay(datePosted: string): boolean {
  const postedAt = new Date(datePosted).getTime()
  const oneDayInMs = 24 * 60 * 60 * 1000
  return Date.now() - postedAt <= oneDayInMs
}

export function formatPostDate(datePosted: string): string {
  return new Date(datePosted).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}
