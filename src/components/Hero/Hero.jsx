import { useSmoothScroll } from '../../hooks';

const Hero = () => {
  const [handleClick] = useSmoothScroll();

  return (
    <div className="app-hero jumbotron">
      <div className="app-hero-content">
        <h1 className="display-4">APP CONFERENCE</h1>
        <p className="lead">
          Join us for the most exciting tech conference of the year.
        </p>
        <a
          className="btn btn-common btn-lg"
          href="#about"
          role="button"
          onClick={handleClick}
        >
          Learn more
        </a>
      </div>
    </div>
  );
};

export default Hero;
