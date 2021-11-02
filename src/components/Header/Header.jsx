import { useEffect, useRef } from 'react';

import Navbar from '../Navbar/Navbar';

import { useNav } from '../../hooks';

const Header = () => {
  const links = [
    {
      label: 'Home',
      to: 'header'
    },
    {
      label: 'About',
      to: 'about'
    },
    {
      label: 'Schedule',
      to: 'schedule'
    },
    {
      label: 'Speakers',
      to: 'speakers'
    },
    {
      label: 'FAQ',
      to: 'faq'
    },
    {
      label: 'Sponsors',
      to: 'sponsors'
    },
    {
      label: 'Contact',
      to: 'contact'
    }
  ];

  const navbar = useRef();
  const navRef = useNav('header');

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
  }, []);

  return (
    <header ref={navRef} id="header">
      <nav
        ref={navbar}
        className="navbar navbar-expand-lg fixed-top scrolling-navbar"
      >
        <div className="container">
          <div className="navbar-header">
            <a href="/" className="navbar-brand">
              <img src="assets/img/logo.png" alt="" />
            </a>
          </div>
          <div className="collapse navbar-collapse" id="main-navbar">
            <Navbar links={links} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
