import Header from './components/Header'
import PostList from './components/PostList'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app-main">
        <PostList />
      </main>
    </div>
  )
}

export default App
