import { useSmoothScroll } from '../../hooks';

const Navbar = props => {
  const { links } = props;
  const [handleClick, activeNavLinkId] = useSmoothScroll();

  return (
    <ul className="navbar-nav mr-auto w-100 justify-content-end">
      {links.map(link => (
        <li
          key={link.to}
          className={
            activeNavLinkId === link.to ? 'nav-item active' : 'nav-item'
          }
        >
          <a className="nav-link" href={`#${link.to}`} onClick={handleClick}>
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
