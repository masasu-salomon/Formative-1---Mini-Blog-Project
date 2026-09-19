import { memo } from 'react'
import type { Post as PostData } from '../types/post'
import { FEATURED_AUTHOR, formatPostDate, getContentPreview, isPostedWithinLastDay } from '../utils/posts'

interface PostProps {
  post: PostData
  index: number
}

function Post({ post, index }: PostProps) {
  const isFeaturedAuthor = post.author === FEATURED_AUTHOR
  const isNew = isPostedWithinLastDay(post.datePosted)
  const displayIndex = String(index + 1).padStart(2, '0')

  return (
    <article className={`post-card${isFeaturedAuthor ? ' post-card--featured' : ''}`}>
      <span className="post-card__index" aria-hidden="true">
        {displayIndex}
      </span>
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
        {isFeaturedAuthor ? <span> · Staff pick</span> : null}
      </p>
      <p className="post-card__preview">{getContentPreview(post.content)}</p>
    </article>
  )
}

const authorStyle = {
  color: '#4a3c32',
}

const featuredAuthorStyle = {
  color: '#8a1c14',
  fontWeight: 700,
}

const newBadgeStyle = {
  display: 'inline-block',
  padding: '0.2rem 0.45rem',
  border: '1.5px solid #c2410c',
  backgroundColor: '#fff4e6',
  color: '#c2410c',
  fontSize: '0.68rem',
  fontWeight: 700,
  letterSpacing: '0.14em',
  textTransform: 'uppercase' as const,
  transform: 'rotate(-6deg)',
}

export default memo(Post)
