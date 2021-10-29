import { useEffect, useState } from 'react';

import { getBase, getFields } from '../../helpers';
import { useCountdown } from '../../hooks';

const Countdown = () => {
  const [startDate, setStartDate] = useState('');
  const countdown = useCountdown(startDate);

  useEffect(() => {
    const fetchData = async () => {
      const base = await getBase('📆 Schedule')
        .select({ maxRecords: 1 })
        .firstPage();
      const [field] = getFields(base);

      setStartDate(field.start);
    };

    fetchData();
  }, []);

  return (
    <section className="countdown-timer section-padding">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="heading-count">
              <h2
                className="section-subtitle wow fadeInDown"
                data-wow-delay="0.2s"
              >
                Tickets Go On Sale In
              </h2>
            </div>
          </div>
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div
              className="row time-countdown justify-content-center wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div id="clock" className="time-count">
                <div className="time-entry days">
                  <span>{countdown.days}</span> Days
                </div>
                <div className="time-entry hours">
                  <span>{countdown.hours}</span> Hours
                </div>
                <div className="time-entry minutes">
                  <span>{countdown.minutes}</span> Minutes
                </div>
                <div className="time-entry seconds">
                  <span>{countdown.seconds}</span> Seconds
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
