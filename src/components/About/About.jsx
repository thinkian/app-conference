import { useNav } from '../../hooks';

const About = () => {
  const navRef = useNav('about');

  return (
    <section
      ref={navRef}
      id="about"
      className="counter-section section-padding"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3 col-xs-12 work-counter-widget text-center">
            <div className="counter wow fadeInRight" data-wow-delay="0.3s">
              <div className="icon">
                <i className="lni-map"></i>
              </div>
              <p>Conference Center</p>
              <span>San Francisco, CA</span>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 col-xs-12 work-counter-widget text-center">
            <div className="counter wow fadeInRight" data-wow-delay="0.6s">
              <div className="icon">
                <i className="lni-timer"></i>
              </div>
              <p>November 18 - 19, 2021</p>
              <span>09:00 AM – 05:00 PM</span>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 col-xs-12 work-counter-widget text-center">
            <div className="counter wow fadeInRight" data-wow-delay="0.9s">
              <div className="icon">
                <i className="lni-users"></i>
              </div>
              <p>343 Available Seats</p>
              <span>Live and Virtual event</span>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 col-xs-12 work-counter-widget text-center">
            <div className="counter wow fadeInRight" data-wow-delay="1.2s">
              <div className="icon">
                <i className="lni-coffee-cup"></i>
              </div>
              <p>Free Lunch &amp; Snacks</p>
              <span>Don’t miss it</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
