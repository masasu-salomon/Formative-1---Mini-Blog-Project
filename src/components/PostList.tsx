import type { Post as PostData } from '../types/post'
import { samplePosts } from '../utils/posts'
import Post from './Post'

function PostList() {
  const posts: PostData[] = samplePosts

  return (
    <section className="post-list" aria-labelledby="latest-posts">
      <div className="post-list__intro">
        <h1 id="latest-posts">Latest posts</h1>
        <p>Quick tips, insights, and updates from the Dev Insights team.</p>
      </div>
      <div className="post-list__items">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </section>
  )
}

export default PostList
