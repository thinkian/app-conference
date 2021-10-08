import { useContext } from 'react';
import { NavContext } from '../../context';

const Navbar = props => {
  const { links } = props;
  const { activeNavLinkId, setActiveNavLinkId } = useContext(NavContext);

  const handleClick = (navLinkId, event) => {
    event.preventDefault();

    setActiveNavLinkId(navLinkId);

    document.getElementById(navLinkId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ul className="navbar-nav mr-auto w-100 justify-content-end">
      {links.map(link => (
        <li
          key={link.to}
          className={
            activeNavLinkId === link.to ? 'nav-item active' : 'nav-item'
          }
        >
          <a
            className="nav-link"
            href={link.to}
            onClick={handleClick.bind(null, link.to)}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
