import type { Post as PostData } from '../types/post'
import { samplePosts } from '../utils/posts'
import Post from './Post'

function PostList() {
  const posts: PostData[] = samplePosts

  return (
    <section className="post-list" aria-labelledby="latest-posts">
      <div className="post-list__intro">
        <h1 id="latest-posts">From the desk.</h1>
        <p>Quick tips, insights, and updates circulating inside Dev Insights this week.</p>
      </div>
      <div className="post-list__items">
        {posts.map((post, index) => (
          <Post key={post.id} post={post} index={index} />
        ))}
      </div>
    </section>
  )
}

export default PostList
