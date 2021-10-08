import { useEffect, useRef } from 'react';

const Header = () => {
  const links = [
    {
      label: 'Home',
      to: '#header'
    },
    {
      label: 'About',
      to: '#about'
    },
    {
      label: 'Schedule',
      to: '#schedule'
    },
    {
      label: 'Speakers',
      to: '#speakers'
    },
    {
      label: 'FAQ',
      to: '#faq'
    },
    {
      label: 'Sponsors',
      to: '#sponsors'
    },
    {
      label: 'Contact',
      to: '#contact'
    }
  ];

  const navbar = useRef();
  const handleScroll = () => {
    const className = 'top-nav-collapse';

    if (!navbar.current) {
      return;
    }

    if (window.scrollY > 100) {
      navbar.current.classList.add(className);
    } else {
      navbar.current.classList.remove(className);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [navbar.current]);

  return (
    <header id="header">
      <nav
        ref={navbar}
        className="navbar navbar-expand-lg fixed-top scrolling-navbar"
      >
        <div className="container">
          <div className="navbar-header">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#main-navbar"
              aria-controls="main-navbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
              <span className="icon-menu"></span>
              <span className="icon-menu"></span>
              <span className="icon-menu"></span>
            </button>
            <a href="/" className="navbar-brand">
              <img src="assets/img/logo.png" alt="" />
            </a>
          </div>
          <div className="collapse navbar-collapse" id="main-navbar">
            <ul className="navbar-nav mr-auto w-100 justify-content-end">
              {links.map((link, index) => (
                <li
                  key={link.to}
                  className={index ? 'nav-item' : 'nav-item active'}
                >
                  <a className="nav-link" href={link.to}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <ul className="mobile-menu">
          {links.map(link => (
            <li key={link.to}>
              <a className="page-scroll" href={link.to}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
