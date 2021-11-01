import { useRouteData } from 'react-static';
import { useNav } from '../../hooks';

import Sponsor from './Sponsor';

const Sponsors = () => {
  const navRef = useNav('sponsors');
  const { sponsors } = useRouteData();

  return (
    <section
      ref={navRef}
      id="sponsors"
      className="sponsors-section section-padding"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">
                Sponsors
              </h1>
              <p className="wow fadeInDown" data-wow-delay="0.2s">
                Opportunites to get involved and make this event a success
              </p>
            </div>
          </div>
        </div>
        <div
          className="row mb-30 text-center wow fadeInDown"
          data-wow-delay="0.3s"
        >
          {sponsors.map((sponsor, index) => (
            <div key={index} className="col-md-3 col-sm-3 col-xs-12">
              <Sponsor {...sponsor} />
            </div>
          ))}
          <div className="col-12 text-center">
            <a href="#sponsors" className="btn btn-common">
              Become a sponsor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
