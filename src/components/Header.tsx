import withLogger from '../hoc/withLogger'

const newPostLinkStyle = {
  padding: '0.45rem 0.7rem',
  border: '1.5px solid #1b1410',
  backgroundColor: 'transparent',
  color: '#1b1410',
  fontSize: '0.78rem',
  fontWeight: 600,
}

function Header() {
  return (
    <header className="masthead">
      <p className="masthead__kicker">
        <span>Internal briefing</span>
        <span>Web development desk</span>
      </p>
      <div className="masthead__row">
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
      </div>
      <p className="masthead__dateline">
        <span>Vol. 01</span>
        <span>Saturday 19 Sept 2026</span>
        <span>Staff notes</span>
      </p>
    </header>
  )
}

export default withLogger(Header, 'Header')
