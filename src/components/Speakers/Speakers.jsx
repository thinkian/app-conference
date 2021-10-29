import Speaker from './Speaker';

import { useAnimations, useNav, useSpeakers } from '../../hooks';

const Speakers = () => {
  const speakers = useSpeakers();
  const navRef = useNav('speakers');

  useAnimations(speakers);

  return (
    <section
      ref={navRef}
      id="speakers"
      className="speakers-section section-padding"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">
                Who's Speaking?
              </h1>
              <p className="wow fadeInDown" data-wow-delay="0.2s">
                Enhancing Applications with Digital Design
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {speakers.map((speaker, index) => (
            <div key={speaker.name} className="col-sm-6 col-md-6 col-lg-4">
              <Speaker index={index} {...speaker} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
