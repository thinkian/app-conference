import { useCountdown } from '../../hooks';

const Countdown = () => {
  // TODO: Update countdown date
  const countdown = useCountdown('2021-09-01');

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
