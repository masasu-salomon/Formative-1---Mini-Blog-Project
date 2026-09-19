const newPostLinkStyle = {
  padding: '0.5rem 0.9rem',
  backgroundColor: '#3b82f6',
  color: '#ffffff',
  fontWeight: 600,
}

function Header() {
  return (
    <header className="site-header">
      <a className="logo" href="#home" aria-label="Dev Insights home">
        <span className="logo-mark" aria-hidden="true">
          DI
        </span>
        <span className="logo-text">Dev Insights</span>
      </a>
      <nav aria-label="Main">
        <a className="nav-link" href="#new-post" style={newPostLinkStyle}>
          New Post
        </a>
      </nav>
    </header>
  )
}

export default Header
