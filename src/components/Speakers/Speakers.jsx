import { useEffect, useState } from 'react';

import Speaker from './Speaker';

import { getBase, getFields } from '../../helpers';
import { useAnimations, useNav } from '../../hooks';

const Speakers = () => {
  const defaultSpeakers = [
    {
      name: 'Jonathon Doe',
      role: 'Product Designer',
      company: 'Tesla',
      index: 0
    },
    {
      name: 'Patricia Green',
      role: 'Front-end Developer',
      company: 'Dropbox',
      index: 1
    },
    {
      name: 'Paul Kowalsy',
      role: 'Lead Designer',
      company: 'TNW',
      index: 2
    },
    {
      name: 'Jhon Doe',
      role: 'Back-end Developer',
      company: 'ASUS',
      index: 3
    },
    {
      name: 'Daryl Dixon',
      role: 'Full-stack Developer',
      company: 'Google',
      index: 4
    },
    {
      name: 'Kris Adams',
      role: 'UI Designer',
      company: 'Apple',
      index: 5
    }
  ];
  const [speakers, setSpeakers] = useState(defaultSpeakers);
  const navRef = useNav('speakers');

  useAnimations(speakers);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getBase('🎤 Speakers')
        .select({
          view: 'All speakers',
          fields: ['Name', 'Role', 'Company', 'Image'],
          filterByFormula: 'AND({Confirmed?}, {Speaking at})'
        })
        .firstPage();
      const speakers = getFields(data);

      setSpeakers(speakers);
    };

    fetchData();
  }, []);

  return (
    <section ref={navRef} id="speakers" className="section-padding text-center">
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
