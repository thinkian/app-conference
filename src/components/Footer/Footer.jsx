import { Fragment } from 'react';
import { useNewsletter, useSmoothScroll } from '../../hooks';

const Footer = () => {
  const handleSubmit = useNewsletter();
  const [, handleClick] = useSmoothScroll();

  return (
    <Fragment>
      <footer className="footer-area section-padding">
        <div className="container">
          <div className="row">
            <div
              className="col-md-6 col-lg-3 col-sm-6 col-xs-12 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <h3>
                <img src="assets/img/logo.png" alt="" />
              </h3>
              <p>
                Aorem ipsum dolor sit amet elit sed lum tempor incididunt ut
                labore el dolore alg minim veniam quis nostrud ncididunt.
              </p>
            </div>
            <div
              className="col-md-6 col-lg-3 col-sm-6 col-xs-12 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <h3>QUICK LINKS</h3>
              <ul>
                <li>
                  <a href="#about" onClick={handleClick.bind(null, 'about')}>
                    About Conference
                  </a>
                </li>
                <li>
                  <a
                    href="#schedule"
                    onClick={handleClick.bind(null, 'schedule')}
                  >
                    Event Schedule
                  </a>
                </li>
                <li>
                  <a
                    href="#speakers"
                    onClick={handleClick.bind(null, 'speakers')}
                  >
                    Meet Our Speakers
                  </a>
                </li>
                <li>
                  <a
                    href="#sponsors"
                    onClick={handleClick.bind(null, 'sponsors')}
                  >
                    Our Sponsors
                  </a>
                </li>
                <li>
                  <a href="#faq" onClick={handleClick.bind(null, 'faq')}>
                    Frequently Asked Questions
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="col-md-6 col-lg-3 col-sm-6 col-xs-12 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <h3>RECENT POSTS</h3>
              <ul className="image-list">
                <li>
                  <figure className="overlay">
                    <img
                      className="img-fluid"
                      src="assets/img/art/a1.jpg"
                      alt=""
                    />
                  </figure>
                  <div className="post-content">
                    <h6 className="post-title">
                      <a href="#">Lorem ipsm dolor sumit.</a>
                    </h6>
                    <div className="meta">
                      <span className="date">October 12, 2020</span>
                    </div>
                  </div>
                </li>
                <li>
                  <figure className="overlay">
                    <img
                      className="img-fluid"
                      src="assets/img/art/a2.jpg"
                      alt=""
                    />
                  </figure>
                  <div className="post-content">
                    <h6 className="post-title">
                      <a href="#">Lorem ipsm dolor sumit.</a>
                    </h6>
                    <div className="meta">
                      <span className="date">October 12, 2020</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div
              className="col-md-6 col-lg-3 col-sm-6 col-xs-12 wow fadeInUp"
              data-wow-delay="0.8s"
            >
              <h3>SUBSCRIBE</h3>
              <div className="widget">
                <div className="newsletter-wrapper">
                  <form method="post" onSubmit={handleSubmit} noValidate>
                    <div className="form-group is-empty">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Your email"
                        required
                      />
                      <button
                        type="submit"
                        name="subscribe"
                        className="btn btn-common sub-btn"
                      >
                        <i className="lni-pointer"></i>
                      </button>
                      <div className="clearfix"></div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="widget">
                <h5 className="widget-title">FOLLOW US</h5>
                <ul className="footer-social">
                  <li>
                    <a className="facebook" href="#">
                      <i className="lni-facebook-filled"></i>
                    </a>
                  </li>
                  <li>
                    <a className="twitter" href="#">
                      <i className="lni-twitter-filled"></i>
                    </a>
                  </li>
                  <li>
                    <a className="linkedin" href="#">
                      <i className="lni-linkedin-filled"></i>
                    </a>
                  </li>
                  <li>
                    <a className="google-plus" href="#">
                      <i className="lni-google-plus"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div id="copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="site-info">
                <p>
                  © Designed and Developed by
                  <a href="http://uideck.com" rel="nofollow">
                    {' '}
                    UIdeck
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
