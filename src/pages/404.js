import { Footer } from '../components';
import { NavProvider } from '../context';

const PageNotFound = () => {
  return (
    <div className="app">
      <NavProvider>
        <header id="header">
          <nav className="navbar navbar-expand-lg fixed-top scrolling-navbar">
            <div className="container">
              <div className="navbar-header">
                <a href="/" className="navbar-brand">
                  <img src="assets/img/logo.png" alt="" />
                </a>
              </div>
            </div>
          </nav>
        </header>
        <div className="app-hero jumbotron">
          <div className="app-hero-content">
            <h1 className="display-4">PAGE NOT FOUND</h1>
            <p className="lead">
              Sorry, the page you were looking for could not be found.
            </p>
          </div>
        </div>
        <Footer />
      </NavProvider>
    </div>
  );
};

export default PageNotFound;
