import Header from './components/Header'
import PostList from './components/PostList'
import './styles/App.css'
import './styles/Header.css'

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
