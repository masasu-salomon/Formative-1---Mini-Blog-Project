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
        <a className="nav-link" href="#new-post">
          New Post
        </a>
      </nav>
    </header>
  )
}

export default Header
