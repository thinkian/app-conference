/* eslint-disable no-undef */
import { getBase, setCountdown } from '../../helpers';
import { useEffect } from 'react';

const Countdown = () => {
  // useEffect(() => {
  //   // getBase('📆 Schedule')
  //   //   .select({ maxRecords: 1, view: 'Full schedule' })
  //   //   .firstPage((err, records) => {
  //   //     if (err) return;
  //   //     const [record] = records;
  //   //     const start = record.get('Start');
  //   //     const startDate = new Date(start);
  //   //     setCountdown(startDate);
  //   //   });
  // }, []);
  return (
    <section className="countdown-timer section-padding">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="heading-count">
              <h2 className="wow fadeInDown" data-wow-delay="0.2s">
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
                  <span>48</span> Days
                </div>
                <div className="time-entry hours">
                  <span>18</span> Hours
                </div>
                <div className="time-entry minutes">
                  <span>22</span> Minutes
                </div>
                <div className="time-entry seconds">
                  <span>51</span> Seconds
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
