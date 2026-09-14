export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="logo" href="/">
          <span className="logo-mark" aria-hidden="true">
            क
          </span>
          <span className="logo-text">KaamWala</span>
        </a>

        <input
          type="checkbox"
          id="nav-toggle"
          className="nav-toggle"
          aria-controls="site-nav"
        />
        <label className="nav-toggle-label" htmlFor="nav-toggle">
          <span className="nav-toggle-bars" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span className="sr-only">Toggle navigation</span>
        </label>

        <nav id="site-nav" className="site-nav" aria-label="Primary">
          <ul className="nav-links">
            <li>
              <a href="/" aria-current="page">
                Home
              </a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <form
            className="header-search"
            role="search"
            action="#"
            onSubmit={(event) => event.preventDefault()}
          >
            <label htmlFor="site-search" className="sr-only">
              Search the site
            </label>
            <input
              id="site-search"
              type="search"
              name="q"
              placeholder="Search skills…"
              autoComplete="off"
            />
          </form>
        </nav>
      </div>
    </header>
  );
}
