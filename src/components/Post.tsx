import { memo } from 'react'
import type { Post as PostData } from '../types/post'
import { FEATURED_AUTHOR, formatPostDate, getContentPreview, isPostedWithinLastDay } from '../utils/posts'

interface PostProps {
  post: PostData
}

function Post({ post }: PostProps) {
  const isFeaturedAuthor = post.author === FEATURED_AUTHOR
  const isNew = isPostedWithinLastDay(post.datePosted)

  return (
    <article className={`post-card${isFeaturedAuthor ? ' post-card--featured' : ''}`}>
      <div className="post-card__top">
        <h2 className="post-card__title">{post.title}</h2>
        {isNew ? (
          <span className="new-badge" style={newBadgeStyle}>
            New!
          </span>
        ) : null}
      </div>
      <p className="post-card__meta">
        <span style={isFeaturedAuthor ? featuredAuthorStyle : authorStyle}>{post.author}</span>
        <span aria-hidden="true"> · </span>
        <time dateTime={post.datePosted}>{formatPostDate(post.datePosted)}</time>
      </p>
      <p className="post-card__preview">{getContentPreview(post.content)}</p>
    </article>
  )
}

const authorStyle = {
  color: '#44403c',
}

const featuredAuthorStyle = {
  color: '#1d4ed8',
  fontWeight: 700,
}

const newBadgeStyle = {
  display: 'inline-block',
  padding: '0.15rem 0.5rem',
  borderRadius: '999px',
  backgroundColor: '#16a34a',
  color: '#ffffff',
  fontSize: '0.75rem',
  fontWeight: 700,
  letterSpacing: '0.02em',
}

export default memo(Post)
