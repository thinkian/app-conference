const Sponsor = props => {
  const { image, name, url } = props;

  return (
    <div className="sponsor">
      <a href={url}>
        <img className="img-fluid" src={image} alt={name} />
      </a>
    </div>
  );
};

export default Sponsor;
