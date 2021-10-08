const Speaker = props => {
  const { company, image, index, name, role } = props;
  const delays = [0.2, 0.4, 0.6, 0.8, 1, 1.2];
  const delay = `${delays[index]}s`;
  const imageUrl =
    image && image[0] ? image[0].url : `assets/img/team/team-0${index + 1}.jpg`;

  return (
    <div className="team-item wow fadeInUp" data-wow-delay={delay}>
      <div className="team-img">
        <img className="img-fluid" src={imageUrl} alt={name} />
        <div className="team-overlay">
          <div className="overlay-social-icon text-center">
            <ul className="social-icons">
              <li>
                <a href="#">
                  <i className="lni-facebook-filled" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="lni-twitter-filled" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="lni-linkedin-filled" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="info-text">
        <h3>{name}</h3>
        <p>
          {role}, {company}
        </p>
      </div>
    </div>
  );
};

export default Speaker;
